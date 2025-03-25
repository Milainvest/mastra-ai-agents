import { Mastra } from "@mastra/core";
import { createLogger } from "@mastra/core/logger";
import { investmentAgent } from "./agents";

export const mastra = new Mastra({
  agents: { investmentAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
