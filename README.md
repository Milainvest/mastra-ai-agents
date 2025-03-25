# AI Investment Agent

Mastraフレームワークを使用したAI Investment Agentは、株式市場データを分析し、投資判断をサポートするアプリケーションです。

## 機能

- 2つの株式のパフォーマンス比較
- 企業情報の取得
- アナリストの推奨事項の取得
- カスタムクエリによる投資分析

## 技術スタック

- **バックエンド**: Mastra, TypeScript, Node.js
- **フロントエンド**: Streamlit (Python)
- **AI**: OpenAI GPT-4o
- **データソース**: Yahoo Finance API

## セットアップ方法

### 前提条件

- Node.js v20.0以上
- Python 3.8以上
- OpenAI APIキー

### インストール手順

1. リポジトリをクローン
```bash
git clone <repository-url>
cd mastra-ai-agents
```

2. Node.jsの依存関係をインストール
```bash
npm install
```

3. Python仮想環境を作成して有効化
```bash
# 仮想環境を作成
python -m venv venv

# 仮想環境を有効化
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

4. Pythonの依存関係をインストール
```bash
pip install -r requirements.txt
```

5. 環境変数を設定
`.env`ファイルを作成し、以下の内容を追加:
```
GOOGLE_API_KEY=your_google_api_key
```

### 実行方法

1. Mastraサーバーを起動
```bash
npm run dev
# または
mastra dev
```

2. 別のターミナルでStreamlitアプリを起動
```bash
streamlit run app.py
```

3. ブラウザで`http://localhost:8501`にアクセス

## 使用方法

1. OpenAI APIキーを入力（環境変数に設定済みの場合は不要）
2. 分析したい株式のシンボルを入力（例: AAPL, MSFT）
3. 分析タイプを選択
4. 「Analyze」ボタンをクリック
5. 分析結果を確認

## プロジェクト構造

```
mastra-ai-agents/
├── src/
│   └── mastra/
│       ├── agents/
│       │   ├── index.ts
│       │   └── investment-agent.ts
│       ├── tools/
│       │   ├── index.ts
│       │   └── yfinance-tool.ts
│       └── index.ts
├── app.py
├── requirements.txt
└── README.md
```

## 拡張機能（今後の計画）

- ポートフォリオ分析機能
- 投資戦略提案機能
- 市場トレンド分析機能