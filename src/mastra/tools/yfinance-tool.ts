import { createTool } from "@mastra/core/tools";
import { z } from "zod";

// デバッグ用のログ関数
const debugLog = (message: string, data?: any) => {
  console.log(`[Debug] ${message}`, data ? JSON.stringify(data, null, 2) : '');
};

// モックデータを使用
export const stockPriceTool = createTool({
  id: "get-stock-price",
  description: "Get current and historical stock price data for a given stock symbol",
  inputSchema: z.object({
    symbol: z.string().describe("Stock symbol (e.g. AAPL, MSFT)"),
  }),
  outputSchema: z.object({
    currentPrice: z.number(),
    change: z.number(),
    changePercent: z.number(),
    high52Week: z.number(),
    low52Week: z.number(),
    volume: z.number(),
    averageVolume: z.number(),
  }),
  execute: async ({ context }) => {
    const { symbol } = context;
    debugLog(`Fetching stock price for symbol: ${symbol}`);
    
    try {
      // モックデータを返す
      const mockData: Record<string, any> = {
        'AAPL': {
          currentPrice: 220.73,
          change: 2.46,
          changePercent: 1.13,
          high52Week: 260.1,
          low52Week: 164.08,
          volume: 42364298,
          averageVolume: 55000000,
        },
        'MSFT': {
          currentPrice: 425.52,
          change: 1.89,
          changePercent: 0.45,
          high52Week: 430.82,
          low52Week: 309.98,
          volume: 21456789,
          averageVolume: 25000000,
        },
        'GOOGL': {
          currentPrice: 175.98,
          change: 0.78,
          changePercent: 0.44,
          high52Week: 180.48,
          low52Week: 120.21,
          volume: 18765432,
          averageVolume: 20000000,
        },
        'AMZN': {
          currentPrice: 185.07,
          change: 1.23,
          changePercent: 0.67,
          high52Week: 189.77,
          low52Week: 118.35,
          volume: 30123456,
          averageVolume: 35000000,
        },
        'META': {
          currentPrice: 485.58,
          change: 3.45,
          changePercent: 0.72,
          high52Week: 531.49,
          low52Week: 274.38,
          volume: 15678901,
          averageVolume: 18000000,
        }
      };
      
      // シンボルが存在しない場合はデフォルト値を返す
      const data = mockData[symbol] || {
        currentPrice: 100.0,
        change: 0.0,
        changePercent: 0.0,
        high52Week: 110.0,
        low52Week: 90.0,
        volume: 1000000,
        averageVolume: 1200000,
      };
      
      debugLog('Returning stock price data:', data);
      return data;
    } catch (error: any) {
      debugLog('Error in stockPriceTool:', error);
      throw new Error(`Failed to fetch stock price data for ${symbol}: ${error.message || 'Unknown error'}`);
    }
  },
});

export const companyInfoTool = createTool({
  id: "get-company-info",
  description: "Get company information and financial metrics for a given stock symbol",
  inputSchema: z.object({
    symbol: z.string().describe("Stock symbol (e.g. AAPL, MSFT)"),
  }),
  outputSchema: z.object({
    name: z.string(),
    sector: z.string().nullable(),
    industry: z.string().nullable(),
    marketCap: z.number().nullable(),
    peRatio: z.number().nullable(),
    dividendYield: z.number().nullable(),
    beta: z.number().nullable(),
    description: z.string().nullable(),
  }),
  execute: async ({ context }) => {
    const { symbol } = context;
    debugLog(`Fetching company info for symbol: ${symbol}`);
    
    try {
      // モックデータを返す
      const mockData: Record<string, any> = {
        'AAPL': {
          name: 'Apple Inc.',
          sector: 'Technology',
          industry: 'Consumer Electronics',
          marketCap: 3450000000000,
          peRatio: 34.2,
          dividendYield: 0.5,
          beta: 1.2,
          description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, iPad, Mac, Apple Watch, and services such as Apple Music, iCloud, and Apple Pay.',
        },
        'MSFT': {
          name: 'Microsoft Corporation',
          sector: 'Technology',
          industry: 'Software—Infrastructure',
          marketCap: 3200000000000,
          peRatio: 38.5,
          dividendYield: 0.7,
          beta: 0.9,
          description: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide. The company operates through Productivity and Business Processes, Intelligent Cloud, and More Personal Computing segments.',
        },
        'GOOGL': {
          name: 'Alphabet Inc.',
          sector: 'Communication Services',
          industry: 'Internet Content & Information',
          marketCap: 2800000000000,
          peRatio: 28.7,
          dividendYield: 0.0,
          beta: 1.1,
          description: 'Alphabet Inc. provides various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. It operates through Google Services, Google Cloud, and Other Bets segments.',
        },
        'AMZN': {
          name: 'Amazon.com, Inc.',
          sector: 'Consumer Cyclical',
          industry: 'Internet Retail',
          marketCap: 1900000000000,
          peRatio: 60.3,
          dividendYield: 0.0,
          beta: 1.3,
          description: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores in North America and internationally. It operates through e-commerce, AWS, and advertising segments.',
        },
        'META': {
          name: 'Meta Platforms, Inc.',
          sector: 'Communication Services',
          industry: 'Internet Content & Information',
          marketCap: 1250000000000,
          peRatio: 25.8,
          dividendYield: 0.4,
          beta: 1.4,
          description: 'Meta Platforms, Inc. develops products that enable people to connect and share with friends and family through mobile devices, personal computers, virtual reality headsets, and wearables worldwide. It operates through Facebook, Instagram, and WhatsApp.',
        }
      };
      
      // シンボルが存在しない場合はデフォルト値を返す
      const data = mockData[symbol] || {
        name: `${symbol} Corporation`,
        sector: 'Unknown',
        industry: 'Unknown',
        marketCap: 1000000000,
        peRatio: 20.0,
        dividendYield: 1.0,
        beta: 1.0,
        description: `${symbol} is a publicly traded company.`,
      };
      
      debugLog('Returning company info data:', data);
      return data;
    } catch (error: any) {
      debugLog('Error in companyInfoTool:', error);
      throw new Error(`Failed to fetch company info for ${symbol}: ${error.message || 'Unknown error'}`);
    }
  },
});

export const analystRecommendationsTool = createTool({
  id: "get-analyst-recommendations",
  description: "Get analyst recommendations for a given stock symbol",
  inputSchema: z.object({
    symbol: z.string().describe("Stock symbol (e.g. AAPL, MSFT)"),
  }),
  outputSchema: z.object({
    strongBuy: z.number(),
    buy: z.number(),
    hold: z.number(),
    sell: z.number(),
    strongSell: z.number(),
    averageRating: z.number(),
  }),
  execute: async ({ context }) => {
    const { symbol } = context;
    debugLog(`Fetching analyst recommendations for symbol: ${symbol}`);
    
    try {
      // モックデータを返す
      const mockData: Record<string, any> = {
        'AAPL': {
          strongBuy: 20,
          buy: 15,
          hold: 8,
          sell: 2,
          strongSell: 0,
          averageRating: 4.2,
        },
        'MSFT': {
          strongBuy: 25,
          buy: 12,
          hold: 5,
          sell: 1,
          strongSell: 0,
          averageRating: 4.4,
        },
        'GOOGL': {
          strongBuy: 18,
          buy: 14,
          hold: 10,
          sell: 3,
          strongSell: 1,
          averageRating: 4.0,
        },
        'AMZN': {
          strongBuy: 22,
          buy: 16,
          hold: 7,
          sell: 2,
          strongSell: 0,
          averageRating: 4.2,
        },
        'META': {
          strongBuy: 15,
          buy: 18,
          hold: 12,
          sell: 4,
          strongSell: 1,
          averageRating: 3.8,
        }
      };
      
      // シンボルが存在しない場合はデフォルト値を返す
      const data = mockData[symbol] || {
        strongBuy: 5,
        buy: 5,
        hold: 5,
        sell: 2,
        strongSell: 1,
        averageRating: 3.5,
      };
      
      debugLog('Returning analyst recommendations data:', data);
      return data;
    } catch (error: any) {
      debugLog('Error in analystRecommendationsTool:', error);
      throw new Error(`Failed to fetch analyst recommendations for ${symbol}: ${error.message || 'Unknown error'}`);
    }
  },
});

export const stockComparisonTool = createTool({
  id: "compare-stocks",
  description: "Compare two stocks based on various financial metrics",
  inputSchema: z.object({
    symbol1: z.string().describe("First stock symbol (e.g. AAPL)"),
    symbol2: z.string().describe("Second stock symbol (e.g. MSFT)"),
  }),
  outputSchema: z.object({
    symbol1: z.object({
      name: z.string(),
      currentPrice: z.number(),
      changePercent: z.number(),
      marketCap: z.number().nullable(),
      peRatio: z.number().nullable(),
      dividendYield: z.number().nullable(),
      beta: z.number().nullable(),
    }),
    symbol2: z.object({
      name: z.string(),
      currentPrice: z.number(),
      changePercent: z.number(),
      marketCap: z.number().nullable(),
      peRatio: z.number().nullable(),
      dividendYield: z.number().nullable(),
      beta: z.number().nullable(),
    }),
  }),
  execute: async ({ context }) => {
    const { symbol1, symbol2 } = context;
    debugLog(`Comparing stocks: ${symbol1} and ${symbol2}`);
    
    try {
      // 両方の株式の情報を並行して取得
      const [stock1Price, stock1Info, stock2Price, stock2Info] = await Promise.all([
        stockPriceTool.execute!({ context: { symbol: symbol1 } }),
        companyInfoTool.execute!({ context: { symbol: symbol1 } }),
        stockPriceTool.execute!({ context: { symbol: symbol2 } }),
        companyInfoTool.execute!({ context: { symbol: symbol2 } }),
      ]);
      
      return {
        symbol1: {
          name: stock1Info.name,
          currentPrice: stock1Price.currentPrice,
          changePercent: stock1Price.changePercent,
          marketCap: stock1Info.marketCap,
          peRatio: stock1Info.peRatio,
          dividendYield: stock1Info.dividendYield,
          beta: stock1Info.beta,
        },
        symbol2: {
          name: stock2Info.name,
          currentPrice: stock2Price.currentPrice,
          changePercent: stock2Price.changePercent,
          marketCap: stock2Info.marketCap,
          peRatio: stock2Info.peRatio,
          dividendYield: stock2Info.dividendYield,
          beta: stock2Info.beta,
        },
      };
    } catch (error: any) {
      debugLog('Error in stockComparisonTool:', error);
      throw new Error(`Failed to compare stocks ${symbol1} and ${symbol2}: ${error.message || 'Unknown error'}`);
    }
  },
});