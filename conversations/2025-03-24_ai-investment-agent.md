# AI Investment Agent 実装

## 概要
Mastraフレームワークを使用したAI Investment Agentの実装を行いました。このエージェントは株式市場データを分析し、投資判断をサポートする機能を提供します。

## 実装内容

### 1. プロジェクト構造
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
├── package.json
└── README.md
```

### 2. 主要コンポーネント

#### Yahoo Financeツール
- `stockPriceTool`: 株価データを取得
- `companyInfoTool`: 企業情報を取得
- `analystRecommendationsTool`: アナリストの推奨事項を取得
- `stockComparisonTool`: 2つの株式を比較

#### 投資エージェント
- Google Gemini 1.5 Proを使用
- 株式データの分析と解釈
- 投資レポートの生成
- ユーザーからの質問に回答

#### Streamlitインターフェース
- ユーザー入力の受け取り
- 結果の表示
- 対話型インターフェース

### 3. 機能一覧
- 2つの株式のパフォーマンス比較
- 企業情報の取得
- アナリストの推奨事項の取得
- カスタムクエリによる投資分析

## 実行方法

1. Mastraサーバーを起動
```bash
cd mastra-ai-agents
npm install
npm run dev
```

2. Python仮想環境を作成して有効化
```bash
cd mastra-ai-agents
# 仮想環境を作成
python -m venv venv

# 仮想環境を有効化
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

3. 別のターミナルでStreamlitアプリを起動
```bash
# 仮想環境内で
pip install -r requirements.txt
streamlit run app.py
```

3. ブラウザで`http://localhost:8501`にアクセス

## 今後の拡張計画
- ポートフォリオ分析機能
- 投資戦略提案機能
- 市場トレンド分析機能

## エラー修正
実装中に以下のエラーが発生し、修正しました：

1. **Yahoo Finance APIのアクセスエラー**
   - 問題: Yahoo Finance APIに直接アクセスする方法で「Invalid Crumb」エラーが発生
   - 原因: Yahoo FinanceのAPIがクッキーベースの認証を必要としている
   - 解決策1: yahoo-finance2ライブラリを使用するように変更（依存関係の問題で断念）
   - 解決策2: モックデータを使用する実装に変更
   - 解決策3: Alpha Vantage APIを使用する実装に変更（最終的に採用）
   - 実装:
     - alpha-vantage-tool.tsを作成してAlpha Vantage APIを使用
     - dotenvパッケージを使用して環境変数からAPIキーを読み込み
     - APIエラー時にはフォールバックとしてモックデータを使用

2. **エージェント出力の問題**
   - 問題: 株式比較の結果に実際の値ではなく「print文」が含まれていた
   - 原因: エージェントが適切にツールの結果を処理していない
   - 解決策: エージェントの指示を改善
   - 実装:
     - 「常に実際の値を表示し、コードやprint文を含めないこと」という明示的な指示を追加
     - 日本語での指示も同様に追加

## 参考資料
- reference/ai_investment_agent/: 実装例
- mastra-documents/: Mastraのドキュメント