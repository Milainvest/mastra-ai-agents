# Mastraセットアップガイド：Cursor、Windsurf、Clineとの連携

## はじめに

AIエージェント開発の世界では、効率的なフレームワークの選択が成功の鍵を握ります。
Mastraは、AIエージェント開発のための強力なフレームワークであり、エージェントの作成、ツールの統合、会話の管理などの機能を提供します。
本記事では、Mastraの概要、インストール方法、そしてCursor、Windsurf、ClineなどのIDEとの連携方法について解説します。

## Mastraとは

Mastraは、AIエージェント開発のためのTypeScriptフレームワークです。以下の特徴を持っています：

- **エージェント作成**: LLMを活用した自律的なエージェントを簡単に作成できます
- **ツール統合**: エージェントが外部システムと連携するためのツールを簡単に実装できます
- **ワークフロー管理**: 複雑なタスクを一連のステップとして定義し、実行できます
- **メモリ管理**: 会話履歴や重要な情報を保存し、長期的なコンテキストを維持できます
- **マルチモーダル対応**: テキスト、画像、音声などの多様な入出力形式をサポートします

Mastraは、OpenAI、Anthropic、Google Geminiなどの主要なLLMプロバイダーと連携し、強力なAIエージェントを構築するための基盤を提供します。

## Mastraのインストール方法

### 前提条件

- Node.js `v20.0` 以上
- サポートされているLLM（OpenAI、Anthropic、Google Gemini等）へのアクセス権限

### 自動インストール（推奨）

最も簡単な方法は、`create-mastra`コマンドを使用することです：

```bash
npx create-mastra@latest
```

インストール時に以下の設定を行います：

1. **プロジェクト名の設定**：例えば「my-mastra-app」
2. **インストールするコンポーネントの選択**：
   - Agents（推奨）
   - Tools
   - Workflows
3. **デフォルトのLLMプロバイダーの選択**：
   - OpenAI（推奨）
   - Anthropic
   - Groq
   - その他
4. **サンプルコードの含有有無**：初めての場合は「Yes」がおすすめ
5. **IDEのMCP server設定**：Cursor、Windsurfなどを選択

### API Keyの設定

プロジェクトルートの`.env`ファイルに選択したLLMプロバイダーのAPI Keyを設定します：

```
OPENAI_API_KEY=<your-openai-key>
```

### 手動インストール

より詳細な設定が必要な場合は、手動でインストールすることもできます：

1. **プロジェクトディレクトリの作成**：
```bash
mkdir hello-mastra
cd hello-mastra
```

2. **パッケージのインストール**：
```bash
npm init -y
npm install typescript tsx @types/node mastra --save-dev
npm install @mastra/core zod @ai-sdk/openai
npx tsc --init
```

3. **TypeScriptの設定**：`tsconfig.json`を適切に設定

4. **API Keyの設定**：`.env`ファイルにAPI Keyを設定

## MCP Docs Serverとは

MCP（Model Context Protocol）は、AIモデルが構造化された形式で外部知識ベースやドキュメントにリアルタイムにアクセスするための標準プロトコルです。Mastra MCP Docs Serverは、AIアシスタントやIDEがMastraの完全な知識ベースに直接アクセスできるようにするサーバーです。

MCP Docs Serverの主な利点：

- **コンテキスト効率**: 必要な情報だけをクエリできるため、コンテキストウィンドウを効率的に使用できます
- **最新情報へのアクセス**: Mastraの最新ドキュメント、例、変更履歴にアクセスできます
- **問題解決の効率化**: コードの問題に遭遇した場合、関連するドキュメントや例を簡単に検索できます

## Cursor、Windsurf、ClineでのMCP Serverのセットアップ

### 自動セットアップ（推奨）

`npx create-mastra@latest`実行時にCursorまたはWindsurfを選択することで、MCP serverが自動的にインストールされます。

### 手動セットアップ

#### Cursorの場合

プロジェクトレベルの設定（`.cursor/mcp.json`）またはグローバル設定（`~/.cursor/mcp.json`）に以下を追加：

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

グローバル設定ファイル（`~/.codeium/windsurf/mcp_config.json`）に以下を追加：

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

#### Clineの場合

Clineの設定ファイル（`~/Library/Application Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`）に以下を追加：

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

#### Cline
1. Clineを再起動
2. MCP serverが自動的に有効化されます

## 使用例

MCP Docs Serverを設定したら、以下のようなプロンプトでMastraに関する情報を取得できます：

- 「Mastraでエージェントを作成する方法を教えて」
- 「Mastraのツールの作成方法は？」
- 「Mastraのメモリ機能について説明して」
- 「Mastraのワークフローの例を示して」

例えば、以下のようなシンプルなエージェントを作成できます：

```typescript
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

export const myAgent = new Agent({
  name: "My Agent",
  instructions: "You are a helpful assistant.",
  model: openai("gpt-4o-mini"),
});
```

## トラブルシューティング

### MCP Serverが起動しない場合

1. **npxが正しくインストールされているか確認**
   - `npx --version`で確認
   - 必要に応じて`npm install -g npx`でインストール

2. **競合するMCPサーバーがないか確認**
   - IDEのMCP設定で他のサーバーを一時的に無効化

3. **設定ファイルの構文を確認**
   - JSONの構文エラーがないか確認

### ツール呼び出しが失敗する場合

1. **MCPサーバーとIDEを再起動**
   - IDEを完全に終了して再起動
   - MCP設定でサーバーを再起動

2. **IDEを最新バージョンに更新**
   - CursorやWindsurfの最新バージョンを使用

3. **ネットワーク接続を確認**
   - MCP serverがnpmからパッケージをダウンロードできるか確認

## まとめ

Mastraは、AIエージェント開発のための強力なフレームワークであり、MCP Docs Serverとの連携により、開発効率が大幅に向上します。本記事で紹介した手順に従って、Cursor、Windsurf、ClineなどのIDEでMastraを設定し、AIエージェント開発を始めましょう。

Mastraの詳細なドキュメントは[公式サイト](https://mastra.ai/docs)で確認できます。また、コミュニティに参加して質問や意見を共有することもできます。

次回は、Mastraを使用した具体的なAIエージェントの実装例を紹介する予定です。お楽しみに！
