---
title: "GitHub mastra-ai/mastra LLM Context"
source: "https://uithub.com/mastra-ai/mastra"
author:
  - "[[Code From Anywhere]]"
published:
created: 2025-03-23
description: "Easily ask your LLM code questions about"
tags:
  - "clippings"
---
The response has been limited to 50k tokens of the smallest files in the repo. You can remove this limitation by removing the max tokens filter.

```
├── .changeset
    ├── README.md
    ├── breezy-groups-wish.md
    ├── cold-berries-study.md
    ├── config.json
    ├── cool-papers-check.md
    ├── cruel-months-say.md
    ├── cute-women-stand.md
    ├── easy-laws-live.md
    ├── every-bars-stand.md
    ├── famous-readers-juggle.md
    ├── fluffy-zoos-build.md
    ├── fuzzy-ducks-burn.md
    ├── gold-garlics-attend.md
    ├── great-jobs-serve.md
    ├── icy-places-find.md
    ├── khaki-toys-attend.md
    ├── mcp-client-timeout.md
    ├── pre.json
    ├── pretty-teams-lay.md
    ├── silent-terms-lay.md
    ├── small-teeth-rush.md
    ├── swift-mirrors-rest.md
    ├── swift-wings-sneeze.md
    ├── thirty-plants-brush.md
    ├── twenty-papers-hide.md
    └── wild-hornets-train.md
├── .cursor
    └── mcp.json
├── .dev
    └── docker-compose.yaml
├── .env.example
├── .github
    ├── ISSUE_TEMPLATE
    │   ├── bug_report.yml
    │   ├── config.yml
    │   ├── documentation.yml
    │   ├── feature_request.yml
    │   └── integration_request.yml
    └── workflows
    │   ├── README.md
    │   ├── bird-checker-eval.yml
    │   ├── changelog.yml
    │   ├── create-release.yml
    │   ├── data
    │       ├── first-time-contributor-pr-test.json
    │       └── stable-release-test.json
    │   ├── delete-spam-issues.yml
    │   ├── link-checker-agent.yml
    │   ├── link-checker.yml
    │   ├── lint.yml
    │   ├── new-issue.yml
    │   ├── publish-packages.yml
    │   ├── spec-writer.yaml
    │   ├── test-cli.yml
    │   ├── test-combined-stores.yml
    │   ├── test-core.yml
    │   ├── test-docs-mcp.yml
    │   ├── test-evals.yml
    │   ├── test-memory.yml
    │   ├── test-rag.yml
    │   └── version-packages.yml
├── .gitignore
├── .husky
    └── pre-commit
├── .prettierignore
├── .prettierrc
├── .vercelignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── DEVELOPMENT.md
├── LICENSE
├── README.md
├── client-sdks
    └── client-js
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── LICENSE
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │       ├── client.ts
    │       ├── example.ts
    │       ├── index.test.ts
    │       ├── index.ts
    │       ├── resources
    │       │   ├── agent.ts
    │       │   ├── base.ts
    │       │   ├── index.ts
    │       │   ├── memory-thread.ts
    │       │   ├── network.ts
    │       │   ├── tool.ts
    │       │   ├── vector.ts
    │       │   └── workflow.ts
    │       └── types.ts
    │   ├── tsconfig.json
    │   └── vitest.config.js
├── deployers
    ├── cloudflare
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── global.d.ts
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── secrets-manager
    │   │   │   ├── index.test.ts
    │   │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── netlify
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── helpers.ts
    │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    └── vercel
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │       └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
├── docs
    ├── .env.example
    ├── .eslintrc.json
    ├── .gitignore
    ├── .npmrc
    ├── .prettierrc
    ├── CHANGELOG.md
    ├── README.md
    ├── example-text-generation.md
    ├── next-sitemap.config.mjs
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── Geist-Regular.otf
    │   ├── Geist-SemiBold.otf
    │   ├── creating-new-agent.png
    │   ├── docs
    │   │   ├── mastra-ai-sdk.png
    │   │   ├── mastra-storage.png
    │   │   └── signoz-telemetry-demo.png
    │   ├── favicon.ico
    │   ├── image-1.png
    │   ├── image.png
    │   ├── llms-full.txt
    │   ├── llms.txt
    │   ├── log.png
    │   ├── logo.svg
    │   ├── mastra-homepage.png
    │   ├── parallel-chains.png
    │   ├── playground-agent-chat.png
    │   ├── playground-agent.png
    │   ├── playground-tools.png
    │   ├── playground-workflow.png
    │   ├── rag-sync-screenshot.png
    │   ├── sequential-chains.png
    │   ├── showcase
    │   │   ├── ai-beats-lab.png
    │   │   ├── ecommerce-rag.png
    │   │   ├── excalidraw-app.png
    │   │   ├── notebook-lm.png
    │   │   └── travel-ai.png
    │   └── subscribed-chains.png
    ├── reference-guide.md
    ├── separate-long-code-block.md
    ├── src
    │   ├── components
    │   │   ├── example-cards.tsx
    │   │   ├── footer.tsx
    │   │   ├── github-link.tsx
    │   │   ├── github-star-count.tsx
    │   │   ├── logo.tsx
    │   │   ├── operators-table.tsx
    │   │   ├── properties-table.tsx
    │   │   ├── schema-table.tsx
    │   │   ├── showcase-grid.tsx
    │   │   ├── subscribe-form.tsx
    │   │   ├── toc.tsx
    │   │   ├── ui
    │   │   │   ├── card.tsx
    │   │   │   ├── forms.tsx
    │   │   │   ├── spinner.tsx
    │   │   │   └── toaster.tsx
    │   │   └── youtube.tsx
    │   ├── global.css
    │   ├── lib
    │   │   └── utils.ts
    │   ├── pages
    │   │   ├── _app.jsx
    │   │   ├── _meta.ts
    │   │   ├── docs
    │   │   │   ├── _meta.ts
    │   │   │   ├── agents
    │   │   │   │   ├── 00-overview.mdx
    │   │   │   │   ├── 01-agent-memory.mdx
    │   │   │   │   ├── 02-adding-tools.mdx
    │   │   │   │   ├── 02a-mcp-guide.mdx
    │   │   │   │   ├── 03-adding-voice.mdx
    │   │   │   │   └── _meta.ts
    │   │   │   ├── deployment
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── client.mdx
    │   │   │   │   ├── deployment.mdx
    │   │   │   │   ├── server.mdx
    │   │   │   │   └── tracing-ui.png
    │   │   │   ├── evals
    │   │   │   │   ├── 00-overview.mdx
    │   │   │   │   ├── 01-textual-evals.mdx
    │   │   │   │   ├── 02-custom-eval.mdx
    │   │   │   │   ├── 03-running-in-ci.mdx
    │   │   │   │   └── _meta.ts
    │   │   │   ├── faq
    │   │   │   │   ├── _meta.ts
    │   │   │   │   └── index.mdx
    │   │   │   ├── frameworks
    │   │   │   │   ├── 01-next-js.mdx
    │   │   │   │   ├── 02-ai-sdk.mdx
    │   │   │   │   └── _meta.ts
    │   │   │   ├── getting-started
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── installation.mdx
    │   │   │   │   ├── mcp-docs-server.mdx
    │   │   │   │   └── project-structure.mdx
    │   │   │   ├── guides
    │   │   │   │   ├── 01-chef-michel.mdx
    │   │   │   │   ├── 02-stock-agent.mdx
    │   │   │   │   ├── 03-recruiter.mdx
    │   │   │   │   ├── 04-research-assistant.mdx
    │   │   │   │   └── _meta.ts
    │   │   │   ├── image.png
    │   │   │   ├── index.mdx
    │   │   │   ├── integrations
    │   │   │   │   ├── _meta.ts
    │   │   │   │   └── index.mdx
    │   │   │   ├── local-dev
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── add-to-existing-project.mdx
    │   │   │   │   ├── creating-a-new-project.mdx
    │   │   │   │   └── mastra-dev.mdx
    │   │   │   ├── observability
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── logging.mdx
    │   │   │   │   ├── nextjs-tracing.mdx
    │   │   │   │   └── tracing.mdx
    │   │   │   ├── rag
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── chunking-and-embedding.mdx
    │   │   │   │   ├── overview.mdx
    │   │   │   │   ├── retrieval.mdx
    │   │   │   │   └── vector-databases.mdx
    │   │   │   ├── reference
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── agents
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── createTool.mdx
    │   │   │   │   │   ├── generate.mdx
    │   │   │   │   │   ├── getAgent.mdx
    │   │   │   │   │   └── stream.mdx
    │   │   │   │   ├── cli
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── build.mdx
    │   │   │   │   │   ├── deploy.mdx
    │   │   │   │   │   ├── dev.mdx
    │   │   │   │   │   └── init.mdx
    │   │   │   │   ├── client-js
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── agents.mdx
    │   │   │   │   │   ├── error-handling.mdx
    │   │   │   │   │   ├── logs.mdx
    │   │   │   │   │   ├── memory.mdx
    │   │   │   │   │   ├── telemetry.mdx
    │   │   │   │   │   ├── tools.mdx
    │   │   │   │   │   ├── vectors.mdx
    │   │   │   │   │   └── workflows.mdx
    │   │   │   │   ├── core
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   └── mastra-class.mdx
    │   │   │   │   ├── deployer
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── cloudflare.mdx
    │   │   │   │   │   ├── deployer.mdx
    │   │   │   │   │   ├── netlify.mdx
    │   │   │   │   │   └── vercel.mdx
    │   │   │   │   ├── evals
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── answer-relevancy.mdx
    │   │   │   │   │   ├── bias.mdx
    │   │   │   │   │   ├── completeness.mdx
    │   │   │   │   │   ├── content-similarity.mdx
    │   │   │   │   │   ├── context-position.mdx
    │   │   │   │   │   ├── context-precision.mdx
    │   │   │   │   │   ├── context-relevancy.mdx
    │   │   │   │   │   ├── contextual-recall.mdx
    │   │   │   │   │   ├── faithfulness.mdx
    │   │   │   │   │   ├── hallucination.mdx
    │   │   │   │   │   ├── keyword-coverage.mdx
    │   │   │   │   │   ├── prompt-alignment.mdx
    │   │   │   │   │   ├── summarization.mdx
    │   │   │   │   │   ├── textual-difference.mdx
    │   │   │   │   │   ├── tone-consistency.mdx
    │   │   │   │   │   └── toxicity.mdx
    │   │   │   │   ├── index.mdx
    │   │   │   │   ├── memory
    │   │   │   │   │   ├── Memory.mdx
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── createThread.mdx
    │   │   │   │   │   ├── getThreadById.mdx
    │   │   │   │   │   ├── getThreadsByResourceId.mdx
    │   │   │   │   │   └── query.mdx
    │   │   │   │   ├── networks
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   └── agent-network.mdx
    │   │   │   │   ├── observability
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── create-logger.mdx
    │   │   │   │   │   ├── logger.mdx
    │   │   │   │   │   ├── otel-config.mdx
    │   │   │   │   │   └── providers
    │   │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   │   ├── braintrust.mdx
    │   │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   │   ├── laminar.mdx
    │   │   │   │   │   │   ├── langfuse.mdx
    │   │   │   │   │   │   ├── langsmith.mdx
    │   │   │   │   │   │   ├── langwatch.mdx
    │   │   │   │   │   │   ├── new-relic.mdx
    │   │   │   │   │   │   ├── signoz.mdx
    │   │   │   │   │   │   └── traceloop.mdx
    │   │   │   │   ├── rag
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── astra.mdx
    │   │   │   │   │   ├── chroma.mdx
    │   │   │   │   │   ├── chunk.mdx
    │   │   │   │   │   ├── document.mdx
    │   │   │   │   │   ├── embeddings.mdx
    │   │   │   │   │   ├── extract-params.mdx
    │   │   │   │   │   ├── graph-rag.mdx
    │   │   │   │   │   ├── libsql.mdx
    │   │   │   │   │   ├── metadata-filters.mdx
    │   │   │   │   │   ├── pg.mdx
    │   │   │   │   │   ├── pinecone.mdx
    │   │   │   │   │   ├── qdrant.mdx
    │   │   │   │   │   ├── rerank.mdx
    │   │   │   │   │   ├── turbopuffer.mdx
    │   │   │   │   │   ├── upstash.mdx
    │   │   │   │   │   └── vectorize.mdx
    │   │   │   │   ├── storage
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── libsql.mdx
    │   │   │   │   │   ├── postgresql.mdx
    │   │   │   │   │   └── upstash.mdx
    │   │   │   │   ├── tools
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── client.mdx
    │   │   │   │   │   ├── document-chunker-tool.mdx
    │   │   │   │   │   ├── graph-rag-tool.mdx
    │   │   │   │   │   ├── mcp-configuration.mdx
    │   │   │   │   │   └── vector-query-tool.mdx
    │   │   │   │   ├── voice
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── composite-voice.mdx
    │   │   │   │   │   ├── deepgram.mdx
    │   │   │   │   │   ├── elevenlabs.mdx
    │   │   │   │   │   ├── google.mdx
    │   │   │   │   │   ├── mastra-voice.mdx
    │   │   │   │   │   ├── murf.mdx
    │   │   │   │   │   ├── openai-realtime.mdx
    │   │   │   │   │   ├── openai.mdx
    │   │   │   │   │   ├── playai.mdx
    │   │   │   │   │   ├── sarvam.mdx
    │   │   │   │   │   └── speechify.mdx
    │   │   │   │   └── workflows
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── after.mdx
    │   │   │   │   │   ├── afterEvent.mdx
    │   │   │   │   │   ├── commit.mdx
    │   │   │   │   │   ├── createRun.mdx
    │   │   │   │   │   ├── else.mdx
    │   │   │   │   │   ├── events.mdx
    │   │   │   │   │   ├── execute.mdx
    │   │   │   │   │   ├── if.mdx
    │   │   │   │   │   ├── resume.mdx
    │   │   │   │   │   ├── resumeWithEvent.mdx
    │   │   │   │   │   ├── snapshots.mdx
    │   │   │   │   │   ├── start.mdx
    │   │   │   │   │   ├── step-class.mdx
    │   │   │   │   │   ├── step-condition.mdx
    │   │   │   │   │   ├── step-function.mdx
    │   │   │   │   │   ├── step-options.mdx
    │   │   │   │   │   ├── step-retries.mdx
    │   │   │   │   │   ├── suspend.mdx
    │   │   │   │   │   ├── then.mdx
    │   │   │   │   │   ├── until.mdx
    │   │   │   │   │   ├── watch.mdx
    │   │   │   │   │   ├── while.mdx
    │   │   │   │   │   └── workflow.mdx
    │   │   │   ├── storage
    │   │   │   │   ├── _meta.ts
    │   │   │   │   └── overview.mdx
    │   │   │   ├── voice
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── overview.mdx
    │   │   │   │   ├── speech-to-text.mdx
    │   │   │   │   ├── text-to-speech.mdx
    │   │   │   │   └── voice-to-voice.mdx
    │   │   │   └── workflows
    │   │   │   │   ├── 00-overview.mdx
    │   │   │   │   ├── _meta.js
    │   │   │   │   ├── control-flow.mdx
    │   │   │   │   ├── dynamic-workflows.mdx
    │   │   │   │   ├── error-handling.mdx
    │   │   │   │   ├── steps.mdx
    │   │   │   │   ├── suspend-and-resume.mdx
    │   │   │   │   └── variables.mdx
    │   │   ├── examples
    │   │   │   ├── _meta.ts
    │   │   │   ├── agents
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── adding-voice-capabilities.mdx
    │   │   │   │   ├── agentic-workflows.mdx
    │   │   │   │   ├── bird-checker.mdx
    │   │   │   │   ├── hierarchical-multi-agent.mdx
    │   │   │   │   ├── multi-agent-workflow.mdx
    │   │   │   │   ├── system-prompt.mdx
    │   │   │   │   └── using-a-tool.mdx
    │   │   │   ├── evals
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── answer-relevancy.mdx
    │   │   │   │   ├── bias.mdx
    │   │   │   │   ├── completeness.mdx
    │   │   │   │   ├── content-similarity.mdx
    │   │   │   │   ├── context-position.mdx
    │   │   │   │   ├── context-precision.mdx
    │   │   │   │   ├── context-relevancy.mdx
    │   │   │   │   ├── contextual-recall.mdx
    │   │   │   │   ├── custom-eval.mdx
    │   │   │   │   ├── faithfulness.mdx
    │   │   │   │   ├── hallucination.mdx
    │   │   │   │   ├── keyword-coverage.mdx
    │   │   │   │   ├── prompt-alignment.mdx
    │   │   │   │   ├── summarization.mdx
    │   │   │   │   ├── textual-difference.mdx
    │   │   │   │   ├── tone-consistency.mdx
    │   │   │   │   ├── toxicity.mdx
    │   │   │   │   └── word-inclusion.mdx
    │   │   │   ├── index.mdx
    │   │   │   ├── memory
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── memory-with-libsql.mdx
    │   │   │   │   ├── memory-with-pg.mdx
    │   │   │   │   ├── memory-with-upstash.mdx
    │   │   │   │   ├── streaming-working-memory-advanced.mdx
    │   │   │   │   └── streaming-working-memory.mdx
    │   │   │   ├── rag
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── chunking
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── adjust-chunk-delimiters.mdx
    │   │   │   │   │   ├── adjust-chunk-size.mdx
    │   │   │   │   │   ├── chunk-html.mdx
    │   │   │   │   │   ├── chunk-json.mdx
    │   │   │   │   │   ├── chunk-markdown.mdx
    │   │   │   │   │   └── chunk-text.mdx
    │   │   │   │   ├── embedding
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── embed-chunk-array.mdx
    │   │   │   │   │   ├── embed-text-chunk.mdx
    │   │   │   │   │   ├── embed-text-with-cohere.mdx
    │   │   │   │   │   └── metadata-extraction.mdx
    │   │   │   │   ├── query
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── hybrid-vector-search.mdx
    │   │   │   │   │   └── retrieve-results.mdx
    │   │   │   │   ├── rerank
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── rerank-rag.mdx
    │   │   │   │   │   ├── rerank.mdx
    │   │   │   │   │   └── reranking-with-cohere.mdx
    │   │   │   │   ├── upsert
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   └── upsert-embeddings.mdx
    │   │   │   │   └── usage
    │   │   │   │   │   ├── _meta.ts
    │   │   │   │   │   ├── basic-rag.mdx
    │   │   │   │   │   ├── cleanup-rag.mdx
    │   │   │   │   │   ├── cot-rag.mdx
    │   │   │   │   │   ├── cot-workflow-rag.mdx
    │   │   │   │   │   ├── filter-rag.mdx
    │   │   │   │   │   └── graph-rag.mdx
    │   │   │   ├── voice
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── speech-to-text.mdx
    │   │   │   │   └── text-to-speech.mdx
    │   │   │   └── workflows
    │   │   │   │   ├── _meta.ts
    │   │   │   │   ├── branching-paths.mdx
    │   │   │   │   ├── calling-agent.mdx
    │   │   │   │   ├── conditional-branching.mdx
    │   │   │   │   ├── creating-a-workflow.mdx
    │   │   │   │   ├── cyclical-dependencies.mdx
    │   │   │   │   ├── parallel-steps.mdx
    │   │   │   │   ├── sequential-steps.mdx
    │   │   │   │   ├── suspend-and-resume.mdx
    │   │   │   │   ├── using-a-tool-as-a-step.mdx
    │   │   │   │   └── workflow-variables.mdx
    │   │   ├── font
    │   │   │   ├── CommitMono-400-Regular.otf
    │   │   │   └── GeistVF.woff
    │   │   └── showcase
    │   │   │   ├── _meta.ts
    │   │   │   └── index.mdx
    │   └── scripts
    │   │   ├── build-cursor-context.ts
    │   │   └── build-llms-text-files.ts
    ├── tailwind.config.ts
    ├── theme.config.tsx
    └── tsconfig.json
├── e2e-tests
    ├── monorepo
    │   ├── monorepo.test.ts
    │   ├── package.json
    │   ├── setup.js
    │   ├── template
    │   │   ├── .pnpm-workspace-state.json
    │   │   ├── apps
    │   │   │   └── custom
    │   │   │   │   ├── package.json
    │   │   │   │   ├── src
    │   │   │   │       └── mastra
    │   │   │   │       │   ├── agents
    │   │   │   │       │       └── index.ts
    │   │   │   │       │   └── index.ts
    │   │   │   │   └── tsconfig.json
    │   │   ├── package.json
    │   │   ├── packages
    │   │   │   └── inner-tools
    │   │   │   │   ├── package.json
    │   │   │   │   ├── src
    │   │   │   │       └── index.ts
    │   │   │   │   └── tsconfig.json
    │   │   ├── pnpm-lock.yaml
    │   │   ├── pnpm-workspace.yaml
    │   │   └── tsconfig.json
    │   └── vitest.config.ts
    └── pkg-outputs
    │   ├── bundle.test.ts
    │   ├── package.json
    │   ├── pnpm-lock.yaml
    │   └── vitest.config.ts
├── examples
    ├── agent-network
    │   ├── .gitignore
    │   ├── package.json
    │   └── src
    │   │   ├── index.ts
    │   │   └── mastra
    │   │       ├── agents
    │   │           └── index.ts
    │   │       ├── index.ts
    │   │       └── network
    │   │           └── index.ts
    ├── agent
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   ├── index.ts
    │   │   └── mastra
    │   │       ├── agents
    │   │           └── index.ts
    │   │       ├── index.ts
    │   │       └── tools
    │   │           └── index.ts
    ├── ai-beats-lab
    │   └── README.md
    ├── ai-sdk-useChat
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── app
    │   │   ├── api
    │   │   │   └── chat
    │   │   │   │   └── route.ts
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── eslint.config.mjs
    │   ├── next.config.ts
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── public
    │   │   ├── file.svg
    │   │   ├── globe.svg
    │   │   ├── next.svg
    │   │   ├── vercel.svg
    │   │   └── window.svg
    │   ├── src
    │   │   └── mastra
    │   │   │   ├── agents
    │   │   │       └── index.ts
    │   │   │   ├── index.ts
    │   │   │   ├── tools
    │   │   │       └── index.ts
    │   │   │   └── workflows
    │   │   │       └── index.ts
    │   ├── tailwind.config.ts
    │   └── tsconfig.json
    ├── assistant-ui
    │   ├── .env.example
    │   ├── .eslintrc.json
    │   ├── .gitignore
    │   ├── README.md
    │   ├── app
    │   │   ├── MastraRuntimeProvider.tsx
    │   │   ├── api
    │   │   │   └── chat
    │   │   │   │   └── route.ts
    │   │   ├── favicon.ico
    │   │   ├── fonts
    │   │   │   ├── GeistMonoVF.woff
    │   │   │   └── GeistVF.woff
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── components
    │   │   └── MyAssistant.tsx
    │   ├── next.config.ts
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── tailwind.config.ts
    │   └── tsconfig.json
    ├── basics
    │   ├── agents
    │   │   ├── agentic-workflows
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── bird-checker
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── hierarchical-multi-agent
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── multi-agent-workflow
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── system-prompt
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── using-a-tool
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   └── voice-capabilities
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── index.ts
    │   │   │   ├── package.json
    │   │   │   └── tsconfig.json
    │   ├── evals
    │   │   ├── answer-relevancy
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── bias
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── completeness
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── content-similarity
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── context-position
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── context-precision
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── context-relevancy
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── contextual-recall
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── custom-eval
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   ├── package.json
    │   │   │   └── src
    │   │   │   │   └── mastra
    │   │   │   │       ├── agents
    │   │   │   │           └── chefAgent.ts
    │   │   │   │       ├── evals
    │   │   │   │           ├── gluten-checker
    │   │   │   │           │   ├── index.ts
    │   │   │   │           │   ├── metricJudge.ts
    │   │   │   │           │   └── prompts.ts
    │   │   │   │           └── index.ts
    │   │   │   │       └── index.ts
    │   │   ├── faithfulness
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── hallucination
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── keyword-coverage
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── prompt-alignment
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── summarization
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── textual-difference
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── tone-consistency
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── toxicity
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   └── word-inclusion
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   ├── rag
    │   │   ├── adjust-chunk-delimiters
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── adjust-chunk-size
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── basic-rag
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── chunk-html
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── chunk-json
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── chunk-markdown
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── chunk-text
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── cleanup-rag
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── cot-rag
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── cot-workflow-rag
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── embed-chunk-array
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── embed-text-chunk
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── embed-text-with-cohere
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── filter-rag
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── graph-rag
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── hybrid-vector-search
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── insert-embedding-in-chroma
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── insert-embedding-in-libsql
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── insert-embedding-in-pgvector
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── insert-embedding-in-pinecone
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── metadata-extraction
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── rerank-rag
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   ├── rerank
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   │   └── retrieve-results
    │   │   │   ├── .env.example
    │   │   │   ├── .gitignore
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── README.md
    │   │   │   ├── index.ts
    │   │   │   └── package.json
    │   └── workflows
    │   │   ├── calling-agent-from-workflow
    │   │       ├── .env.example
    │   │       ├── .gitignore
    │   │       ├── CHANGELOG.md
    │   │       ├── README.md
    │   │       ├── index.ts
    │   │       └── package.json
    │   │   ├── create-workflow
    │   │       ├── .gitignore
    │   │       ├── CHANGELOG.md
    │   │       ├── README.md
    │   │       ├── index.ts
    │   │       └── package.json
    │   │   ├── tool-as-workflow-step
    │   │       ├── .gitignore
    │   │       ├── CHANGELOG.md
    │   │       ├── README.md
    │   │       ├── index.ts
    │   │       └── package.json
    │   │   ├── workflow-with-branching-paths
    │   │       ├── .gitignore
    │   │       ├── CHANGELOG.md
    │   │       ├── README.md
    │   │       ├── index.ts
    │   │       └── package.json
    │   │   ├── workflow-with-cyclical-deps
    │   │       ├── .gitignore
    │   │       ├── CHANGELOG.md
    │   │       ├── README.md
    │   │       ├── index.ts
    │   │       └── package.json
    │   │   ├── workflow-with-parallel-steps
    │   │       ├── .gitignore
    │   │       ├── CHANGELOG.md
    │   │       ├── README.md
    │   │       ├── index.ts
    │   │       └── package.json
    │   │   └── workflow-with-sequential-steps
    │   │       ├── .gitignore
    │   │       ├── CHANGELOG.md
    │   │       ├── README.md
    │   │       ├── index.ts
    │   │       └── package.json
    ├── bird-checker-with-express
    │   ├── .env.example
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   ├── lib
    │   │   │   └── utils.ts
    │   │   └── mastra
    │   │   │   ├── agents
    │   │   │       └── agent.ts
    │   │   │   ├── index.ts
    │   │   │   └── tools
    │   │   │       └── index.ts
    │   └── tsconfig.json
    ├── bird-checker-with-nextjs-and-eval
    │   ├── .env.example
    │   ├── .eslintrc.json
    │   ├── .gitignore
    │   ├── .prettierrc
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── components.json
    │   ├── global.d.ts
    │   ├── next.config.ts
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── public
    │   │   ├── file.svg
    │   │   ├── globe.svg
    │   │   ├── next.svg
    │   │   ├── vercel.svg
    │   │   └── window.svg
    │   ├── src
    │   │   ├── app
    │   │   │   ├── components
    │   │   │   │   ├── bird-checker-response.tsx
    │   │   │   │   └── bird-checker.tsx
    │   │   │   ├── favicon.ico
    │   │   │   ├── fonts
    │   │   │   │   ├── GeistMonoVF.woff
    │   │   │   │   └── GeistVF.woff
    │   │   │   ├── globals.css
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── components
    │   │   │   └── ui
    │   │   │   │   ├── card.tsx
    │   │   │   │   ├── skeleton.tsx
    │   │   │   │   └── sonner.tsx
    │   │   ├── lib
    │   │   │   ├── evals
    │   │   │   │   ├── data.ts
    │   │   │   │   └── index.eval.ts
    │   │   │   ├── mastra
    │   │   │   │   ├── actions.ts
    │   │   │   │   └── system-tools.ts
    │   │   │   └── utils.ts
    │   │   └── mastra
    │   │   │   ├── agents
    │   │   │       └── index.ts
    │   │   │   ├── index.ts
    │   │   │   └── tools
    │   │   │       └── index.ts
    │   ├── tailwind.config.ts
    │   └── tsconfig.json
    ├── bird-checker-with-nextjs
    │   ├── .env.example
    │   ├── .eslintrc.json
    │   ├── .gitignore
    │   ├── .prettierrc
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── components.json
    │   ├── global.d.ts
    │   ├── next.config.ts
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── public
    │   │   ├── file.svg
    │   │   ├── globe.svg
    │   │   ├── next.svg
    │   │   ├── vercel.svg
    │   │   └── window.svg
    │   ├── src
    │   │   ├── app
    │   │   │   ├── components
    │   │   │   │   ├── bird-checker-response.tsx
    │   │   │   │   └── bird-checker.tsx
    │   │   │   ├── favicon.ico
    │   │   │   ├── fonts
    │   │   │   │   ├── GeistMonoVF.woff
    │   │   │   │   └── GeistVF.woff
    │   │   │   ├── globals.css
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── components
    │   │   │   └── ui
    │   │   │   │   ├── card.tsx
    │   │   │   │   ├── skeleton.tsx
    │   │   │   │   └── sonner.tsx
    │   │   ├── lib
    │   │   │   ├── mastra
    │   │   │   │   ├── actions.ts
    │   │   │   │   └── system-tools.ts
    │   │   │   └── utils.ts
    │   │   └── mastra
    │   │   │   ├── agents
    │   │   │       └── index.ts
    │   │   │   ├── index.ts
    │   │   │   └── tools
    │   │   │       └── index.ts
    │   ├── tailwind.config.ts
    │   └── tsconfig.json
    ├── crypto-chatbot
    │   ├── .env.example
    │   ├── .eslintrc.json
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── LICENSE
    │   ├── README.md
    │   ├── ai
    │   │   ├── custom-middleware.ts
    │   │   ├── index.ts
    │   │   ├── models.ts
    │   │   └── prompts.ts
    │   ├── app
    │   │   ├── (auth)
    │   │   │   ├── actions.ts
    │   │   │   ├── api
    │   │   │   │   └── auth
    │   │   │   │   │   └── [...nextauth]
    │   │   │   │   │       └── route.ts
    │   │   │   ├── auth.config.ts
    │   │   │   ├── auth.ts
    │   │   │   ├── login
    │   │   │   │   └── page.tsx
    │   │   │   └── register
    │   │   │   │   └── page.tsx
    │   │   ├── (chat)
    │   │   │   ├── actions.ts
    │   │   │   ├── api
    │   │   │   │   ├── chat
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── document
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── files
    │   │   │   │   │   └── upload
    │   │   │   │   │   │   └── route.ts
    │   │   │   │   ├── history
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── suggestions
    │   │   │   │   │   └── route.ts
    │   │   │   │   └── vote
    │   │   │   │   │   └── route.ts
    │   │   │   ├── chat
    │   │   │   │   └── [id]
    │   │   │   │   │   └── page.tsx
    │   │   │   ├── layout.tsx
    │   │   │   ├── opengraph-image.png
    │   │   │   ├── page.tsx
    │   │   │   └── twitter-image.png
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   └── layout.tsx
    │   ├── components.json
    │   ├── components
    │   │   ├── custom
    │   │   │   ├── app-sidebar.tsx
    │   │   │   ├── auth-form.tsx
    │   │   │   ├── block-stream-handler.tsx
    │   │   │   ├── block.tsx
    │   │   │   ├── chat-header.tsx
    │   │   │   ├── chat.tsx
    │   │   │   ├── diffview.tsx
    │   │   │   ├── document-skeleton.tsx
    │   │   │   ├── document.tsx
    │   │   │   ├── editor.tsx
    │   │   │   ├── icons.tsx
    │   │   │   ├── markdown.tsx
    │   │   │   ├── message-actions.tsx
    │   │   │   ├── message.tsx
    │   │   │   ├── model-selector.tsx
    │   │   │   ├── multimodal-input.tsx
    │   │   │   ├── overview.tsx
    │   │   │   ├── preview-attachment.tsx
    │   │   │   ├── sidebar-history.tsx
    │   │   │   ├── sidebar-toggle.tsx
    │   │   │   ├── sidebar-user-nav.tsx
    │   │   │   ├── sign-out-form.tsx
    │   │   │   ├── submit-button.tsx
    │   │   │   ├── suggestion.tsx
    │   │   │   ├── theme-provider.tsx
    │   │   │   ├── toolbar.tsx
    │   │   │   ├── use-block-stream.tsx
    │   │   │   ├── use-scroll-to-bottom.ts
    │   │   │   ├── version-footer.tsx
    │   │   │   └── weather.tsx
    │   │   └── ui
    │   │   │   ├── alert-dialog.tsx
    │   │   │   ├── button.tsx
    │   │   │   ├── card.tsx
    │   │   │   ├── dropdown-menu.tsx
    │   │   │   ├── input.tsx
    │   │   │   ├── label.tsx
    │   │   │   ├── select.tsx
    │   │   │   ├── separator.tsx
    │   │   │   ├── sheet.tsx
    │   │   │   ├── sidebar.tsx
    │   │   │   ├── skeleton.tsx
    │   │   │   ├── textarea.tsx
    │   │   │   └── tooltip.tsx
    │   ├── db
    │   │   ├── migrate.ts
    │   │   ├── queries.ts
    │   │   └── schema.ts
    │   ├── drizzle.config.ts
    │   ├── envConfig.ts
    │   ├── hooks
    │   │   └── use-mobile.tsx
    │   ├── lib
    │   │   ├── drizzle
    │   │   │   ├── 0000_keen_devos.sql
    │   │   │   ├── 0001_sparkling_blue_marvel.sql
    │   │   │   ├── 0002_wandering_riptide.sql
    │   │   │   └── meta
    │   │   │   │   ├── 0000_snapshot.json
    │   │   │   │   ├── 0001_snapshot.json
    │   │   │   │   ├── 0002_snapshot.json
    │   │   │   │   └── _journal.json
    │   │   ├── editor
    │   │   │   ├── config.ts
    │   │   │   ├── diff.js
    │   │   │   ├── functions.tsx
    │   │   │   ├── react-renderer.tsx
    │   │   │   └── suggestions.tsx
    │   │   └── utils.ts
    │   ├── mastra
    │   │   ├── agents
    │   │   │   └── index.ts
    │   │   ├── index.ts
    │   │   └── tools
    │   │   │   └── index.ts
    │   ├── middleware.ts
    │   ├── next-env.d.ts
    │   ├── next.config.ts
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── prettier.config.cjs
    │   ├── public
    │   │   ├── fonts
    │   │   │   ├── geist-mono.woff2
    │   │   │   └── geist.woff2
    │   │   └── images
    │   │   │   └── demo-thumbnail.png
    │   ├── tailwind.config.ts
    │   ├── tsconfig.json
    │   └── turbo.json
    ├── dane
    │   ├── .env.sample
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── data
    │   │   └── crawl
    │   │   │   └── conventional-commit.json
    │   ├── docker-compose.yaml
    │   ├── package.json
    │   ├── src
    │   │   ├── commands
    │   │   │   ├── changelog.ts
    │   │   │   ├── commit-message.ts
    │   │   │   ├── config.ts
    │   │   │   ├── issue-labeler.ts
    │   │   │   ├── link-checker.ts
    │   │   │   ├── message.ts
    │   │   │   ├── new-contributor-message.ts
    │   │   │   ├── publish-packages.ts
    │   │   │   └── telephone-game.ts
    │   │   ├── config
    │   │   │   └── index.ts
    │   │   ├── index.ts
    │   │   └── mastra
    │   │   │   ├── agents
    │   │   │       ├── index.ts
    │   │   │       ├── memory.ts
    │   │   │       ├── model.ts
    │   │   │       ├── new-contributor.ts
    │   │   │       └── package-publisher.ts
    │   │   │   ├── index.ts
    │   │   │   ├── integrations
    │   │   │       └── index.ts
    │   │   │   ├── tools
    │   │   │       ├── browser.ts
    │   │   │       ├── calendar.ts
    │   │   │       ├── execa.ts
    │   │   │       ├── fs.ts
    │   │   │       ├── image.ts
    │   │   │       ├── mcp.ts
    │   │   │       ├── pdf.ts
    │   │   │       └── pnpm.ts
    │   │   │   └── workflows
    │   │   │       ├── changelog.ts
    │   │   │       ├── chat.ts
    │   │   │       ├── commit-message.ts
    │   │   │       ├── first-contributor.ts
    │   │   │       ├── index.ts
    │   │   │       ├── issue-labeler.ts
    │   │   │       ├── link-checker.ts
    │   │   │       ├── publish-packages.ts
    │   │   │       └── telephone-game.ts
    │   ├── test-files
    │   │   ├── 716a95a5c57a56d32a32b1c9592d6df0.png
    │   │   ├── roman.md
    │   │   ├── sample-1.pdf
    │   │   └── taxes
    │   │   │   ├── 2022.txt
    │   │   │   └── 2023.txt
    │   ├── test
    │   │   └── data
    │   │   │   ├── 05-versions-space.pdf
    │   │   │   └── 05-versions-space.pdf.txt
    │   └── tsconfig.json
    ├── fireworks-r1
    │   ├── .gitignore
    │   ├── package.json
    │   └── src
    │   │   ├── chat.ts
    │   │   └── mastra
    │   │       ├── agents
    │   │           └── index.ts
    │   │       └── index.ts
    ├── image-to-excalidraw
    │   └── README.md
    ├── integrations
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   ├── index.ts
    │   │   └── mastra
    │   │       ├── index.ts
    │   │       └── integrations
    │   │           ├── index.ts
    │   │           └── sample.ts
    ├── mastra.db
    ├── mcp-configuration
    │   ├── .gitignore
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── mastra
    │   │   │   ├── agents
    │   │   │       └── index.ts
    │   │   │   ├── index.ts
    │   │   │   └── tools
    │   │   │       ├── sse.ts
    │   │   │       ├── stock-price.ts
    │   │   │       └── weather.ts
    │   └── tsconfig.json
    ├── memory-todo-agent
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   ├── index.ts
    │   │   └── mastra
    │   │       ├── agents
    │   │           └── index.ts
    │   │       └── index.ts
    ├── memory-with-context
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   ├── chat.ts
    │   │   └── mastra
    │   │       ├── agents
    │   │           └── index.ts
    │   │       └── index.ts
    ├── memory-with-libsql
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   ├── chat.ts
    │   │   ├── index.ts
    │   │   └── mastra
    │   │       ├── agents
    │   │           └── index.ts
    │   │       └── index.ts
    ├── memory-with-pg
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   ├── chat.ts
    │   │   ├── index.ts
    │   │   └── mastra
    │   │       ├── agents
    │   │           └── index.ts
    │   │       └── index.ts
    ├── memory-with-upstash
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── docker-compose.yml
    │   ├── package.json
    │   └── src
    │   │   ├── bubble.ts
    │   │   ├── index.ts
    │   │   └── mastra
    │   │       ├── agents
    │   │           └── index.ts
    │   │       └── index.ts
    ├── notebooklm-clone
    │   └── README.md
    ├── openapi-spec-writer
    │   ├── .env.sample
    │   ├── .eslintrc.json
    │   ├── .gitignore
    │   ├── .prettierrc
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── components.json
    │   ├── mastra.docker-compose.yaml
    │   ├── next.config.ts
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── public
    │   │   ├── file.svg
    │   │   ├── globe.svg
    │   │   ├── grid.svg
    │   │   ├── next.svg
    │   │   ├── vercel.svg
    │   │   └── window.svg
    │   ├── src
    │   │   ├── actions
    │   │   │   └── index.tsx
    │   │   ├── app
    │   │   │   ├── favicon.ico
    │   │   │   ├── fonts
    │   │   │   │   ├── GeistMonoVF.woff
    │   │   │   │   └── GeistVF.woff
    │   │   │   ├── globals.css
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── components
    │   │   │   ├── open-api-spec-generator
    │   │   │   │   └── index.tsx
    │   │   │   └── ui
    │   │   │   │   ├── accordion.tsx
    │   │   │   │   ├── alert.tsx
    │   │   │   │   ├── button.tsx
    │   │   │   │   ├── card.tsx
    │   │   │   │   ├── codeblock.tsx
    │   │   │   │   ├── dialog.tsx
    │   │   │   │   ├── drawer.tsx
    │   │   │   │   ├── icons.tsx
    │   │   │   │   └── select.tsx
    │   │   ├── lib
    │   │   │   ├── hooks
    │   │   │   │   └── useCopyToClipboard.ts
    │   │   │   └── utils.ts
    │   │   └── mastra
    │   │   │   ├── agents
    │   │   │       └── index.ts
    │   │   │   ├── index.ts
    │   │   │   ├── integrations
    │   │   │       └── index.ts
    │   │   │   ├── tools
    │   │   │       └── index.ts
    │   │   │   └── workflows
    │   │   │       └── index.ts
    │   ├── tailwind.config.ts
    │   ├── tsconfig.json
    │   ├── turbo.json
    │   └── types.d.ts
    ├── quick-start
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── mastra
    │   │   │   ├── agents
    │   │   │       └── agent.ts
    │   │   │   ├── index.ts
    │   │   │   └── workflow
    │   │   │       └── index.ts
    │   └── tsconfig.json
    ├── realtime-voice-agent
    │   └── README.md
    ├── stock-price-tool
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── jest.config.ts
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── mastra
    │   │   │   ├── agents
    │   │   │       └── index.ts
    │   │   │   ├── index.ts
    │   │   │   └── tools
    │   │   │       ├── stock-price.ts
    │   │   │       └── tools.test.ts
    │   └── tsconfig.json
    ├── travel-app
    │   ├── .eslintrc.json
    │   ├── .gitignore
    │   ├── .prettierrc
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── components.json
    │   ├── jest.config.js
    │   ├── mastra-pg.docker-compose.yaml
    │   ├── next.config.ts
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── public
    │   │   ├── file.svg
    │   │   ├── fonts
    │   │   │   ├── geist-mono.woff2
    │   │   │   └── geist.woff2
    │   │   ├── globe.svg
    │   │   ├── next.svg
    │   │   ├── placeholder.svg
    │   │   ├── vercel.svg
    │   │   └── window.svg
    │   ├── src
    │   │   ├── app
    │   │   │   ├── actions.ts
    │   │   │   ├── api
    │   │   │   │   └── sync
    │   │   │   │   │   └── route.ts
    │   │   │   ├── favicon.ico
    │   │   │   ├── fonts
    │   │   │   │   ├── GeistMonoVF.woff
    │   │   │   │   └── GeistVF.woff
    │   │   │   ├── globals.css
    │   │   │   ├── layout.tsx
    │   │   │   ├── loading-checklist.tsx
    │   │   │   ├── page.tsx
    │   │   │   ├── travel-form.tsx
    │   │   │   ├── travel-results.tsx
    │   │   │   ├── utils.ts
    │   │   │   └── workflow
    │   │   │   │   └── page.tsx
    │   │   ├── components
    │   │   │   ├── attraction-card.tsx
    │   │   │   ├── attraction-grid.tsx
    │   │   │   ├── code-block.tsx
    │   │   │   ├── examples-dropdown.tsx
    │   │   │   ├── flight-card.tsx
    │   │   │   ├── footer.tsx
    │   │   │   ├── header.tsx
    │   │   │   ├── hotel-card.tsx
    │   │   │   ├── sidebar.tsx
    │   │   │   └── ui
    │   │   │   │   ├── button.tsx
    │   │   │   │   ├── calendar.tsx
    │   │   │   │   ├── card.tsx
    │   │   │   │   ├── checkbox.tsx
    │   │   │   │   ├── dialog.tsx
    │   │   │   │   ├── dropdown-menu.tsx
    │   │   │   │   ├── icons.tsx
    │   │   │   │   ├── input.tsx
    │   │   │   │   ├── label.tsx
    │   │   │   │   ├── popover.tsx
    │   │   │   │   ├── radio-group.tsx
    │   │   │   │   ├── select.tsx
    │   │   │   │   ├── slider.tsx
    │   │   │   │   ├── sonner.tsx
    │   │   │   │   └── textarea.tsx
    │   │   ├── data
    │   │   │   └── city-data.csv
    │   │   ├── lib
    │   │   │   ├── sidebar-context.tsx
    │   │   │   ├── types.ts
    │   │   │   └── utils.ts
    │   │   ├── mastra
    │   │   │   ├── agents
    │   │   │   │   ├── index.ts
    │   │   │   │   └── storage.ts
    │   │   │   ├── index.ts
    │   │   │   ├── integrations
    │   │   │   │   └── Booking.ts
    │   │   │   ├── tools
    │   │   │   │   ├── attraction-tools.test.ts
    │   │   │   │   ├── attraction-tools.ts
    │   │   │   │   ├── flight-tools.test.ts
    │   │   │   │   ├── hotel-tools.test.ts
    │   │   │   │   └── index.ts
    │   │   │   └── workflows
    │   │   │   │   ├── attractions.ts
    │   │   │   │   └── travel-submission.ts
    │   │   └── scripts
    │   │   │   └── generate-data.ts
    │   ├── tailwind.config.ts
    │   ├── tsconfig.json
    │   └── vercel.json
    ├── voice
    │   ├── interactive-story
    │   │   ├── .eslintrc.json
    │   │   ├── .gitignore
    │   │   ├── README.md
    │   │   ├── app
    │   │   │   ├── components
    │   │   │   │   ├── AudioPlayer.tsx
    │   │   │   │   ├── DirectionInput.tsx
    │   │   │   │   ├── StoryForm.tsx
    │   │   │   │   └── StoryManager.tsx
    │   │   │   ├── favicon.ico
    │   │   │   ├── globals.css
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── lib
    │   │   │   └── mastra-client.ts
    │   │   ├── next.config.ts
    │   │   ├── package.json
    │   │   ├── postcss.config.mjs
    │   │   ├── src
    │   │   │   └── mastra
    │   │   │   │   ├── agents
    │   │   │   │       └── index.ts
    │   │   │   │   └── index.ts
    │   │   └── tsconfig.json
    │   └── voice-memo-app
    │   │   ├── .eslintrc.json
    │   │   ├── .gitignore
    │   │   ├── README.md
    │   │   ├── app
    │   │       ├── api
    │   │       │   ├── audio
    │   │       │   │   └── route.ts
    │   │       │   └── summary
    │   │       │   │   └── route.ts
    │   │       ├── globals.css
    │   │       ├── layout.tsx
    │   │       └── page.tsx
    │   │   ├── next.config.ts
    │   │   ├── package.json
    │   │   ├── postcss.config.mjs
    │   │   ├── src
    │   │       └── mastra
    │   │       │   ├── agents
    │   │       │       └── index.ts
    │   │       │   └── index.ts
    │   │   ├── tailwind.config.ts
    │   │   └── tsconfig.json
    ├── weather-agent
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   └── mastra
    │   │       ├── agents
    │   │           └── index.ts
    │   │       ├── index.ts
    │   │       ├── tools
    │   │           └── index.ts
    │   │       └── workflows
    │   │           └── index.ts
    ├── workflow-ai-recruiter
    │   ├── .env.example
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   └── mastra
    │   │       └── index.ts
    ├── workflow-with-inline-steps
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   └── mastra
    │   │       ├── index.ts
    │   │       └── workflows
    │   │           └── index.ts
    ├── workflow-with-memory
    │   ├── .env.example
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   └── mastra
    │   │       ├── agents
    │   │           └── index.ts
    │   │       ├── index.ts
    │   │       ├── tools
    │   │           └── index.ts
    │   │       └── workflows
    │   │           └── index.ts
    ├── workflow-with-separate-steps
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   ├── index.ts
    │   │   └── mastra
    │   │       ├── index.ts
    │   │       └── workflows
    │   │           └── index.ts
    └── yc-directory
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │       └── mastra
    │           ├── agents
    │               └── index.ts
    │           ├── data
    │               └── 2024.ts
    │           ├── index.ts
    │           ├── tests
    │               └── index.ts
    │           └── tools
    │               └── index.ts
├── explorations
    ├── mcp-registry-client
    │   ├── .editorconfig
    │   ├── .gitignore
    │   ├── .prettierrc
    │   ├── README.md
    │   ├── examples
    │   │   ├── basic-usage
    │   │   │   ├── package.json
    │   │   │   └── src
    │   │   │   │   ├── 01-discovery.ts
    │   │   │   │   ├── 02-configuration.ts
    │   │   │   │   ├── 03-validation.ts
    │   │   │   │   └── 04-tool-use.ts
    │   │   └── tui
    │   │   │   ├── .gitattributes
    │   │   │   ├── .gitignore
    │   │   │   ├── .prettierignore
    │   │   │   ├── package.json
    │   │   │   ├── src
    │   │   │       ├── app.tsx
    │   │   │       └── cli.tsx
    │   │   │   └── tsconfig.json
    │   ├── package.json
    │   ├── packages
    │   │   ├── mcp-configuration
    │   │   │   ├── package.json
    │   │   │   ├── pnpm-lock.yaml
    │   │   │   ├── src
    │   │   │   │   ├── index.ts
    │   │   │   │   └── types.ts
    │   │   │   ├── test
    │   │   │   │   └── configuration.test.ts
    │   │   │   ├── tsconfig.json
    │   │   │   └── vitest.config.ts
    │   │   └── mcp-registry
    │   │   │   ├── package.json
    │   │   │   ├── pnpm-lock.yaml
    │   │   │   ├── src
    │   │   │       ├── index.ts
    │   │   │       ├── mock-servers.ts
    │   │   │       ├── registry.ts
    │   │   │       └── server.ts
    │   │   │   ├── test
    │   │   │       ├── registry.test.ts
    │   │   │       └── server.test.ts
    │   │   │   ├── tsconfig.json
    │   │   │   └── vitest.config.ts
    │   ├── pnpm-lock.yaml
    │   └── pnpm-workspace.yaml
    └── prompt
    │   ├── examples.md
    │   ├── index.ts
    │   └── prompt-template.md
├── generated-changelogs
    ├── changelog-2025-02-09.md
    ├── changelog-2025-02-17
    ├── changelog-2025-03-03
    ├── changelog-2025-03-10
    └── changelog-2025-03-19
├── integrations
    ├── composio
    │   ├── CHANGELOG.md
    │   ├── dts.config.mjs
    │   ├── eslint.config.js
    │   ├── jest.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── assets
    │   │   │   └── firecrawl.png
    │   │   ├── index.ts
    │   │   └── types.ts
    │   ├── svgTransform.js
    │   └── tsconfig.json
    ├── firecrawl
    │   ├── .prettierignore
    │   ├── CHANGELOG.md
    │   ├── dts.config.mjs
    │   ├── eslint.config.js
    │   ├── jest.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── Firecrawl.test.ts
    │   │   ├── assets
    │   │   │   └── firecrawl.png
    │   │   ├── client
    │   │   │   ├── index.ts
    │   │   │   ├── schemas.gen.ts
    │   │   │   ├── sdk.gen.ts
    │   │   │   ├── service-comments.ts
    │   │   │   ├── types.gen.ts
    │   │   │   └── zodSchema.ts
    │   │   ├── index.ts
    │   │   ├── toolset.ts
    │   │   └── types.ts
    │   ├── svgTransform.js
    │   └── tsconfig.json
    ├── github
    │   ├── .prettierignore
    │   ├── CHANGELOG.md
    │   ├── dts.config.mjs
    │   ├── eslint.config.js
    │   ├── jest.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── Github.test.ts
    │   │   ├── assets
    │   │   │   └── github.png
    │   │   ├── client
    │   │   │   ├── index.ts
    │   │   │   ├── schemas.gen.ts
    │   │   │   ├── service-comments.ts
    │   │   │   ├── services.gen.ts
    │   │   │   ├── types.gen.ts
    │   │   │   └── zodSchema.ts
    │   │   ├── index.ts
    │   │   ├── toolset.ts
    │   │   └── types.ts
    │   ├── svgTransform.js
    │   └── tsconfig.json
    ├── ragie
    │   ├── CHANGELOG.md
    │   ├── dts.config.ts
    │   ├── jest.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── Ragie.test.ts
    │   │   ├── assets
    │   │   │   └── ragie.png
    │   │   ├── client
    │   │   │   ├── index.ts
    │   │   │   ├── schemas.gen.ts
    │   │   │   ├── service-comments.ts
    │   │   │   ├── services.gen.ts
    │   │   │   ├── types.gen.ts
    │   │   │   └── zodSchema.ts
    │   │   ├── index.ts
    │   │   ├── toolset.ts
    │   │   └── types.ts
    │   ├── svgTransform.js
    │   └── tsconfig.json
    └── stabilityai
    │   ├── .prettierignore
    │   ├── CHANGELOG.md
    │   ├── dts.config.mjs
    │   ├── eslint.config.js
    │   ├── jest.config.js
    │   ├── package.json
    │   ├── src
    │       ├── client
    │       │   ├── index.ts
    │       │   ├── sdk.ts
    │       │   └── zodSchema.ts
    │       ├── index.ts
    │       └── types.ts
    │   ├── svgTransform.js
    │   └── tsconfig.json
├── mastra-homepage.png
├── package.json
├── packages
    ├── _config
    │   ├── CHANGELOG.md
    │   ├── package.json
    │   └── src
    │   │   ├── eslint.js
    │   │   ├── index.js
    │   │   └── prettier.js
    ├── cli
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── mastra-cli.png
    │   ├── mastra-homepage.png
    │   ├── package.json
    │   ├── src
    │   │   ├── analytics
    │   │   │   └── index.ts
    │   │   ├── commands
    │   │   │   ├── build
    │   │   │   │   ├── BuildBundler.ts
    │   │   │   │   └── build.ts
    │   │   │   ├── create
    │   │   │   │   ├── create.ts
    │   │   │   │   └── utils.ts
    │   │   │   ├── deploy
    │   │   │   │   └── index.ts
    │   │   │   ├── dev
    │   │   │   │   ├── DevBundler.ts
    │   │   │   │   └── dev.ts
    │   │   │   ├── init
    │   │   │   │   ├── init.test.ts
    │   │   │   │   ├── init.ts
    │   │   │   │   ├── mcp-docs-server-install.ts
    │   │   │   │   └── utils.ts
    │   │   │   └── utils.ts
    │   │   ├── index.ts
    │   │   ├── playground
    │   │   │   ├── components.json
    │   │   │   ├── eslint.config.js
    │   │   │   ├── index.html
    │   │   │   ├── package.json
    │   │   │   ├── postcss.config.js
    │   │   │   ├── public
    │   │   │   │   ├── mastra-light.ico
    │   │   │   │   └── mastra.svg
    │   │   │   ├── src
    │   │   │   │   ├── App.tsx
    │   │   │   │   ├── assets
    │   │   │   │   │   ├── fonts
    │   │   │   │   │   │   ├── CommitMono.otf
    │   │   │   │   │   │   ├── InterVariable.ttf
    │   │   │   │   │   │   └── TASAExplorerVF.woff2
    │   │   │   │   │   └── react.svg
    │   │   │   │   ├── components
    │   │   │   │   │   ├── Chat.tsx
    │   │   │   │   │   ├── dynamic-form
    │   │   │   │   │   │   ├── default-field-map.tsx
    │   │   │   │   │   │   ├── fields
    │   │   │   │   │   │   │   ├── array-field.tsx
    │   │   │   │   │   │   │   ├── boolean-field.tsx
    │   │   │   │   │   │   │   ├── creatable-field.tsx
    │   │   │   │   │   │   │   ├── date-field.tsx
    │   │   │   │   │   │   │   ├── enum-field.tsx
    │   │   │   │   │   │   │   ├── index.ts
    │   │   │   │   │   │   │   ├── number-field.tsx
    │   │   │   │   │   │   │   ├── object-field.tsx
    │   │   │   │   │   │   │   ├── record-field.tsx
    │   │   │   │   │   │   │   ├── string-field.tsx
    │   │   │   │   │   │   │   └── union-field.tsx
    │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   ├── resolvers
    │   │   │   │   │   │   │   └── index.ts
    │   │   │   │   │   │   ├── schema-resolver.tsx
    │   │   │   │   │   │   ├── schema.tsx
    │   │   │   │   │   │   └── utils.ts
    │   │   │   │   │   ├── layout.tsx
    │   │   │   │   │   ├── syntax-highlighter.tsx
    │   │   │   │   │   └── ui
    │   │   │   │   │   │   ├── agent-logo.tsx
    │   │   │   │   │   │   ├── alert-dialog.tsx
    │   │   │   │   │   │   ├── app-sidebar.tsx
    │   │   │   │   │   │   ├── badge.tsx
    │   │   │   │   │   │   ├── breadcrumbs.tsx
    │   │   │   │   │   │   ├── button.tsx
    │   │   │   │   │   │   ├── calendar.tsx
    │   │   │   │   │   │   ├── chat-message.tsx
    │   │   │   │   │   │   ├── chat.tsx
    │   │   │   │   │   │   ├── checkbox.tsx
    │   │   │   │   │   │   ├── code-block.tsx
    │   │   │   │   │   │   ├── code-display.tsx
    │   │   │   │   │   │   ├── collapsible.tsx
    │   │   │   │   │   │   ├── command.tsx
    │   │   │   │   │   │   ├── copy-button.tsx
    │   │   │   │   │   │   ├── copyable-content.tsx
    │   │   │   │   │   │   ├── date-picker.tsx
    │   │   │   │   │   │   ├── dropdown-menu.tsx
    │   │   │   │   │   │   ├── file-preview.tsx
    │   │   │   │   │   │   ├── form.tsx
    │   │   │   │   │   │   ├── formatted-date.tsx
    │   │   │   │   │   │   ├── header.tsx
    │   │   │   │   │   │   ├── input.tsx
    │   │   │   │   │   │   ├── label.tsx
    │   │   │   │   │   │   ├── markdown-renderer.tsx
    │   │   │   │   │   │   ├── mastra.tsx
    │   │   │   │   │   │   ├── message-input.tsx
    │   │   │   │   │   │   ├── message-list.tsx
    │   │   │   │   │   │   ├── multi-select.tsx
    │   │   │   │   │   │   ├── popover.tsx
    │   │   │   │   │   │   ├── progress.tsx
    │   │   │   │   │   │   ├── prompt-suggestions.tsx
    │   │   │   │   │   │   ├── radio-group.tsx
    │   │   │   │   │   │   ├── score-indicator.tsx
    │   │   │   │   │   │   ├── scroll-area.tsx
    │   │   │   │   │   │   ├── select.tsx
    │   │   │   │   │   │   ├── separator.tsx
    │   │   │   │   │   │   ├── sheet.tsx
    │   │   │   │   │   │   ├── sidebar.tsx
    │   │   │   │   │   │   ├── skeleton.tsx
    │   │   │   │   │   │   ├── sonner.tsx
    │   │   │   │   │   │   ├── switch.tsx
    │   │   │   │   │   │   ├── syntax-highlighter.ts
    │   │   │   │   │   │   ├── table.tsx
    │   │   │   │   │   │   ├── tabs.tsx
    │   │   │   │   │   │   ├── text.tsx
    │   │   │   │   │   │   ├── textarea.tsx
    │   │   │   │   │   │   ├── theme-provider.tsx
    │   │   │   │   │   │   ├── tooltip.tsx
    │   │   │   │   │   │   └── typing-indicator.tsx
    │   │   │   │   ├── domains
    │   │   │   │   │   ├── agents
    │   │   │   │   │   │   ├── agent-details.tsx
    │   │   │   │   │   │   ├── agent-endpoints.tsx
    │   │   │   │   │   │   ├── agent-header.tsx
    │   │   │   │   │   │   ├── agent-information.tsx
    │   │   │   │   │   │   ├── agent-instructions-enhancer.tsx
    │   │   │   │   │   │   ├── agent-layout.tsx
    │   │   │   │   │   │   ├── agent-logs.tsx
    │   │   │   │   │   │   ├── agent-sidebar.tsx
    │   │   │   │   │   │   ├── components
    │   │   │   │   │   │   │   ├── current-instructions.tsx
    │   │   │   │   │   │   │   ├── version-actions.tsx
    │   │   │   │   │   │   │   ├── version-history.tsx
    │   │   │   │   │   │   │   └── version-item.tsx
    │   │   │   │   │   │   └── hooks
    │   │   │   │   │   │   │   ├── use-prompt-enhancer.ts
    │   │   │   │   │   │   │   └── use-prompt-versions.ts
    │   │   │   │   │   ├── networks
    │   │   │   │   │   │   ├── network-agents.tsx
    │   │   │   │   │   │   ├── network-details.tsx
    │   │   │   │   │   │   ├── network-endpoints.tsx
    │   │   │   │   │   │   ├── network-header.tsx
    │   │   │   │   │   │   ├── network-information.tsx
    │   │   │   │   │   │   └── network-layout.tsx
    │   │   │   │   │   └── workflows
    │   │   │   │   │   │   ├── test-data.ts
    │   │   │   │   │   │   ├── workflow-endpoints.tsx
    │   │   │   │   │   │   ├── workflow-header.tsx
    │   │   │   │   │   │   ├── workflow-information.tsx
    │   │   │   │   │   │   ├── workflow-layout.tsx
    │   │   │   │   │   │   └── workflow-logs.tsx
    │   │   │   │   ├── hooks
    │   │   │   │   │   ├── use-agents.ts
    │   │   │   │   │   ├── use-all-tools.ts
    │   │   │   │   │   ├── use-auto-scroll.ts
    │   │   │   │   │   ├── use-autosize-textarea.ts
    │   │   │   │   │   ├── use-copy-to-clipboard.ts
    │   │   │   │   │   ├── use-evals.ts
    │   │   │   │   │   ├── use-execute-agent-tool.ts
    │   │   │   │   │   ├── use-execute-tool.ts
    │   │   │   │   │   ├── use-logs.ts
    │   │   │   │   │   ├── use-memory.ts
    │   │   │   │   │   ├── use-networks.ts
    │   │   │   │   │   ├── use-resize-column.ts
    │   │   │   │   │   └── use-workflows.ts
    │   │   │   │   ├── index.css
    │   │   │   │   ├── lib
    │   │   │   │   │   ├── object.ts
    │   │   │   │   │   ├── polls.ts
    │   │   │   │   │   ├── string.ts
    │   │   │   │   │   └── utils.ts
    │   │   │   │   ├── main.tsx
    │   │   │   │   ├── pages
    │   │   │   │   │   ├── agents
    │   │   │   │   │   │   ├── agent
    │   │   │   │   │   │   │   ├── evals.tsx
    │   │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   │   └── traces.tsx
    │   │   │   │   │   │   └── index.tsx
    │   │   │   │   │   ├── networks
    │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   └── network
    │   │   │   │   │   │   │   └── index.tsx
    │   │   │   │   │   ├── tools
    │   │   │   │   │   │   ├── agent-tool
    │   │   │   │   │   │   │   └── index.tsx
    │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   ├── tool-executor.tsx
    │   │   │   │   │   │   └── tool
    │   │   │   │   │   │   │   └── index.tsx
    │   │   │   │   │   └── workflows
    │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   └── workflow
    │   │   │   │   │   │       ├── index.tsx
    │   │   │   │   │   │       └── traces.tsx
    │   │   │   │   ├── types.ts
    │   │   │   │   └── vite-env.d.ts
    │   │   │   ├── tailwind.config.ts
    │   │   │   ├── tsconfig.app.json
    │   │   │   ├── tsconfig.json
    │   │   │   ├── tsconfig.node.json
    │   │   │   └── vite.config.ts
    │   │   ├── services
    │   │   │   ├── service.deps.ts
    │   │   │   ├── service.docker.ts
    │   │   │   ├── service.env.ts
    │   │   │   ├── service.file.ts
    │   │   │   └── service.fileEnv.ts
    │   │   ├── starter-files
    │   │   │   ├── config.ts
    │   │   │   ├── mastra-pg.docker-compose.yaml
    │   │   │   └── tools.ts
    │   │   ├── templates
    │   │   │   └── dev.entry.js
    │   │   └── utils
    │   │   │   ├── find-api-keys.ts
    │   │   │   ├── get-engine-path.ts
    │   │   │   ├── get-env.ts
    │   │   │   ├── logger.ts
    │   │   │   └── string.ts
    │   ├── tsconfig.json
    │   ├── tsup.config.js
    │   ├── turbo.json
    │   └── vitest.config.ts
    ├── core
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── docker-compose.yaml
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── action
    │   │   │   └── index.ts
    │   │   ├── agent
    │   │   │   ├── agent-tracing.test.ts
    │   │   │   ├── agent.test.ts
    │   │   │   ├── index.ts
    │   │   │   ├── index.warning.ts
    │   │   │   └── types.ts
    │   │   ├── base.ts
    │   │   ├── base.warning.ts
    │   │   ├── bundler
    │   │   │   ├── index.ts
    │   │   │   └── index.warning.ts
    │   │   ├── deployer
    │   │   │   ├── index.ts
    │   │   │   └── index.warning.ts
    │   │   ├── eval
    │   │   │   ├── evaluation.ts
    │   │   │   ├── index.ts
    │   │   │   ├── metric.ts
    │   │   │   └── types.ts
    │   │   ├── hooks
    │   │   │   ├── index.test.ts
    │   │   │   ├── index.ts
    │   │   │   └── mitt.ts
    │   │   ├── index.ts
    │   │   ├── integration
    │   │   │   ├── index.ts
    │   │   │   ├── index.warning.ts
    │   │   │   ├── integration.ts
    │   │   │   ├── integration.warning.ts
    │   │   │   ├── openapi-toolset.mock.ts
    │   │   │   ├── openapi-toolset.test.ts
    │   │   │   ├── openapi-toolset.ts
    │   │   │   └── openapi-toolset.warning.ts
    │   │   ├── llm
    │   │   │   ├── index.ts
    │   │   │   └── model
    │   │   │   │   ├── base.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── mock.ts
    │   │   │   │   ├── model.test.ts
    │   │   │   │   └── model.ts
    │   │   ├── logger
    │   │   │   ├── index.ts
    │   │   │   ├── index.warning.ts
    │   │   │   └── logger.test.ts
    │   │   ├── mastra
    │   │   │   └── index.ts
    │   │   ├── memory
    │   │   │   ├── index.ts
    │   │   │   ├── index.warning.ts
    │   │   │   ├── memory.ts
    │   │   │   └── types.ts
    │   │   ├── network
    │   │   │   ├── index.ts
    │   │   │   ├── network.ts
    │   │   │   └── types.ts
    │   │   ├── relevance
    │   │   │   ├── cohere
    │   │   │   │   └── index.ts
    │   │   │   ├── index.ts
    │   │   │   ├── mastra-agent
    │   │   │   │   └── index.ts
    │   │   │   └── relevance-score-provider.ts
    │   │   ├── run
    │   │   │   └── types.ts
    │   │   ├── storage
    │   │   │   ├── README.md
    │   │   │   ├── base.ts
    │   │   │   ├── base.warning.ts
    │   │   │   ├── bundle.test.ts
    │   │   │   ├── constants.ts
    │   │   │   ├── default-proxy-storage.test.ts
    │   │   │   ├── default-proxy-storage.ts
    │   │   │   ├── index.ts
    │   │   │   ├── index.warning.ts
    │   │   │   ├── libsql
    │   │   │   │   ├── index.test.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── index.warning.ts
    │   │   │   │   └── url.test.ts
    │   │   │   ├── test-utils
    │   │   │   │   └── storage.ts
    │   │   │   └── types.ts
    │   │   ├── telemetry
    │   │   │   ├── index.ts
    │   │   │   ├── otel-vendor.ts
    │   │   │   ├── storage-exporter.ts
    │   │   │   ├── telemetry.decorators.ts
    │   │   │   ├── telemetry.ts
    │   │   │   ├── types.ts
    │   │   │   └── utility.ts
    │   │   ├── tools
    │   │   │   ├── index.ts
    │   │   │   ├── index.warning.ts
    │   │   │   ├── tool.ts
    │   │   │   ├── tools.test.ts
    │   │   │   └── types.ts
    │   │   ├── tts
    │   │   │   ├── index.ts
    │   │   │   └── index.warning.ts
    │   │   ├── utils.test.ts
    │   │   ├── utils.ts
    │   │   ├── vector
    │   │   │   ├── fastembed.ts
    │   │   │   ├── filter
    │   │   │   │   ├── base.ts
    │   │   │   │   └── index.ts
    │   │   │   ├── index.ts
    │   │   │   ├── index.warning.ts
    │   │   │   ├── libsql
    │   │   │   │   ├── filter.test.ts
    │   │   │   │   ├── filter.ts
    │   │   │   │   ├── index.test.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── sql-builder.ts
    │   │   │   │   └── url.test.ts
    │   │   │   ├── types.ts
    │   │   │   └── vector.ts
    │   │   ├── voice
    │   │   │   ├── composite-voice.ts
    │   │   │   ├── index.ts
    │   │   │   └── voice.ts
    │   │   └── workflows
    │   │   │   ├── index.ts
    │   │   │   ├── index.warning.ts
    │   │   │   ├── machine.ts
    │   │   │   ├── memory-vector.db
    │   │   │   ├── step.ts
    │   │   │   ├── types.ts
    │   │   │   ├── utils.ts
    │   │   │   ├── workflow-instance.ts
    │   │   │   ├── workflow.test.ts
    │   │   │   ├── workflow.ts
    │   │   │   └── workflow.warning.ts
    │   ├── tools
    │   │   └── treeshake-decorators.js
    │   ├── tsconfig.json
    │   ├── tsup.config.ts
    │   ├── turbo.json
    │   └── vitest.config.ts
    ├── create-mastra
    │   ├── .gitignore
    │   ├── .prettierignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── rollup.config.js
    │   ├── src
    │   │   ├── index.ts
    │   │   └── utils.ts
    │   └── tsconfig.json
    ├── deployer
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── global.d.ts
    │   ├── package.json
    │   ├── public
    │   │   └── templates
    │   │   │   └── instrumentation-template.js
    │   ├── src
    │   │   ├── build
    │   │   │   ├── __fixtures__
    │   │   │   │   └── no-telemetry.js
    │   │   │   ├── __snapshots__
    │   │   │   │   ├── deployer.test.ts.snap
    │   │   │   │   └── telemetry.test.ts.snap
    │   │   │   ├── analyze.ts
    │   │   │   ├── babel
    │   │   │   │   ├── get-deployer.ts
    │   │   │   │   ├── get-telemetry-config.ts
    │   │   │   │   ├── remove-deployer.ts
    │   │   │   │   └── remove-non-referenced-nodes.ts
    │   │   │   ├── bundle.ts
    │   │   │   ├── bundler.ts
    │   │   │   ├── deployer.test.ts
    │   │   │   ├── deployer.ts
    │   │   │   ├── deps.ts
    │   │   │   ├── env.ts
    │   │   │   ├── fs.ts
    │   │   │   ├── index.ts
    │   │   │   ├── isNodeBuiltin.ts
    │   │   │   ├── plugins
    │   │   │   │   ├── __fixtures__
    │   │   │   │   │   ├── basic-with-const.js
    │   │   │   │   │   ├── basic-with-function.js
    │   │   │   │   │   ├── basic-with-import.js
    │   │   │   │   │   ├── basic.js
    │   │   │   │   │   ├── empty-mastra.js
    │   │   │   │   │   └── mastra-with-extra-code.js
    │   │   │   │   ├── __snapshots__
    │   │   │   │   │   └── remove-deployer.test.ts.snap
    │   │   │   │   ├── hono-alias.ts
    │   │   │   │   ├── pino.ts
    │   │   │   │   ├── remove-deployer.test.ts
    │   │   │   │   ├── remove-deployer.ts
    │   │   │   │   ├── remove-unused-references.ts
    │   │   │   │   └── tsconfig-paths.ts
    │   │   │   ├── telemetry.test.ts
    │   │   │   ├── telemetry.ts
    │   │   │   ├── utils.ts
    │   │   │   └── watcher.ts
    │   │   ├── bundler
    │   │   │   └── index.ts
    │   │   ├── deploy
    │   │   │   ├── base.ts
    │   │   │   ├── index.ts
    │   │   │   └── log.ts
    │   │   ├── index.ts
    │   │   ├── server
    │   │   │   ├── handlers
    │   │   │   │   ├── agents.ts
    │   │   │   │   ├── client.ts
    │   │   │   │   ├── error.ts
    │   │   │   │   ├── logs.ts
    │   │   │   │   ├── memory.ts
    │   │   │   │   ├── network.ts
    │   │   │   │   ├── prompt.ts
    │   │   │   │   ├── root.ts
    │   │   │   │   ├── telemetry.ts
    │   │   │   │   ├── tools.ts
    │   │   │   │   ├── utils.ts
    │   │   │   │   ├── vector.ts
    │   │   │   │   ├── voice.ts
    │   │   │   │   └── workflows.ts
    │   │   │   ├── index.ts
    │   │   │   ├── openapi.json
    │   │   │   ├── openapi.script.js
    │   │   │   ├── types.ts
    │   │   │   └── welcome.ts
    │   │   └── validator
    │   │   │   ├── custom-resolver.ts
    │   │   │   ├── loader.ts
    │   │   │   └── validate.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── evals
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── attachListeners.ts
    │   │   ├── constants.ts
    │   │   ├── evaluation.test.ts
    │   │   ├── evaluation.ts
    │   │   ├── index.ts
    │   │   └── metrics
    │   │   │   ├── index.ts
    │   │   │   ├── judge
    │   │   │       └── index.ts
    │   │   │   ├── llm
    │   │   │       ├── answer-relevancy
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── bias
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── context-position
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── context-precision
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── context-relevancy
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── contextual-recall
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── faithfulness
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── hallucination
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── index.ts
    │   │   │       ├── prompt-alignment
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── summarization
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── toxicity
    │   │   │       │   ├── index.test.ts
    │   │   │       │   ├── index.ts
    │   │   │       │   ├── metricJudge.ts
    │   │   │       │   └── prompts.ts
    │   │   │       ├── types.ts
    │   │   │       └── utils.ts
    │   │   │   └── nlp
    │   │   │       ├── completeness
    │   │   │           ├── index.test.ts
    │   │   │           └── index.ts
    │   │   │       ├── content-similarity
    │   │   │           ├── index.test.ts
    │   │   │           └── index.ts
    │   │   │       ├── index.ts
    │   │   │       ├── keyword-coverage
    │   │   │           ├── index.test.ts
    │   │   │           └── index.ts
    │   │   │       ├── textual-difference
    │   │   │           ├── index.test.ts
    │   │   │           └── index.ts
    │   │   │       └── tone
    │   │   │           ├── index.test.ts
    │   │   │           └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── loggers
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── file
    │   │   │   ├── fixtures
    │   │   │   │   └── test.log
    │   │   │   ├── index.test.ts
    │   │   │   └── index.ts
    │   │   ├── index.ts
    │   │   └── upstash
    │   │   │   ├── index.test.ts
    │   │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── mcp-docs-server
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   ├── prepare-docs
    │   │   │   ├── code-examples.ts
    │   │   │   ├── copy-raw.ts
    │   │   │   ├── package-changes.ts
    │   │   │   └── prepare.ts
    │   │   ├── stdio.ts
    │   │   ├── tools
    │   │   │   ├── __fixtures__
    │   │   │   │   ├── blog-list-raw.txt
    │   │   │   │   └── blog-post-raw.txt
    │   │   │   ├── __tests__
    │   │   │   │   ├── blog.test.ts
    │   │   │   │   ├── changes.test.ts
    │   │   │   │   ├── docs.test.ts
    │   │   │   │   ├── examples.test.ts
    │   │   │   │   └── test-setup.ts
    │   │   │   ├── blog.ts
    │   │   │   ├── changes.ts
    │   │   │   ├── docs.ts
    │   │   │   └── examples.ts
    │   │   └── utils.ts
    │   ├── tsconfig.json
    │   ├── turbo.json
    │   └── vitest.config.ts
    ├── mcp
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── __fixtures__
    │   │   │   ├── stock-price.ts
    │   │   │   └── weather.ts
    │   │   ├── client.test.ts
    │   │   ├── client.ts
    │   │   ├── configuration.test.ts
    │   │   ├── configuration.ts
    │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── memory
    │   ├── .gitignore
    │   ├── .npmignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── integration-tests
    │   │   ├── .env.test
    │   │   ├── .gitignore
    │   │   ├── docker-compose.yml
    │   │   ├── package.json
    │   │   ├── src
    │   │   │   ├── reusable-tests.ts
    │   │   │   ├── with-libsql-storage.test.ts
    │   │   │   ├── with-pg-storage.test.ts
    │   │   │   ├── with-upstash-storage.test.ts
    │   │   │   └── working-memory.test.ts
    │   │   ├── tsconfig.json
    │   │   └── vitest.config.ts
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── tools
    │   │   │   └── working-memory.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── playground-ui
    │   ├── CHANGELOG.md
    │   ├── components.json
    │   ├── index.html
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── src
    │   │   ├── components
    │   │   │   ├── assistant-ui
    │   │   │   │   ├── assistant-message.tsx
    │   │   │   │   ├── assistant-modal.tsx
    │   │   │   │   ├── assistant-sidebar.tsx
    │   │   │   │   ├── attachment.tsx
    │   │   │   │   ├── markdown-text.tsx
    │   │   │   │   ├── syntax-highlighter.tsx
    │   │   │   │   ├── thread-list.tsx
    │   │   │   │   ├── thread.tsx
    │   │   │   │   ├── tooltip-icon-button.tsx
    │   │   │   │   └── user-message.tsx
    │   │   │   ├── dynamic-form
    │   │   │   │   ├── default-field-map.tsx
    │   │   │   │   ├── fields
    │   │   │   │   │   ├── array-field.tsx
    │   │   │   │   │   ├── boolean-field.tsx
    │   │   │   │   │   ├── creatable-field.tsx
    │   │   │   │   │   ├── date-field.tsx
    │   │   │   │   │   ├── enum-field.tsx
    │   │   │   │   │   ├── index.ts
    │   │   │   │   │   ├── number-field.tsx
    │   │   │   │   │   ├── object-field.tsx
    │   │   │   │   │   ├── record-field.tsx
    │   │   │   │   │   ├── string-field.tsx
    │   │   │   │   │   └── union-field.tsx
    │   │   │   │   ├── index.tsx
    │   │   │   │   ├── resolvers
    │   │   │   │   │   └── index.ts
    │   │   │   │   ├── schema-resolver.tsx
    │   │   │   │   ├── schema.tsx
    │   │   │   │   └── utils.ts
    │   │   │   ├── icons
    │   │   │   │   ├── agent-icon.tsx
    │   │   │   │   └── automation-icon.tsx
    │   │   │   ├── syntax-highlighter.tsx
    │   │   │   └── ui
    │   │   │   │   ├── avatar.tsx
    │   │   │   │   ├── badge.tsx
    │   │   │   │   ├── button.tsx
    │   │   │   │   ├── calendar.tsx
    │   │   │   │   ├── code-block.tsx
    │   │   │   │   ├── collapsible.tsx
    │   │   │   │   ├── command.tsx
    │   │   │   │   ├── copy-button.tsx
    │   │   │   │   ├── copyable-content.tsx
    │   │   │   │   ├── data-table.tsx
    │   │   │   │   ├── date-picker.tsx
    │   │   │   │   ├── dialog.tsx
    │   │   │   │   ├── formatted-date.tsx
    │   │   │   │   ├── input.tsx
    │   │   │   │   ├── label.tsx
    │   │   │   │   ├── markdown-renderer.tsx
    │   │   │   │   ├── popover.tsx
    │   │   │   │   ├── resizable.tsx
    │   │   │   │   ├── score-indicator.tsx
    │   │   │   │   ├── scroll-area.tsx
    │   │   │   │   ├── select.tsx
    │   │   │   │   ├── skeleton.tsx
    │   │   │   │   ├── switch.tsx
    │   │   │   │   ├── syntax-highlighter.tsx
    │   │   │   │   ├── table.tsx
    │   │   │   │   ├── tabs.tsx
    │   │   │   │   ├── text.tsx
    │   │   │   │   ├── textarea.tsx
    │   │   │   │   └── tooltip.tsx
    │   │   ├── domains
    │   │   │   ├── agents
    │   │   │   │   ├── agent
    │   │   │   │   │   ├── agent-chat.tsx
    │   │   │   │   │   ├── agent-evals.tsx
    │   │   │   │   │   └── agent-traces.tsx
    │   │   │   │   ├── agents-table.tsx
    │   │   │   │   └── index.tsx
    │   │   │   ├── networks
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── network-chat.tsx
    │   │   │   │   └── tool-fallback.tsx
    │   │   │   ├── resizable-panel.tsx
    │   │   │   ├── traces
    │   │   │   │   ├── context
    │   │   │   │   │   └── trace-context.tsx
    │   │   │   │   ├── index.tsx
    │   │   │   │   ├── mock-data.ts
    │   │   │   │   ├── trace-details.tsx
    │   │   │   │   ├── trace-span-details.tsx
    │   │   │   │   ├── trace-span-view.tsx
    │   │   │   │   ├── trace-tree-view.tsx
    │   │   │   │   ├── types.ts
    │   │   │   │   └── utils.ts
    │   │   │   └── workflows
    │   │   │   │   ├── context
    │   │   │   │       └── workflow-run-context.tsx
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── workflow
    │   │   │   │       ├── utils.ts
    │   │   │   │       ├── workflow-after-node.tsx
    │   │   │   │       ├── workflow-condition-node.tsx
    │   │   │   │       ├── workflow-default-node.tsx
    │   │   │   │       ├── workflow-graph-inner.tsx
    │   │   │   │       ├── workflow-graph.tsx
    │   │   │   │       ├── workflow-loop-result-node.tsx
    │   │   │   │       ├── workflow-traces.tsx
    │   │   │   │       └── workflow-trigger.tsx
    │   │   │   │   └── workflows-table.tsx
    │   │   ├── hooks
    │   │   │   ├── use-copy-to-clipboard.ts
    │   │   │   ├── use-evals.tsx
    │   │   │   ├── use-resize-column.ts
    │   │   │   ├── use-traces.tsx
    │   │   │   └── use-workflows.ts
    │   │   ├── index.css
    │   │   ├── index.ts
    │   │   ├── lib
    │   │   │   ├── object.ts
    │   │   │   ├── pagination
    │   │   │   │   └── types.ts
    │   │   │   ├── polls.ts
    │   │   │   ├── string.ts
    │   │   │   └── utils.ts
    │   │   ├── main.tsx
    │   │   ├── services
    │   │   │   ├── mastra-runtime-provider.tsx
    │   │   │   └── network-runtime-provider.tsx
    │   │   └── types.ts
    │   ├── tailwind.config.js
    │   ├── tsconfig.app.json
    │   ├── tsconfig.json
    │   └── vite.config.ts
    └── rag
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── docker-compose.yaml
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │       ├── document
    │       │   ├── document.test.ts
    │       │   ├── document.ts
    │       │   ├── index.ts
    │       │   ├── transformers
    │       │   │   ├── character.ts
    │       │   │   ├── html.ts
    │       │   │   ├── json.ts
    │       │   │   ├── latex.ts
    │       │   │   ├── markdown.ts
    │       │   │   ├── text.ts
    │       │   │   ├── token.ts
    │       │   │   └── transformer.ts
    │       │   └── types.ts
    │       ├── graph-rag
    │       │   ├── index.test.ts
    │       │   └── index.ts
    │       ├── index.ts
    │       ├── rerank
    │       │   ├── index.test.ts
    │       │   └── index.ts
    │       ├── tools
    │       │   ├── document-chunker.ts
    │       │   ├── graph-rag.ts
    │       │   ├── index.ts
    │       │   ├── vector-query.test.ts
    │       │   └── vector-query.ts
    │       └── utils
    │       │   ├── default-settings.ts
    │       │   ├── index.ts
    │       │   ├── vector-prompts.ts
    │       │   └── vector-search.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── renovate.json
├── speech
    ├── azure
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.test.ts
    │   │   ├── index.ts
    │   │   └── voices.ts
    │   └── tsconfig.json
    ├── deepgram
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── voices.ts
    │   └── tsconfig.json
    ├── elevenlabs
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   └── index.ts
    │   └── tsconfig.json
    ├── google
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── voices.ts
    │   └── tsconfig.json
    ├── ibm
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.test.ts
    │   │   ├── index.ts
    │   │   └── voices.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── murf
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── voices.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── openai
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   └── index.ts
    │   └── tsconfig.json
    ├── playai
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   └── index.ts
    │   └── tsconfig.json
    ├── replicate
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.test.ts
    │   │   └── index.ts
    │   ├── test-outputs
    │   │   └── test-audio.mp3
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    └── speechify
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │       ├── index.ts
    │       └── voices.ts
    │   └── tsconfig.json
├── stores
    ├── astra
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── vector
    │   │   │   ├── filter.test.ts
    │   │   │   ├── filter.ts
    │   │   │   ├── index.test.ts
    │   │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── chroma
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── docker-compose.yaml
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── vector
    │   │   │   ├── filter.test.ts
    │   │   │   ├── filter.ts
    │   │   │   ├── index.test.ts
    │   │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── pg
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── docker-compose.perf.yaml
    │   ├── docker-compose.yaml
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   ├── storage
    │   │   │   ├── index.test.ts
    │   │   │   └── index.ts
    │   │   └── vector
    │   │   │   ├── filter.test.ts
    │   │   │   ├── filter.ts
    │   │   │   ├── index.test.ts
    │   │   │   ├── index.ts
    │   │   │   ├── performance.helpers.ts
    │   │   │   ├── sql-builder.ts
    │   │   │   ├── types.ts
    │   │   │   └── vector.performance.test.ts
    │   ├── tsconfig.json
    │   ├── vitest.config.ts
    │   └── vitest.perf.config.ts
    ├── pinecone
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── vector
    │   │   │   ├── filter.test.ts
    │   │   │   ├── filter.ts
    │   │   │   ├── index.test.ts
    │   │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── qdrant
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── docker-compose.yaml
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── vector
    │   │   │   ├── filter.test.ts
    │   │   │   ├── filter.ts
    │   │   │   ├── index.test.ts
    │   │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── turbopuffer
    │   ├── .gitignore
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   └── vector
    │   │   │   ├── filter.test.ts
    │   │   │   ├── filter.ts
    │   │   │   ├── index.test.ts
    │   │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    ├── upstash
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── docker-compose.yaml
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │   │   ├── index.ts
    │   │   ├── storage
    │   │   │   ├── index.ts
    │   │   │   └── upstash.test.ts
    │   │   └── vector
    │   │   │   ├── filter.test.ts
    │   │   │   ├── filter.ts
    │   │   │   ├── index.test.ts
    │   │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
    └── vectorize
    │   ├── CHANGELOG.md
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── src
    │       ├── index.ts
    │       └── vector
    │       │   ├── filter.test.ts
    │       │   ├── filter.ts
    │       │   ├── index.test.ts
    │       │   └── index.ts
    │   ├── tsconfig.json
    │   └── vitest.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── turbo.json
├── vitest.config.ts
└── voice
    ├── azure
        ├── README.md
        ├── eslint.config.js
        ├── package.json
        ├── src
        │   ├── index.test.ts
        │   ├── index.ts
        │   └── voices.ts
        ├── tsconfig.json
        └── vitest.config.ts
    ├── cloudflare
        ├── README.md
        ├── __fixtures__
        │   └── voice-test.m4a
        ├── eslint.config.js
        ├── package.json
        ├── src
        │   ├── index.test.ts
        │   └── index.ts
        ├── tsconfig.json
        └── vitest.config.ts
    ├── deepgram
        ├── CHANGELOG.md
        ├── README.md
        ├── __fixtures__
        │   └── voice-test.m4a
        ├── eslint.config.js
        ├── package.json
        ├── src
        │   ├── index.test.ts
        │   ├── index.ts
        │   └── voices.ts
        ├── tsconfig.json
        └── vitest.config.ts
    ├── elevenlabs
        ├── CHANGELOG.md
        ├── README.md
        ├── eslint.config.js
        ├── package.json
        ├── src
        │   ├── index.test.ts
        │   └── index.ts
        ├── tsconfig.json
        └── vitest.config.ts
    ├── google
        ├── CHANGELOG.md
        ├── README.md
        ├── eslint.config.js
        ├── package.json
        ├── src
        │   ├── index.test.ts
        │   └── index.ts
        ├── tsconfig.json
        └── vitest.config.ts
    ├── murf
        ├── CHANGELOG.md
        ├── README.md
        ├── eslint.config.js
        ├── package.json
        ├── src
        │   ├── index.test.ts
        │   ├── index.ts
        │   └── voices.ts
        ├── tsconfig.json
        └── vitest.config.ts
    ├── openai-realtime-api
        ├── CHANGELOG.md
        ├── README.md
        ├── eslint.config.js
        ├── package.json
        ├── src
        │   ├── index.test.ts
        │   ├── index.ts
        │   └── utils.ts
        ├── tsconfig.json
        └── vitest.config.ts
    ├── openai
        ├── CHANGELOG.md
        ├── README.md
        ├── __fixtures__
        │   └── voice-test.m4a
        ├── eslint.config.js
        ├── package.json
        ├── src
        │   ├── index.test.ts
        │   └── index.ts
        ├── test-outputs
        │   ├── speech-stream-input.mp3
        │   └── speech-test-params.mp3
        ├── tsconfig.json
        └── vitest.config.ts
    ├── playai
        ├── CHANGELOG.md
        ├── README.md
        ├── eslint.config.js
        ├── package.json
        ├── src
        │   ├── index.test.ts
        │   └── index.ts
        ├── tsconfig.json
        └── vitest.config.ts
    ├── sarvam
        ├── CHANGELOG.md
        ├── README.md
        ├── __fixtures__
        │   └── voice-test.m4a
        ├── eslint.config.js
        ├── package.json
        ├── src
        │   ├── index.test.ts
        │   ├── index.ts
        │   └── voices.ts
        ├── tsconfig.json
        └── vitest.config.ts
    └── speechify
        ├── CHANGELOG.md
        ├── README.md
        ├── eslint.config.js
        ├── package.json
        ├── src
            ├── index.test.ts
            ├── index.ts
            └── voices.ts
        ├── tsconfig.json
        └── vitest.config.ts

/.changeset/breezy-groups-wish.md:
--------------------------------------------------------------------------------
1 | ---
2 | 'mastra': patch
3 | ---
4 | 
5 | When running pnpm create mastra and selecting to install MCP docs server for Windsurf, the prompt placement was confusing as there was an additional confirm step during initialization later. Now the prompts all happen at the same time. Also added a check so we don't re-install global Windsurf if it's already installed
6 | 

--------------------------------------------------------------------------------
/.changeset/cold-berries-study.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/mcp-docs-server': patch
3 | ---
4 | 
5 | Added explicit error handling for bad blog post fetches
6 | 

--------------------------------------------------------------------------------
/.changeset/cool-papers-check.md:
--------------------------------------------------------------------------------
1 | ---
2 | 'voice-agent': patch
3 | ---
4 | 
5 | Add documentation and examples for voice api
6 | 

--------------------------------------------------------------------------------
/.changeset/cruel-months-say.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/vectorize': minor
3 | ---
4 | 
5 | Added new operation impls for MastraVector in vectorize store
6 | 

--------------------------------------------------------------------------------
/.changeset/cute-women-stand.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/deployer': patch
3 | ---
4 | 
5 | Fix telemetry when side-effects are added to the mastra file
6 | 

--------------------------------------------------------------------------------
/.changeset/easy-laws-live.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/voice-azure': patch
3 | ---
4 | 
5 | This package provides both Text-to-Speech (TTS) and Speech-to-Text (STT) capabilities through Azure API
6 | 

--------------------------------------------------------------------------------
/.changeset/every-bars-stand.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/evals': patch
3 | '@mastra/core': patch
4 | 'mastra': patch
5 | ---
6 | 
7 | Check for eval values before inserting into storage
8 | 

--------------------------------------------------------------------------------
/.changeset/famous-readers-juggle.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/playground-ui': patch
3 | 'mastra': patch
4 | 'create-mastra': patch
5 | ---
6 | 
7 | Fix messages in thread not showing latest when switching between threads
8 | 

--------------------------------------------------------------------------------
/.changeset/fluffy-zoos-build.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/deployer': patch
3 | ---
4 | 
5 | fix building externals
6 | 

--------------------------------------------------------------------------------
/.changeset/fuzzy-ducks-burn.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/core': patch
3 | ---
4 | 
5 | Inject mastra instance into llm class
6 | 

--------------------------------------------------------------------------------
/.changeset/gold-garlics-attend.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/deployer': patch
3 | ---
4 | 
5 | Fix deployer when side-effects are added to the mastra file
6 | 
7 | 

--------------------------------------------------------------------------------
/.changeset/great-jobs-serve.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/client-js': patch
3 | '@mastra/deployer': patch
4 | ---
5 | 
6 | Support voice for mastra client
7 | 

--------------------------------------------------------------------------------
/.changeset/icy-places-find.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/deployer': patch
3 | ---
4 | 
5 | Fix symlink resolving and externals
6 | 

--------------------------------------------------------------------------------
/.changeset/khaki-toys-attend.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/voice-cloudflare': patch
3 | ---
4 | 
5 | feat: cloudflare voice
6 | 

--------------------------------------------------------------------------------
/.changeset/mcp-client-timeout.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/mcp': patch
3 | ---
4 | 
5 | Added MCP client timeout option used for tool calls.
6 | 

--------------------------------------------------------------------------------
/.changeset/pretty-teams-lay.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/voice-sarvam': patch
3 | ---
4 | 
5 | chore: update savram voice package
6 | 

--------------------------------------------------------------------------------
/.changeset/silent-terms-lay.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/upstash': minor
3 | ---
4 | 
5 | Added new operations implementations for MastraVector methods in upstash store
6 | 

--------------------------------------------------------------------------------
/.changeset/small-teeth-rush.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/core': patch
3 | '@mastra/chroma': patch
4 | '@mastra/qdrant': patch
5 | '@mastra/astra': patch
6 | ---
7 | 
8 | Update README and some tests for vector stores
9 | 

--------------------------------------------------------------------------------
/.changeset/swift-mirrors-rest.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/voice-sarvam': patch
3 | ---
4 | 
5 | feat: add STT functionality in @mastra/voice-sarvam
6 | 

--------------------------------------------------------------------------------
/.changeset/swift-wings-sneeze.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/playground-ui': patch
3 | 'mastra': patch
4 | 'create-mastra': patch
5 | ---
6 | 
7 | Fix new thread title not reflecting until refresh or new message is sent
8 | 

--------------------------------------------------------------------------------
/.changeset/thirty-plants-brush.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/upstash': patch
3 | ---
4 | 
5 | Sanitize redis keys on workflow snapshot storage
6 | 

--------------------------------------------------------------------------------
/.changeset/twenty-papers-hide.md:
--------------------------------------------------------------------------------
1 | ---
2 | '@mastra/playground-ui': patch
3 | 'mastra': patch
4 | 'create-mastra': patch
5 | ---
6 | 
7 | Pop a dialog showing the functional condition when a functional condition is clicked on workflow graph
8 | 

--------------------------------------------------------------------------------
/.changeset/wild-hornets-train.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | '@mastra/playground-ui': patch
 3 | '@mastra/client-js': patch
 4 | '@mastra/core': patch
 5 | 'mastra': patch
 6 | 'create-mastra': patch
 7 | ---
 8 | 
 9 | Allow ai-sdk Message type for messages in agent generate and stream
10 | Fix sidebar horizontal overflow in playground
11 | 

--------------------------------------------------------------------------------
/.cursor/mcp.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "mcpServers": {
 3 |     "mastra": {
 4 |       "command": "pnpx",
 5 |       "args": ["tsx", "./packages/mcp-docs-server/src/stdio.ts"],
 6 |       "env": {
 7 |         "REBUILD_DOCS_ON_START": "true"
 8 |       }
 9 |     }
10 |   }
11 | }
12 | 

--------------------------------------------------------------------------------
/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | COHERE_API_KEY=
3 | PINECONE_API_KEY=
4 | DB_URL=postgresql://postgres:postgres@localhost:5432/mastra

--------------------------------------------------------------------------------
/.github/ISSUE_TEMPLATE/config.yml:
--------------------------------------------------------------------------------
1 | blank_issues_enabled: true
2 | contact_links:
3 |   - name: Questions & Discussions
4 |     url: https://discord.gg/TpapMTnjyB
5 |     about: If you have any questions or want to discuss something, join our Discord server
6 | 

--------------------------------------------------------------------------------
/.github/workflows/data/stable-release-test.json:
--------------------------------------------------------------------------------
1 | {
2 |   "action": "workflow_dispatch",
3 |   "inputs": {}
4 | }
5 | 

--------------------------------------------------------------------------------
/.husky/pre-commit:
--------------------------------------------------------------------------------
 1 | pnpm --version || {
 2 |   echo "Pre-commit requires pnpm to be installed globally"
 3 |   exit 0
 4 | }
 5 | 
 6 | # Run TS typecheck
 7 | pnpm typecheck
 8 | 
 9 | # Formatting on staged files
10 | pnpm lint-staged
11 | 
12 | 

--------------------------------------------------------------------------------
/.prettierignore:
--------------------------------------------------------------------------------
 1 | **/.next
 2 | **/dist
 3 | */public/**
 4 | **/node_modules/**
 5 | **/generated/**
 6 | **/public/**
 7 | **/public/**/**
 8 | pnpm-lock.yaml
 9 | pnpm-workspace.yaml
10 | **/packages/**/src/client/**
11 | .mastra/
12 | .changeset/
13 | packages/cli/src/commands/init/init.test.ts
14 | packages/cli/dist
15 | **/integrations/**
16 | packages/create-mastra/rollup.config.js
17 | 

--------------------------------------------------------------------------------
/.prettierrc:
--------------------------------------------------------------------------------
 1 | {
 2 |   "endOfLine": "lf",
 3 |   "semi": true,
 4 |   "singleQuote": true,
 5 |   "tabWidth": 2,
 6 |   "useTabs": false,
 7 |   "trailingComma": "all",
 8 |   "bracketSpacing": true,
 9 |   "printWidth": 120,
10 |   "arrowParens": "avoid"
11 | }
12 | 

--------------------------------------------------------------------------------
/.vercelignore:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/.vercelignore

--------------------------------------------------------------------------------
/client-sdks/client-js/.gitignore:
--------------------------------------------------------------------------------
 1 | .prism.log
 2 | node_modules
 3 | yarn-error.log
 4 | codegen.log
 5 | Brewfile.lock.json
 6 | dist
 7 | dist-deno
 8 | /*.tgz
 9 | .idea/
10 | 
11 | 

--------------------------------------------------------------------------------
/client-sdks/client-js/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/client-sdks/client-js/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './client';
2 | export * from './types';
3 | 

--------------------------------------------------------------------------------
/client-sdks/client-js/src/resources/index.ts:
--------------------------------------------------------------------------------
1 | export * from './agent';
2 | export * from './network';
3 | export * from './memory-thread';
4 | export * from './vector';
5 | export * from './workflow';
6 | export * from './tool';
7 | export * from './base';
8 | 

--------------------------------------------------------------------------------
/client-sdks/client-js/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/client-sdks/client-js/vitest.config.js:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/deployers/cloudflare/.gitignore:
--------------------------------------------------------------------------------
1 | .mastra
2 | 

--------------------------------------------------------------------------------
/deployers/cloudflare/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/deployers/cloudflare/global.d.ts:
--------------------------------------------------------------------------------
1 | declare module 'rollup-plugin-shim';
2 | 

--------------------------------------------------------------------------------
/deployers/cloudflare/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["./global.d.ts", "src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/deployers/cloudflare/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/deployers/netlify/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/deployers/netlify/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/deployers/netlify/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/deployers/vercel/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/deployers/vercel/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/deployers/vercel/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/docs/.env.example:
--------------------------------------------------------------------------------
1 | NEXT_PUBLIC_APP_URL=http://localhost:3004
2 | 

--------------------------------------------------------------------------------
/docs/.eslintrc.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": ["next/core-web-vitals", "next/typescript"]
3 | }
4 | 

--------------------------------------------------------------------------------
/docs/.npmrc:
--------------------------------------------------------------------------------
1 | enable-pre-post-scripts=true
2 | 

--------------------------------------------------------------------------------
/docs/.prettierrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/.prettierrc

--------------------------------------------------------------------------------
/docs/next-sitemap.config.mjs:
--------------------------------------------------------------------------------
 1 | /** @type {import('next-sitemap').IConfig} */
 2 | const config = {
 3 |   siteUrl: process.env.NEXT_PUBLIC_APP_URL,
 4 |   generateRobotsTxt: true,
 5 |   exclude: ["*/_meta"],
 6 |   generateIndexSitemap: false,
 7 |   // ...other options
 8 | };
 9 | 
10 | export default config;
11 | 

--------------------------------------------------------------------------------
/docs/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | /** @type {import('postcss-load-config').Config} */
2 | const config = {
3 |   plugins: {
4 |     tailwindcss: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 

--------------------------------------------------------------------------------
/docs/public/Geist-Regular.otf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/Geist-Regular.otf

--------------------------------------------------------------------------------
/docs/public/Geist-SemiBold.otf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/Geist-SemiBold.otf

--------------------------------------------------------------------------------
/docs/public/creating-new-agent.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/creating-new-agent.png

--------------------------------------------------------------------------------
/docs/public/docs/mastra-ai-sdk.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/docs/mastra-ai-sdk.png

--------------------------------------------------------------------------------
/docs/public/docs/mastra-storage.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/docs/mastra-storage.png

--------------------------------------------------------------------------------
/docs/public/docs/signoz-telemetry-demo.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/docs/signoz-telemetry-demo.png

--------------------------------------------------------------------------------
/docs/public/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/favicon.ico

--------------------------------------------------------------------------------
/docs/public/image-1.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/image-1.png

--------------------------------------------------------------------------------
/docs/public/image.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/image.png

--------------------------------------------------------------------------------
/docs/public/log.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/log.png

--------------------------------------------------------------------------------
/docs/public/mastra-homepage.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/mastra-homepage.png

--------------------------------------------------------------------------------
/docs/public/parallel-chains.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/parallel-chains.png

--------------------------------------------------------------------------------
/docs/public/playground-agent-chat.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/playground-agent-chat.png

--------------------------------------------------------------------------------
/docs/public/playground-agent.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/playground-agent.png

--------------------------------------------------------------------------------
/docs/public/playground-tools.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/playground-tools.png

--------------------------------------------------------------------------------
/docs/public/playground-workflow.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/playground-workflow.png

--------------------------------------------------------------------------------
/docs/public/rag-sync-screenshot.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/rag-sync-screenshot.png

--------------------------------------------------------------------------------
/docs/public/sequential-chains.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/sequential-chains.png

--------------------------------------------------------------------------------
/docs/public/showcase/ai-beats-lab.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/showcase/ai-beats-lab.png

--------------------------------------------------------------------------------
/docs/public/showcase/ecommerce-rag.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/showcase/ecommerce-rag.png

--------------------------------------------------------------------------------
/docs/public/showcase/excalidraw-app.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/showcase/excalidraw-app.png

--------------------------------------------------------------------------------
/docs/public/showcase/notebook-lm.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/showcase/notebook-lm.png

--------------------------------------------------------------------------------
/docs/public/showcase/travel-ai.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/showcase/travel-ai.png

--------------------------------------------------------------------------------
/docs/public/subscribed-chains.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/public/subscribed-chains.png

--------------------------------------------------------------------------------
/docs/src/lib/utils.ts:
--------------------------------------------------------------------------------
1 | import { type ClassValue, clsx } from "clsx";
2 | import { twMerge } from "tailwind-merge";
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs));
6 | }
7 | 

--------------------------------------------------------------------------------
/docs/src/pages/_meta.ts:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 |   contact: {
 3 |     title: "Blog",
 4 |     type: "page",
 5 |     href: "https://mastra.ai/blog",
 6 |     newWindow: true,
 7 |   },
 8 |   showcase: { title: "Showcase", type: "page" },
 9 |   examples: { title: "Examples", type: "page" },
10 |   docs: { title: "Docs", type: "page" },
11 | };
12 | 
13 | export default meta;
14 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/agents/_meta.ts:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 |   "00-overview": "Overview",
 3 |   "01-agent-memory": "Agent Memory",
 4 |   "02-adding-tools": "Adding Tools",
 5 |   "02a-mcp-guide": "Using MCP",
 6 |   "03-adding-voice": "Adding Voice",
 7 | };
 8 | 
 9 | export default meta;
10 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/deployment/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   server: "Creating A Mastra Server",
3 |   client: "Mastra Client",
4 |   deployment: "Serverless Deployment",
5 | };
6 | 
7 | export default meta;
8 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/deployment/tracing-ui.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/src/pages/docs/deployment/tracing-ui.png

--------------------------------------------------------------------------------
/docs/src/pages/docs/evals/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   "00-overview": "Overview",
3 |   "01-textual-evals": "Textual Evals",
4 |   "02-custom-eval": "Custom Evals",
5 |   "03-running-in-ci": "Running in CI",
6 | };
7 | 
8 | export default meta;
9 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/faq/_meta.ts:
--------------------------------------------------------------------------------
 1 | import { Meta } from "nextra";
 2 | 
 3 | const meta: Meta = {
 4 |   index: {
 5 |     title: "Licensing",
 6 |   },
 7 | };
 8 | 
 9 | export default meta;
10 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/frameworks/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   "02-ai-sdk": "AI SDK",
3 |   "01-next-js": "Integrate with Next.js",
4 | };
5 | 
6 | export default meta;
7 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/getting-started/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   installation: "Installation",
3 |   "project-structure": "Project Structure",
4 |   "mcp-docs-server": "Using with Cursor/Windsurf",
5 | };
6 | 
7 | export default meta;
8 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/guides/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   "01-chef-michel": "Agents: Chef Michel",
3 |   "02-stock-agent": "Tools: Stock Agent",
4 |   "03-recruiter": "Workflows: AI Recruiter",
5 |   "04-research-assistant": "RAG: Research Assistant",
6 | };
7 | 
8 | export default meta;
9 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/image.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/src/pages/docs/image.png

--------------------------------------------------------------------------------
/docs/src/pages/docs/integrations/_meta.ts:
--------------------------------------------------------------------------------
 1 | import { Meta } from "nextra";
 2 | 
 3 | const meta: Meta = {
 4 |   index: {
 5 |     title: "Overview",
 6 |   },
 7 | };
 8 | 
 9 | export default meta;
10 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/local-dev/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   "creating-a-new-project": "Creating a New Project",
3 |   "add-to-existing-project": "Add to an Existing Project",
4 |   "mastra-dev": "Development Environment",
5 | };
6 | 
7 | export default meta;
8 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/observability/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   logging: "Logging",
3 |   tracing: "Tracing",
4 |   "nextjs-tracing": "Next.js Tracing",
5 | };
6 | 
7 | export default meta;
8 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/rag/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   overview: "Overview",
3 |   "chunking-and-embedding": "Chunking and Embedding",
4 |   "vector-databases": "Vector Databases",
5 |   retrieval: "Retrieval",
6 | };
7 | 
8 | export default meta;
9 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/agents/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   getAgent: "getAgent()",
3 |   createTool: "createTool()",
4 |   generate: "generate()",
5 |   stream: "stream()",
6 | };
7 | 
8 | export default meta;
9 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/cli/_meta.ts:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 | 
 3 |   init: "mastra init",
 4 |   dev: "mastra dev",
 5 |   deploy: "mastra deploy",
 6 |   build: "mastra build"
 7 | };
 8 | 
 9 | export default meta;
10 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/client-js/_meta.ts:
--------------------------------------------------------------------------------
 1 | export default {
 2 |   agents: "Agents API",
 3 |   memory: "Memory API",
 4 |   tools: "Tools API",
 5 |   workflows: "Workflows API",
 6 |   vectors: "Vectors API",
 7 |   logs: "Logs API",
 8 |   telemetry: "Telemetry API",
 9 |   "error-handling": "Error Handling",
10 | };
11 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/core/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   "mastra-class": "Mastra Class",
3 | };
4 | 
5 | export default meta;
6 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/deployer/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   deployer: "Deployer",
3 |   cloudflare: "Cloudflare",
4 |   netlify: "Netlify",
5 |   vercel: "Vercel",
6 | };
7 | 
8 | export default meta;
9 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/index.mdx:
--------------------------------------------------------------------------------
1 | ---
2 | title: "API Reference"
3 | description: "Mastra API Reference"
4 | ---
5 | 
6 | # Reference
7 | 
8 | The Reference section provides documentation of Mastra's API, including parameters, types and usage examples.

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/memory/_meta.ts:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 |   Memory: "Memory Class",
 3 |   createThread: ".createThread()",
 4 |   query: ".query()",
 5 |   getThreadById: ".getThreadById()",
 6 |   getThreadsByResourceId: ".getThreadsByResourceId()",
 7 | };
 8 | 
 9 | export default meta;
10 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/networks/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   "agent-network": "AgentNetwork (Experimental)",
3 | };
4 | 
5 | export default meta;
6 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/observability/_meta.ts:
--------------------------------------------------------------------------------
1 | export default {
2 |   providers: "Providers",
3 |   logger: "Logger",
4 |   "otel-config": "OTelConfig",
5 |   "create-logger": ".createLogger()",
6 | };
7 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/observability/providers/_meta.ts:
--------------------------------------------------------------------------------
 1 | export default {
 2 |   index: "Overview",
 3 |   signoz: "SigNoz",
 4 |   braintrust: "Braintrust",
 5 |   langsmith: "LangSmith",
 6 |   langfuse: "Langfuse",
 7 |   langwatch: "LangWatch",
 8 |   "new-relic": "New Relic",
 9 |   traceloop: "Traceloop",
10 |   laminar: "Laminar",
11 | };
12 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/storage/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   libsql: "LibSQL Storage",
3 |   postgresql: "PostgreSQL Storage",
4 |   upstash: "Upstash Storage",
5 | };
6 | 
7 | export default meta;
8 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/reference/tools/_meta.ts:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 |   "document-chunker-tool": "createDocumentChunkerTool()",
 3 |   "graph-rag-tool": "createGraphRAGTool()",
 4 |   "vector-query-tool": "createVectorQueryTool()",
 5 |   client: "MastraMCPClient",
 6 |   "mcp-configuration": "MCPConfiguration",
 7 | };
 8 | 
 9 | export default meta;
10 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/storage/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   overview: "Overview",
3 | };
4 | 
5 | export default meta;
6 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/voice/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   overview: "Overview",
3 |   "text-to-speech": "Text to Speech",
4 |   "speech-to-text": "Speech to Text",
5 |   "voice-to-voice": "Voice to Voice",
6 | };
7 | 
8 | export default meta;
9 | 

--------------------------------------------------------------------------------
/docs/src/pages/docs/workflows/_meta.js:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 |   "00-overview": "Overview",
 3 |   steps: "Steps",
 4 |   "control-flow": "Control Flow",
 5 |   variables: "Variables",
 6 |   "suspend-and-resume": "Suspend & Resume",
 7 |   "dynamic-workflows": "Dynamic Workflows",
 8 |   "error-handling": "Error Handling",
 9 | };
10 | 
11 | export default meta;
12 | 

--------------------------------------------------------------------------------
/docs/src/pages/examples/memory/_meta.ts:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 |   "memory-with-pg": "Memory with Postgres",
 3 |   "memory-with-libsql": "Memory with LibSQL",
 4 |   "memory-with-upstash": "Memory with Upstash",
 5 |   "streaming-working-memory": "Streaming Working Memory (quickstart)",
 6 |   "streaming-working-memory-advanced": "Streaming Working Memory (advanced)",
 7 | };
 8 | 
 9 | export default meta;
10 | 

--------------------------------------------------------------------------------
/docs/src/pages/examples/rag/_meta.ts:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 |   chunking: {
 3 |     title: "Chunking",
 4 |   },
 5 |   embedding: {
 6 |     title: "Embedding",
 7 |   },
 8 |   upsert: {
 9 |     title: "Upsert",
10 |   },
11 |   query: {
12 |     title: "Query",
13 |   },
14 |   rerank: {
15 |     title: "Rerank",
16 |   },
17 |   usage: {
18 |     title: "Usage",
19 |   },
20 | };
21 | 
22 | export default meta;
23 | 

--------------------------------------------------------------------------------
/docs/src/pages/examples/rag/chunking/_meta.ts:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 |   "chunk-text": "Chunk Text",
 3 |   "chunk-markdown": "Chunk Markdown",
 4 |   "chunk-html": "Chunk HTML",
 5 |   "chunk-json": "Chunk JSON",
 6 |   "adjust-chunk-size": "Adjust Chunk Size",
 7 |   "adjust-chunk-delimiters": "Adjust Chunk Delimiters",
 8 | };
 9 | 
10 | export default meta;
11 | 

--------------------------------------------------------------------------------
/docs/src/pages/examples/rag/embedding/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   "embed-text-chunk": "Embed Text Chunk",
3 |   "embed-chunk-array": "Embed Chunk Array",
4 |   "embed-text-with-cohere": "Embed Text with Cohere",
5 |   "metadata-extraction": "Metadata Extraction",
6 | };
7 | 
8 | export default meta;
9 | 

--------------------------------------------------------------------------------
/docs/src/pages/examples/rag/query/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   "hybrid-vector-search": "Hybrid Vector Search",
3 |   "retrieve-results": "Retrieve Results",
4 | };
5 | 
6 | export default meta;
7 | 

--------------------------------------------------------------------------------
/docs/src/pages/examples/rag/rerank/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   rerank: "Re-ranking Results",
3 |   "rerank-rag": "Re-ranking Results with Tools",
4 |   "reranking-with-cohere": "Re-ranking results with Cohere",
5 | };
6 | 
7 | export default meta;
8 | 

--------------------------------------------------------------------------------
/docs/src/pages/examples/rag/upsert/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   "upsert-embeddings": "Upsert Embeddings",
3 | };
4 | 
5 | export default meta;
6 | 

--------------------------------------------------------------------------------
/docs/src/pages/examples/rag/usage/_meta.ts:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 |   "basic-rag": "Using the Vector Query Tool",
 3 |   "cleanup-rag": "Optimizing Information Density",
 4 |   "filter-rag": "Metadata Filtering",
 5 |   "cot-rag": "Chain of Thought Prompting",
 6 |   "cot-workflow-rag": "Structured Reasoning with Workflows",
 7 |   "graph-rag": "Graph RAG",
 8 | };
 9 | 
10 | export default meta;
11 | 

--------------------------------------------------------------------------------
/docs/src/pages/examples/voice/_meta.ts:
--------------------------------------------------------------------------------
1 | const meta = {
2 |   "text-to-speech": "Text to Speech",
3 |   "speech-to-text": "Speech to Text",
4 | };
5 | 
6 | export default meta;
7 | 

--------------------------------------------------------------------------------
/docs/src/pages/font/CommitMono-400-Regular.otf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/src/pages/font/CommitMono-400-Regular.otf

--------------------------------------------------------------------------------
/docs/src/pages/font/GeistVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/docs/src/pages/font/GeistVF.woff

--------------------------------------------------------------------------------
/docs/src/pages/showcase/_meta.ts:
--------------------------------------------------------------------------------
 1 | const meta = {
 2 |   index: {
 3 |     title: "Showcase",
 4 |     type: "page",
 5 |     theme: {
 6 |       layout: "full",
 7 |     },
 8 |   },
 9 | };
10 | 
11 | export default meta;
12 | 

--------------------------------------------------------------------------------
/docs/src/pages/showcase/index.mdx:
--------------------------------------------------------------------------------
1 | ---
2 | title: 'Showcase'
3 | description: 'Check out these applications built with Mastra'
4 | ---
5 | 
6 | import { ShowcaseGrid } from '../../components/showcase-grid';
7 | 
8 | <ShowcaseGrid />
9 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "pkg-outputs",
 3 |   "version": "0.0.1",
 4 |   "private": true,
 5 |   "devDependencies": {
 6 |     "rollup": "^4.35.0",
 7 |     "vitest": "^3.0.7"
 8 |   },
 9 |   "scripts": {
10 |     "test": "vitest"
11 |   }
12 | }
13 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/template/apps/custom/src/mastra/agents/index.ts:
--------------------------------------------------------------------------------
1 | import { Agent } from '@mastra/core/agent';
2 | // import { helloWorldTool } from '@inner/inner-tools';
3 | 
4 | export const innerAgent = new Agent({
5 |   name: 'inner-agent',
6 |   instructions: 'You are a helpful assistant',
7 |   // tools: [helloWorldTool],
8 | });
9 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/template/apps/custom/src/mastra/index.ts:
--------------------------------------------------------------------------------
1 | import { Mastra } from '@mastra/core/mastra';
2 | import { innerAgent } from '@/agents';
3 | 
4 | export const mastra = new Mastra({
5 |   agents: [innerAgent],
6 | });
7 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/template/apps/custom/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "baseUrl": ".",
 5 |     "paths": {
 6 |       "@/*": ["./src/mastra/*"]
 7 |     }
 8 |   }
 9 | }
10 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/template/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "monorepo",
 3 |   "version": "1.0.0",
 4 |   "description": "",
 5 |   "main": "index.js",
 6 |   "scripts": {
 7 |     "test": "echo \"Error: no test specified\" && exit 1"
 8 |   },
 9 |   "keywords": [],
10 |   "author": "",
11 |   "license": "ISC",
12 |   "packageManager": "pnpm@10.4.1"
13 | }
14 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/template/packages/inner-tools/src/index.ts:
--------------------------------------------------------------------------------
1 | import { createTool } from '@mastra/core/tools';
2 | 
3 | export const helloWorldTool = createTool({
4 |   id: 'inner-tool',
5 |   description: 'A tool that returns hello world',
6 |   execute: async () => 'Hello, world!',
7 | });
8 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/template/packages/inner-tools/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json"
3 | }
4 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/template/pnpm-lock.yaml:
--------------------------------------------------------------------------------
 1 | lockfileVersion: '9.0'
 2 | 
 3 | settings:
 4 |   autoInstallPeers: true
 5 |   excludeLinksFromLockfile: false
 6 | 
 7 | importers:
 8 | 
 9 |   .: {}
10 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/template/pnpm-workspace.yaml:
--------------------------------------------------------------------------------
1 | packages:
2 |   - 'packages/*'
3 |   - 'apps/*'
4 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/template/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "compilerOptions": {
4 |     "rootDir": "."
5 |   }
6 | }
7 | 

--------------------------------------------------------------------------------
/e2e-tests/monorepo/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['monorepo.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/e2e-tests/pkg-outputs/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "pkg-outputs",
 3 |   "version": "0.0.1",
 4 |   "private": true,
 5 |   "devDependencies": {
 6 |     "globby": "^14.0.1",
 7 |     "resolve.exports": "^2.0.3",
 8 |     "vitest": "^3.0.7"
 9 |   },
10 |   "scripts": {
11 |     "test": "vitest"
12 |   }
13 | }
14 | 

--------------------------------------------------------------------------------
/e2e-tests/pkg-outputs/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/examples/agent-network/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | .env.development
3 | node_modules
4 | .vercel
5 | .mastra.mastra
6 | 

--------------------------------------------------------------------------------
/examples/agent/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | .env.development
3 | node_modules
4 | .vercel
5 | .mastra.mastra
6 | 

--------------------------------------------------------------------------------
/examples/ai-beats-lab/README.md:
--------------------------------------------------------------------------------
 1 | ## AI Beats Lab
 2 | 
 3 | Create original music and beats using AI.
 4 | 
 5 | Try the demo: [AI Beats Lab](https://ai-beat-lab.lovable.app/)
 6 | 
 7 | Source code: [ai-beat-lab](https://github.com/mastra-ai/ai-beat-lab)
 8 | 
 9 | Blog Post: [AI Beats Lab](https://mastra.ai/blog/ai-beats-lab)
10 | 

--------------------------------------------------------------------------------
/examples/ai-sdk-useChat/CHANGELOG.md:
--------------------------------------------------------------------------------
1 | # mastra-ai-sdk-use-chat-example
2 | 
3 | ## 0.1.1-alpha.0
4 | 
5 | ### Patch Changes
6 | 
7 | - Updated dependencies [06aa827]
8 |   - @mastra/core@0.4.3-alpha.0
9 | 

--------------------------------------------------------------------------------
/examples/ai-sdk-useChat/app/api/chat/route.ts:
--------------------------------------------------------------------------------
 1 | import { mastra } from '@/src/mastra';
 2 | 
 3 | export async function POST(req: Request) {
 4 |   const { messages } = await req.json();
 5 |   const myAgent = mastra.getAgent('weatherAgent');
 6 |   const stream = await myAgent.stream(messages);
 7 | 
 8 |   return stream.toDataStreamResponse();
 9 | }
10 | 

--------------------------------------------------------------------------------
/examples/ai-sdk-useChat/app/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/ai-sdk-useChat/app/favicon.ico

--------------------------------------------------------------------------------
/examples/ai-sdk-useChat/next.config.ts:
--------------------------------------------------------------------------------
1 | import type { NextConfig } from 'next';
2 | 
3 | const nextConfig: NextConfig = {
4 |   /* config options here */
5 |   serverExternalPackages: ['@mastra/*'],
6 | };
7 | 
8 | export default nextConfig;
9 | 

--------------------------------------------------------------------------------
/examples/ai-sdk-useChat/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | /** @type {import('postcss-load-config').Config} */
2 | const config = {
3 |   plugins: {
4 |     tailwindcss: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 

--------------------------------------------------------------------------------
/examples/ai-sdk-useChat/public/vercel.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>

--------------------------------------------------------------------------------
/examples/ai-sdk-useChat/public/window.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>

--------------------------------------------------------------------------------
/examples/assistant-ui/.env.example:
--------------------------------------------------------------------------------
1 | NEXT_PUBLIC_MASTRA_API_URL=http://localhost:4111/api/agents/myAgent/stream

--------------------------------------------------------------------------------
/examples/assistant-ui/.eslintrc.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": ["next/core-web-vitals", "next/typescript"]
3 | }
4 | 

--------------------------------------------------------------------------------
/examples/assistant-ui/app/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/assistant-ui/app/favicon.ico

--------------------------------------------------------------------------------
/examples/assistant-ui/app/fonts/GeistMonoVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/assistant-ui/app/fonts/GeistMonoVF.woff

--------------------------------------------------------------------------------
/examples/assistant-ui/app/fonts/GeistVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/assistant-ui/app/fonts/GeistVF.woff

--------------------------------------------------------------------------------
/examples/assistant-ui/app/globals.css:
--------------------------------------------------------------------------------
1 | @tailwind base;
2 | @tailwind components;
3 | @tailwind utilities;
4 | 

--------------------------------------------------------------------------------
/examples/assistant-ui/app/page.tsx:
--------------------------------------------------------------------------------
 1 | import { MyAssistant } from '@/components/MyAssistant';
 2 | 
 3 | export default function Home() {
 4 |   return (
 5 |     <main className="h-dvh">
 6 |       <MyAssistant />
 7 |     </main>
 8 |   );
 9 | }
10 | 

--------------------------------------------------------------------------------
/examples/assistant-ui/next.config.ts:
--------------------------------------------------------------------------------
1 | import type { NextConfig } from 'next';
2 | 
3 | const nextConfig: NextConfig = {
4 |   /* config options here */
5 | };
6 | 
7 | export default nextConfig;
8 | 

--------------------------------------------------------------------------------
/examples/assistant-ui/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | /** @type {import('postcss-load-config').Config} */
2 | const config = {
3 |   plugins: {
4 |     tailwindcss: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 

--------------------------------------------------------------------------------
/examples/basics/agents/agentic-workflows/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/agents/agentic-workflows/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/examples/basics/agents/agentic-workflows/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-using-a-workflow",
 3 |   "version": "0.0.1",
 4 |   "type": "module",
 5 |   "private": true,
 6 |   "scripts": {
 7 |     "start": "pnpx tsx index.ts"
 8 |   },
 9 |   "dependencies": {
10 |     "@ai-sdk/openai": "latest",
11 |     "@mastra/core": "workspace:*",
12 |     "ai": "latest",
13 |     "zod": "^3.24.2"
14 |   }
15 | }
16 | 

--------------------------------------------------------------------------------
/examples/basics/agents/bird-checker/.env.example:
--------------------------------------------------------------------------------
1 | ANTHROPIC_API_KEY=
2 | UNSPLASH_ACCESS_KEY=

--------------------------------------------------------------------------------
/examples/basics/agents/bird-checker/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/examples/basics/agents/bird-checker/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-bird-checker",
 3 |   "version": "0.0.1",
 4 |   "type": "module",
 5 |   "private": true,
 6 |   "scripts": {
 7 |     "start": "pnpx tsx index.ts"
 8 |   },
 9 |   "dependencies": {
10 |     "@ai-sdk/anthropic": "latest",
11 |     "@mastra/core": "workspace:*",
12 |     "zod": "^3.24.2"
13 |   }
14 | }
15 | 

--------------------------------------------------------------------------------
/examples/basics/agents/hierarchical-multi-agent/.env.example:
--------------------------------------------------------------------------------
1 | ANTHROPIC_API_KEY=
2 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/agents/hierarchical-multi-agent/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/examples/basics/agents/multi-agent-workflow/.env.example:
--------------------------------------------------------------------------------
1 | ANTHROPIC_API_KEY=
2 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/agents/multi-agent-workflow/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/examples/basics/agents/system-prompt/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/agents/system-prompt/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/examples/basics/agents/system-prompt/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-system-prompt",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@ai-sdk/openai": "latest",
10 |     "@mastra/core": "workspace:*",
11 |     "zod": "^3.24.2"
12 |   },
13 |   "version": "0.0.1"
14 | }
15 | 

--------------------------------------------------------------------------------
/examples/basics/agents/using-a-tool/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/agents/using-a-tool/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/examples/basics/agents/using-a-tool/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-using-a-tool",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@ai-sdk/openai": "latest",
10 |     "@mastra/core": "workspace:*",
11 |     "zod": "^3.24.2"
12 |   },
13 |   "version": "0.0.1"
14 | }
15 | 

--------------------------------------------------------------------------------
/examples/basics/agents/voice-capabilities/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=<your-openai-api-key>
2 | PLAYAI_USER_ID=<your-playai-user-id>
3 | PLAYAI_API_KEY=<your-playai-api-key>

--------------------------------------------------------------------------------
/examples/basics/agents/voice-capabilities/.gitignore:
--------------------------------------------------------------------------------
1 | output.txt
2 | node_modules
3 | dist
4 | .mastra
5 | .env.development
6 | .env
7 | *.db
8 | *.mp3

--------------------------------------------------------------------------------
/examples/basics/evals/answer-relevancy/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/evals/answer-relevancy/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env

--------------------------------------------------------------------------------
/examples/basics/evals/bias/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/bias/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env

--------------------------------------------------------------------------------
/examples/basics/evals/bias/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-bias",
 3 |   "private": true,
 4 |   "version": "0.0.0",
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "start": "pnpx tsx --env-file .env index.ts"
 8 |   },
 9 |   "dependencies": {
10 |     "@ai-sdk/openai": "latest",
11 |     "@mastra/evals": "workspace:^"
12 |   },
13 |   "devDependencies": {
14 |     "dotenv": "^16.4.7"
15 |   }
16 | }
17 | 

--------------------------------------------------------------------------------
/examples/basics/evals/completeness/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/

--------------------------------------------------------------------------------
/examples/basics/evals/completeness/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-completeness",
 3 |   "private": true,
 4 |   "version": "0.0.0",
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "start": "pnpx tsx index.ts"
 8 |   },
 9 |   "dependencies": {
10 |     "@mastra/evals": "workspace:^"
11 |   },
12 |   "devDependencies": {
13 |     "dotenv": "^16.4.7"
14 |   }
15 | }
16 | 

--------------------------------------------------------------------------------
/examples/basics/evals/content-similarity/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/

--------------------------------------------------------------------------------
/examples/basics/evals/content-similarity/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-content-similarity",
 3 |   "private": true,
 4 |   "version": "0.0.0",
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "start": "pnpx tsx index.ts"
 8 |   },
 9 |   "dependencies": {
10 |     "@mastra/evals": "workspace:^"
11 |   },
12 |   "devDependencies": {
13 |     "dotenv": "^16.4.7"
14 |   }
15 | }
16 | 

--------------------------------------------------------------------------------
/examples/basics/evals/context-position/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/context-position/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env

--------------------------------------------------------------------------------
/examples/basics/evals/context-precision/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/context-precision/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env

--------------------------------------------------------------------------------
/examples/basics/evals/context-relevancy/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/context-relevancy/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env

--------------------------------------------------------------------------------
/examples/basics/evals/contextual-recall/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/contextual-recall/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env

--------------------------------------------------------------------------------
/examples/basics/evals/custom-eval/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/custom-eval/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env
3 | 

--------------------------------------------------------------------------------
/examples/basics/evals/custom-eval/src/mastra/evals/index.ts:
--------------------------------------------------------------------------------
1 | export * from './gluten-checker';
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/custom-eval/src/mastra/index.ts:
--------------------------------------------------------------------------------
1 | import { Mastra } from '@mastra/core';
2 | 
3 | import { chefAgent } from './agents/chefAgent';
4 | 
5 | export const mastra = new Mastra({
6 |   agents: { chefAgent },
7 | });
8 | 

--------------------------------------------------------------------------------
/examples/basics/evals/faithfulness/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/faithfulness/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env

--------------------------------------------------------------------------------
/examples/basics/evals/hallucination/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/hallucination/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env

--------------------------------------------------------------------------------
/examples/basics/evals/keyword-coverage/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/ 

--------------------------------------------------------------------------------
/examples/basics/evals/keyword-coverage/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-keyword-coverage",
 3 |   "private": true,
 4 |   "version": "0.0.0",
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "start": "pnpx tsx index.ts"
 8 |   },
 9 |   "dependencies": {
10 |     "@mastra/evals": "workspace:^"
11 |   },
12 |   "devDependencies": {
13 |     "dotenv": "^16.4.7"
14 |   }
15 | }
16 | 

--------------------------------------------------------------------------------
/examples/basics/evals/prompt-alignment/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/prompt-alignment/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env
3 | 

--------------------------------------------------------------------------------
/examples/basics/evals/summarization/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY= 

--------------------------------------------------------------------------------
/examples/basics/evals/summarization/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env 

--------------------------------------------------------------------------------
/examples/basics/evals/textual-difference/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/ 

--------------------------------------------------------------------------------
/examples/basics/evals/textual-difference/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-textual-difference",
 3 |   "private": true,
 4 |   "version": "0.0.0",
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "start": "pnpx tsx index.ts"
 8 |   },
 9 |   "dependencies": {
10 |     "@mastra/evals": "workspace:^"
11 |   },
12 |   "devDependencies": {
13 |     "dotenv": "^16.4.7"
14 |   }
15 | }
16 | 

--------------------------------------------------------------------------------
/examples/basics/evals/tone-consistency/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/ 

--------------------------------------------------------------------------------
/examples/basics/evals/tone-consistency/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-tone-consistency",
 3 |   "private": true,
 4 |   "version": "0.0.0",
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "start": "pnpx tsx index.ts"
 8 |   },
 9 |   "dependencies": {
10 |     "@mastra/evals": "workspace:^"
11 |   },
12 |   "devDependencies": {
13 |     "dotenv": "^16.4.7"
14 |   }
15 | }
16 | 

--------------------------------------------------------------------------------
/examples/basics/evals/toxicity/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY= 

--------------------------------------------------------------------------------
/examples/basics/evals/toxicity/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env 

--------------------------------------------------------------------------------
/examples/basics/evals/word-inclusion/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | 

--------------------------------------------------------------------------------
/examples/basics/evals/word-inclusion/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .env

--------------------------------------------------------------------------------
/examples/basics/rag/adjust-chunk-delimiters/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/adjust-chunk-delimiters/index.ts:
--------------------------------------------------------------------------------
 1 | import { MDocument } from '@mastra/rag';
 2 | 
 3 | const doc = MDocument.fromText(\`Your plain text content...\`);
 4 | 
 5 | const chunks = await doc.chunk({
 6 |   separator: '\n',
 7 | });
 8 | 
 9 | console.log(chunks);
10 | 

--------------------------------------------------------------------------------
/examples/basics/rag/adjust-chunk-delimiters/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-adjust-chunk-delimiters",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/rag": "workspace:*"
10 |   },
11 |   "version": "0.0.1"
12 | }
13 | 

--------------------------------------------------------------------------------
/examples/basics/rag/adjust-chunk-size/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/adjust-chunk-size/index.ts:
--------------------------------------------------------------------------------
 1 | import { MDocument } from '@mastra/rag';
 2 | 
 3 | const doc = MDocument.fromText('Your plain text content...');
 4 | 
 5 | const chunks = await doc.chunk({
 6 |   size: 512,
 7 | });
 8 | 
 9 | console.log(chunks);
10 | 

--------------------------------------------------------------------------------
/examples/basics/rag/adjust-chunk-size/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-adjust-chunk-size",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/rag": "workspace:*"
10 |   },
11 |   "version": "0.0.1"
12 | }
13 | 

--------------------------------------------------------------------------------
/examples/basics/rag/basic-rag/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | POSTGRES_CONNECTION_STRING=

--------------------------------------------------------------------------------
/examples/basics/rag/basic-rag/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-html/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-html/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-chunk-html",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/rag": "workspace:*"
10 |   },
11 |   "version": "0.0.1"
12 | }
13 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-json/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-json/index.ts:
--------------------------------------------------------------------------------
 1 | import { MDocument } from '@mastra/rag';
 2 | 
 3 | const testJson = {
 4 |   name: 'John Doe',
 5 |   age: 30,
 6 |   email: 'john.doe@example.com',
 7 | };
 8 | 
 9 | const doc = MDocument.fromJSON(JSON.stringify(testJson));
10 | 
11 | const chunks = await doc.chunk({
12 |   maxSize: 100,
13 | });
14 | 
15 | console.log(chunks);
16 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-json/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-chunk-json",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/rag": "workspace:*"
10 |   },
11 |   "version": "0.0.1"
12 | }
13 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-markdown/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-markdown/index.ts:
--------------------------------------------------------------------------------
1 | import { MDocument } from '@mastra/rag';
2 | 
3 | const doc = MDocument.fromMarkdown('# Your markdown content...');
4 | 
5 | const chunks = await doc.chunk();
6 | 
7 | console.log(chunks);
8 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-markdown/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-chunk-markdown",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/rag": "workspace:*"
10 |   },
11 |   "version": "0.0.1"
12 | }
13 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-text/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-text/index.ts:
--------------------------------------------------------------------------------
1 | import { MDocument } from '@mastra/rag';
2 | 
3 | const doc = MDocument.fromText('Your plain text content...');
4 | 
5 | const chunks = await doc.chunk();
6 | 
7 | console.log(chunks);
8 | 

--------------------------------------------------------------------------------
/examples/basics/rag/chunk-text/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-chunk-text",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/rag": "workspace:*"
10 |   },
11 |   "version": "0.0.1"
12 | }
13 | 

--------------------------------------------------------------------------------
/examples/basics/rag/cleanup-rag/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | POSTGRES_CONNECTION_STRING=

--------------------------------------------------------------------------------
/examples/basics/rag/cleanup-rag/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/cot-rag/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | POSTGRES_CONNECTION_STRING=

--------------------------------------------------------------------------------
/examples/basics/rag/cot-rag/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/cot-workflow-rag/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | POSTGRES_CONNECTION_STRING=

--------------------------------------------------------------------------------
/examples/basics/rag/cot-workflow-rag/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/embed-chunk-array/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/rag/embed-chunk-array/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/embed-chunk-array/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-embed-chunk-array",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@ai-sdk/openai": "latest",
10 |     "@mastra/rag": "workspace:*",
11 |     "ai": "latest"
12 |   },
13 |   "version": "0.0.1"
14 | }
15 | 

--------------------------------------------------------------------------------
/examples/basics/rag/embed-text-chunk/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/rag/embed-text-chunk/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/embed-text-chunk/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-embed-text-chunk",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@ai-sdk/openai": "latest",
10 |     "@mastra/rag": "workspace:*",
11 |     "ai": "latest"
12 |   },
13 |   "version": "0.0.1"
14 | }
15 | 

--------------------------------------------------------------------------------
/examples/basics/rag/embed-text-with-cohere/.env.example:
--------------------------------------------------------------------------------
1 | COHERE_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/rag/embed-text-with-cohere/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/embed-text-with-cohere/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "embed-text-with-cohere",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@ai-sdk/cohere": "latest",
10 |     "@mastra/rag": "workspace:*",
11 |     "ai": "latest"
12 |   },
13 |   "version": "0.0.1"
14 | }
15 | 

--------------------------------------------------------------------------------
/examples/basics/rag/filter-rag/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | POSTGRES_CONNECTION_STRING=

--------------------------------------------------------------------------------
/examples/basics/rag/filter-rag/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/graph-rag/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | POSTGRES_CONNECTION_STRING=

--------------------------------------------------------------------------------
/examples/basics/rag/graph-rag/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/hybrid-vector-search/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | POSTGRES_CONNECTION_STRING=

--------------------------------------------------------------------------------
/examples/basics/rag/hybrid-vector-search/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/insert-embedding-in-chroma/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=sk-your-api-key-here
2 | CHROMA_DB_PATH=path/to/your/chroma/db 

--------------------------------------------------------------------------------
/examples/basics/rag/insert-embedding-in-chroma/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules
2 | .env 

--------------------------------------------------------------------------------
/examples/basics/rag/insert-embedding-in-libsql/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=sk-your-api-key-here
2 | DATABASE_URL=libsql://your-database-url 
3 | DATABASE_AUTH_TOKEN=your-database-auth-token

--------------------------------------------------------------------------------
/examples/basics/rag/insert-embedding-in-libsql/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules
2 | .env

--------------------------------------------------------------------------------
/examples/basics/rag/insert-embedding-in-pgvector/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/rag/insert-embedding-in-pgvector/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/insert-embedding-in-pinecone/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | PINECONE_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/rag/insert-embedding-in-pinecone/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/metadata-extraction/.env.example:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/basics/rag/metadata-extraction/.env.example

--------------------------------------------------------------------------------
/examples/basics/rag/metadata-extraction/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/metadata-extraction/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-metadata-extraction",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/rag": "workspace:*"
10 |   },
11 |   "devDependencies": {
12 |     "dotenv": "^16.4.7"
13 |   },
14 |   "version": "0.0.1"
15 | }
16 | 

--------------------------------------------------------------------------------
/examples/basics/rag/rerank-rag/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | POSTGRES_CONNECTION_STRING=

--------------------------------------------------------------------------------
/examples/basics/rag/rerank-rag/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/rag/rerank/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | POSTGRES_CONNECTION_STRING= 

--------------------------------------------------------------------------------
/examples/basics/rag/rerank/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | node_modules/ 

--------------------------------------------------------------------------------
/examples/basics/rag/rerank/CHANGELOG.md:
--------------------------------------------------------------------------------
1 | # examples-rerank
2 | 
3 | ## 0.0.1
4 | 

--------------------------------------------------------------------------------
/examples/basics/rag/retrieve-results/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=
2 | PINECONE_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/rag/retrieve-results/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/calling-agent-from-workflow/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/basics/workflows/calling-agent-from-workflow/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/calling-agent-from-workflow/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-calling-agent-from-workflow",
 3 |   "type": "module",
 4 |   "scripts": {
 5 |     "start": "pnpx tsx index.ts"
 6 |   },
 7 |   "private": true,
 8 |   "dependencies": {
 9 |     "@ai-sdk/openai": "latest",
10 |     "@mastra/core": "workspace:*",
11 |     "zod": "^3.24.2"
12 |   },
13 |   "version": "0.0.1"
14 | }
15 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/create-workflow/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/create-workflow/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-create-workflow",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/core": "workspace:*",
10 |     "zod": "^3.24.2"
11 |   },
12 |   "version": "0.0.1"
13 | }
14 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/tool-as-workflow-step/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/tool-as-workflow-step/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-tool-as-workflow-step",
 3 |   "private": true,
 4 |   "type": "module",
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/core": "workspace:*",
10 |     "zod": "^3.24.2"
11 |   },
12 |   "version": "0.0.1"
13 | }
14 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/workflow-with-branching-paths/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/workflow-with-branching-paths/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-workflow-with-branching-paths",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/core": "workspace:*",
10 |     "zod": "^3.24.2"
11 |   },
12 |   "version": "0.0.1"
13 | }
14 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/workflow-with-cyclical-deps/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/workflow-with-cyclical-deps/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-workflow-with-cyclical-deps",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/core": "workspace:*",
10 |     "zod": "^3.24.2"
11 |   },
12 |   "version": "0.0.1"
13 | }
14 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/workflow-with-parallel-steps/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/workflow-with-parallel-steps/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-workflow-with-parallel-steps",
 3 |   "type": "module",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "pnpx tsx index.ts"
 7 |   },
 8 |   "dependencies": {
 9 |     "@mastra/core": "workspace:*",
10 |     "zod": "^3.24.2"
11 |   },
12 |   "version": "0.0.1"
13 | }
14 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/workflow-with-sequential-steps/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | 

--------------------------------------------------------------------------------
/examples/basics/workflows/workflow-with-sequential-steps/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "examples-workflow-with-sequential-steps",
 3 |   "type": "module",
 4 |   "version": "0.0.1",
 5 |   "private": true,
 6 |   "scripts": {
 7 |     "start": "pnpx tsx index.ts"
 8 |   },
 9 |   "dependencies": {
10 |     "@mastra/core": "workspace:*",
11 |     "zod": "^3.24.2"
12 |   }
13 | }
14 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-express/.env.example:
--------------------------------------------------------------------------------
1 | PORT=
2 | UNSPLASH_ACCESS_KEY=
3 | ANTHROPIC_API_KEY=

--------------------------------------------------------------------------------
/examples/bird-checker-with-express/.gitignore:
--------------------------------------------------------------------------------
1 | /node_modules
2 | 
3 | .env

--------------------------------------------------------------------------------
/examples/bird-checker-with-express/src/mastra/index.ts:
--------------------------------------------------------------------------------
 1 | import { createLogger } from '@mastra/core/logger';
 2 | import { Mastra } from '@mastra/core';
 3 | 
 4 | import { birdCheckerAgent } from './agents/agent';
 5 | 
 6 | export const mastra = new Mastra({
 7 |   agents: { birdCheckerAgent },
 8 |   logger: createLogger({
 9 |     name: 'CONSOLE',
10 |     level: 'info',
11 |   }),
12 | });
13 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/.env.example:
--------------------------------------------------------------------------------
1 | NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
2 | ANTHROPIC_API_KEY=
3 | BRAINTRUST_API_KEY=

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/.eslintrc.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": ["next/core-web-vitals", "next/typescript"],
3 |   "rules": {
4 |     "@typescript-eslint/no-explicit-any": "off"
5 |   }
6 | }
7 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/.prettierrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/bird-checker-with-nextjs-and-eval/.prettierrc

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/global.d.ts:
--------------------------------------------------------------------------------
1 | declare module "@prisma/nextjs-monorepo-workaround-plugin";
2 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | /** @type {import('postcss-load-config').Config} */
2 | const config = {
3 |   plugins: {
4 |     tailwindcss: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/public/vercel.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/src/app/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/bird-checker-with-nextjs-and-eval/src/app/favicon.ico

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/src/app/fonts/GeistMonoVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/bird-checker-with-nextjs-and-eval/src/app/fonts/GeistMonoVF.woff

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/src/app/fonts/GeistVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/bird-checker-with-nextjs-and-eval/src/app/fonts/GeistVF.woff

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/src/components/ui/skeleton.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils";
 2 | 
 3 | function Skeleton({
 4 |   className,
 5 |   ...props
 6 | }: React.HTMLAttributes<HTMLDivElement>) {
 7 |   return (
 8 |     <div
 9 |       className={cn("animate-pulse rounded-md bg-muted", className)}
10 |       {...props}
11 |     />
12 |   );
13 | }
14 | 
15 | export { Skeleton };
16 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs-and-eval/src/mastra/index.ts:
--------------------------------------------------------------------------------
1 | import { Mastra } from "@mastra/core";
2 | 
3 | import { birdAgent } from "./agents";
4 | 
5 | export const mastra = new Mastra({
6 |   agents: { birdAgent },
7 | });
8 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/.env.example:
--------------------------------------------------------------------------------
1 | NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
2 | ANTHROPIC_API_KEY=

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/.eslintrc.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": ["next/core-web-vitals", "next/typescript"],
3 |   "rules": {
4 |     "@typescript-eslint/no-explicit-any": "off"
5 |   }
6 | }
7 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/.prettierrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/bird-checker-with-nextjs/.prettierrc

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/global.d.ts:
--------------------------------------------------------------------------------
1 | declare module "@prisma/nextjs-monorepo-workaround-plugin";
2 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | /** @type {import('postcss-load-config').Config} */
2 | const config = {
3 |   plugins: {
4 |     tailwindcss: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/public/vercel.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/src/app/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/bird-checker-with-nextjs/src/app/favicon.ico

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/src/app/fonts/GeistMonoVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/bird-checker-with-nextjs/src/app/fonts/GeistMonoVF.woff

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/src/app/fonts/GeistVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/bird-checker-with-nextjs/src/app/fonts/GeistVF.woff

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/src/components/ui/skeleton.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils";
 2 | 
 3 | function Skeleton({
 4 |   className,
 5 |   ...props
 6 | }: React.HTMLAttributes<HTMLDivElement>) {
 7 |   return (
 8 |     <div
 9 |       className={cn("animate-pulse rounded-md bg-muted", className)}
10 |       {...props}
11 |     />
12 |   );
13 | }
14 | 
15 | export { Skeleton };
16 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/src/lib/utils.ts:
--------------------------------------------------------------------------------
1 | import { clsx, type ClassValue } from "clsx";
2 | import { twMerge } from "tailwind-merge";
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs));
6 | }
7 | 

--------------------------------------------------------------------------------
/examples/bird-checker-with-nextjs/src/mastra/index.ts:
--------------------------------------------------------------------------------
1 | import { Mastra } from "@mastra/core";
2 | import { birdAgent } from "./agents";
3 | 
4 | export const mastra = new Mastra({
5 |   agents: { birdAgent },
6 | });
7 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/ai/custom-middleware.ts:
--------------------------------------------------------------------------------
1 | import { Experimental_LanguageModelV1Middleware } from 'ai';
2 | 
3 | export const customMiddleware: Experimental_LanguageModelV1Middleware = {};
4 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/app/(auth)/api/auth/[...nextauth]/route.ts:
--------------------------------------------------------------------------------
1 | export { GET, POST } from '@/app/(auth)/auth';
2 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/app/(chat)/opengraph-image.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/crypto-chatbot/app/(chat)/opengraph-image.png

--------------------------------------------------------------------------------
/examples/crypto-chatbot/app/(chat)/twitter-image.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/crypto-chatbot/app/(chat)/twitter-image.png

--------------------------------------------------------------------------------
/examples/crypto-chatbot/app/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/crypto-chatbot/app/favicon.ico

--------------------------------------------------------------------------------
/examples/crypto-chatbot/components/custom/theme-provider.tsx:
--------------------------------------------------------------------------------
1 | 'use client';
2 | 
3 | import { ThemeProvider as NextThemesProvider } from 'next-themes';
4 | import { type ThemeProviderProps } from 'next-themes/dist/types';
5 | 
6 | export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
7 |   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
8 | }
9 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/components/ui/skeleton.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from '@/lib/utils';
 2 | 
 3 | function Skeleton({
 4 |   className,
 5 |   ...props
 6 | }: React.HTMLAttributes<HTMLDivElement>) {
 7 |   return (
 8 |     <div
 9 |       className={cn('animate-pulse rounded-md bg-muted', className)}
10 |       {...props}
11 |     />
12 |   );
13 | }
14 | 
15 | export { Skeleton };
16 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/drizzle.config.ts:
--------------------------------------------------------------------------------
 1 | import { config } from 'dotenv';
 2 | import { defineConfig } from 'drizzle-kit';
 3 | 
 4 | config({
 5 |   path: '.env.local',
 6 | });
 7 | 
 8 | export default defineConfig({
 9 |   schema: './db/schema.ts',
10 |   out: './lib/drizzle',
11 |   dialect: 'postgresql',
12 |   dbCredentials: {
13 |     url: process.env.POSTGRES_URL!,
14 |   },
15 | });
16 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/envConfig.ts:
--------------------------------------------------------------------------------
1 | import env from '@next/env';
2 | 
3 | const projectDir = process.cwd();
4 | env.loadEnvConfig(projectDir);
5 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/lib/editor/react-renderer.tsx:
--------------------------------------------------------------------------------
 1 | import { createRoot } from 'react-dom/client';
 2 | 
 3 | export class ReactRenderer {
 4 |   static render(component: React.ReactElement, dom: HTMLElement) {
 5 |     const root = createRoot(dom);
 6 |     root.render(component);
 7 | 
 8 |     return {
 9 |       destroy: () => root.unmount(),
10 |     };
11 |   }
12 | }
13 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/middleware.ts:
--------------------------------------------------------------------------------
 1 | import NextAuth from 'next-auth';
 2 | 
 3 | import { authConfig } from '@/app/(auth)/auth.config';
 4 | 
 5 | export default NextAuth(authConfig).auth;
 6 | 
 7 | export const config = {
 8 |   matcher: ['/', '/:id', '/api/:path*', '/login', '/register'],
 9 | };
10 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/next-env.d.ts:
--------------------------------------------------------------------------------
1 | /// <reference types="next" />
2 | /// <reference types="next/image-types/global" />
3 | 
4 | // NOTE: This file should not be edited
5 | // see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.
6 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | /** @type {import('postcss-load-config').Config} */
2 | const config = {
3 |   plugins: {
4 |     tailwindcss: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/prettier.config.cjs:
--------------------------------------------------------------------------------
 1 | /** @type {import('prettier').Config} */
 2 | module.exports = {
 3 |   endOfLine: 'lf',
 4 |   semi: true,
 5 |   useTabs: false,
 6 |   singleQuote: true,
 7 |   tabWidth: 2,
 8 |   trailingComma: 'es5',
 9 | };
10 | 

--------------------------------------------------------------------------------
/examples/crypto-chatbot/public/fonts/geist-mono.woff2:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/crypto-chatbot/public/fonts/geist-mono.woff2

--------------------------------------------------------------------------------
/examples/crypto-chatbot/public/fonts/geist.woff2:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/crypto-chatbot/public/fonts/geist.woff2

--------------------------------------------------------------------------------
/examples/crypto-chatbot/public/images/demo-thumbnail.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/crypto-chatbot/public/images/demo-thumbnail.png

--------------------------------------------------------------------------------
/examples/dane/.env.sample:
--------------------------------------------------------------------------------
 1 | GITHUB_PERSONAL_ACCESS_TOKEN=
 2 | FIRECRAWL_API_KEY=
 3 | 
 4 | ISSUE_NUMBER=
 5 | OWNER=
 6 | REPO=
 7 | 
 8 | ANTHROPIC_API_KEY=
 9 | LINK_CHECKER_CHANNEL_ID=
10 | SLACK_BOT_TOKEN=
11 | SLACK_TEAM_ID=

--------------------------------------------------------------------------------
/examples/dane/.gitignore:
--------------------------------------------------------------------------------
1 | output.txt
2 | node_modules
3 | dist/
4 | .env*

--------------------------------------------------------------------------------
/examples/dane/src/mastra/agents/memory.ts:
--------------------------------------------------------------------------------
 1 | import { Memory } from '@mastra/memory';
 2 | import { UpstashStore } from '@mastra/upstash';
 3 | 
 4 | export const memory = new Memory({
 5 |   storage: new UpstashStore({
 6 |     url: 'http://localhost:8079',
 7 |     token: \`example_token\`,
 8 |     // TODO: do we need to implement this in Memory?
 9 |     // maxTokens: 39000,
10 |   }),
11 | });
12 | 

--------------------------------------------------------------------------------
/examples/dane/src/mastra/agents/model.ts:
--------------------------------------------------------------------------------
 1 | import { createAnthropic } from '@ai-sdk/anthropic';
 2 | 
 3 | import { config } from '../../config/index.js';
 4 | 
 5 | export const getBaseModelConfig = () => {
 6 |   const anthropic = createAnthropic({
 7 |     apiKey: config.getAnthropicApiKey(),
 8 |   });
 9 |   return anthropic('claude-3-5-sonnet-20241022');
10 | };
11 | 

--------------------------------------------------------------------------------
/examples/dane/src/mastra/workflows/index.ts:
--------------------------------------------------------------------------------
1 | export * from './chat.js';
2 | export * from './issue-labeler.js';
3 | export * from './commit-message.js';
4 | 

--------------------------------------------------------------------------------
/examples/dane/test-files/716a95a5c57a56d32a32b1c9592d6df0.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/dane/test-files/716a95a5c57a56d32a32b1c9592d6df0.png

--------------------------------------------------------------------------------
/examples/dane/test-files/sample-1.pdf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/dane/test-files/sample-1.pdf

--------------------------------------------------------------------------------
/examples/dane/test/data/05-versions-space.pdf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/dane/test/data/05-versions-space.pdf

--------------------------------------------------------------------------------
/examples/dane/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "moduleResolution": "bundler",
 5 |     "outDir": "./dist",
 6 |     "rootDir": "./src",
 7 |     "noEmit": false
 8 |   },
 9 |   "include": ["src/**/*"],
10 |   "exclude": ["node_modules", "**/*.test.ts"]
11 | }
12 | 

--------------------------------------------------------------------------------
/examples/fireworks-r1/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | node_modules
3 | memory.db
4 | 

--------------------------------------------------------------------------------
/examples/fireworks-r1/src/mastra/index.ts:
--------------------------------------------------------------------------------
 1 | import { Mastra } from '@mastra/core/mastra';
 2 | import { createLogger } from '@mastra/core/logger';
 3 | import { agent } from './agents';
 4 | 
 5 | export const mastra = new Mastra({
 6 |   agents: { agent },
 7 |   logger: createLogger({
 8 |     name: 'Mastra',
 9 |     level: 'info',
10 |   }),
11 | });
12 | 

--------------------------------------------------------------------------------
/examples/integrations/.gitignore:
--------------------------------------------------------------------------------
1 | output.txt
2 | node_modules
3 | .env.*
4 | .env

--------------------------------------------------------------------------------
/examples/mastra.db:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/mastra.db

--------------------------------------------------------------------------------
/examples/mcp-configuration/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/examples/mcp-configuration/src/mastra/index.ts:
--------------------------------------------------------------------------------
1 | import { Mastra } from '@mastra/core';
2 | 
3 | import { stockWeatherAgent } from './agents';
4 | 
5 | export const mastra = new Mastra({
6 |   agents: { stockWeatherAgent },
7 | });
8 | 

--------------------------------------------------------------------------------
/examples/memory-todo-agent/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | node_modules
3 | example.db
4 | 

--------------------------------------------------------------------------------
/examples/memory-todo-agent/src/mastra/index.ts:
--------------------------------------------------------------------------------
1 | import { Mastra } from '@mastra/core/mastra';
2 | 
3 | import { todoAgent } from './agents';
4 | 
5 | export const mastra = new Mastra({
6 |   agents: { todoAgent },
7 |   logger: false,
8 | });
9 | 

--------------------------------------------------------------------------------
/examples/memory-with-context/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | node_modules
3 | example.db
4 | 

--------------------------------------------------------------------------------
/examples/memory-with-context/CHANGELOG.md:
--------------------------------------------------------------------------------
1 | # memory-with-context
2 | 
3 | ## 0.0.1
4 | 

--------------------------------------------------------------------------------
/examples/memory-with-context/src/mastra/index.ts:
--------------------------------------------------------------------------------
1 | import { Mastra } from '@mastra/core';
2 | 
3 | import { memoryAgent } from './agents';
4 | 
5 | export const mastra = new Mastra({
6 |   agents: { memoryAgent },
7 | });
8 | 

--------------------------------------------------------------------------------
/examples/memory-with-libsql/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | node_modules
3 | example.db
4 | 

--------------------------------------------------------------------------------
/examples/memory-with-libsql/src/mastra/index.ts:
--------------------------------------------------------------------------------
1 | import { Mastra } from '@mastra/core';
2 | 
3 | import { chefAgent, memoryAgent } from './agents';
4 | 
5 | export const mastra = new Mastra({
6 |   agents: { chefAgent, memoryAgent },
7 | });
8 | 

--------------------------------------------------------------------------------
/examples/memory-with-pg/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | node_modules

--------------------------------------------------------------------------------
/examples/memory-with-pg/src/mastra/index.ts:
--------------------------------------------------------------------------------
 1 | import { Mastra } from '@mastra/core';
 2 | 
 3 | import 'dotenv/config';
 4 | 
 5 | import { chefAgent, memoryAgent } from './agents';
 6 | 
 7 | export const mastra = new Mastra({
 8 |   agents: { chefAgent, memoryAgent },
 9 | });
10 | 

--------------------------------------------------------------------------------
/examples/memory-with-upstash/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | node_modules

--------------------------------------------------------------------------------
/examples/memory-with-upstash/src/mastra/index.ts:
--------------------------------------------------------------------------------
1 | import { Mastra } from '@mastra/core';
2 | 
3 | import { chefAgent, memoryAgent } from './agents';
4 | 
5 | export const mastra = new Mastra({
6 |   agents: { chefAgent, memoryAgent },
7 | });
8 | 

--------------------------------------------------------------------------------
/examples/notebooklm-clone/README.md:
--------------------------------------------------------------------------------
1 | ## NotebookLM-Clone
2 | 
3 | Try the demo: [NotebookLM-Clone](https://notebooklm-mastra.vercel.app/)
4 | 
5 | Source code: [notebooklm-mastra](https://github.com/mastra-ai/notebooklm-mastra/)
6 | 
7 | Blog Post: [Building a NotebookLM clone with an agent orchestrator](https://mastra.ai/blog/notebooklm-clone-with-agent-orchestration)
8 | 

--------------------------------------------------------------------------------
/examples/openapi-spec-writer/.env.sample:
--------------------------------------------------------------------------------
 1 | # sample env
 2 | DB_URL=
 3 | FIRECRAWL_API_KEY=
 4 | GITHUB_API_KEY=
 5 | 
 6 | # agent llm provider api key
 7 | ANTHROPIC_API_KEY=
 8 | OPENAI_API_KEY=
 9 | 
10 | #logging
11 | UPSTASH_API_KEY=
12 | UPSTASH_URL=
13 | 
14 | # telemetry
15 | OTEL_SERVICE_NAME=
16 | OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf
17 | OTEL_EXPORTER_OTLP_ENDPOINT=
18 | OTEL_EXPORTER_OTLP_HEADERS=

--------------------------------------------------------------------------------
/examples/openapi-spec-writer/.eslintrc.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": ["next/core-web-vitals", "next/typescript"],
3 |   "rules": {
4 |     "typescript-eslint/no-explicit-any": "off",
5 |     "typescript-eslint/no-implicit-any": "off"
6 |   }
7 | }
8 | 

--------------------------------------------------------------------------------
/examples/openapi-spec-writer/.prettierrc:
--------------------------------------------------------------------------------
1 | {
2 |   "trailingComma": "es5",
3 |   "tabWidth": 2,
4 |   "semi": true,
5 |   "singleQuote": false
6 | }
7 | 

--------------------------------------------------------------------------------
/examples/openapi-spec-writer/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | /** @type {import('postcss-load-config').Config} */
2 | const config = {
3 |   plugins: {
4 |     tailwindcss: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 

--------------------------------------------------------------------------------
/examples/openapi-spec-writer/public/vercel.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>

--------------------------------------------------------------------------------
/examples/openapi-spec-writer/src/app/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/openapi-spec-writer/src/app/favicon.ico

--------------------------------------------------------------------------------
/examples/openapi-spec-writer/src/app/fonts/GeistMonoVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/openapi-spec-writer/src/app/fonts/GeistMonoVF.woff

--------------------------------------------------------------------------------
/examples/openapi-spec-writer/src/app/fonts/GeistVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/openapi-spec-writer/src/app/fonts/GeistVF.woff

--------------------------------------------------------------------------------
/examples/openapi-spec-writer/src/lib/utils.ts:
--------------------------------------------------------------------------------
1 | import { clsx, type ClassValue } from "clsx";
2 | import { twMerge } from "tailwind-merge";
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs));
6 | }
7 | 

--------------------------------------------------------------------------------
/examples/openapi-spec-writer/types.d.ts:
--------------------------------------------------------------------------------
1 | declare module "@prisma/nextjs-monorepo-workaround-plugin";
2 | 

--------------------------------------------------------------------------------
/examples/quick-start/src/mastra/index.ts:
--------------------------------------------------------------------------------
 1 | import { createLogger, Mastra } from '@mastra/core';
 2 | 
 3 | import { catOne } from './agents/agent';
 4 | import { logCatWorkflow } from './workflow';
 5 | 
 6 | export const mastra = new Mastra({
 7 |   agents: { catOne },
 8 |   workflows: { logCatWorkflow },
 9 |   logger: createLogger({
10 |     name: 'Mastra',
11 |     level: 'debug',
12 |   }),
13 | });
14 | 

--------------------------------------------------------------------------------
/examples/stock-price-tool/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/examples/stock-price-tool/jest.config.ts:
--------------------------------------------------------------------------------
 1 | export default {
 2 |   preset: 'ts-jest',
 3 |   extensionsToTreatAsEsm: ['.ts'],
 4 |   moduleNameMapper: {
 5 |     '^(\\.{1,2}/.*)\\.js#39;: '$1',
 6 |   },
 7 |   transform: {
 8 |     '^.+\\.tsx?#39;: [
 9 |       'ts-jest',
10 |       {
11 |         useESM: true,
12 |       },
13 |     ],
14 |   },
15 | };
16 | 

--------------------------------------------------------------------------------
/examples/stock-price-tool/src/mastra/index.ts:
--------------------------------------------------------------------------------
1 | import { Mastra } from '@mastra/core';
2 | 
3 | import { stockAgent } from './agents';
4 | 
5 | export const mastra = new Mastra({
6 |   agents: { stockAgent },
7 | });
8 | 

--------------------------------------------------------------------------------
/examples/stock-price-tool/src/mastra/tools/tools.test.ts:
--------------------------------------------------------------------------------
 1 | import { describe, it, expect } from 'vitest';
 2 | 
 3 | import { getStockPrice } from './stock-price';
 4 | 
 5 | describe('Test Tools', () => {
 6 |   it('should run the stockPrices', async () => {
 7 |     const result = await getStockPrice('AAPL');
 8 | 
 9 |     console.log(result);
10 |     expect(result).toBeDefined();
11 |   });
12 | });
13 | 

--------------------------------------------------------------------------------
/examples/travel-app/.eslintrc.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": ["next/core-web-vitals", "next/typescript"]
3 | }
4 | 

--------------------------------------------------------------------------------
/examples/travel-app/.prettierrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/travel-app/.prettierrc

--------------------------------------------------------------------------------
/examples/travel-app/jest.config.js:
--------------------------------------------------------------------------------
 1 | /** @type {import('ts-jest').JestConfigWithTsJest} */
 2 | module.exports = {
 3 |   preset: 'ts-jest',
 4 |   testEnvironment: 'node',
 5 |   moduleNameMapper: {
 6 |     '^@/(.*)#39;: '<rootDir>/src/$1',
 7 |   },
 8 |   testMatch: ['**/*.test.ts', '**/*.test.tsx'],
 9 | };
10 | 

--------------------------------------------------------------------------------
/examples/travel-app/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | /** @type {import('postcss-load-config').Config} */
2 | const config = {
3 |   plugins: {
4 |     tailwindcss: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 

--------------------------------------------------------------------------------
/examples/travel-app/public/fonts/geist-mono.woff2:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/travel-app/public/fonts/geist-mono.woff2

--------------------------------------------------------------------------------
/examples/travel-app/public/fonts/geist.woff2:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/travel-app/public/fonts/geist.woff2

--------------------------------------------------------------------------------
/examples/travel-app/public/vercel.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>

--------------------------------------------------------------------------------
/examples/travel-app/public/window.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>

--------------------------------------------------------------------------------
/examples/travel-app/src/app/api/sync/route.ts:
--------------------------------------------------------------------------------
 1 | import { NextResponse } from "next/server";
 2 | 
 3 | import { mastra } from "@/mastra";
 4 | 
 5 | export async function POST() {
 6 |   const { start } = mastra.getWorkflow("syncCsvDataWorkflow").createRun();
 7 | 
 8 |   await start();
 9 |   // Your cron logic here
10 |   return NextResponse.json({ success: true });
11 | }
12 | 

--------------------------------------------------------------------------------
/examples/travel-app/src/app/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/travel-app/src/app/favicon.ico

--------------------------------------------------------------------------------
/examples/travel-app/src/app/fonts/GeistMonoVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/travel-app/src/app/fonts/GeistMonoVF.woff

--------------------------------------------------------------------------------
/examples/travel-app/src/app/fonts/GeistVF.woff:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/travel-app/src/app/fonts/GeistVF.woff

--------------------------------------------------------------------------------
/examples/travel-app/src/lib/utils.ts:
--------------------------------------------------------------------------------
1 | import { clsx, type ClassValue } from 'clsx';
2 | import { twMerge } from 'tailwind-merge';
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs));
6 | }
7 | 

--------------------------------------------------------------------------------
/examples/travel-app/src/mastra/agents/storage.ts:
--------------------------------------------------------------------------------
1 | import { PostgresStore } from "@mastra/pg";
2 | 
3 | const url = "postgresql://postgres:postgres@localhost:5433/mastra";
4 | 
5 | export const storage = new PostgresStore({
6 |   connectionString: url,
7 | });
8 | 

--------------------------------------------------------------------------------
/examples/travel-app/vercel.json:
--------------------------------------------------------------------------------
1 | {
2 |   "crons": [
3 |     {
4 |       "path": "/api/cron",
5 |       "schedule": "0 5 * * *"
6 |     }
7 |   ]
8 | }
9 | 

--------------------------------------------------------------------------------
/examples/voice/interactive-story/.eslintrc.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": ["next/core-web-vitals", "next/typescript"]
3 | }
4 | 

--------------------------------------------------------------------------------
/examples/voice/interactive-story/app/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/examples/voice/interactive-story/app/favicon.ico

--------------------------------------------------------------------------------
/examples/voice/interactive-story/app/page.tsx:
--------------------------------------------------------------------------------
 1 | 'use client';
 2 | 
 3 | import StoryManager from './components/StoryManager';
 4 | 
 5 | export default function Home() {
 6 |   return (
 7 |     <div className="min-h-screen p-8">
 8 |       <StoryManager />
 9 |     </div>
10 |   );
11 | }
12 | 

--------------------------------------------------------------------------------
/examples/voice/interactive-story/lib/mastra-client.ts:
--------------------------------------------------------------------------------
1 | import { MastraClient } from '@mastra/client-js';
2 | 
3 | export const mastraClient = new MastraClient({
4 |   baseUrl: 'http://localhost:4111',
5 | });
6 | 

--------------------------------------------------------------------------------
/examples/voice/interactive-story/next.config.ts:
--------------------------------------------------------------------------------
1 | import type { NextConfig } from 'next';
2 | 
3 | const nextConfig: NextConfig = {
4 |   /* config options here */
5 | };
6 | 
7 | export default nextConfig;
8 | 

--------------------------------------------------------------------------------
/examples/voice/interactive-story/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | const config = {
2 |   plugins: ["@tailwindcss/postcss"],
3 | };
4 | 
5 | export default config;
6 | 

--------------------------------------------------------------------------------
/examples/voice/interactive-story/src/mastra/index.ts:
--------------------------------------------------------------------------------
 1 | import { createLogger } from '@mastra/core/logger';
 2 | import { Mastra } from '@mastra/core/mastra';
 3 | 
 4 | import { storyTellerAgent } from './agents';
 5 | 
 6 | export const mastra = new Mastra({
 7 |   agents: { storyTellerAgent },
 8 |   logger: createLogger({
 9 |     name: 'Mastra',
10 |     level: 'info',
11 |   }),
12 | });
13 | 

--------------------------------------------------------------------------------
/examples/voice/voice-memo-app/.eslintrc.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": ["next/core-web-vitals", "next/typescript"]
3 | }
4 | 

--------------------------------------------------------------------------------
/examples/voice/voice-memo-app/next.config.ts:
--------------------------------------------------------------------------------
1 | import type { NextConfig } from 'next';
2 | 
3 | const nextConfig: NextConfig = {
4 |   serverExternalPackages: ['@mastra/*'],
5 | };
6 | 
7 | export default nextConfig;
8 | 

--------------------------------------------------------------------------------
/examples/voice/voice-memo-app/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | /** @type {import('postcss-load-config').Config} */
2 | const config = {
3 |   plugins: {
4 |     tailwindcss: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 

--------------------------------------------------------------------------------
/examples/voice/voice-memo-app/src/mastra/index.ts:
--------------------------------------------------------------------------------
 1 | import { createLogger } from '@mastra/core/logger';
 2 | import { Mastra } from '@mastra/core/mastra';
 3 | 
 4 | import { noteTakerAgent } from './agents';
 5 | 
 6 | export const mastra = new Mastra({
 7 |   agents: { noteTakerAgent },
 8 |   logger: createLogger({
 9 |     name: 'Mastra',
10 |     level: 'info',
11 |   }),
12 | });
13 | 

--------------------------------------------------------------------------------
/examples/workflow-ai-recruiter/.env.example:
--------------------------------------------------------------------------------
1 | OPENAI_API_KEY=

--------------------------------------------------------------------------------
/examples/workflow-ai-recruiter/.gitignore:
--------------------------------------------------------------------------------
1 | output.txt
2 | node_modules
3 | dist
4 | 

--------------------------------------------------------------------------------
/examples/workflow-with-inline-steps/.gitignore:
--------------------------------------------------------------------------------
1 | output.txt
2 | node_modules
3 | dist
4 | 

--------------------------------------------------------------------------------
/examples/workflow-with-inline-steps/src/mastra/index.ts:
--------------------------------------------------------------------------------
 1 | import { Mastra } from '@mastra/core';
 2 | 
 3 | import { myWorkflow } from './workflows';
 4 | 
 5 | export const mastra = new Mastra({
 6 |   workflows: {
 7 |     myWorkflow,
 8 |   },
 9 | });
10 | 

--------------------------------------------------------------------------------
/examples/workflow-with-memory/.env.example:
--------------------------------------------------------------------------------
1 | # Get your OpenAI API Key here: https://platform.openai.com/account/api-keys
2 | OPENAI_API_KEY=****
3 | 
4 | # Instructions to create a database here: https://vercel.com/docs/storage/vercel-postgres/quickstart
5 | POSTGRES_URL=****
6 | 

--------------------------------------------------------------------------------
/examples/workflow-with-memory/.gitignore:
--------------------------------------------------------------------------------
1 | output.txt
2 | node_modules
3 | .env.development

--------------------------------------------------------------------------------
/examples/workflow-with-separate-steps/.gitignore:
--------------------------------------------------------------------------------
1 | output.txt
2 | node_modules
3 | dist
4 | 

--------------------------------------------------------------------------------
/examples/workflow-with-separate-steps/src/mastra/index.ts:
--------------------------------------------------------------------------------
 1 | import { Mastra } from '@mastra/core';
 2 | 
 3 | import { myWorkflow } from './workflows';
 4 | 
 5 | export const mastra = new Mastra({
 6 |   workflows: {
 7 |     myWorkflow,
 8 |   },
 9 | });
10 | 

--------------------------------------------------------------------------------
/examples/yc-directory/.gitignore:
--------------------------------------------------------------------------------
1 | output.txt
2 | node_modules
3 | dist
4 | 

--------------------------------------------------------------------------------
/examples/yc-directory/src/mastra/index.ts:
--------------------------------------------------------------------------------
 1 | import { createLogger } from '@mastra/core/logger';
 2 | import { Mastra } from '@mastra/core';
 3 | 
 4 | import { ycAgent } from './agents';
 5 | 
 6 | export const mastra = new Mastra({
 7 |   agents: { ycAgent },
 8 |   logger: createLogger({
 9 |     name: 'Mastra',
10 |     level: 'info',
11 |   }),
12 | });
13 | 

--------------------------------------------------------------------------------
/explorations/mcp-registry-client/.editorconfig:
--------------------------------------------------------------------------------
1 | root = true
2 | [*]
3 | end_of_line = lf
4 | insert_final_newline = true
5 | tab_width = 2 
6 | indent_style = tab
7 | indent_size = 2
8 | 

--------------------------------------------------------------------------------
/explorations/mcp-registry-client/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules
2 | **/dist
3 | dist
4 | .mcp-config.json
5 | 

--------------------------------------------------------------------------------
/explorations/mcp-registry-client/.prettierrc:
--------------------------------------------------------------------------------
1 | { "semi": false }
2 | 

--------------------------------------------------------------------------------
/explorations/mcp-registry-client/examples/tui/.gitattributes:
--------------------------------------------------------------------------------
1 | * text=auto eol=lf
2 | 

--------------------------------------------------------------------------------
/explorations/mcp-registry-client/examples/tui/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules
2 | dist

--------------------------------------------------------------------------------
/explorations/mcp-registry-client/examples/tui/.prettierignore:
--------------------------------------------------------------------------------
1 | dist
2 | 

--------------------------------------------------------------------------------
/explorations/mcp-registry-client/examples/tui/src/cli.tsx:
--------------------------------------------------------------------------------
1 | #!/usr/bin/env node
2 | import React from 'react';
3 | import {render} from 'ink';
4 | import App from './app.js';
5 | 
6 | render(<App />);
7 | 

--------------------------------------------------------------------------------
/explorations/mcp-registry-client/examples/tui/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@sindresorhus/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		"outDir": "dist"
 5 | 	},
 6 | 	"include": [
 7 | 		"src"
 8 | 	]
 9 | }
10 | 

--------------------------------------------------------------------------------
/explorations/mcp-registry-client/packages/mcp-registry/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from "./registry.js"
2 | export * from "./server.js"
3 | 

--------------------------------------------------------------------------------
/explorations/mcp-registry-client/pnpm-workspace.yaml:
--------------------------------------------------------------------------------
1 | packages:
2 |   - 'packages/*'
3 |   - 'examples/*'
4 | 

--------------------------------------------------------------------------------
/integrations/composio/dts.config.mjs:
--------------------------------------------------------------------------------
1 | import image from '@rollup/plugin-image';
2 | 
3 | export default {
4 |   rollup(config, options) {
5 |     config.plugins.push(image());
6 |     return config;
7 |   },
8 | };
9 | 

--------------------------------------------------------------------------------
/integrations/composio/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/integrations/composio/jest.config.js:
--------------------------------------------------------------------------------
1 | /** @type {import('ts-jest').JestConfigWithTsJest} **/
2 | module.exports = {
3 |   testEnvironment: 'node',
4 |   transform: {
5 |     '^.+.tsx?#39;: ['ts-jest', {}],
6 |     '^.+.svg#39;: '<rootDir>/svgTransform.js',
7 |   },
8 | };
9 | 

--------------------------------------------------------------------------------
/integrations/composio/src/assets/firecrawl.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/integrations/composio/src/assets/firecrawl.png

--------------------------------------------------------------------------------
/integrations/composio/src/types.ts:
--------------------------------------------------------------------------------
1 | export type ComposioConfig = {
2 |   API_KEY: string;
3 |   baseUrl?: string;
4 |   connectedAccountId: string;
5 |   entityId: string;
6 |   [key: string]: any;
7 | };
8 | 

--------------------------------------------------------------------------------
/integrations/composio/svgTransform.js:
--------------------------------------------------------------------------------
 1 | module.exports = {
 2 |   process() {
 3 |     return {
 4 |       code: \`module.exports = {};\`,
 5 |     };
 6 |   },
 7 |   getCacheKey() {
 8 |     // The output is always the same.
 9 |     return 'svgTransform';
10 |   },
11 | };
12 | 

--------------------------------------------------------------------------------
/integrations/composio/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/integrations/firecrawl/.prettierignore:
--------------------------------------------------------------------------------
1 | /src/client

--------------------------------------------------------------------------------
/integrations/firecrawl/dts.config.mjs:
--------------------------------------------------------------------------------
1 | import image from '@rollup/plugin-image';
2 | 
3 | export default {
4 |   rollup(config, options) {
5 |     config.plugins.push(image());
6 |     return config;
7 |   },
8 | };
9 | 

--------------------------------------------------------------------------------
/integrations/firecrawl/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/integrations/firecrawl/jest.config.js:
--------------------------------------------------------------------------------
1 | /** @type {import('ts-jest').JestConfigWithTsJest} **/
2 | module.exports = {
3 |   testEnvironment: 'node',
4 |   transform: {
5 |     '^.+.tsx?#39;: ['ts-jest', {}],
6 |     '^.+.svg#39;: '<rootDir>/svgTransform.js',
7 |   },
8 | };
9 | 

--------------------------------------------------------------------------------
/integrations/firecrawl/src/assets/firecrawl.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/integrations/firecrawl/src/assets/firecrawl.png

--------------------------------------------------------------------------------
/integrations/firecrawl/src/client/index.ts:
--------------------------------------------------------------------------------
1 | // This file is auto-generated by @hey-api/openapi-ts
2 | export * from './schemas.gen';
3 | export * from './sdk.gen';
4 | export * from './types.gen';
5 | 

--------------------------------------------------------------------------------
/integrations/firecrawl/src/types.ts:
--------------------------------------------------------------------------------
1 | export type FirecrawlConfig = {
2 |   API_KEY: string;
3 |   [key: string]: any;
4 | };
5 | 

--------------------------------------------------------------------------------
/integrations/firecrawl/svgTransform.js:
--------------------------------------------------------------------------------
 1 | module.exports = {
 2 |   process() {
 3 |     return {
 4 |       code: \`module.exports = {};\`,
 5 |     };
 6 |   },
 7 |   getCacheKey() {
 8 |     // The output is always the same.
 9 |     return 'svgTransform';
10 |   },
11 | };
12 | 

--------------------------------------------------------------------------------
/integrations/firecrawl/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/integrations/github/.prettierignore:
--------------------------------------------------------------------------------
1 | /src/client

--------------------------------------------------------------------------------
/integrations/github/dts.config.mjs:
--------------------------------------------------------------------------------
 1 | import image from '@rollup/plugin-image';
 2 | import { defineConfig } from 'dts-cli';
 3 | 
 4 | export default defineConfig({
 5 |   rollup: {
 6 |     format: 'esm',
 7 |     plugins: [
 8 |       image({
 9 |         include: ['**/*.png', '**/*.jpg', '**/*.svg'],
10 |         dom: true
11 |       })
12 |     ]
13 |   }
14 | });
15 | 

--------------------------------------------------------------------------------
/integrations/github/eslint.config.js:
--------------------------------------------------------------------------------
 1 | import { createConfig } from '@internal/lint/eslint';
 2 | 
 3 | const config = await createConfig();
 4 | 
 5 | /** @type {import("eslint").Linter.Config[]} */
 6 | export default [
 7 |   ...config.map(conf => ({
 8 |     ...conf,
 9 |     ignores: [...(conf.ignores || []), '**/services.gen.ts'],
10 |   })),
11 | ];
12 | 

--------------------------------------------------------------------------------
/integrations/github/jest.config.js:
--------------------------------------------------------------------------------
1 | /** @type {import('ts-jest').JestConfigWithTsJest} **/
2 | module.exports = {
3 |   testEnvironment: 'node',
4 |   transform: {
5 |     '^.+.tsx?#39;: ['ts-jest', {}],
6 |     '^.+.svg#39;: '<rootDir>/svgTransform.js',
7 |   },
8 | };
9 | 

--------------------------------------------------------------------------------
/integrations/github/src/assets/github.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/integrations/github/src/assets/github.png

--------------------------------------------------------------------------------
/integrations/github/src/client/index.ts:
--------------------------------------------------------------------------------
1 | // This file is auto-generated by @hey-api/openapi-ts
2 | export * from './schemas.gen';
3 | export * from './services.gen';
4 | export * from './types.gen';
5 | 

--------------------------------------------------------------------------------
/integrations/github/src/types.ts:
--------------------------------------------------------------------------------
1 | export type GithubConfig = {
2 |   PERSONAL_ACCESS_TOKEN: string;
3 |   [key: string]: any;
4 | };
5 | 
6 | 

--------------------------------------------------------------------------------
/integrations/github/svgTransform.js:
--------------------------------------------------------------------------------
 1 | module.exports = {
 2 |   process() {
 3 |     return {
 4 |       code: \`module.exports = {};\`,
 5 |     };
 6 |   },
 7 |   getCacheKey() {
 8 |     // The output is always the same.
 9 |     return 'svgTransform';
10 |   },
11 | };
12 | 

--------------------------------------------------------------------------------
/integrations/github/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.node.json",
 3 |   "include": [
 4 |     "src"
 5 |   ],
 6 |   "exclude": [
 7 |     "node_modules",
 8 |     "**/*.test.ts"
 9 |   ]
10 | }
11 | 

--------------------------------------------------------------------------------
/integrations/ragie/dts.config.ts:
--------------------------------------------------------------------------------
1 | import image from '@rollup/plugin-image';
2 | 
3 | export default {
4 |   rollup(config, options) {
5 |     config.plugins.push(image());
6 |     return config;
7 |   },
8 | };
9 | 

--------------------------------------------------------------------------------
/integrations/ragie/jest.config.js:
--------------------------------------------------------------------------------
1 | /** @type {import('ts-jest').JestConfigWithTsJest} **/
2 | module.exports = {
3 |   testEnvironment: 'node',
4 |   transform: {
5 |     '^.+.tsx?#39;: ['ts-jest', {}],
6 |     '^.+.svg#39;: '<rootDir>/svgTransform.js',
7 |   },
8 | };
9 | 

--------------------------------------------------------------------------------
/integrations/ragie/src/assets/ragie.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/integrations/ragie/src/assets/ragie.png

--------------------------------------------------------------------------------
/integrations/ragie/src/client/index.ts:
--------------------------------------------------------------------------------
1 | // This file is auto-generated by @hey-api/openapi-ts
2 | export * from './schemas.gen';
3 | export * from './services.gen';
4 | export * from './types.gen';
5 | 

--------------------------------------------------------------------------------
/integrations/ragie/src/types.ts:
--------------------------------------------------------------------------------
1 | export type RagieConfig = {
2 |   API_KEY: string;
3 |   [key: string]: any;
4 | };
5 | 

--------------------------------------------------------------------------------
/integrations/ragie/svgTransform.js:
--------------------------------------------------------------------------------
 1 | module.exports = {
 2 |   process() {
 3 |     return {
 4 |       code: \`module.exports = {};\`,
 5 |     };
 6 |   },
 7 |   getCacheKey() {
 8 |     // The output is always the same.
 9 |     return 'svgTransform';
10 |   },
11 | };
12 | 

--------------------------------------------------------------------------------
/integrations/ragie/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/integrations/stabilityai/.prettierignore:
--------------------------------------------------------------------------------
1 | /src/client

--------------------------------------------------------------------------------
/integrations/stabilityai/dts.config.mjs:
--------------------------------------------------------------------------------
1 | import image from '@rollup/plugin-image';
2 | 
3 | export default {
4 |   rollup(config, options) {
5 |     config.plugins.push(image());
6 |     return config;
7 |   },
8 | };
9 | 

--------------------------------------------------------------------------------
/integrations/stabilityai/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/integrations/stabilityai/jest.config.js:
--------------------------------------------------------------------------------
1 | /** @type {import('ts-jest').JestConfigWithTsJest} **/
2 | module.exports = {
3 |   testEnvironment: 'node',
4 |   transform: {
5 |     '^.+.tsx?#39;: ['ts-jest', {}],
6 |     '^.+.svg#39;: '<rootDir>/svgTransform.js',
7 |   },
8 | };
9 | 

--------------------------------------------------------------------------------
/integrations/stabilityai/src/client/index.ts:
--------------------------------------------------------------------------------
1 | export * from './sdk'
2 | export * from './zodSchema'

--------------------------------------------------------------------------------
/integrations/stabilityai/src/types.ts:
--------------------------------------------------------------------------------
1 | export type StabilityAiConfig = {
2 |   API_KEY: string;
3 |   [key: string]: any;
4 | };
5 | 

--------------------------------------------------------------------------------
/integrations/stabilityai/svgTransform.js:
--------------------------------------------------------------------------------
 1 | module.exports = {
 2 |   process() {
 3 |     return {
 4 |       code: \`module.exports = {};\`,
 5 |     };
 6 |   },
 7 |   getCacheKey() {
 8 |     // The output is always the same.
 9 |     return 'svgTransform';
10 |   },
11 | };
12 | 

--------------------------------------------------------------------------------
/integrations/stabilityai/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/mastra-homepage.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/mastra-homepage.png

--------------------------------------------------------------------------------
/packages/_config/CHANGELOG.md:
--------------------------------------------------------------------------------
 1 | # @internal/lint
 2 | 
 3 | ## 0.0.1
 4 | 
 5 | ### Patch Changes
 6 | 
 7 | - fd4a1d7: Update cjs bundling to make sure files are split
 8 | 
 9 | ## 0.0.1-alpha.0
10 | 
11 | ### Patch Changes
12 | 
13 | - fd4a1d7: Update cjs bundling to make sure files are split
14 | 

--------------------------------------------------------------------------------
/packages/_config/src/index.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/_config/src/index.js

--------------------------------------------------------------------------------
/packages/_config/src/prettier.js:
--------------------------------------------------------------------------------
 1 | module.exports = {
 2 |   endOfLine: 'lf',
 3 |   semi: true,
 4 |   singleQuote: true,
 5 |   tabWidth: 2,
 6 |   useTabs: false,
 7 |   trailingComma: 'all',
 8 |   bracketSpacing: true,
 9 |   printWidth: 120,
10 |   arrowParens: 'avoid',
11 | };
12 | 

--------------------------------------------------------------------------------
/packages/cli/eslint.config.js:
--------------------------------------------------------------------------------
 1 | import { createConfig } from '@internal/lint/eslint';
 2 | 
 3 | const config = await createConfig();
 4 | 
 5 | /** @type {import("eslint").Linter.Config[]} */
 6 | export default [
 7 |   ...config,
 8 |   {
 9 |     ignores: ['src/playground/**', 'src/starter-files/**'],
10 |   },
11 | ];
12 | 

--------------------------------------------------------------------------------
/packages/cli/mastra-cli.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/cli/mastra-cli.png

--------------------------------------------------------------------------------
/packages/cli/mastra-homepage.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/cli/mastra-homepage.png

--------------------------------------------------------------------------------
/packages/cli/src/playground/postcss.config.js:
--------------------------------------------------------------------------------
1 | export default {
2 |   plugins: {
3 |     tailwindcss: {},
4 |     autoprefixer: {},
5 |   },
6 | };
7 | 

--------------------------------------------------------------------------------
/packages/cli/src/playground/public/mastra-light.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/cli/src/playground/public/mastra-light.ico

--------------------------------------------------------------------------------
/packages/cli/src/playground/src/assets/fonts/CommitMono.otf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/cli/src/playground/src/assets/fonts/CommitMono.otf

--------------------------------------------------------------------------------
/packages/cli/src/playground/src/assets/fonts/InterVariable.ttf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/cli/src/playground/src/assets/fonts/InterVariable.ttf

--------------------------------------------------------------------------------
/packages/cli/src/playground/src/assets/fonts/TASAExplorerVF.woff2:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/cli/src/playground/src/assets/fonts/TASAExplorerVF.woff2

--------------------------------------------------------------------------------
/packages/cli/src/playground/src/components/ui/score-indicator.tsx:
--------------------------------------------------------------------------------
1 | import { Badge } from './badge';
2 | 
3 | export function ScoreIndicator({ score }: { score: number }) {
4 |   return <Badge variant="secondary">{score.toFixed(2)}</Badge>;
5 | }
6 | 

--------------------------------------------------------------------------------
/packages/cli/src/playground/src/components/ui/skeleton.tsx:
--------------------------------------------------------------------------------
1 | import { cn } from '../../lib/utils';
2 | 
3 | function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
4 |   return <div className={cn('animate-pulse rounded-md bg-muted/50', className)} {...props} />;
5 | }
6 | 
7 | export { Skeleton };
8 | 

--------------------------------------------------------------------------------
/packages/cli/src/playground/src/main.tsx:
--------------------------------------------------------------------------------
 1 | import { StrictMode } from 'react';
 2 | 
 3 | import '@/index.css';
 4 | 
 5 | import { createRoot } from 'react-dom/client';
 6 | 
 7 | import App from './App.tsx';
 8 | import './index.css';
 9 | 
10 | createRoot(document.getElementById('root')!).render(
11 |   <StrictMode>
12 |     <App />
13 |   </StrictMode>,
14 | );
15 | 

--------------------------------------------------------------------------------
/packages/cli/src/playground/src/types.ts:
--------------------------------------------------------------------------------
 1 | export interface Message {
 2 |   id: string;
 3 |   role: 'user' | 'assistant';
 4 |   content: any;
 5 |   isError?: boolean;
 6 | }
 7 | 
 8 | export interface ChatProps {
 9 |   agentId: string;
10 |   agentName?: string;
11 |   threadId?: string;
12 |   initialMessages?: Message[];
13 |   memory?: boolean;
14 |   url?: string;
15 | }
16 | 

--------------------------------------------------------------------------------
/packages/cli/src/playground/src/vite-env.d.ts:
--------------------------------------------------------------------------------
1 | /// <reference types="vite/client" />
2 | 

--------------------------------------------------------------------------------
/packages/cli/src/playground/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "files": [],
 3 |   "references": [
 4 |     {
 5 |       "path": "./tsconfig.app.json"
 6 |     },
 7 |     {
 8 |       "path": "./tsconfig.node.json"
 9 |     }
10 |   ],
11 |   "compilerOptions": {
12 |     "baseUrl": ".",
13 |     "paths": {
14 |       "@/*": ["./src/*"]
15 |     }
16 |   }
17 | }
18 | 

--------------------------------------------------------------------------------
/packages/cli/src/services/service.env.ts:
--------------------------------------------------------------------------------
1 | export abstract class EnvService {
2 |   abstract getEnvValue(key: string): Promise<string | null>;
3 |   abstract setEnvValue(key: string, value: string): Promise<void>;
4 | }
5 | 

--------------------------------------------------------------------------------
/packages/cli/src/utils/find-api-keys.ts:
--------------------------------------------------------------------------------
 1 | export function findApiKeys() {
 2 |   const apiKeyPattern = /_API_KEY$/;
 3 | 
 4 |   const apiKeys = Object.entries(process.env)
 5 |     .filter(([key, value]) => apiKeyPattern.test(key) && value)
 6 |     .map(([key, value]) => ({ name: key, value }));
 7 | 
 8 |   return apiKeys;
 9 | }
10 | 

--------------------------------------------------------------------------------
/packages/cli/src/utils/logger.ts:
--------------------------------------------------------------------------------
1 | import { createLogger } from '@mastra/core/logger';
2 | 
3 | export const logger = createLogger({
4 |   name: 'Mastra CLI',
5 |   level: 'debug',
6 | });
7 | 

--------------------------------------------------------------------------------
/packages/cli/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.node.json",
 3 |   "exclude": [
 4 |     "node_modules",
 5 |     "**/*.test.ts",
 6 |     "src/starter-files/**/*.ts",
 7 |     "src/playground/**",
 8 |     "dist/**",
 9 |     "eslint.config.js"
10 |   ]
11 | }
12 | 

--------------------------------------------------------------------------------
/packages/cli/tsup.config.js:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'tsup';
 2 | 
 3 | export default defineConfig({
 4 |   entry: ['src/index.ts', 'src/analytics/index.ts', 'src/commands/create/create.ts'],
 5 |   treeshake: true,
 6 |   format: 'esm',
 7 |   dts: true,
 8 |   clean: true,
 9 | });
10 | 

--------------------------------------------------------------------------------
/packages/cli/turbo.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://turbo.build/schema.json",
 3 |   "extends": ["//"],
 4 |   "tasks": {
 5 |     "build": {
 6 |       "dependsOn": ["^build"],
 7 |       "outputs": ["dist/**", "src/playground/dist/**"],
 8 |       "inputs": ["$TURBO_DEFAULTquot;, "./tsup.config.js"]
 9 |     }
10 |   }
11 | }
12 | 

--------------------------------------------------------------------------------
/packages/cli/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/packages/core/.gitignore:
--------------------------------------------------------------------------------
1 | *.log
2 | .DS_Store
3 | node_modules/
4 | dist/
5 | .env
6 | memory:

--------------------------------------------------------------------------------
/packages/core/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/packages/core/src/eval/index.ts:
--------------------------------------------------------------------------------
1 | export { Metric, type MetricResult } from './metric';
2 | export { evaluate } from './evaluation';
3 | export type { TestInfo } from './types';
4 | 

--------------------------------------------------------------------------------
/packages/core/src/eval/metric.ts:
--------------------------------------------------------------------------------
1 | export interface MetricResult {
2 |   score: number;
3 |   info?: Record<string, any>;
4 | }
5 | 
6 | export abstract class Metric {
7 |   abstract measure(input: string, output: string): Promise<MetricResult>;
8 | }
9 | 

--------------------------------------------------------------------------------
/packages/core/src/eval/types.ts:
--------------------------------------------------------------------------------
1 | export interface TestInfo {
2 |   testName?: string;
3 |   testPath?: string;
4 | }
5 | 

--------------------------------------------------------------------------------
/packages/core/src/integration/index.ts:
--------------------------------------------------------------------------------
1 | export * from './integration';
2 | export * from './openapi-toolset';
3 | 

--------------------------------------------------------------------------------
/packages/core/src/integration/index.warning.ts:
--------------------------------------------------------------------------------
1 | export * from './integration.warning';
2 | export * from './openapi-toolset.warning';
3 | 

--------------------------------------------------------------------------------
/packages/core/src/integration/integration.warning.ts:
--------------------------------------------------------------------------------
 1 | import { Integration as BaseIntegration } from './integration';
 2 | 
 3 | export class Integration<ToolsParams = void, ApiClient = void> extends BaseIntegration<ToolsParams, ApiClient> {
 4 |   constructor() {
 5 |     super();
 6 | 
 7 |     console.warn('Please import "Integration" from "@mastra/core/integration" instead of "@mastra/core"');
 8 |   }
 9 | }
10 | 

--------------------------------------------------------------------------------
/packages/core/src/integration/openapi-toolset.warning.ts:
--------------------------------------------------------------------------------
 1 | import { OpenAPIToolset as BaseOpenAPIToolset } from './openapi-toolset';
 2 | 
 3 | export abstract class OpenAPIToolset extends BaseOpenAPIToolset {
 4 |   constructor() {
 5 |     super();
 6 | 
 7 |     console.warn('Please import "OpenAPIToolset" from "@mastra/core/integration" instead of "@mastra/core"');
 8 |   }
 9 | }
10 | 

--------------------------------------------------------------------------------
/packages/core/src/llm/model/index.ts:
--------------------------------------------------------------------------------
1 | export * from './base';
2 | export * from './model';
3 | 

--------------------------------------------------------------------------------
/packages/core/src/memory/index.ts:
--------------------------------------------------------------------------------
1 | export * from './types';
2 | export * from './memory';
3 | 

--------------------------------------------------------------------------------
/packages/core/src/network/index.ts:
--------------------------------------------------------------------------------
1 | export * from './network';
2 | export * from './types';
3 | 

--------------------------------------------------------------------------------
/packages/core/src/network/types.ts:
--------------------------------------------------------------------------------
 1 | import type { LanguageModelV1 } from 'ai';
 2 | import type { Agent } from '../agent';
 3 | 
 4 | export type AgentNetworkConfig = {
 5 |   name: string;
 6 |   agents: Agent[];
 7 |   model: LanguageModelV1;
 8 |   instructions: string;
 9 | };
10 | 

--------------------------------------------------------------------------------
/packages/core/src/relevance/index.ts:
--------------------------------------------------------------------------------
1 | export * from './cohere';
2 | export * from './mastra-agent';
3 | export * from './relevance-score-provider';
4 | 

--------------------------------------------------------------------------------
/packages/core/src/run/types.ts:
--------------------------------------------------------------------------------
1 | export type RunStatus = 'created' | 'running' | 'completed' | 'failed';
2 | export type Run = {
3 |   runId?: string;
4 |   runStatus?: RunStatus;
5 | };
6 | 

--------------------------------------------------------------------------------
/packages/core/src/storage/index.ts:
--------------------------------------------------------------------------------
1 | export * from './base';
2 | export * from './types';
3 | export * from './constants';
4 | 

--------------------------------------------------------------------------------
/packages/core/src/storage/index.warning.ts:
--------------------------------------------------------------------------------
1 | export * from './base.warning';
2 | export * from './types';
3 | 

--------------------------------------------------------------------------------
/packages/core/src/storage/libsql/index.test.ts:
--------------------------------------------------------------------------------
 1 | import { createTestSuite } from '../test-utils/storage';
 2 | 
 3 | import { DefaultStorage } from './index';
 4 | 
 5 | // Test database configuration
 6 | const TEST_DB_URL = 'file::memory:?cache=shared'; // Use in-memory SQLite for tests
 7 | 
 8 | createTestSuite(
 9 |   new DefaultStorage({
10 |     config: { url: TEST_DB_URL },
11 |   }),
12 | );
13 | 

--------------------------------------------------------------------------------
/packages/core/src/telemetry/index.ts:
--------------------------------------------------------------------------------
1 | export * from './types';
2 | export * from './telemetry.decorators';
3 | export * from './utility';
4 | export { OTLPTraceExporter as OTLPStorageExporter } from './storage-exporter';
5 | export { Telemetry } from './telemetry';
6 | 

--------------------------------------------------------------------------------
/packages/core/src/telemetry/utility.ts:
--------------------------------------------------------------------------------
 1 | import { trace } from '@opentelemetry/api';
 2 | 
 3 | // Helper function to check if telemetry is active
 4 | export function hasActiveTelemetry(tracerName: string = 'default-tracer'): boolean {
 5 |   try {
 6 |     return !!trace.getTracer(tracerName);
 7 |   } catch {
 8 |     return false;
 9 |   }
10 | }
11 | 

--------------------------------------------------------------------------------
/packages/core/src/tools/index.ts:
--------------------------------------------------------------------------------
1 | export * from './tool';
2 | export * from './types';
3 | 

--------------------------------------------------------------------------------
/packages/core/src/vector/filter/index.ts:
--------------------------------------------------------------------------------
1 | export * from './base';
2 | 

--------------------------------------------------------------------------------
/packages/core/src/vector/index.ts:
--------------------------------------------------------------------------------
1 | export * from './vector';
2 | export * from './types';
3 | 

--------------------------------------------------------------------------------
/packages/core/src/vector/index.warning.ts:
--------------------------------------------------------------------------------
 1 | import { MastraVector as BaseMastraVector } from './vector';
 2 | 
 3 | export * from './index';
 4 | 
 5 | export abstract class MastraVector extends BaseMastraVector {
 6 |   constructor() {
 7 |     super();
 8 | 
 9 |     this.logger.warn('Please import "MastraVector" from "@mastra/core/vector" instead of "@mastra/core"');
10 |   }
11 | }
12 | 

--------------------------------------------------------------------------------
/packages/core/src/voice/index.ts:
--------------------------------------------------------------------------------
1 | export * from './voice';
2 | export * from './composite-voice';
3 | 

--------------------------------------------------------------------------------
/packages/core/src/workflows/index.ts:
--------------------------------------------------------------------------------
1 | export * from './workflow';
2 | export * from './types';
3 | export * from './step';
4 | export * from './utils';
5 | 

--------------------------------------------------------------------------------
/packages/core/src/workflows/index.warning.ts:
--------------------------------------------------------------------------------
1 | export * from './workflow.warning';
2 | export * from './types';
3 | export * from './step';
4 | export * from './utils';
5 | 

--------------------------------------------------------------------------------
/packages/core/src/workflows/memory-vector.db:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/core/src/workflows/memory-vector.db

--------------------------------------------------------------------------------
/packages/core/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*", "vitest.config.ts", "tsup.config.ts"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/packages/core/turbo.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://turbo.build/schema.json",
 3 |   "extends": ["//"],
 4 |   "tasks": {
 5 |     "build": {
 6 |       "dependsOn": ["^build"],
 7 |       "outputs": ["dist/**"],
 8 |       "inputs": ["$TURBO_DEFAULTquot;, "./tsup.config.ts"]
 9 |     }
10 |   }
11 | }
12 | 

--------------------------------------------------------------------------------
/packages/core/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/packages/create-mastra/.gitignore:
--------------------------------------------------------------------------------
1 | starter-files

--------------------------------------------------------------------------------
/packages/create-mastra/.prettierignore:
--------------------------------------------------------------------------------
1 | ./rollup.config.js

--------------------------------------------------------------------------------
/packages/create-mastra/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config.map(conf => ({ ...conf, ignores: [...(conf.ignores || []), '**/starter-files/**'] }))];
7 | 

--------------------------------------------------------------------------------
/packages/create-mastra/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2022",
 4 |     "module": "NodeNext",
 5 |     "moduleResolution": "NodeNext",
 6 |     "esModuleInterop": true,
 7 |     "strict": true,
 8 |     "skipLibCheck": true,
 9 |     "outDir": "dist",
10 |     "declaration": true
11 |   },
12 |   "include": ["src"],
13 |   "exclude": ["node_modules", "dist"]
14 | }
15 | 

--------------------------------------------------------------------------------
/packages/deployer/.gitignore:
--------------------------------------------------------------------------------
1 | .env.mastra
2 | 

--------------------------------------------------------------------------------
/packages/deployer/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/packages/deployer/global.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/deployer/global.d.ts

--------------------------------------------------------------------------------
/packages/deployer/src/build/isNodeBuiltin.ts:
--------------------------------------------------------------------------------
1 | import { builtinModules } from 'node:module';
2 | 
3 | export function isNodeBuiltin(dep: string): boolean {
4 |   const [pkg] = dep.split('/');
5 | 
6 |   return dep.startsWith('node:') || builtinModules.includes(dep) || builtinModules.includes(pkg!);
7 | }
8 | 

--------------------------------------------------------------------------------
/packages/deployer/src/build/plugins/__fixtures__/empty-mastra.js:
--------------------------------------------------------------------------------
1 | import { Mastra } from '@mastra/core/mastra';
2 | export const mastra = new Mastra();
3 | 

--------------------------------------------------------------------------------
/packages/deployer/src/deploy/index.ts:
--------------------------------------------------------------------------------
1 | export * from './base.js';
2 | export * from './log.js';
3 | 

--------------------------------------------------------------------------------
/packages/deployer/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './deploy';
2 | export { Deps, FileService } from './build';
3 | export { getDeployer } from './build/deployer';
4 | 

--------------------------------------------------------------------------------
/packages/deployer/src/server/handlers/root.ts:
--------------------------------------------------------------------------------
1 | import type { Context } from 'hono';
2 | 
3 | // Root handler
4 | export async function rootHandler(c: Context) {
5 |   return c.text('Hello to the Mastra API!');
6 | }
7 | 

--------------------------------------------------------------------------------
/packages/deployer/src/server/types.ts:
--------------------------------------------------------------------------------
1 | export interface ApiError extends Error {
2 |   message: string;
3 |   status?: number;
4 | }
5 | 

--------------------------------------------------------------------------------
/packages/deployer/src/validator/loader.ts:
--------------------------------------------------------------------------------
1 | import { register } from 'node:module';
2 | 
3 | /**
4 |  * Main loader hook that modifies module resolution
5 |  */
6 | register('./custom-resolver.js', import.meta.url);
7 | 

--------------------------------------------------------------------------------
/packages/deployer/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["./global.d.ts", "src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts", "**/__fixtures__/"]
5 | }
6 | 

--------------------------------------------------------------------------------
/packages/deployer/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/packages/evals/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/packages/evals/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/packages/evals/src/constants.ts:
--------------------------------------------------------------------------------
1 | export const GLOBAL_RUN_ID_ENV_KEY = '_MASTRA_GLOBAL_RUN_ID_';
2 | 

--------------------------------------------------------------------------------
/packages/evals/src/index.ts:
--------------------------------------------------------------------------------
1 | export { evaluate } from './evaluation';
2 | export { attachListeners, globalSetup } from './attachListeners';
3 | 

--------------------------------------------------------------------------------
/packages/evals/src/metrics/index.ts:
--------------------------------------------------------------------------------
1 | export * from './nlp';
2 | export * from './llm';
3 | export * from './judge';
4 | 

--------------------------------------------------------------------------------
/packages/evals/src/metrics/llm/types.ts:
--------------------------------------------------------------------------------
1 | import type { MetricResult } from '@mastra/core/eval';
2 | 
3 | export interface MetricResultWithReason extends MetricResult {
4 |   info: {
5 |     reason: string;
6 |   };
7 | }
8 | 

--------------------------------------------------------------------------------
/packages/evals/src/metrics/nlp/index.ts:
--------------------------------------------------------------------------------
1 | export { CompletenessMetric } from './completeness';
2 | export { ContentSimilarityMetric } from './content-similarity';
3 | export { TextualDifferenceMetric } from './textual-difference';
4 | export { KeywordCoverageMetric } from './keyword-coverage';
5 | export { ToneConsistencyMetric } from './tone';
6 | 

--------------------------------------------------------------------------------
/packages/evals/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/packages/evals/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     environment: 'node',
 6 |     include: ['src/**/*.test.ts'],
 7 |     exclude: ['**/node_modules/**', '**/dist/**'],
 8 |     maxConcurrency: 1,
 9 |     fileParallelism: false,
10 |     setupFiles: ['dotenv/config'],
11 |   },
12 | });
13 | 

--------------------------------------------------------------------------------
/packages/loggers/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/packages/loggers/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/packages/loggers/src/file/fixtures/test.log:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/loggers/src/file/fixtures/test.log

--------------------------------------------------------------------------------
/packages/loggers/src/index.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/packages/loggers/src/index.ts

--------------------------------------------------------------------------------
/packages/loggers/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/packages/loggers/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/packages/mcp-docs-server/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | .docs
3 | 

--------------------------------------------------------------------------------
/packages/mcp-docs-server/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/packages/mcp-docs-server/src/stdio.ts:
--------------------------------------------------------------------------------
1 | #!/usr/bin/env node
2 | import { server } from './index.js';
3 | 
4 | void server.start({
5 |   transportType: 'stdio',
6 | });
7 | 

--------------------------------------------------------------------------------
/packages/mcp-docs-server/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/packages/mcp/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/packages/mcp/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/packages/mcp/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './client';
2 | export * from './configuration';
3 | 

--------------------------------------------------------------------------------
/packages/mcp/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/packages/mcp/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/packages/memory/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/packages/memory/.npmignore:
--------------------------------------------------------------------------------
1 | integration-tests/

--------------------------------------------------------------------------------
/packages/memory/README.md:
--------------------------------------------------------------------------------
1 | # @mastra/memory
2 | 
3 | Experimental
4 | 

--------------------------------------------------------------------------------
/packages/memory/eslint.config.js:
--------------------------------------------------------------------------------
 1 | import { createConfig } from '@internal/lint/eslint';
 2 | 
 3 | const config = await createConfig();
 4 | 
 5 | /** @type {import("eslint").Linter.Config[]} */
 6 | export default [
 7 |   ...config,
 8 |   {
 9 |     files: ['integration-tests/**/*'],
10 |     ...(await import('typescript-eslint')).configs.disableTypeChecked,
11 |   },
12 | ];
13 | 

--------------------------------------------------------------------------------
/packages/memory/integration-tests/.env.test:
--------------------------------------------------------------------------------
 1 | # PostgreSQL connection
 2 | DB_URL=postgres://postgres:password@localhost:5434/mastra
 3 | 
 4 | # Redis connection (for Upstash KV tests)
 5 | KV_REST_API_URL=http://localhost:8079
 6 | KV_REST_API_TOKEN=test_token
 7 | 
 8 | # OpenAI (for vector embeddings)
 9 | # OPENAI_API_KEY=your_openai_api_key
10 | 

--------------------------------------------------------------------------------
/packages/memory/integration-tests/.gitignore:
--------------------------------------------------------------------------------
1 | memory.db
2 | *.db
3 | 

--------------------------------------------------------------------------------
/packages/memory/integration-tests/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2020",
 4 |     "module": "ESNext",
 5 |     "moduleResolution": "bundler",
 6 |     "strict": true,
 7 |     "esModuleInterop": true,
 8 |     "skipLibCheck": true,
 9 |     "forceConsistentCasingInFileNames": true
10 |   },
11 |   "include": ["src/**/*"],
12 |   "exclude": ["node_modules"]
13 | }
14 | 

--------------------------------------------------------------------------------
/packages/memory/integration-tests/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     globals: true,
 6 |     environment: 'node',
 7 |     testTimeout: 60000,
 8 |     hookTimeout: 30000,
 9 |     coverage: {
10 |       provider: 'v8',
11 |       reporter: ['text', 'json', 'html'],
12 |     },
13 |   },
14 | });
15 | 

--------------------------------------------------------------------------------
/packages/memory/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/packages/memory/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/packages/playground-ui/postcss.config.mjs:
--------------------------------------------------------------------------------
 1 | /** @type {import('postcss-load-config').Config} */
 2 | const config = {
 3 |   plugins: {
 4 |     tailwindcss: {},
 5 |     autoprefixer: {},
 6 |   },
 7 | };
 8 | 
 9 | export default config;
10 | 

--------------------------------------------------------------------------------
/packages/playground-ui/src/components/ui/collapsible.tsx:
--------------------------------------------------------------------------------
 1 | import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
 2 | 
 3 | const Collapsible = CollapsiblePrimitive.Root;
 4 | 
 5 | const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
 6 | 
 7 | const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
 8 | 
 9 | export { Collapsible, CollapsibleTrigger, CollapsibleContent };
10 | 

--------------------------------------------------------------------------------
/packages/playground-ui/src/components/ui/score-indicator.tsx:
--------------------------------------------------------------------------------
1 | import { Badge } from './badge';
2 | 
3 | export function ScoreIndicator({ score }: { score: number }) {
4 |   return <Badge variant="secondary">{score.toFixed(2)}</Badge>;
5 | }
6 | 

--------------------------------------------------------------------------------
/packages/playground-ui/src/components/ui/skeleton.tsx:
--------------------------------------------------------------------------------
1 | import { cn } from '../../lib/utils';
2 | 
3 | function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
4 |   return <div className={cn('animate-pulse rounded-md bg-muted/50', className)} {...props} />;
5 | }
6 | 
7 | export { Skeleton };
8 | 

--------------------------------------------------------------------------------
/packages/playground-ui/src/domains/agents/index.tsx:
--------------------------------------------------------------------------------
1 | export * from './agent/agent-chat';
2 | export * from './agent/agent-evals';
3 | export * from './agent/agent-traces';
4 | export * from './agents-table';
5 | 

--------------------------------------------------------------------------------
/packages/playground-ui/src/domains/networks/index.ts:
--------------------------------------------------------------------------------
1 | export * from './network-chat';
2 | 

--------------------------------------------------------------------------------
/packages/playground-ui/src/domains/workflows/index.ts:
--------------------------------------------------------------------------------
1 | export * from './workflow/workflow-traces';
2 | export * from './workflow/workflow-graph';
3 | export * from './workflows-table';
4 | export * from './workflow/workflow-trigger';
5 | export * from './context/workflow-run-context';
6 | 

--------------------------------------------------------------------------------
/packages/playground-ui/src/index.css:
--------------------------------------------------------------------------------
 1 | .thread-viewport > [data-radix-scroll-area-content] {
 2 |   @apply flex flex-col items-center self-stretch bg-inherit;
 3 | }
 4 | 
 5 | [hidden]:where(:not([hidden=until-found])) {
 6 |   display: none !important;
 7 | }
 8 | 
 9 | .unset-position {
10 |   position: unset;
11 | }

--------------------------------------------------------------------------------
/packages/playground-ui/src/index.ts:
--------------------------------------------------------------------------------
1 | import './index.css';
2 | 
3 | export * from './domains/agents/index';
4 | export * from './domains/networks/index';
5 | export * from './domains/workflows/index';
6 | export * from './domains/resizable-panel';
7 | 

--------------------------------------------------------------------------------
/packages/playground-ui/src/lib/pagination/types.ts:
--------------------------------------------------------------------------------
 1 | export type PaginationParams = {
 2 |   limit?: number;
 3 |   offset?: number;
 4 |   duration?: number;
 5 | };
 6 | 
 7 | export type PaginationResult = {
 8 |   total: number;
 9 |   offset: number;
10 |   limit: number;
11 |   hasMore: boolean;
12 | };
13 | 

--------------------------------------------------------------------------------
/packages/playground-ui/src/lib/utils.ts:
--------------------------------------------------------------------------------
1 | import { clsx, type ClassValue } from 'clsx';
2 | import { twMerge } from 'tailwind-merge';
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs));
6 | }
7 | 

--------------------------------------------------------------------------------
/packages/playground-ui/src/main.tsx:
--------------------------------------------------------------------------------
 1 | import { StrictMode } from 'react';
 2 | 
 3 | import { createRoot } from 'react-dom/client';
 4 | 
 5 | import { AgentChat } from './domains/agents/agent/agent-chat';
 6 | 
 7 | createRoot(document.getElementById('root')!).render(
 8 |   <StrictMode>
 9 |     <AgentChat agentId="catOne" agentName="catOne" />
10 |   </StrictMode>,
11 | );
12 | 

--------------------------------------------------------------------------------
/packages/playground-ui/tsconfig.app.json:
--------------------------------------------------------------------------------
1 | {
2 |   "compilerOptions": {
3 |     "baseUrl": ".",
4 |     "paths": {
5 |       "@/*": ["./src/*"]
6 |     }
7 |   }
8 | }
9 | 

--------------------------------------------------------------------------------
/packages/rag/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/packages/rag/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/packages/rag/src/document/index.ts:
--------------------------------------------------------------------------------
1 | export * from './document';
2 | export * from './types';
3 | 

--------------------------------------------------------------------------------
/packages/rag/src/document/transformers/transformer.ts:
--------------------------------------------------------------------------------
1 | import type { Document } from 'llamaindex';
2 | 
3 | export interface Transformer {
4 |   transformDocuments(documents: Document[]): Document[];
5 | }
6 | 

--------------------------------------------------------------------------------
/packages/rag/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './document/document';
2 | export * from './rerank';
3 | export { GraphRAG } from './graph-rag';
4 | export * from './tools';
5 | export * from './utils/vector-prompts';
6 | export * from './utils/default-settings';
7 | 

--------------------------------------------------------------------------------
/packages/rag/src/tools/index.ts:
--------------------------------------------------------------------------------
1 | export * from './document-chunker';
2 | export * from './graph-rag';
3 | export * from './vector-query';
4 | 

--------------------------------------------------------------------------------
/packages/rag/src/utils/index.ts:
--------------------------------------------------------------------------------
1 | export * from './vector-search';
2 | export * from './default-settings';
3 | 

--------------------------------------------------------------------------------
/packages/rag/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/packages/rag/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     environment: 'node',
 6 |     include: ['src/**/*.test.ts'],
 7 |     exclude: ['**/node_modules/**', '**/dist/**'],
 8 |     globals: true,
 9 |     setupFiles: ['dotenv/config'],
10 |   },
11 | });
12 | 

--------------------------------------------------------------------------------
/speech/azure/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/speech/azure/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/speech/deepgram/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/speech/deepgram/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/speech/elevenlabs/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/speech/elevenlabs/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/speech/google/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/speech/google/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/speech/ibm/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/speech/ibm/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/speech/ibm/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     include: ['src/**/*.test.ts'],
6 |     environment: 'node',
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/speech/murf/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/speech/murf/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/speech/murf/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     include: ['src/**/*.test.ts'],
6 |     environment: 'node',
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/speech/openai/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/speech/openai/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/speech/playai/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/speech/playai/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/speech/replicate/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/speech/replicate/test-outputs/test-audio.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/speech/replicate/test-outputs/test-audio.mp3

--------------------------------------------------------------------------------
/speech/replicate/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/speech/replicate/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     globals: true,
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/speech/speechify/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/speech/speechify/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/stores/astra/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/stores/astra/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/stores/astra/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './vector';
2 | 

--------------------------------------------------------------------------------
/stores/astra/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/stores/astra/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     environment: 'node',
 6 |     include: ['src/**/*.test.ts'],
 7 |     coverage: {
 8 |       reporter: ['text', 'json', 'html'],
 9 |     },
10 |   },
11 | });
12 | 

--------------------------------------------------------------------------------
/stores/chroma/docker-compose.yaml:
--------------------------------------------------------------------------------
1 | services:
2 |   chroma:
3 |     image: chromadb/chroma
4 |     ports:
5 |       - 8000:8000
6 | volumes:
7 |   pgdata:
8 | 

--------------------------------------------------------------------------------
/stores/chroma/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/stores/chroma/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './vector/index';
2 | 

--------------------------------------------------------------------------------
/stores/chroma/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/stores/chroma/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/stores/pg/.gitignore:
--------------------------------------------------------------------------------
1 | .env
2 | dist/
3 | node_modules/
4 | 

--------------------------------------------------------------------------------
/stores/pg/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config.map(conf => ({ ...conf, ignores: [...(conf.ignores || []), '**/vitest.perf.config.ts'] }))];
7 | 

--------------------------------------------------------------------------------
/stores/pg/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './vector';
2 | export * from './storage';
3 | 

--------------------------------------------------------------------------------
/stores/pg/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/stores/pg/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     environment: 'node',
 6 |     include: ['src/**/*.test.ts'],
 7 |     exclude: ['src/**/*.performance.test.ts'],
 8 |     coverage: {
 9 |       reporter: ['text', 'json', 'html'],
10 |     },
11 |   },
12 | });
13 | 

--------------------------------------------------------------------------------
/stores/pg/vitest.perf.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'node',
6 |     include: ['src/**/*.performance.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/stores/pinecone/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/stores/pinecone/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/stores/pinecone/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './vector/index';
2 | 

--------------------------------------------------------------------------------
/stores/pinecone/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/stores/pinecone/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     environment: 'node',
 6 |     include: ['src/**/*.test.ts'],
 7 |     coverage: {
 8 |       reporter: ['text', 'json', 'html'],
 9 |     },
10 |   },
11 | });
12 | 

--------------------------------------------------------------------------------
/stores/qdrant/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/stores/qdrant/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './vector';
2 | 

--------------------------------------------------------------------------------
/stores/qdrant/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/stores/qdrant/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     environment: 'node',
 6 |     include: ['src/**/*.test.ts'],
 7 |     coverage: {
 8 |       reporter: ['text', 'json', 'html'],
 9 |     },
10 |   },
11 | });
12 | 

--------------------------------------------------------------------------------
/stores/turbopuffer/.gitignore:
--------------------------------------------------------------------------------
1 | .env

--------------------------------------------------------------------------------
/stores/turbopuffer/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/stores/turbopuffer/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './vector/index';
2 | 

--------------------------------------------------------------------------------
/stores/turbopuffer/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/stores/upstash/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/stores/upstash/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './storage';
2 | export * from './vector';
3 | 

--------------------------------------------------------------------------------
/stores/upstash/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/stores/upstash/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     environment: 'node',
 6 |     include: ['src/**/*.test.ts'],
 7 |     coverage: {
 8 |       reporter: ['text', 'json', 'html'],
 9 |     },
10 |   },
11 | });
12 | 

--------------------------------------------------------------------------------
/stores/vectorize/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/stores/vectorize/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './vector';
2 | 

--------------------------------------------------------------------------------
/stores/vectorize/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/stores/vectorize/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     environment: 'node',
 6 |     include: ['src/**/*.test.ts'],
 7 |     coverage: {
 8 |       reporter: ['text', 'json', 'html'],
 9 |     },
10 |   },
11 | });
12 | 

--------------------------------------------------------------------------------
/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     workspace: [
 6 |       'packages/*',
 7 |       'vector-stores/*',
 8 |       'deployers/*',
 9 |       'speech/*',
10 |       '!vector-stores/docker-compose.yaml',
11 |       '!vector-stores/**/*.md',
12 |     ],
13 |   },
14 | });
15 | 

--------------------------------------------------------------------------------
/voice/azure/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/azure/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }

--------------------------------------------------------------------------------
/voice/azure/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/voice/cloudflare/__fixtures__/voice-test.m4a:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/voice/cloudflare/__fixtures__/voice-test.m4a

--------------------------------------------------------------------------------
/voice/cloudflare/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/cloudflare/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/voice/cloudflare/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/voice/deepgram/__fixtures__/voice-test.m4a:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/voice/deepgram/__fixtures__/voice-test.m4a

--------------------------------------------------------------------------------
/voice/deepgram/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/deepgram/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/voice/deepgram/vitest.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config';
 2 | 
 3 | export default defineConfig({
 4 |   test: {
 5 |     globals: true,
 6 |     environment: 'node',
 7 |     include: ['src/**/*.test.ts'],
 8 |   },
 9 | });
10 | 

--------------------------------------------------------------------------------
/voice/elevenlabs/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/elevenlabs/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/voice/elevenlabs/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/voice/google/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/google/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/voice/google/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     environment: 'node',
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/voice/murf/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/murf/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/voice/murf/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     include: ['src/**/*.test.ts'],
6 |     environment: 'node',
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/voice/openai-realtime-api/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/openai-realtime-api/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/voice/openai-realtime-api/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/voice/openai/__fixtures__/voice-test.m4a:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/voice/openai/__fixtures__/voice-test.m4a

--------------------------------------------------------------------------------
/voice/openai/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/openai/test-outputs/speech-stream-input.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/voice/openai/test-outputs/speech-stream-input.mp3

--------------------------------------------------------------------------------
/voice/openai/test-outputs/speech-test-params.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/voice/openai/test-outputs/speech-test-params.mp3

--------------------------------------------------------------------------------
/voice/openai/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/voice/openai/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/voice/playai/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/playai/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/voice/playai/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/voice/sarvam/__fixtures__/voice-test.m4a:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/mastra-ai/mastra/ec9fa6a7eacab41e1606dfa7e1a25df9714c897b/voice/sarvam/__fixtures__/voice-test.m4a

--------------------------------------------------------------------------------
/voice/sarvam/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/sarvam/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/voice/sarvam/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
/voice/speechify/eslint.config.js:
--------------------------------------------------------------------------------
1 | import { createConfig } from '@internal/lint/eslint';
2 | 
3 | const config = await createConfig();
4 | 
5 | /** @type {import("eslint").Linter.Config[]} */
6 | export default [...config];
7 | 

--------------------------------------------------------------------------------
/voice/speechify/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "../../tsconfig.node.json",
3 |   "include": ["src/**/*"],
4 |   "exclude": ["node_modules", "**/*.test.ts"]
5 | }
6 | 

--------------------------------------------------------------------------------
/voice/speechify/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     globals: true,
6 |     include: ['src/**/*.test.ts'],
7 |   },
8 | });
9 | 

--------------------------------------------------------------------------------
```