---
title: "Introducing Mastra MCP Documentation Server"
source: "https://mastra.ai/blog/introducing-mastra-mcp"
author:
published: 2025-03-18
created: 2025-03-23
description: "We built a Mastra MCP documentation server that provides AI assistants and IDE's with direct access to Mastra.ai's complete knowledge base."
tags:
  - "clippings"
---
![](https://www.youtube.com/watch?v=vciV57lF0og)

We built a Mastra MCP documentation server that provides AI assistants and IDE's with direct access to Mastra.ai's complete knowledge base.

## What is MCP?

MCP is an emerging standard for providing AI models with structured, real-time access to domain-specific knowledge bases and documentation. It was developed in late 2024 by Anthropic researchers and, since it is OSS, has continued to evolve thanks to commmunity contributions. The protocol standardizes how AI models access external knowledge sources in real-time, building on earlier work in RAG.

## What we built

[We've already had MCP support for a while](https://mastra.ai/docs/reference/tools/mcp-configuration), but it was only available to our own agents. Now we've built a documentation server that allows any AI assistant or IDE to query Mastra's complete knowledge base.

Our MCP documentation server builds on concepts from `llms.txt` (exposing documentation as LLM context) but expands on it by enabling agents to query specific contextual information about Mastra. Since the agent can make additional queries when it needs to, minimal context is used in comparison to `llms.txt`.

We've seen that coding agents using this system are able to find the information they need to complete a task more quickly and efficiently. This is because the context window isn't full of documentation info that isn't relevant to the specific task at hand. Instead, only the information the agent queries is added to context.

When an agent encounters something that doesn't work correctly it can check code examples and package changelogs to see if it's not using an API the right way (or if a new package version has been released with a bug fix).

In the future we may expand our docs server to allow the agent to query Github issues to find if anyone else is encountering a problem, or prefill a Github issue template and open it in the users browser.

## Getting Started

`@mastra/mcp-docs-server` provides direct access to Mastra's complete knowledge base in Cursor, Windsurf, Cline, or any other IDE that supports MCP.

To install, run `pnpmcreatemastra@latest` and select Cursor or Windsurf when prompted to install the MCP server.

### Enabling Mastra's MCP server in Cursor

1. Open Cursor settings
2. Navigate to MCP settings
3. Click "enable" on the Mastra MCP server
4. If you have an agent chat open, you'll need to re-open it or start a new chat to use the MCP server

### Enabling Mastra's MCP server in Windsurf

1. Fully quit and re-open Windsurf
2. If tool calls start failing, go to Windsurfs MCP settings and re-start the MCP server. This is a common Windsurf MCP issue and isn't related to Mastra. Right now Cursor's MCP implementation is more stable than Windsurfs is.

Note: In both IDEs it may take a minute for the MCP server to start the first time as it needs to download the package from npm.

## Enabling Mastra's MCP server in other IDEs

Details on manual installation for other IDEs can be found [here](https://mastra.ai/docs/getting-started/mcp-docs-server).

## Example Usage

Once it's installed in your IDE you can write prompts and assume the agent will understand everything about Mastra.

Here are some prompts you might try:

- "Add evals to my agent and write tests"
- "Does Mastra work with the AI SDK?"
- "I'm running into a bug with agent memory, have there been any related changes or bug fixes recently?"

We're excited to see how Mastra's MCP server can help you build better agents. If you have any feedback or feature requests, please let us know on [Discord](https://discord.gg/mastra).