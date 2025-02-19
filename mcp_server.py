from mcp.server.lowlevel import Server
from mcp.types import TextContent, Tool, CallToolResult
from openai import OpenAI
from qdrant_client import QdrantClient
from dotenv import load_dotenv
import os
import anyio
from typing import List, Optional, Dict, Any, Sequence
from pydantic import BaseModel

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
    "purpose": "component_examples_purpose",
    "technical": "component_examples_technical",
    "props": "component_examples_props",
    "patterns": "component_examples_patterns",
    "use_cases": "component_examples_use_cases"
}

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
    matched_collection: str

class HeroDesignMCP(Server):
    def __init__(self):
        # Initialize the server with name and version
        super().__init__("Hero Design Examples", "1.0.0")
        
        # Initialize OpenAI client
        self.openai_client = OpenAI(
            api_key=os.getenv("OPENAI_API_KEY"),
            base_url="https://api.openai.com/v1"
        )
        
        # Initialize Qdrant client
        self.qdrant_client = QdrantClient(
            url=os.getenv("QDRANT_URL"),
            api_key=os.getenv("QDRANT_API_KEY")
        )
        
        # Register handlers
        self.setup_handlers()
    
    def setup_handlers(self):
        """Set up the request handlers"""
        @self.list_tools()
        async def handle_list_tools() -> List[Tool]:
            """List available tools for searching component examples"""
            return [
                Tool(
                    name="search_hero_design_component_examples",
                    description="""Search for React component examples from the Hero Design System using semantic search.

This tool performs semantic search across multiple specialized collections to find the most relevant component examples based on your query. The search covers:

1. Full Component Information: Searches across complete component documentation including names, descriptions, and examples
2. Code Examples: Specifically searches through code implementations and syntax
3. Component Descriptions: Focuses on component usage descriptions and explanations
4. Purpose & Use Cases: Matches queries about component purposes and intended use cases
5. Technical Details: Searches through technical implementation details and specifications
6. Props & Configuration: Finds examples based on prop usage and configuration options
7. Design Patterns: Matches React patterns and best practices demonstrated in examples
8. Use Case Scenarios: Searches through real-world application scenarios

You can use this tool to:
- Find examples of specific components (e.g., "Button with icon")
- Search for implementation patterns (e.g., "how to handle form validation")
- Look up prop usage (e.g., "Button with custom colors")
- Find examples of specific features (e.g., "dropdown with search")
- Search for specific use cases (e.g., "loading state in forms")
- Find technical implementations (e.g., "async data loading pattern")

The tool will return the most relevant examples, including:
- Component name and description
- Example code with explanations
- Technical details and implementation notes
- Purpose and use case descriptions
- Props and configuration details
- Design patterns and best practices""",
                    inputSchema={
                        "type": "object",
                        "required": ["query"],
                        "properties": {
                            "query": {
                                "type": "string",
                                "description": "The search query describing what you're looking for in the component examples. Be specific about what aspects you're interested in (code, usage, props, patterns, etc.)"
                            },
                            "limit": {
                                "type": "integer",
                                "description": "Maximum number of distinct component examples to return",
                                "default": 5
                            },
                            "threshold": {
                                "type": "number",
                                "description": "Minimum similarity score (0.0 to 1.0) for returned examples. Lower values return more results but might be less relevant",
                                "default": 0.4
                            }
                        }
                    }
                )
            ]
        
        @self.call_tool()
        async def handle_call_tool(name: str, arguments: Dict[str, Any]) -> Sequence[TextContent]:
            """Handle tool calls"""
            if name == "search_hero_design_component_examples":
                try:
                    # Extract arguments with defaults
                    query = arguments["query"]
                    limit = arguments.get("limit", 5)
                    threshold = arguments.get("threshold", 0.4)
                    
                    # Search for examples
                    examples = self.search_examples(
                        query=query,
                        limit=limit,
                        threshold=threshold
                    )
                    
                    if not examples:
                        return [TextContent(
                            type="text",
                            text="I couldn't find any relevant component examples for your query."
                        )]
                    
                    # Format the response
                    response_parts = []
                    
                    for i, example in enumerate(examples, 1):
                        response_parts.append(f"\n{i}. {example.component_name} - {example.example_name}")
                        response_parts.append(f"\nSimilarity Score: {example.similarity_score:.2f}")
                        response_parts.append(f"\nComponent Description: {example.component_description}")
                        
                        if example.purpose_description:
                            response_parts.append(f"\nPurpose: {example.purpose_description}")
                        
                        if example.technical_description:
                            response_parts.append(f"\nTechnical Details: {example.technical_description}")
                        
                        if example.code:
                            response_parts.append(f"\nCode Example:\n```jsx\n{example.code}\n```")
                        
                        response_parts.append("\n" + "="*80 + "\n")
                    
                    return [TextContent(
                        type="text",
                        text="Here are the most relevant component examples I found:\n" + "\n".join(response_parts)
                    )]
                    
                except Exception as e:
                    return [TextContent(
                        type="text",
                        text=f"An error occurred while processing your request: {str(e)}"
                    )]
            else:
                return [TextContent(
                    type="text",
                    text=f"Unknown tool: {name}"
                )]
    
    def get_embedding(self, text: str) -> List[float]:
        """Get embedding from OpenAI API"""
        response = self.openai_client.embeddings.create(
            model=EMBEDDING_MODEL,
            input=text
        )
        return response.data[0].embedding
    
    def search_examples(self, query: str, limit: int = 5, threshold: float = 0.4) -> List[ComponentExample]:
        """Search for component examples using semantic search"""
        try:
            print(f"\nProcessing search query: {query}")
            print(f"Limit: {limit}, Threshold: {threshold}")
            
            # Get embedding for the query
            print("\nGetting query embedding...")
            query_embedding = self.get_embedding(query)
            print(f"Embedding size: {len(query_embedding)}")
            
            # Always search all collections
            collections_to_search = list(COLLECTIONS.values())
            print(f"\nSearching collections: {collections_to_search}")
            
            # Store best results for each unique example
            best_results = {}  # {(component_name, example_name): (score, collection, payload)}
            
            # Search in each collection
            for collection_name in collections_to_search:
                print(f"\nSearching in {collection_name}...")
                try:
                    # Search with a higher limit to get more candidates
                    search_results = self.qdrant_client.search(
                        collection_name=collection_name,
                        query_vector=query_embedding,
                        limit=limit * 5,  # Get more results to account for duplicates
                        score_threshold=threshold,
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
            
            # Return empty list if no results found
            if not best_results:
                return []
            
            # Sort by score and take top N distinct examples
            top_results = sorted(
                best_results.items(),
                key=lambda x: x[1][0],  # Sort by score
                reverse=True
            )[:limit]
            
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
            
            return examples
            
        except Exception as e:
            print(f"Error in search: {str(e)}")
            raise e

# Create and export the server instance with a standard name
mcp = HeroDesignMCP()

if __name__ == "__main__":
    from mcp.server.sse import SseServerTransport
    from starlette.applications import Starlette
    from starlette.routing import Mount, Route
    import uvicorn

    # Create SSE transport
    sse = SseServerTransport("/messages/")

    async def handle_sse(request):
        async with sse.connect_sse(
            request.scope, request.receive, request._send
        ) as streams:
            await mcp.run(
                streams[0], streams[1], mcp.create_initialization_options()
            )

    # Create Starlette app with SSE routes
    app = Starlette(
        debug=True,
        routes=[
            Route("/sse", endpoint=handle_sse),
            Mount("/messages/", app=sse.handle_post_message),
        ],
    )

    # Run the server
    uvicorn.run(app, host="0.0.0.0", port=8000) 