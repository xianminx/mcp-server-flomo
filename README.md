# Flomo MCP Server
![](https://badge.mcpx.dev?type=server 'MCP Server') ![NPM Version](https://img.shields.io/npm/v/mcp-server-flomo) ![MIT licensed](https://img.shields.io/github/license/xianminx/mcp-server-flomo?style=flat-square)

https://github.com/xianminx/mcp-server-flomo

A Model Context Protocol (MCP) server that lets you create notes in Flomo directly through AI chat interactions in Cursor or Claude desktop. Write and organize your thoughts seamlessly through natural language commands.

## Usage

### [mcp-get](https://mcp-get.com/) 

![mcp-get: mcp-server-flomo](https://img.shields.io/badge/mcp--get-mcp--server--flomo-blue)


```bash
npx @michaellatman/mcp-get@latest install @kimtaeyoon83/mcp-server-youtube-transcript
```

### [mcp.so](https://mcp.so/server/mcp-server-flomo/xianminx)
https://mcp.so/server/mcp-server-flomo/xianminx

### Manually configure

Configure Claude / Cursor / Windsurf / Cline / ChatWise / Cherry Studio etc.

```bash
FLOMO_API_URL=your_api_url_here npx -y mcp-server-flomo
```

Or configure for your MCP Host / Client. See https://mcp.so/server/mcp-server-flomo for configuration detail.

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

This will save the Cursor AI Agent response to Flomo directly in the chat conversation!


<img src="https://raw.githubusercontent.com/xianminx/mcp-server-flomo/refs/heads/main/public/images/mcp-cursor-flomo.png" width="400">

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

This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.