# Flomo MCP Server

A Model Context Protocol (MCP) server that lets you create notes in Flomo directly through AI chat interactions in Cursor or Claude desktop. Write and organize your thoughts seamlessly through natural language commands.

## Usage

Configure Claude / Cursor / Windsurf / Cline / ChatWise / Cherry Studio etc.

See <https://mcp.so/server/mcp-server-flomo>

Get your Flomo API URL from [Flomo API Settings](https://v.flomoapp.com/mine)

```bash
{
  "mcpServers": {
    "mcp-server-flomo": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-flomo"
      ],
      "env": {
        "FLOMO_API_URL": "your_api_url_here"
      }
    }
  }
}
```

Once the server is running, you can create notes in Flomo through natural language commands in your AI chat. Here are some examples:

```json
"How to publish a mcp server? Could you save the answer to flomo note after answering it"
```

The server will handle:

- Converting your natural language requests into Flomo API calls
- Proper formatting and submission of your notes
- Providing feedback on successful note creation

## Dev

1. Get your Flomo API URL from [Flomo API Settings](https://v.flomoapp.com/mine)

2. Install and configure:

   ```bash
   # Install dependencies
   npm install
   FLOMO_API_URL=your_api_url_here npx .
   ```

## Technical Details

- Built with TypeScript and the Model Context Protocol SDK
- Communicates with Flomo via their REST API
- Runs over stdio for seamless integration with AI tools

## License

MIT
