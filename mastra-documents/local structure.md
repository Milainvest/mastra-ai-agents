---
title: "Local Project Structure | Getting Started | Mastra Docs"
source: "https://mastra.ai/docs/getting-started/project-structure"
author:
published: 2025-03-18
created: 2025-03-23
description: "Guide on organizing folders and files in Mastra, including best practices and recommended structures."
tags:
  - "clippings"
---
## Project Structure

This page provides a guide for organizing folders and files in Mastra. Mastra is a modular framework, and you can use any of the modules separately or together.

You could write everything in a single file (as we showed in the quick start), or separate each agent, tool, and workflow into their own files.

We don’t enforce a specific folder structure, but we do recommend some best practices, and the CLI will scaffold a project with a sensible structure.

## Using the CLI

`mastra init` is an interactive CLI that allows you to:

- **Choose a directory for Mastra files**: Specify where you want the Mastra files to be placed (default is `src/mastra` ).
- **Select components to install**: Choose which components you want to include in your project:
	- Agents
	- Tools
	- Workflows
- **Select a default LLM provider**: Choose from supported providers like OpenAI, Anthropic, or Groq.
- **Include example code**: Decide whether to include example code to help you get started.

### Example Project Structure

Assuming you select all components and include example code, your project structure will look like this:

- - - - - index.ts
			- - index.ts
			- - index.ts
			- index.ts
	- .env

### Top-level Folders

| Folder | Description |
| --- | --- |
| `src/mastra` | Core application folder |
| `src/mastra/agents` | Agent configurations and definitions |
| `src/mastra/tools` | Custom tool definitions |
| `src/mastra/workflows` | Workflow definitions |

### Top-level Files

| File | Description |
| --- | --- |
| `src/mastra/index.ts` | Main configuration file for Mastra |
| `.env` | Environment variables |

Last updated on [Installation](https://mastra.ai/docs/getting-started/installation "Installation") [Using with Cursor/Windsurf](https://mastra.ai/docs/getting-started/mcp-docs-server "Using with Cursor/Windsurf")