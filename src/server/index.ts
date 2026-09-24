import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { listCourses } from "../tools/listCourses.js";

const server = new McpServer({
  name: "CampusGPT MCP",
  version: "1.0.0",
});

server.registerTool(
  "list_courses",
  {
    title: "List Courses",
    description: "Returns all enrolled courses.",
    inputSchema: {},
  },
  async (_args) => {
    return await listCourses();
  }
);

async function main() {
  const transport = new StdioServerTransport();

  await server.connect(transport);

  console.error("🚀 CampusGPT MCP Server is running...");
}

main().catch((err) => {
  console.error("Failed to start MCP server:", err);
});