import streamlit as st
import requests
import json
import os
from dotenv import load_dotenv

# .envファイルから環境変数を読み込む
load_dotenv()

st.title("AI Investment Agent 📈🤖")
st.caption("This app allows you to compare the performance of stocks and generate detailed reports.")

# APIキー入力（環境変数から取得するか、ユーザー入力を受け付ける）
google_api_key = os.getenv("GOOGLE_API_KEY") or st.text_input("Google API Key", type="password")

if google_api_key:
    # 株式シンボル入力
    col1, col2 = st.columns(2)
    with col1:
        stock1 = st.text_input("Enter first stock symbol (e.g. AAPL)")
    with col2:
        stock2 = st.text_input("Enter second stock symbol (e.g. MSFT)")
    
    # 分析タイプの選択
    analysis_type = st.selectbox(
        "Select analysis type",
        ["Stock Comparison", "Company Information", "Analyst Recommendations", "Custom Query"]
    )
    
    # カスタムクエリ入力
    if analysis_type == "Custom Query":
        custom_query = st.text_input("Enter your investment question")
    
    # 分析実行ボタン
    if st.button("Analyze"):
        with st.spinner("Analyzing..."):
            # クエリの構築
            if analysis_type == "Stock Comparison" and stock1 and stock2:
                query = f"Compare both the stocks - {stock1} and {stock2} and make a detailed report for an investor trying to invest and compare these stocks"
            elif analysis_type == "Company Information" and stock1:
                query = f"Provide detailed company information and financial metrics for {stock1}"
            elif analysis_type == "Analyst Recommendations" and stock1:
                query = f"What are the latest analyst recommendations for {stock1}?"
            elif analysis_type == "Custom Query" and custom_query:
                query = custom_query
            else:
                st.error("Please provide all required inputs")
                st.stop()
            
            # Mastra APIへのリクエスト
            headers = {
                "Content-Type": "application/json",
                "Authorization": f"Bearer {google_api_key}"
            }
            
            data = {
                "messages": [{"role": "user", "content": query}]
            }
            
            try:
                response = requests.post(
                    "http://localhost:3000/api/agents/investmentAgent/chat",
                    headers=headers,
                    data=json.dumps(data)
                )
                
                if response.status_code == 200:
                    result = response.json()
                    st.markdown(result["content"])
                else:
                    st.error(f"Error: {response.status_code} - {response.text}")
            except Exception as e:
                st.error(f"Failed to connect to Mastra API: {str(e)}")
                st.info("Make sure the Mastra server is running with 'npm run dev' or 'mastra dev'")
else:
    st.info("Please enter your Google API key to use this application.")
    st.markdown("""
    ### How to get a Google API key:
    1. Go to [Google AI Studio](https://makersuite.google.com/)
    2. Sign up or log in to your account
    3. Navigate to API keys section
    4. Create a new API key
    5. Copy and paste the key above
    """)