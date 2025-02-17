from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Dict
from openai import OpenAI
from qdrant_client import QdrantClient
from dotenv import load_dotenv
import os
from collections import defaultdict

# Load environment variables
load_dotenv()

# Constants
EMBEDDING_MODEL = "text-embedding-3-small"
VECTOR_SIZE = 1536

# Collection names for different embedding types
COLLECTIONS = {
    "full": "component_examples",
    "code": "component_examples_code",
    "description": "component_examples_description",
    "gpt_description": "component_examples_gpt_description",
    "purpose": "component_examples_purpose",
    "technical": "component_examples_technical",
    "props": "component_examples_props",
    "patterns": "component_examples_patterns",
    "use_cases": "component_examples_use_cases"
}

# Initialize FastAPI app
app = FastAPI(
    title="Component Examples Search API",
    description="API for searching component examples using semantic search",
    version="1.0.0"
)

# Initialize OpenAI client
openai_client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url="https://api.openai.com/v1"
)

# Initialize Qdrant client
qdrant_client = QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY")
)

class SearchQuery(BaseModel):
    query: str
    limit: Optional[int] = 5
    threshold: Optional[float] = 0.7
    collections: Optional[List[str]] = None  # Allow searching specific collections

class ComponentExample(BaseModel):
    component_name: str
    component_description: str
    example_name: str
    example_description: str
    code: str
    purpose_description: Optional[str]
    technical_description: Optional[str]
    props_description: Optional[str]
    patterns_description: Optional[str]
    use_cases_description: Optional[str]
    similarity_score: float
    matched_collection: str  # Which collection provided the best match

class SearchResponse(BaseModel):
    query: str
    results: List[ComponentExample]
    total_matches: int
    collections_searched: List[str]

def get_embedding(text: str) -> List[float]:
    """Get embedding from OpenAI API"""
    try:
        response = openai_client.embeddings.create(
            model=EMBEDDING_MODEL,
            input=text
        )
        return response.data[0].embedding
    except Exception as e:
        print(f"Error getting embedding: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error getting embedding: {str(e)}")

@app.post("/search", response_model=SearchResponse)
async def search_examples(query: SearchQuery):
    try:
        print(f"\nProcessing search query: {query.query}")
        print(f"Limit: {query.limit}, Threshold: {query.threshold}")
        
        # Get embedding for the query
        print("\nGetting query embedding...")
        query_embedding = get_embedding(query.query)
        print(f"Embedding size: {len(query_embedding)}")
        
        # Determine which collections to search
        collections_to_search = (
            query.collections if query.collections 
            else list(COLLECTIONS.values())
        )
        print(f"\nSearching collections: {collections_to_search}")
        
        # Store best results for each unique example
        # Key: (component_name, example_name)
        best_results: Dict[tuple, tuple] = {}  # {(component_name, example_name): (score, collection, payload)}
        
        # Search in each collection
        for collection_name in collections_to_search:
            print(f"\nSearching in {collection_name}...")
            try:
                # Search with a higher limit to get more candidates
                search_results = qdrant_client.search(
                    collection_name=collection_name,
                    query_vector=query_embedding,
                    limit=query.limit * 5,  # Get more results to account for duplicates
                    score_threshold=query.threshold,
                    with_payload=True,
                    with_vectors=False
                )
                
                # Update best results
                for result in search_results:
                    component_name = result.payload["component_name"]
                    example_name = result.payload["example_name"]
                    example_key = (component_name, example_name)
                    score = result.score
                    
                    # Update if this is the best score for this example
                    if example_key not in best_results or score > best_results[example_key][0]:
                        best_results[example_key] = (score, collection_name, result.payload)
                
            except Exception as e:
                print(f"Error searching collection {collection_name}: {str(e)}")
                continue
        
        print(f"\nFound {len(best_results)} distinct examples")
        
        # Sort by score and take top N distinct examples
        top_results = sorted(
            best_results.items(),
            key=lambda x: x[1][0],  # Sort by score
            reverse=True
        )[:query.limit]
        
        # Convert to response format
        examples = []
        for (component_name, example_name), (score, collection, payload) in top_results:
            print(f"\nResult {len(examples) + 1}:")
            print(f"Component: {component_name}")
            print(f"Example: {example_name}")
            print(f"Score: {score}")
            print(f"Collection: {collection}")
            
            example = ComponentExample(
                component_name=component_name,
                component_description=payload["component_description"],
                example_name=example_name,
                example_description=payload["example_description"],
                code=payload["code"],
                purpose_description=payload.get("purpose_description"),
                technical_description=payload.get("technical_description"),
                props_description=payload.get("props_description"),
                patterns_description=payload.get("patterns_description"),
                use_cases_description=payload.get("use_cases_description"),
                similarity_score=score,
                matched_collection=collection
            )
            examples.append(example)
        
        return SearchResponse(
            query=query.query,
            results=examples,
            total_matches=len(best_results),
            collections_searched=collections_to_search
        )
        
    except Exception as e:
        print(f"Error in search: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error performing search: {str(e)}")

@app.get("/health")
async def health_check():
    try:
        # Check if we can connect to Qdrant
        collections = qdrant_client.get_collections()
        collection_names = [c.name for c in collections.collections]
        
        # Get collection sizes
        collection_sizes = {}
        for name in collection_names:
            try:
                size = qdrant_client.count(collection_name=name)
                collection_sizes[name] = size.count
            except Exception as e:
                collection_sizes[name] = f"Error: {str(e)}"
        
        return {
            "status": "healthy",
            "qdrant_status": "connected",
            "collections": collection_names,
            "collection_sizes": collection_sizes
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "error": str(e)
        }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 