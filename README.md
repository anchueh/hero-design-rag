# Hero Design MCP Server

This repository contains a Machine Control Protocol (MCP) server implementation for the Hero Design System. The server provides semantic search capabilities across component examples, making it easier for developers to find and understand component implementations.

## Features

- Semantic search across Hero Design component examples
- Multiple search aspects: code, descriptions, props, patterns, and use cases
- Real-time search results via Server-Sent Events (SSE)
- Integration with Cursor IDE

## Prerequisites

- Python 3.11 or higher
- Virtual environment management tool (e.g., `venv`)
- OpenAI API key
- Qdrant Cloud credentials (contact an.chu@employmenthero.com to obtain these)
- Cursor IDE

## Installation

1. Clone the repository and navigate to the project directory:
```bash
git clone [repository-url]
cd hero-design-rag
```

2. Create and activate a virtual environment:
```bash
python -m venv .venv
source .venv/bin/activate  # On Unix/macOS
# OR
.venv\Scripts\activate  # On Windows
```

3. Install the required dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the project root with the following environment variables:
```env
# OpenAI API key for embeddings generation
OPENAI_API_KEY=your_openai_api_key

# Qdrant Cloud credentials (contact an.chu@employmenthero.com to obtain these)
QDRANT_URL=your_qdrant_cloud_url
QDRANT_API_KEY=your_qdrant_api_key
```

## Running the Server

1. Make the start script executable (Unix/macOS only):
```bash
chmod +x start_mcp.sh
```

2. Start the server using one of these methods:

   a. Using the start script:
   ```bash
   ./start_mcp.sh
   ```

   b. Or directly with Python:
   ```bash
   python mcp_server.py
   ```

The server will start on `http://localhost:8000` with the following endpoints:
- `/sse` - SSE connection endpoint (this is the URL you'll use to connect in Cursor)
- `/messages/` - Message handling endpoint

## Connecting to Cursor IDE

1. Open Cursor IDE
2. Open the Command Palette (Cmd/Ctrl + Shift + P)
3. Search for "Connect to MCP Server"
4. Enter the server URL: `http://localhost:8000/sse`  # Important: Include the /sse endpoint!

## Using the Search Tool

Once connected, you can use the `search_hero_design_component_examples` tool in Cursor. The tool supports various types of queries:

```typescript
// Example queries:
"Button component with icon and primary color"
"Form validation pattern in Input component"
"Dropdown with search functionality"
"Loading state implementation in Table"
"Custom styling props for Typography"
```

### Search Parameters

- `query` (required): Your search query
- `limit` (optional): Maximum number of results (default: 5)
- `threshold` (optional): Minimum similarity score (0.0-1.0, default: 0.4)

### Search Collections

The search is performed across multiple specialized collections:

1. Full Component Information (`component_examples`)
2. Code Examples (`component_examples_code`)
3. Component Descriptions (`component_examples_description`)
4. Purpose & Use Cases (`component_examples_purpose`)
5. Technical Details (`component_examples_technical`)
6. Props & Configuration (`component_examples_props`)
7. Design Patterns (`component_examples_patterns`)
8. Use Case Scenarios (`component_examples_use_cases`)

## Server Architecture

The server is built using:
- FastAPI/Starlette for the web server
- Server-Sent Events (SSE) for real-time communication
- OpenAI's text-embedding-3-small model for semantic search
- Qdrant vector database for similarity search
- MCP protocol for IDE integration

## Troubleshooting

1. **Server Won't Start**
   - Check if the required ports (8000) are available
   - Verify environment variables in `.env`
   - Ensure virtual environment is activated

2. **Connection Issues**
   - Verify the server is running (`http://localhost:8000`)
   - Check Cursor IDE's connection settings
   - Ensure no firewall is blocking the connection

3. **Search Not Working**
   - Verify OpenAI API key is valid
   - Check Qdrant Cloud connection
   - Ensure the collections are properly initialized

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

[Your license information here] 