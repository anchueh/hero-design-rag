#!/bin/bash

# Exit on error
set -e

# Check if virtual environment exists
if [ ! -d ".venv" ]; then
    echo "Creating virtual environment..."
    python -m venv .venv
fi

# Activate virtual environment
echo "Activating virtual environment..."
source .venv/bin/activate

# Install dependencies if requirements.txt exists
if [ -f "requirements.txt" ]; then
    echo "Installing dependencies..."
    pip install -r requirements.txt
fi

# Check for .env file
if [ ! -f ".env" ]; then
    echo "Warning: .env file not found. Please create one with your API keys."
    echo "Required environment variables:"
    echo "# OpenAI API key for embeddings generation"
    echo "OPENAI_API_KEY=your_openai_api_key"
    echo ""
    echo "# Qdrant Cloud credentials"
    echo "# Contact an.chu@employmenthero.com to obtain these credentials"
    echo "QDRANT_URL=your_qdrant_cloud_url"
    echo "QDRANT_API_KEY=your_qdrant_api_key"
    exit 1
fi

# Start the server
echo "Starting MCP server..."
python mcp_server.py 