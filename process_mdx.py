import os
import re
import json
import frontmatter
from typing import List, Dict, Optional, Tuple
from dataclasses import dataclass
from openai import OpenAI
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct
from dotenv import load_dotenv
from markdown_it import MarkdownIt
from markdown_it.token import Token

# Load environment variables
load_dotenv()

# Initialize OpenAI client globally
openai_client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url="https://api.openai.com/v1"
)

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

GPT_SYSTEM_PROMPT = """You are an expert React developer tasked with analyzing and explaining React component examples.
Your goal is to provide a detailed, technical description of the example that breaks down different aspects of the implementation.
Focus on being technical and specific, while keeping the explanation clear and structured."""

GPT_FUNCTION_SCHEMA = {
    "name": "analyze_component_example",
    "description": "Analyze a React component example and provide detailed descriptions of different aspects",
    "parameters": {
        "type": "object",
        "properties": {
            "purpose_description": {
                "type": "string",
                "description": "Detailed description of the purpose and primary use case of this specific example"
            },
            "technical_description": {
                "type": "string",
                "description": "Technical explanation of how the example works, including implementation details and key technical concepts"
            },
            "props_description": {
                "type": "string",
                "description": "Detailed explanation of important props, configurations, and parameters being used in the example"
            },
            "patterns_description": {
                "type": "string",
                "description": "Description of notable patterns, best practices, and React-specific techniques demonstrated in the example"
            },
            "use_cases_description": {
                "type": "string",
                "description": "Explanation of potential real-world use cases and scenarios where this example would be particularly useful"
            }
        },
        "required": ["purpose_description", "technical_description", "props_description", "patterns_description", "use_cases_description"]
    }
}

@dataclass
class ComponentExample:
    component_name: str
    component_description: str
    example_name: str
    example_description: str
    code: str = ""
    purpose_description: str = ""
    technical_description: str = ""
    props_description: str = ""
    patterns_description: str = ""
    use_cases_description: str = ""
    
    def to_text(self) -> str:
        return f"""# {self.component_name}

{self.component_description}

## Examples

### {self.example_name}

{self.example_description}"""

    def to_code_text(self) -> str:
        return f"""# {self.component_name} - {self.example_name}

{self.code}"""

    def to_description_text(self) -> str:
        return f"""# {self.component_name} - {self.example_name}

{self.example_description}"""

    def to_purpose_text(self) -> str:
        return f"""# {self.component_name} - {self.example_name}

Purpose and Use Case:
{self.purpose_description}"""

    def to_technical_text(self) -> str:
        return f"""# {self.component_name} - {self.example_name}

Technical Implementation:
{self.technical_description}"""

    def to_props_text(self) -> str:
        return f"""# {self.component_name} - {self.example_name}

Props and Configuration:
{self.props_description}"""

    def to_patterns_text(self) -> str:
        return f"""# {self.component_name} - {self.example_name}

Patterns and Best Practices:
{self.patterns_description}"""

    def to_use_cases_text(self) -> str:
        return f"""# {self.component_name} - {self.example_name}

Use Cases and Scenarios:
{self.use_cases_description}"""

class MDXProcessor:
    def __init__(self, components_dir: str, example_limit: Optional[int] = None):
        self.components_dir = components_dir
        self.example_limit = example_limit
        self.client = openai_client
        self.qdrant = QdrantClient(
            url=os.getenv("QDRANT_URL"),
            api_key=os.getenv("QDRANT_API_KEY")
        )
        self.md = MarkdownIt()
        
        # Initialize Qdrant collections if they don't exist
        for collection_name in COLLECTIONS.values():
            self._init_collection(collection_name)

    def _init_collection(self, collection_name: str):
        collections = self.qdrant.get_collections().collections
        if not any(c.name == collection_name for c in collections):
            self.qdrant.create_collection(
                collection_name=collection_name,
                vectors_config=VectorParams(size=VECTOR_SIZE, distance=Distance.COSINE)
            )

    def reset_collections(self):
        print("Resetting collections...")
        for collection_name in COLLECTIONS.values():
            try:
                self.qdrant.delete_collection(collection_name)
            except Exception:
                pass
            self.qdrant.create_collection(
                collection_name=collection_name,
                vectors_config=VectorParams(size=VECTOR_SIZE, distance=Distance.COSINE)
            )
        print("Collections reset complete")

    def get_mdx_files(self) -> List[str]:
        mdx_files = []
        for root, _, files in os.walk(self.components_dir):
            for file in files:
                if file.endswith('.mdx'):
                    mdx_files.append(os.path.join(root, file))
        return mdx_files

    def parse_mdx_file(self, file_path: str) -> Dict:
        with open(file_path, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)
            return {
                'metadata': post.metadata,
                'content': post.content
            }

    def _find_heading(self, tokens: List[Token], level: int) -> Optional[int]:
        """Find the index of the first heading at the specified level"""
        for i, token in enumerate(tokens):
            if token.type == 'heading_open' and token.tag == f'h{level}':
                return i
        return None

    def _find_next_heading(self, tokens: List[Token], start_idx: int, level: Optional[int] = None) -> Optional[int]:
        """Find the index of the next heading at any level or specified level"""
        for i in range(start_idx + 1, len(tokens)):
            if tokens[i].type == 'heading_open':
                if level is None or tokens[i].tag == f'h{level}':
                    return i
        return None

    def _extract_content(self, tokens: List[Token], start_idx: int, end_idx: Optional[int] = None) -> str:
        """Extract content between tokens, preserving code blocks and formatting"""
        content = []
        i = start_idx
        while i < (end_idx if end_idx is not None else len(tokens)):
            token = tokens[i]
            
            if token.type == 'fence':  # Code block
                content.append(f"```{token.info}\n{token.content}```")
            elif token.type == 'inline':
                content.append(token.content)
            elif token.type == 'text':
                content.append(token.content)
            elif token.type == 'softbreak':
                content.append('\n')
            elif token.type == 'hardbreak':
                content.append('\n\n')
            
            i += 1
        return '\n'.join(content).strip()

    def _extract_code_blocks(self, content: str) -> List[str]:
        """Extract code blocks from markdown content"""
        code_blocks = []
        pattern = r'```.*?\n(.*?)```'
        matches = re.finditer(pattern, content, re.DOTALL)
        for match in matches:
            code_blocks.append(match.group(1).strip())
        return code_blocks

    def get_gpt_description(self, example: ComponentExample) -> bool:
        """Get detailed descriptions from GPT-4 for an example using function calling"""
        try:
            print(f"\n{'='*80}")
            print(f"Getting GPT descriptions for: {example.component_name} - {example.example_name}")
            print(f"{'='*80}")
            
            # Extract code blocks
            code_blocks = self._extract_code_blocks(example.example_description)
            code = "\n\n".join(code_blocks)
            
            print("\nInput for GPT:")
            print(f"- Component: {example.component_name}")
            print(f"- Example: {example.example_name}")
            print(f"- Description length: {len(example.example_description)} chars")
            print(f"- Code length: {len(code)} chars")
            
            # Prepare the message
            user_message = f"""Please analyze this React component example:
Component: {example.component_name}
Example: {example.example_name}

Description:
{example.example_description}

Code:
{code}"""
            
            print("\nCalling GPT-4o...")
            # Call GPT-4o with function schema
            response = self.client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": GPT_SYSTEM_PROMPT},
                    {"role": "user", "content": user_message}
                ],
                functions=[GPT_FUNCTION_SCHEMA],
                function_call={"name": "analyze_component_example"},
                temperature=0.2
            )
            
            print("\nGPT Response received!")
            
            # Extract the function call result
            if response.choices[0].message.function_call:
                result = json.loads(response.choices[0].message.function_call.arguments)
                
                # Update example with descriptions
                example.purpose_description = result["purpose_description"]
                example.technical_description = result["technical_description"]
                example.props_description = result["props_description"]
                example.patterns_description = result["patterns_description"]
                example.use_cases_description = result["use_cases_description"]
                
                # Print all descriptions
                print("\nGenerated Descriptions:")
                print("\n1. Purpose Description:")
                print("-" * 40)
                print(example.purpose_description)
                
                print("\n2. Technical Description:")
                print("-" * 40)
                print(example.technical_description)
                
                print("\n3. Props Description:")
                print("-" * 40)
                print(example.props_description)
                
                print("\n4. Patterns Description:")
                print("-" * 40)
                print(example.patterns_description)
                
                print("\n5. Use Cases Description:")
                print("-" * 40)
                print(example.use_cases_description)
                
                print(f"\n{'='*80}")
                print("GPT description generation completed successfully!")
                print(f"{'='*80}\n")
                
                return True
            
            print("\nWarning: No function call result in GPT response")
            return False
            
        except Exception as e:
            print(f"\nError getting GPT descriptions:")
            print(f"{'='*40}")
            print(f"Error type: {type(e).__name__}")
            print(f"Error message: {str(e)}")
            print(f"{'='*40}\n")
            return False

    def extract_examples(self, content: str, component_name: str, component_description: str) -> List[ComponentExample]:
        examples = []
        tokens = self.md.parse(content)
        
        # Find Examples section
        examples_idx = None
        for i, token in enumerate(tokens):
            if (token.type == 'heading_open' and token.tag == 'h2' and 
                i + 1 < len(tokens) and tokens[i + 1].content.strip() == 'Examples'):
                examples_idx = i
                break
        
        if examples_idx is None:
            print(f"No Examples section found in {component_name}")
            return examples

        # Find all h3 sections (examples) within Examples section
        current_idx = examples_idx
        while True:
            # Find next h3
            h3_idx = self._find_next_heading(tokens, current_idx, 3)
            if not h3_idx:
                break
                
            # Get example name
            example_name = tokens[h3_idx + 1].content.strip()
            
            # Find next heading (h2 or h3) or end of tokens
            next_heading_idx = self._find_next_heading(tokens, h3_idx + 2)
            if not next_heading_idx:
                next_heading_idx = len(tokens)
            
            # Extract example content
            example_content = self._extract_content(tokens, h3_idx + 2, next_heading_idx)
            
            if example_content:
                # Create example instance
                example = ComponentExample(
                    component_name=component_name,
                    component_description=component_description,
                    example_name=example_name,
                    example_description=example_content,
                    code="\n\n".join(self._extract_code_blocks(example_content))
                )
                
                # Get GPT description
                print(f"  Getting GPT description for: {example_name}")
                self.get_gpt_description(example)
                
                examples.append(example)
                print(f"  Found example: {example_name}")
            
            current_idx = next_heading_idx
            
            # Stop if we hit a h2 section
            if next_heading_idx and next_heading_idx < len(tokens):
                if tokens[next_heading_idx].tag == 'h2':
                    break
        
        return examples

    def get_embedding(self, text: str) -> List[float]:
        response = self.client.embeddings.create(
            model=EMBEDDING_MODEL,
            input=text
        )
        return response.data[0].embedding

    def store_example(self, example: ComponentExample, example_id: int):
        print(f"\n{'='*80}")
        print(f"Storing example {example_id}: {example.component_name} - {example.example_name}")
        print(f"{'='*80}")
        
        # Common payload for all embeddings
        base_payload = {
            "component_name": example.component_name,
            "component_description": example.component_description,
            "example_name": example.example_name,
            "example_description": example.example_description,
            "code": example.code or "",  # Ensure code is never None
            "purpose_description": example.purpose_description or "",
            "technical_description": example.technical_description or "",
            "props_description": example.props_description or "",
            "patterns_description": example.patterns_description or "",
            "use_cases_description": example.use_cases_description or ""
        }
        
        print("\nGenerating and storing embeddings:")
        
        try:
            # Store full example embedding
            print("\n1. Full example embedding")
            full_text = example.to_text()
            print(f"- Text length: {len(full_text)} chars")
            full_embedding = self.get_embedding(full_text)
            self.qdrant.upsert(
                collection_name=COLLECTIONS["full"],
                points=[PointStruct(
                    id=example_id,
                    vector=full_embedding,
                    payload={**base_payload, "full_text": full_text}
                )]
            )
            print("✓ Stored full example embedding")
            
            # Store code embedding
            print("\n2. Code embedding")
            code_text = example.to_code_text()
            print(f"- Text length: {len(code_text)} chars")
            code_embedding = self.get_embedding(code_text)
            self.qdrant.upsert(
                collection_name=COLLECTIONS["code"],
                points=[PointStruct(
                    id=example_id,
                    vector=code_embedding,
                    payload={**base_payload, "full_text": code_text}
                )]
            )
            print("✓ Stored code embedding")
            
            # Store description embedding
            print("\n3. Description embedding")
            desc_text = example.to_description_text()
            print(f"- Text length: {len(desc_text)} chars")
            desc_embedding = self.get_embedding(desc_text)
            self.qdrant.upsert(
                collection_name=COLLECTIONS["description"],
                points=[PointStruct(
                    id=example_id,
                    vector=desc_embedding,
                    payload={**base_payload, "full_text": desc_text}
                )]
            )
            print("✓ Stored description embedding")
            
            # Store individual aspect embeddings
            print("\n4. Purpose description embedding")
            purpose_text = example.to_purpose_text()
            print(f"- Text length: {len(purpose_text)} chars")
            purpose_embedding = self.get_embedding(purpose_text)
            self.qdrant.upsert(
                collection_name=COLLECTIONS["purpose"],
                points=[PointStruct(
                    id=example_id,
                    vector=purpose_embedding,
                    payload={**base_payload, "full_text": purpose_text}
                )]
            )
            print("✓ Stored purpose description embedding")
            
            print("\n5. Technical description embedding")
            technical_text = example.to_technical_text()
            print(f"- Text length: {len(technical_text)} chars")
            technical_embedding = self.get_embedding(technical_text)
            self.qdrant.upsert(
                collection_name=COLLECTIONS["technical"],
                points=[PointStruct(
                    id=example_id,
                    vector=technical_embedding,
                    payload={**base_payload, "full_text": technical_text}
                )]
            )
            print("✓ Stored technical description embedding")
            
            print("\n6. Props description embedding")
            props_text = example.to_props_text()
            print(f"- Text length: {len(props_text)} chars")
            props_embedding = self.get_embedding(props_text)
            self.qdrant.upsert(
                collection_name=COLLECTIONS["props"],
                points=[PointStruct(
                    id=example_id,
                    vector=props_embedding,
                    payload={**base_payload, "full_text": props_text}
                )]
            )
            print("✓ Stored props description embedding")
            
            print("\n7. Patterns description embedding")
            patterns_text = example.to_patterns_text()
            print(f"- Text length: {len(patterns_text)} chars")
            patterns_embedding = self.get_embedding(patterns_text)
            self.qdrant.upsert(
                collection_name=COLLECTIONS["patterns"],
                points=[PointStruct(
                    id=example_id,
                    vector=patterns_embedding,
                    payload={**base_payload, "full_text": patterns_text}
                )]
            )
            print("✓ Stored patterns description embedding")
            
            print("\n8. Use cases description embedding")
            use_cases_text = example.to_use_cases_text()
            print(f"- Text length: {len(use_cases_text)} chars")
            use_cases_embedding = self.get_embedding(use_cases_text)
            self.qdrant.upsert(
                collection_name=COLLECTIONS["use_cases"],
                points=[PointStruct(
                    id=example_id,
                    vector=use_cases_embedding,
                    payload={**base_payload, "full_text": use_cases_text}
                )]
            )
            print("✓ Stored use cases description embedding")
            
        except Exception as e:
            print(f"\nError storing embeddings:")
            print(f"{'='*40}")
            print(f"Error type: {type(e).__name__}")
            print(f"Error message: {str(e)}")
            print(f"{'='*40}\n")
            raise e
        
        print(f"\n{'='*80}")
        print(f"Completed storing example {example_id}")
        print(f"{'='*80}\n")

    def process_all_files(self):
        self.reset_collections()
        
        mdx_files = self.get_mdx_files()
        example_id = 0
        total_examples = 0
        
        print(f"Found {len(mdx_files)} MDX files to process")
        
        for file_path in mdx_files:
            # Check if we've reached the example limit
            if self.example_limit and total_examples >= self.example_limit:
                print(f"\nReached example limit of {self.example_limit}")
                break
                
            print(f"\nProcessing {file_path}...")
            
            # Parse MDX file
            parsed = self.parse_mdx_file(file_path)
            content = parsed['content']
            
            # Parse markdown
            tokens = self.md.parse(content)
            
            # Find component name (h1)
            h1_idx = self._find_heading(tokens, 1)
            if h1_idx is None:
                print("No component name found, skipping file")
                continue
            
            component_name = tokens[h1_idx + 1].content.strip()
            
            # Find component description (content between h1 and next heading)
            next_heading_idx = self._find_next_heading(tokens, h1_idx)
            component_description = self._extract_content(tokens, h1_idx + 2, next_heading_idx)
            
            # Extract and process examples
            examples = self.extract_examples(content, component_name, component_description)
            
            # Limit examples if needed
            if self.example_limit:
                remaining = self.example_limit - total_examples
                examples = examples[:remaining]
            
            # Store examples in Qdrant
            for example in examples:
                self.store_example(example, example_id)
                example_id += 1
                
            total_examples += len(examples)
            print(f"Processed {len(examples)} examples from {component_name}")
            print(f"Total examples processed so far: {total_examples}")
        
        print(f"\nProcessing complete!")
        print(f"Total files processed: {len(mdx_files)}")
        print(f"Total examples extracted and stored: {total_examples}")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    components_dir = os.path.join(current_dir, "docs", "web", "03-Components")
    
    # Create processor with a limit of 5 examples
    processor = MDXProcessor(components_dir)
    processor.process_all_files() 