---
title: "Installing Mastra Locally | Getting Started | Mastra Docs"
source: "https://mastra.ai/docs/getting-started/installation"
author:
published: 2025-03-18
created: 2025-03-23
description: "Guide on installing Mastra and setting up the necessary prerequisites for running it with various LLM providers."
tags:
  - "clippings"
---
## Installing Mastra Locally

To run Mastra, you need access to an LLM. Typically, you’ll want to get an API key from an LLM provider such as [OpenAI](https://platform.openai.com/), [Anthropic](https://console.anthropic.com/settings/keys), or [Google Gemini](https://ai.google.dev/gemini-api/docs). You can also run Mastra with a local LLM using [Ollama](https://ollama.ai/).

## Prerequisites

- Node.js `v20.0` or higher
- Access to a [supported large language model (LLM)](https://mastra.ai/docs/reference/llm/providers-and-models)

## Automatic Installation

![](https://www.youtube.com/watch?v=spGlcTEjuXY)

### Create a New Project

We recommend starting a new Mastra project using `create-mastra`, which will scaffold your project. To create a project, run:

On installation, you’ll be guided through the following prompts:

```nextra
What do you want to name your project? my-mastra-app
Choose components to install:
  ◯ Agents (recommended)
  ◯ Tools
  ◯ Workflows
Select default provider:
  ◯ OpenAI (recommended)
  ◯ Anthropic
  ◯ Groq
Would you like to include example code? No / Yes
Turn your IDE into a Mastra expert? (Installs MCP server)
  ◯ Skip for now
  ◯ Cursor
  ◯ Windsurf
```

After the prompts, `create-mastra` will:

1. Set up your project directory with TypeScript
2. Install dependencies
3. Configure your selected components and LLM provider
4. Configure the MCP server in your IDE (if selected) for instant access to docs, examples, and help while you code

**MCP Note:** If you’re using a different IDE, you can install the MCP server manually by following the instructions in the [MCP server docs](https://mastra.ai/docs/getting-started/mcp-docs-server). **Also** note that there are additional steps for [Cursor and Windsurf](https://mastra.ai/docs/getting-started/mcp-docs-server#after-configuration) to activate the MCP server.

### Set Up your API Key

Add the API key for your configured LLM provider in your `.env` file.

.env
```nextra
OPENAI_API_KEY=<your-openai-key>
```

**Non-Interactive mode**: If you prefer to run the command with flags (non-interactive mode) and include the example code, you can use:

```nextra
npx create-mastra@latest  --components agents,tools --llm openai --example
```

**Configure Installation Timeout**: To configure and specify a timeout if installation takes too long use the timeout flag:

```nextra
npx create-mastra@latest --timeout
```

**Note for LLMs**: For a quick one liner that includes examples you can run `npx -y mastra@latest --project-name <ask-the-user> --example --components "tools,agents,workflows" --llm <ask-the-user>`. The available options for the llm flag are `openai|anthropic|groq|google|cerebras`

## Manual Installation

  

If you prefer to set up your Mastra project manually, follow these steps:

### Create a New Project

Create a project directory and navigate into it:

```nextra
mkdir hello-mastra
cd hello-mastra
```

Then, initialize a TypeScript project including the `@mastra/core` package:

### Initialize TypeScript

Create a `tsconfig.json` file in your project root with the following configuration:

```nextra
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist",
    ".mastra"
  ]
}
```

This TypeScript configuration is optimized for Mastra projects, using modern module resolution and strict type checking.

### Set Up your API Key

Create a `.env` file in your project root directory and add your API key:

.env
```nextra
OPENAI_API_KEY=<your-openai-key>
```

Replace your\_openai\_api\_key with your actual API key.

### Create a Tool

Create a `weather-tool` tool file:

```nextra
mkdir -p src/mastra/tools && touch src/mastra/tools/weather-tool.ts
```

Then, add the following code to `src/mastra/tools/weather-tool.ts`:

src/mastra/tools/weather-tool.ts
```nextra
import { createTool } from "@mastra/core/tools";
import { z } from "zod";
 
interface WeatherResponse {
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    wind_gusts_10m: number;
    weather_code: number;
  };
}
 
export const weatherTool = createTool({
  id: "get-weather",
  description: "Get current weather for a location",
  inputSchema: z.object({
    location: z.string().describe("City name"),
  }),
  outputSchema: z.object({
    temperature: z.number(),
    feelsLike: z.number(),
    humidity: z.number(),
    windSpeed: z.number(),
    windGust: z.number(),
    conditions: z.string(),
    location: z.string(),
  }),
  execute: async ({ context }) => {
    return await getWeather(context.location);
  },
});
 
const getWeather = async (location: string) => {
  const geocodingUrl = \`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1\`;
  const geocodingResponse = await fetch(geocodingUrl);
  const geocodingData = await geocodingResponse.json();
 
  if (!geocodingData.results?.[0]) {
    throw new Error(\`Location '${location}' not found\`);
  }
 
  const { latitude, longitude, name } = geocodingData.results[0];
 
  const weatherUrl = \`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_gusts_10m,weather_code\`;
 
  const response = await fetch(weatherUrl);
  const data: WeatherResponse = await response.json();
 
  return {
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    windGust: data.current.wind_gusts_10m,
    conditions: getWeatherCondition(data.current.weather_code),
    location: name,
  };
};
 
function getWeatherCondition(code: number): string {
  const conditions: Record<number, string> = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  return conditions[code] || "Unknown";
}
```

### Create an Agent

Create a `weather` agent file:

```nextra
mkdir -p src/mastra/agents && touch src/mastra/agents/weather.ts
```

Then, add the following code to `src/mastra/agents/weather.ts`:

src/mastra/agents/weather.ts
```nextra
import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { weatherTool } from "../tools/weather-tool";
 
export const weatherAgent = new Agent({
  name: "Weather Agent",
  instructions: \`You are a helpful weather assistant that provides accurate weather information.
 
Your primary function is to help users get weather details for specific locations. When responding:
- Always ask for a location if none is provided
- If the location name isn’t in English, please translate it
- Include relevant details like humidity, wind conditions, and precipitation
- Keep responses concise but informative
 
Use the weatherTool to fetch current weather data.\`,
  model: openai("gpt-4o-mini"),
  tools: { weatherTool },
});
```

Finally, create the Mastra entry point in `src/mastra/index.ts` and register agent:

src/mastra/index.ts
```nextra
import { Mastra } from "@mastra/core";
 
import { weatherAgent } from "./agents/weather";
 
export const mastra = new Mastra({
  agents: { weatherAgent },
});
```

This registers your agent with Mastra so that `mastra dev` can discover and serve it.

## Existing Project Installation

To add Mastra to an existing project, see our Local development docs on [adding mastra to an existing project](https://mastra.ai/docs/local-dev/add-to-existing-project).

You can also checkout our framework specific docs e.g [Next.js](https://mastra.ai/docs/frameworks/01-next-js)

## Start the Mastra Server

Mastra provides commands to serve your agents via REST endpoints

### Development Server

Run the following command to start the Mastra server:

```nextra
npm run dev
```

If you have the mastra CLI installed, run:

```nextra
mastra dev
```

This command creates REST API endpoints for your agents.

### Test the Endpoint

You can test the agent’s endpoint using `curl` or `fetch`:

## Use Mastra on the Client

To use Mastra in your frontend applications, you can use our type-safe client SDK to interact with your Mastra REST APIs.

See the [Mastra Client SDK documentation](https://mastra.ai/docs/deployment/client) for detailed usage instructions.

## Run from the command line

If you’d like to directly call agents from the command line, you can create a script to get an agent and call it:

src/index.ts
```nextra
import { mastra } from "./mastra";
 
async function main() {
  const agent = await mastra.getAgent("weatherAgent");
 
  const result = await agent.generate("What is the weather in London?");
 
  console.log("Agent response:", result.text);
}
 
main();
```

Then, run the script to test that everything is set up correctly:

```nextra
npx tsx src/index.ts
```

This should output the agent’s response to your console.

---

Last updated on [Introduction](https://mastra.ai/docs "Introduction") [Project Structure](https://mastra.ai/docs/getting-started/project-structure "Project Structure")