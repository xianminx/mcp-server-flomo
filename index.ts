#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { z } from "zod";
if (!process.env.FLOMO_API_URL) {
  throw new Error(
    "FLOMO_API_URL is not set, apply a personal access token to the environment variable from https://v.flomoapp.com/mine"
  );
}

const flomoApiUrl = process.env.FLOMO_API_URL;

interface FlomoNewNoteResponse {
  code: number;
  message: string;
  memo: {
    creator_id: number;
    source: string;
    content: string;
    tags: string[];
    updated_at: string;
    created_at: string;
    linked_memos: any[];
    linked_count: number;
    slug: string;
  };
}

const server = new McpServer(
  {
    name: "mcp-server-flomo",
    version: "0.0.1",
  },
  {
    capabilities: {
      logging: {},
    },
  }
);

// declare tool capabilities
server.tool(
  "newNote",
  "Create a new note in Flomo",
  { input: z.string() },
  async (input) => {
    try {
      const response = await createFlomoNote(input.input);
      return {
        content: [
          {
            type: "text",
            text: `${JSON.stringify(response)}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `${JSON.stringify(error)}`,
          },
        ],
      };
    }
  }
);
async function createFlomoNote(content: string): Promise<FlomoNewNoteResponse> {
  const body = {
    content: content,
  };
  return await fetch(flomoApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

// declare resource capabilities
// Flomo api does not support resource capabilities

const transport = new StdioServerTransport();
await server.connect(transport);
