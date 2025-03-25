declare module 'yahoo-finance2' {
  export interface QuoteResponse {
    language: string;
    region: string;
    quoteType: string;
    typeDisp: string;
    quoteSourceName: string;
    triggerable: boolean;
    customPriceAlertConfidence: string;
    currency: string;
    exchange: string;
    shortName: string;
    longName?: string;
    messageBoardId: string;
    exchangeTimezoneName: string;
    exchangeTimezoneShortName: string;
    gmtOffSetMilliseconds: number;
    market: string;
    esgPopulated: boolean;
    marketState: string;
    regularMarketChangePercent: number;
    regularMarketChange: number;
    regularMarketTime: number;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayRange: string;
    regularMarketDayLow: number;
    regularMarketVolume: number;
    regularMarketPreviousClose: number;
    bid: number;
    ask: number;
    bidSize: number;
    askSize: number;
    fullExchangeName: string;
    financialCurrency: string;
    regularMarketOpen: number;
    averageDailyVolume3Month: number;
    averageDailyVolume10Day: number;
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    dividendDate?: number;
    earningsTimestamp?: number;
    earningsTimestampStart?: number;
    earningsTimestampEnd?: number;
    trailingAnnualDividendRate?: number;
    trailingPE?: number;
    trailingAnnualDividendYield?: number;
    epsTrailingTwelveMonths?: number;
    epsForward?: number;
    epsCurrentYear?: number;
    priceEpsCurrentYear?: number;
    sharesOutstanding?: number;
    bookValue?: number;
    fiftyDayAverage?: number;
    fiftyDayAverageChange?: number;
    fiftyDayAverageChangePercent?: number;
    twoHundredDayAverage?: number;
    twoHundredDayAverageChange?: number;
    twoHundredDayAverageChangePercent?: number;
    marketCap?: number;
    forwardPE?: number;
    priceToBook?: number;
    sourceInterval?: number;
    exchangeDataDelayedBy?: number;
    averageAnalystRating?: string;
    tradeable?: boolean;
    cryptoTradeable?: boolean;
    symbol: string;
  }

  export interface AssetProfile {
    address1?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    phone?: string;
    website?: string;
    industry?: string;
    sector?: string;
    longBusinessSummary?: string;
    fullTimeEmployees?: number;
    companyOfficers?: Array<any>;
    auditRisk?: number;
    boardRisk?: number;
    compensationRisk?: number;
    shareHolderRightsRisk?: number;
    overallRisk?: number;
    governanceEpochDate?: number;
    compensationAsOfEpochDate?: number;
    maxAge?: number;
  }

  export interface SummaryDetail {
    maxAge?: number;
    priceHint?: number;
    previousClose?: number;
    open?: number;
    dayLow?: number;
    dayHigh?: number;
    regularMarketPreviousClose?: number;
    regularMarketOpen?: number;
    regularMarketDayLow?: number;
    regularMarketDayHigh?: number;
    dividendRate?: number;
    dividendYield?: number;
    exDividendDate?: number;
    payoutRatio?: number;
    fiveYearAvgDividendYield?: number;
    beta?: number;
    trailingPE?: number;
    forwardPE?: number;
    volume?: number;
    regularMarketVolume?: number;
    averageVolume?: number;
    averageVolume10days?: number;
    averageDailyVolume10Day?: number;
    bid?: number;
    ask?: number;
    bidSize?: number;
    askSize?: number;
    marketCap?: number;
    fiftyTwoWeekLow?: number;
    fiftyTwoWeekHigh?: number;
    priceToSalesTrailing12Months?: number;
    fiftyDayAverage?: number;
    twoHundredDayAverage?: number;
    trailingAnnualDividendRate?: number;
    trailingAnnualDividendYield?: number;
  }

  export interface Price {
    maxAge?: number;
    regularMarketChangePercent?: number;
    regularMarketChange?: number;
    regularMarketTime?: number;
    priceHint?: number;
    regularMarketPrice?: number;
    regularMarketDayHigh?: number;
    regularMarketDayLow?: number;
    regularMarketVolume?: number;
    averageDailyVolume10Day?: number;
    averageDailyVolume3Month?: number;
    regularMarketOpen?: number;
    regularMarketPreviousClose?: number;
    regularMarketSource?: string;
    regularMarketDayRange?: string;
    longName?: string;
    shortName?: string;
    symbol?: string;
  }

  export interface RecommendationTrend {
    trend?: Array<{
      period?: string;
      strongBuy?: number;
      buy?: number;
      hold?: number;
      sell?: number;
      strongSell?: number;
    }>;
    maxAge?: number;
  }

  export interface QuoteSummaryResult {
    assetProfile?: AssetProfile;
    summaryDetail?: SummaryDetail;
    price?: Price;
    recommendationTrend?: RecommendationTrend;
  }

  export function quote(symbol: string): Promise<QuoteResponse>;
  export function quoteSummary(symbol: string, options: { modules: string[] }): Promise<QuoteSummaryResult>;
}