# 技術コンテキスト

## 使用技術

### コア技術
1. **Mastra**
   - AIエージェント開発フレームワーク
   - エージェントの作成、ツールの統合、会話の管理などの機能を提供

2. **大規模言語モデル (LLM)**
   - **OpenAI GPT-4/GPT-4o**: 高度な理解と生成能力を持つLLM
   - **Anthropic Claude**: 長いコンテキスト窓と高い安全性を持つLLM
   - **Meta Llama 3**: オープンソースのLLM、ローカル実行可能
   - **Gemini**: Googleが開発したマルチモーダルLLM
   - **DeepSeek**: 推論能力に優れたLLM

3. **Python**
   - バージョン: 3.10以上
   - 主要な開発言語

### フロントエンド技術
1. **Streamlit**
   - Pythonベースのウェブアプリケーションフレームワーク
   - データ可視化と対話型インターフェースの構築に使用

2. **Gradio**
   - 一部のエージェントで使用する代替UIフレームワーク
   - 特にマルチモーダル入力が必要な場合に使用

### バックエンド技術
1. **FastAPI**
   - 高性能なAPIフレームワーク
   - 一部のエージェントでバックエンドサービスとして使用

2. **SQLite/PostgreSQL**
   - データ永続化のためのデータベース
   - エージェントの状態や会話履歴の保存に使用

### 外部サービス/API
1. **OpenAI API**
   - GPTモデルへのアクセス
   - 埋め込み生成

2. **Anthropic API**
   - Claudeモデルへのアクセス

3. **Google AI API**
   - Geminiモデルへのアクセス

4. **Hugging Face API**
   - オープンソースモデルへのアクセス

5. **その他の専門API**
   - 金融データAPI (Yahoo Finance, Alpha Vantage)
   - 法律情報API
   - 健康データAPI
   - 不動産データAPI
   - ニュースAPI
   - など

### ツールとライブラリ
1. **LangChain/LlamaIndex**
   - RAG (Retrieval-Augmented Generation) 実装
   - ドキュメント処理

2. **Ollama**
   - ローカルLLMの実行

3. **ChromaDB/Qdrant**
   - ベクトルデータベース
   - 埋め込みの保存と検索

4. **Pandas/NumPy**
   - データ処理と分析

5. **Matplotlib/Plotly**
   - データ可視化

6. **BeautifulSoup/Selenium**
   - ウェブスクレイピング

7. **PyPDF2/Docx2txt**
   - ドキュメント処理

## 開発環境

### ローカル開発環境
1. **Python環境**
   - Python 3.10以上
   - 仮想環境: venv または Conda

2. **依存関係管理**
   - pip と requirements.txt
   - または Poetry

3. **エディタ/IDE**
   - Visual Studio Code (推奨)
   - PyCharm
   - Jupyter Notebook (プロトタイピング用)

4. **バージョン管理**
   - Git
   - GitHub

### 環境変数
以下の環境変数を.envファイルに設定:
```
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
GOOGLE_API_KEY=your_google_api_key
...その他のAPIキー
```

## 技術的制約

1. **APIキーの管理**
   - すべてのAPIキーは.envファイルで管理
   - 公開リポジトリにAPIキーをコミットしない

2. **モデルの選択**
   - コスト効率を考慮したモデル選択
   - 必要に応じてローカルモデルの使用

3. **パフォーマンス**
   - 応答時間の最適化
   - 効率的なトークン使用

4. **セキュリティ**
   - ユーザーデータの保護
   - APIキーの安全な管理

5. **ドキュメント**
   - コードの詳細なドキュメント化
   - ブログ記事での実装プロセスの説明

## 依存関係

主要な依存関係は以下の通りです（エージェントによって異なる場合があります）:

```
mastra
openai
anthropic
google-generativeai
streamlit
fastapi
uvicorn
langchain
llama-index
pandas
numpy
matplotlib
plotly
requests
beautifulsoup4
selenium
pypdf2
python-docx
python-dotenv
```

各エージェントの具体的な依存関係は、それぞれのrequirements.txtファイルに記載されます。
