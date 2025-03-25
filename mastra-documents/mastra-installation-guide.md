---
title: "Mastraインストールガイド"
created: 2024-03-24
description: "MastraとMCP Docs Serverのインストールおよび設定方法"
---

# Mastraインストールガイド

## 前提条件

- Node.js `v20.0` 以上
- サポートされているLLM（OpenAI、Anthropic、Google Gemini等）へのアクセス権限

## 自動インストール（推奨）

### 1. プロジェクトの作成

以下のコマンドを実行してプロジェクトを作成します：

```bash
npx create-mastra@latest
```

インストール時に以下の設定を行います：

- プロジェクト名の設定
- インストールするコンポーネントの選択
  - Agents（推奨）
  - Tools
  - Workflows
- デフォルトのLLMプロバイダーの選択
  - OpenAI（推奨）
  - Anthropic
  - Groq
- サンプルコードの含有有無
- IDEのMCP server設定

### 2. API Keyの設定

プロジェクトルートの`.env`ファイルに選択したLLMプロバイダーのAPI Keyを設定します：

```
OPENAI_API_KEY=<your-openai-key>
```

## 手動インストール

### 1. プロジェクトの作成

```bash
mkdir hello-mastra
cd hello-mastra
```

### 2. TypeScriptの初期設定

`tsconfig.json`を以下の内容で作成：

```json
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

### 3. API Keyの設定

`.env`ファイルを作成し、API Keyを設定：

```
OPENAI_API_KEY=<your-openai-key>
```

## MCP Docs Serverの設定

### 自動設定（推奨）

`pnpm create mastra@latest`実行時にCursorまたはWindsurfを選択することで自動的にMCP serverがインストールされます。

### 手動設定

#### Cursorの場合

プロジェクトルートの`.cursor/mcp.json`または`~/.cursor/mcp.json`（グローバル設定）に以下を追加：

```json
{
  "mcpServers": {
    "mastra": {
      "command": "npx",
      "args": ["-y", "@mastra/mcp-docs-server@latest"]
    }
  }
}
```

#### Windsurfの場合

`~/.codeium/windsurf/mcp_config.json`に以下を追加（グローバル設定のみ対応）：

```json
{
  "mcpServers": {
    "mastra": {
      "command": "npx",
      "args": ["-y", "@mastra/mcp-docs-server@latest"]
    }
  }
}
```

### 設定後の手順

#### Cursor
1. Cursorの設定を開く
2. MCPの設定に移動
3. Mastra MCP serverを有効化
4. エージェントチャットを再起動

#### Windsurf
1. Windsurfを完全に終了して再起動
2. ツール呼び出しが失敗する場合は、WindsurfのMCP設定でMCP serverを再起動

## トラブルシューティング

1. **サーバーが起動しない場合**
   - npxが正しくインストールされているか確認
   - 競合するMCPサーバーがないか確認
   - 設定ファイルの構文を確認
   - Windowsの場合、Windows用の設定を使用

2. **ツール呼び出しが失敗する場合**
   - MCPサーバーとIDEを再起動
   - IDEを最新バージョンに更新 