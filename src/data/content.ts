export interface Article {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  xp: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  externalLink?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  xp: number;
}

export interface ModuleContent {
  moduleId: string;
  articles: Article[];
  quizzes: QuizQuestion[];
}

export const moduleContent: Record<string, ModuleContent> = {
  "stocks-101": {
    moduleId: "stocks-101",
    articles: [
      {
        id: "what-are-stocks",
        title: "What are Stocks? Understanding Equity Ownership",
        content: "Learn the fundamentals of stock ownership and how the stock market works in India.",
        keyPoints: [
          "Stocks represent ownership in companies",
          "NSE and BSE are India's main stock exchanges",
          "Market cap determines company size (Large/Mid/Small cap)",
          "Stock prices depend on company performance and market sentiment",
          "Benefits include capital appreciation and dividend income",
          "Risks include market volatility and company-specific issues",
          "Start with blue-chip stocks and diversify your portfolio",
          "SEBI regulates the Indian stock market"
        ],
        xp: 50,
        difficulty: "Beginner",
        externalLink: "https://www.investopedia.com/articles/basics/06/invest1000.asp"
      },
      {
        id: "nse-bse-basics",
        title: "How NSE/BSE Work - Indian Stock Exchanges",
        content: "Understand how India's major stock exchanges operate and their role in the financial system.",
        keyPoints: [
          "NSE is India's largest stock exchange by volume",
          "BSE is Asia's oldest stock exchange",
          "Both exchanges facilitate trading of stocks, bonds, and derivatives",
          "Nifty 50 and Sensex are key market indices",
          "Trading hours are 9:15 AM to 3:30 PM",
          "Both exchanges are regulated by SEBI",
          "Electronic trading has replaced floor trading",
          "Market makers ensure liquidity in trading"
        ],
        xp: 75,
        difficulty: "Beginner",
        externalLink: "https://www.investopedia.com/articles/stocks/09/indian-stock-market.asp"
      },
      {
        id: "reading-stock-charts",
        title: "Reading Stock Charts: Technical Analysis Basics",
        content: "Master the art of reading stock charts and understanding technical analysis patterns.",
        keyPoints: [
          "Candlestick charts show OHLC data with visual patterns",
          "Support and resistance levels are key price reference points",
          "Moving averages help identify trends and potential reversals",
          "Volume confirms the strength of price movements",
          "Multiple timeframes provide different perspectives",
          "RSI and MACD are popular momentum indicators",
          "Chart patterns can signal trend reversals or continuations",
          "Always combine technical analysis with fundamental research"
        ],
        xp: 100,
        difficulty: "Intermediate",
        externalLink: "https://www.investopedia.com/terms/t/technicalanalysis.asp"
      },
      {
        id: "pe-ratios-explained",
        title: "P/E Ratios Explained: Understanding Stock Valuation",
        content: "Learn how to use P/E ratios to evaluate whether stocks are overvalued or undervalued.",
        keyPoints: [
          "P/E ratio compares stock price to earnings per share",
          "High P/E can indicate overvaluation or high growth expectations",
          "Low P/E can indicate undervaluation or low growth expectations",
          "Compare P/E ratios within the same industry or sector",
          "Consider growth rate using PEG ratio (P/E ÷ Growth)",
          "P/E ratios vary by market conditions and interest rates",
          "Use P/E as one of many valuation metrics, not the only one",
          "Historical and forward P/E ratios provide different perspectives"
        ],
        xp: 125,
        difficulty: "Intermediate",
        externalLink: "https://www.investopedia.com/investing/use-pe-ratio-and-peg-to-tell-stocks-future/"
      },
      {
        id: "dividend-strategies",
        title: "Dividend Strategies: Building Passive Income",
        content: "Discover how to build a dividend-focused portfolio for steady passive income.",
        keyPoints: [
          "Dividend yield = Annual Dividend ÷ Stock Price × 100",
          "High dividend yield strategy focuses on current income",
          "Dividend growth strategy focuses on increasing income over time",
          "Payout ratio shows what percentage of earnings are paid as dividends",
          "Diversify across sectors to reduce dividend cut risk",
          "Quality companies with strong financials are better than high yield alone",
          "Consider tax implications of dividend income",
          "Monitor companies regularly for dividend sustainability"
        ],
        xp: 150,
        difficulty: "Advanced",
        externalLink: "https://www.investopedia.com/articles/stocks/11/dividend-capture-strategy.asp"
      },
      {
        id: "sebi-regulations",
        title: "SEBI Regulations: Investor Protection Framework",
        content: "Understand SEBI's role in protecting investors and regulating the securities market.",
        keyPoints: [
          "SEBI protects investor interests and regulates securities markets",
          "Investor Protection Fund covers up to ₹25 lakhs for broker defaults",
          "KYC is mandatory with PAN card and address proof",
          "T+1 settlement reduces counterparty risk and improves efficiency",
          "Position limits prevent excessive concentration in single stocks",
          "SEBI SCORES portal helps resolve investor grievances",
          "Only trade with SEBI-registered brokers and intermediaries",
          "Report suspicious activities and maintain proper records"
        ],
        xp: 200,
        difficulty: "Advanced",
        externalLink: "https://www.angelone.in/news/market-updates/sebis-new-regulations-for-investor-safety-unveiled"
      }
    ],
    quizzes: [
      {
        id: "stocks-basic-quiz-1",
        question: "What does buying a stock represent?",
        options: [
          "Lending money to the company",
          "Owning a small piece of the company",
          "Getting a fixed return",
          "Borrowing from the company"
        ],
        correctAnswer: 1,
        explanation: "Buying a stock means you own a small piece (share) of the company, making you a shareholder.",
        xp: 25
      },
      {
        id: "stocks-basic-quiz-2",
        question: "Which is India's largest stock exchange by volume?",
        options: [
          "BSE",
          "NSE",
          "MCX",
          "NCDEX"
        ],
        correctAnswer: 1,
        explanation: "NSE (National Stock Exchange) is India's largest stock exchange by trading volume.",
        xp: 25
      },
      {
        id: "stocks-basic-quiz-3",
        question: "What does a high P/E ratio typically indicate?",
        options: [
          "Stock is undervalued",
          "Stock is overvalued or has high growth expectations",
          "Company has no earnings",
          "Stock price will definitely fall"
        ],
        correctAnswer: 1,
        explanation: "High P/E ratio can indicate either overvaluation or high growth expectations from investors.",
        xp: 25
      }
    ]
  },

  "crypto-fundamentals": {
    moduleId: "crypto-fundamentals",
    articles: [
      {
        id: "blockchain-basics",
        title: "Blockchain Basics: Understanding the Technology",
        content: "Learn the fundamentals of blockchain technology and how it powers cryptocurrencies.",
        keyPoints: [
          "Blockchain is a distributed ledger technology",
          "Blocks contain transaction data and are linked chronologically",
          "Decentralization removes the need for central authorities",
          "Cryptographic hashing ensures data integrity",
          "Consensus mechanisms validate transactions",
          "Public and private blockchains serve different purposes",
          "Smart contracts automate agreements on blockchain",
          "Blockchain has applications beyond cryptocurrency"
        ],
        xp: 60,
        difficulty: "Beginner",
        externalLink: "https://www.investopedia.com/articles/investing/083115/blockchain-technology-revolutionize-traditional-banking.asp"
      },
      {
        id: "bitcoin-vs-altcoins",
        title: "Bitcoin vs Altcoins: Understanding the Differences",
        content: "Compare Bitcoin with alternative cryptocurrencies and understand their unique features.",
        keyPoints: [
          "Bitcoin is the first and largest cryptocurrency",
          "Altcoins are all cryptocurrencies other than Bitcoin",
          "Ethereum enables smart contracts and dApps",
          "Different altcoins serve different purposes",
          "Market cap and adoption vary significantly",
          "Bitcoin is often seen as digital gold",
          "Altcoins may offer faster transactions or lower fees",
          "Research each cryptocurrency before investing"
        ],
        xp: 80,
        difficulty: "Beginner",
        externalLink: "https://www.investopedia.com/terms/a/altcoin.asp"
      },
      {
        id: "wallet-security-101",
        title: "Wallet Security 101: Protecting Your Crypto",
        content: "Essential security practices to protect your cryptocurrency investments.",
        keyPoints: [
          "Use hardware wallets for large amounts",
          "Never share your private keys or seed phrases",
          "Enable two-factor authentication on exchanges",
          "Use strong, unique passwords",
          "Keep software wallets updated",
          "Be cautious of phishing attempts",
          "Consider multi-signature wallets for extra security",
          "Have a backup and recovery plan"
        ],
        xp: 120,
        difficulty: "Intermediate",
        externalLink: "https://www.investopedia.com/tech/how-blockchain-can-protect-global-economy/"
      },
      {
        id: "defi-explained",
        title: "DeFi Explained: Decentralized Finance",
        content: "Understand decentralized finance and its potential to revolutionize traditional banking.",
        keyPoints: [
          "DeFi removes intermediaries from financial services",
          "Smart contracts automate financial transactions",
          "Yield farming allows earning rewards on crypto deposits",
          "Liquidity pools provide trading liquidity",
          "DeFi protocols are built on blockchain networks",
          "Higher returns come with higher risks",
          "Impermanent loss affects liquidity providers",
          "Regulatory uncertainty remains a concern"
        ],
        xp: 140,
        difficulty: "Intermediate",
        externalLink: "https://www.investopedia.com/terms/d/defi.asp"
      },
      {
        id: "nft-reality-check",
        title: "NFT Reality Check: Understanding Non-Fungible Tokens",
        content: "Separate fact from fiction about NFTs and their real-world applications.",
        keyPoints: [
          "NFTs are unique digital tokens on blockchain",
          "They prove ownership of digital or physical assets",
          "Not all NFTs have lasting value",
          "Utility and scarcity determine NFT value",
          "Environmental concerns exist with some blockchains",
          "NFTs have applications in gaming, art, and identity",
          "Research projects before investing in NFTs",
          "Be aware of market volatility and speculation"
        ],
        xp: 160,
        difficulty: "Advanced",
        externalLink: "https://www.investopedia.com/non-fungible-tokens-nft-5115211"
      },
      {
        id: "indias-crypto-tax-rules",
        title: "India's Crypto Tax Rules: Complete Guide",
        content: "Navigate India's cryptocurrency taxation framework and compliance requirements.",
        keyPoints: [
          "30% tax on crypto gains with no deductions",
          "1% TDS on crypto transactions above ₹10,000",
          "Losses cannot be offset against other income",
          "Gift tax applies to crypto gifts above ₹50,000",
          "Mining income is taxable as business income",
          "Keep detailed records of all transactions",
          "File ITR even if crypto losses occurred",
          "Consult tax professionals for complex situations"
        ],
        xp: 180,
        difficulty: "Advanced",
        externalLink: "https://cleartax.in/s/cryptocurrency-tax-india"
      },
      {
        id: "spot-the-rugpull",
        title: "Spot the Rugpull: Identifying Crypto Scams",
        content: "Learn to identify and avoid common cryptocurrency scams and rug pulls.",
        keyPoints: [
          "Rug pulls occur when developers abandon projects",
          "Check team credentials and social media presence",
          "Verify smart contract code and audits",
          "Be wary of unrealistic promises and returns",
          "Research project utility and tokenomics",
          "Avoid investing more than you can afford to lose",
          "Use reputable exchanges and wallets",
          "Stay updated on common scam patterns"
        ],
        xp: 250,
        difficulty: "Expert",
        externalLink: "https://www.investopedia.com/pig-butchering-scams-explained-11830383"
      }
    ],
    quizzes: [
      {
        id: "blockchain-quiz-1",
        question: "What is a blockchain?",
        options: [
          "A type of cryptocurrency",
          "A distributed ledger technology",
          "A digital wallet",
          "A trading platform"
        ],
        correctAnswer: 1,
        explanation: "Blockchain is a distributed ledger technology that maintains a continuously growing list of records.",
        xp: 30
      },
      {
        id: "blockchain-quiz-2",
        question: "What makes blockchain secure?",
        options: [
          "Central authority control",
          "Cryptographic hashing and consensus",
          "High transaction fees",
          "Government regulation"
        ],
        correctAnswer: 1,
        explanation: "Blockchain security comes from cryptographic hashing and consensus mechanisms that validate transactions.",
        xp: 30
      },
      {
        id: "bitcoin-altcoins-quiz-1",
        question: "What are altcoins?",
        options: [
          "Alternative versions of Bitcoin",
          "All cryptocurrencies except Bitcoin",
          "Bitcoin derivatives",
          "Bitcoin mining rewards"
        ],
        correctAnswer: 1,
        explanation: "Altcoins are all cryptocurrencies other than Bitcoin, including Ethereum, Litecoin, and others.",
        xp: 30
      }
    ]
  },

  "scam-awareness": {
    moduleId: "scam-awareness",
    articles: [
      {
        id: "fake-trading-apps",
        title: "Fake Trading Apps: How to Spot Them",
        content: "Learn to identify fake trading applications and protect yourself from investment scams.",
        keyPoints: [
          "Check app store ratings and reviews carefully",
          "Verify developer information and company details",
          "Look for official website and contact information",
          "Be suspicious of guaranteed high returns",
          "Check if the app is listed on official exchanges",
          "Never download apps from suspicious links",
          "Verify regulatory compliance and licenses",
          "Report suspicious apps to authorities"
        ],
        xp: 100,
        difficulty: "Beginner",
        externalLink: "https://www.investopedia.com/recognizing-suspicious-trading-platforms-11758261"
      },
      {
        id: "wallet-drain-attacks",
        title: "Wallet Drain Attacks: Protecting Your Crypto",
        content: "Understand how wallet drain attacks work and how to protect your cryptocurrency.",
        keyPoints: [
          "Wallet drain attacks steal all crypto from wallets",
          "Malicious smart contracts can drain approved tokens",
          "Revoke unnecessary token approvals regularly",
          "Use hardware wallets for large amounts",
          "Be cautious of suspicious transaction requests",
          "Check contract addresses before interacting",
          "Keep software wallets updated",
          "Never share private keys or seed phrases"
        ],
        xp: 120,
        difficulty: "Beginner",
        externalLink: "https://www.investopedia.com/tech/how-blockchain-can-protect-global-economy/"
      },
      {
        id: "pump-dump-schemes",
        title: "Pump & Dump Schemes: Market Manipulation",
        content: "Recognize pump and dump schemes and avoid falling victim to market manipulation.",
        keyPoints: [
          "Pump and dump artificially inflates prices",
          "Organizers profit while others lose money",
          "Be wary of sudden price spikes with no news",
          "Research before investing in unknown tokens",
          "Avoid FOMO (Fear of Missing Out) decisions",
          "Check trading volume and market depth",
          "Be suspicious of coordinated social media campaigns",
          "Report suspicious activities to regulators"
        ],
        xp: 150,
        difficulty: "Intermediate",
        externalLink: "https://www.investopedia.com/terms/p/pumpanddump.asp"
      },
      {
        id: "telegram-scams",
        title: "Telegram Scams: Social Media Fraud",
        content: "Identify and avoid cryptocurrency scams on Telegram and other social platforms.",
        keyPoints: [
          "Fake celebrity endorsements are common",
          "Be suspicious of private message investment offers",
          "Verify official channels and group administrators",
          "Never send crypto to unknown addresses",
          "Be cautious of 'giveaway' scams",
          "Check for verified badges and official links",
          "Report scam groups and channels",
          "Educate others about common scam patterns"
        ],
        xp: 140,
        difficulty: "Intermediate",
        externalLink: "https://www.investopedia.com/cryptocurrency-scams-5214301"
      },
      {
        id: "fake-exchanges",
        title: "Fake Exchanges: Identifying Fraudulent Platforms",
        content: "Learn to distinguish legitimate exchanges from fraudulent ones.",
        keyPoints: [
          "Check regulatory compliance and licenses",
          "Verify company registration and address",
          "Look for security certifications and audits",
          "Be suspicious of unrealistic trading fees",
          "Check withdrawal policies and limits",
          "Verify customer support responsiveness",
          "Research exchange reputation and history",
          "Start with small amounts for testing"
        ],
        xp: 180,
        difficulty: "Advanced",
        externalLink: "https://www.investopedia.com/articles/forex/08/cryptocurrency-security.asp"
      },
      {
        id: "social-engineering",
        title: "Social Engineering: Psychological Manipulation",
        content: "Understand social engineering tactics used in cryptocurrency scams.",
        keyPoints: [
          "Social engineering manipulates human psychology",
          "Scammers create urgency and fear",
          "Be suspicious of unsolicited investment advice",
          "Verify information from multiple sources",
          "Don't trust based on social media presence alone",
          "Be cautious of 'insider' information",
          "Take time to research before investing",
          "Trust your instincts and ask questions"
        ],
        xp: 200,
        difficulty: "Advanced",
        externalLink: "https://www.investopedia.com/terms/s/social-engineering.asp"
      },
      {
        id: "red-flag-checklist",
        title: "Red Flag Checklist: Warning Signs",
        content: "Use this comprehensive checklist to identify potential investment scams.",
        keyPoints: [
          "Guaranteed high returns with no risk",
          "Pressure to invest quickly",
          "Unregistered or unlicensed entities",
          "Complex or unclear investment strategies",
          "Difficulty withdrawing funds",
          "Unsolicited investment opportunities",
          "Lack of proper documentation",
          "Promises of insider information"
        ],
        xp: 250,
        difficulty: "Expert",
        externalLink: "https://www.investopedia.com/investment-scams-5214301"
      }
    ],
    quizzes: [
      {
        id: "fake-apps-quiz-1",
        question: "What should you check before downloading a trading app?",
        options: [
          "Only the app name",
          "App store ratings, reviews, and developer info",
          "Just the download count",
          "Only the app description"
        ],
        correctAnswer: 1,
        explanation: "Always check app store ratings, reviews, developer information, and verify it's from a legitimate source.",
        xp: 35
      },
      {
        id: "fake-apps-quiz-2",
        question: "What is a red flag in investment opportunities?",
        options: [
          "Moderate returns with some risk",
          "Guaranteed high returns with no risk",
          "Long-term investment strategy",
          "Diversified portfolio approach"
        ],
        correctAnswer: 1,
        explanation: "Guaranteed high returns with no risk is a major red flag as all investments carry some level of risk.",
        xp: 35
      },
      {
        id: "fake-apps-quiz-3",
        question: "What should you do if you suspect a scam?",
        options: [
          "Invest more to recover losses",
          "Report to authorities and warn others",
          "Keep it to yourself",
          "Try to get others involved"
        ],
        correctAnswer: 1,
        explanation: "Report suspicious activities to authorities and warn others to prevent further victims.",
        xp: 35
      }
    ]
  },

  "options-trading": {
    moduleId: "options-trading",
    articles: [
      {
        id: "calls-puts-basics",
        title: "Calls & Puts Basics: Options Trading Fundamentals",
        content: "Master the basics of call and put options and how they work in the market.",
        keyPoints: [
          "Call options give the right to buy at a specific price",
          "Put options give the right to sell at a specific price",
          "Options have expiration dates and strike prices",
          "Premium is the cost of buying an option",
          "Options can be used for hedging or speculation",
          "Time decay affects option values",
          "Implied volatility impacts option pricing",
          "Start with paper trading to learn"
        ],
        xp: 70,
        difficulty: "Beginner",
        externalLink: "https://www.investopedia.com/options-basics-tutorial-4583012"
      },
      {
        id: "strike-price-selection",
        title: "Strike Price Selection: Choosing the Right Price",
        content: "Learn how to select appropriate strike prices for your options trading strategy.",
        keyPoints: [
          "Strike price determines option profitability",
          "In-the-money options have intrinsic value",
          "Out-of-the-money options are cheaper but riskier",
          "At-the-money options are most liquid",
          "Consider your risk tolerance and market outlook",
          "Delta indicates price sensitivity",
          "Time to expiration affects strike selection",
          "Use technical analysis for entry points"
        ],
        xp: 110,
        difficulty: "Intermediate",
        externalLink: "https://www.investopedia.com/terms/s/strikeprice.asp"
      },
      {
        id: "greeks-simplified",
        title: "Greeks Simplified: Understanding Option Sensitivities",
        content: "Demystify the Greeks and understand how they affect option pricing.",
        keyPoints: [
          "Delta measures price sensitivity to underlying asset",
          "Gamma measures delta's rate of change",
          "Theta measures time decay impact",
          "Vega measures volatility sensitivity",
          "Rho measures interest rate sensitivity",
          "Greeks help in risk management",
          "Monitor Greeks for portfolio adjustments",
          "Use Greeks for strategy optimization"
        ],
        xp: 180,
        difficulty: "Advanced",
        externalLink: "https://www.investopedia.com/trading/options-greeks/"
      },
      {
        id: "hedging-strategies",
        title: "Hedging Strategies: Protecting Your Portfolio",
        content: "Learn how to use options for portfolio protection and risk management.",
        keyPoints: [
          "Hedging reduces portfolio risk",
          "Protective puts limit downside risk",
          "Covered calls generate income from holdings",
          "Collars combine puts and calls",
          "Hedging costs reduce potential returns",
          "Consider correlation with underlying assets",
          "Adjust hedge ratios based on market conditions",
          "Monitor and rebalance hedges regularly"
        ],
        xp: 220,
        difficulty: "Expert",
        externalLink: "https://www.investopedia.com/articles/optioninvestor/03/021403.asp"
      },
      {
        id: "fo-expiry-day",
        title: "F&O Expiry Day: What You Need to Know",
        content: "Navigate F&O expiry days and understand their impact on markets.",
        keyPoints: [
          "F&O expiry occurs on the last Thursday of each month",
          "High volatility is common on expiry days",
          "Rollover positions before expiry if needed",
          "Settlement prices are determined by closing prices",
          "Physical delivery applies to stock futures",
          "Cash settlement for index futures and options",
          "Plan trades considering expiry impact",
          "Monitor open interest and rollover data"
        ],
        xp: 200,
        difficulty: "Expert",
        externalLink: "https://www.nseindia.com/learn/derivatives-expiry-settlement"
      }
    ],
    quizzes: [
      {
        id: "options-basics-quiz-1",
        question: "What does a call option give you?",
        options: [
          "The obligation to buy",
          "The right to buy at a specific price",
          "The right to sell at a specific price",
          "A guaranteed profit"
        ],
        correctAnswer: 1,
        explanation: "A call option gives you the right, but not the obligation, to buy the underlying asset at the strike price.",
        xp: 40
      },
      {
        id: "options-basics-quiz-2",
        question: "What is the premium in options trading?",
        options: [
          "The strike price",
          "The cost of buying an option",
          "The profit from an option",
          "The expiration date"
        ],
        correctAnswer: 1,
        explanation: "Premium is the price paid to buy an option contract.",
        xp: 40
      },
      {
        id: "options-basics-quiz-3",
        question: "What does delta measure in options?",
        options: [
          "Time decay",
          "Volatility sensitivity",
          "Price sensitivity to underlying asset",
          "Interest rate sensitivity"
        ],
        correctAnswer: 2,
        explanation: "Delta measures how much the option price changes for every ₹1 change in the underlying asset price.",
        xp: 40
      }
    ]
  },

  "forex-trading": {
    moduleId: "forex-trading",
    articles: [
      {
        id: "currency-pairs-101",
        title: "Currency Pairs 101: Understanding Forex Basics",
        content: "Learn the fundamentals of currency pairs and how forex trading works.",
        keyPoints: [
          "Forex involves trading currency pairs",
          "Major pairs include USD, EUR, GBP, JPY",
          "Base currency is the first in a pair",
          "Quote currency is the second in a pair",
          "Exchange rates fluctuate constantly",
          "Leverage amplifies both gains and losses",
          "Forex markets operate 24/5",
          "Economic factors drive currency movements"
        ],
        xp: 65,
        difficulty: "Beginner",
        externalLink: "https://www.investopedia.com/articles/forex/08/forex-concepts.asp"
      },
      {
        id: "rbi-forex-rules",
        title: "RBI Forex Rules: India's Foreign Exchange Regulations",
        content: "Understand RBI's foreign exchange regulations and compliance requirements.",
        keyPoints: [
          "RBI regulates foreign exchange in India",
          "Liberalized Remittance Scheme (LRS) limits apply",
          "Documentation required for forex transactions",
          "Authorized dealers handle forex transactions",
          "Reporting requirements for large transactions",
          "Penalties for non-compliance",
          "Know your customer (KYC) requirements",
          "Stay updated on regulatory changes"
        ],
        xp: 90,
        difficulty: "Beginner",
        externalLink: "https://www.rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=12345"
      },
      {
        id: "leverage-dangers",
        title: "Leverage Dangers: Understanding the Risks",
        content: "Learn about the risks of leverage in forex trading and how to manage them.",
        keyPoints: [
          "Leverage amplifies both profits and losses",
          "High leverage can lead to margin calls",
          "Risk management is crucial with leverage",
          "Start with lower leverage ratios",
          "Use stop-loss orders to limit losses",
          "Never risk more than you can afford to lose",
          "Understand margin requirements",
          "Practice with demo accounts first"
        ],
        xp: 130,
        difficulty: "Intermediate",
        externalLink: "https://www.investopedia.com/articles/forex/08/leverage-forex-trading.asp"
      },
      {
        id: "technical-analysis",
        title: "Technical Analysis: Chart Patterns and Indicators",
        content: "Master technical analysis techniques for forex trading decisions.",
        keyPoints: [
          "Technical analysis studies price patterns",
          "Support and resistance levels are key",
          "Moving averages identify trends",
          "RSI and MACD are popular indicators",
          "Chart patterns signal potential moves",
          "Multiple timeframes provide context",
          "Combine technical with fundamental analysis",
          "Backtest strategies before live trading"
        ],
        xp: 170,
        difficulty: "Advanced",
        externalLink: "https://www.investopedia.com/technical-analysis-4689657"
      },
      {
        id: "spot-vs-futures",
        title: "Spot vs Futures: Understanding Forex Instruments",
        content: "Compare spot and futures forex trading and choose the right instrument.",
        keyPoints: [
          "Spot forex involves immediate settlement",
          "Futures have standardized contracts",
          "Spot trading offers more flexibility",
          "Futures provide better price discovery",
          "Margin requirements differ between instruments",
          "Consider your trading style and goals",
          "Understand settlement procedures",
          "Choose based on risk tolerance"
        ],
        xp: 210,
        difficulty: "Expert",
        externalLink: "https://www.investopedia.com/articles/forex/08/spot-vs-futures.asp"
      }
    ],
    quizzes: [
      {
        id: "forex-basics-quiz-1",
        question: "What is the base currency in EUR/USD?",
        options: [
          "USD",
          "EUR",
          "Both are equal",
          "Depends on the exchange rate"
        ],
        correctAnswer: 1,
        explanation: "In EUR/USD, EUR is the base currency (first currency) and USD is the quote currency.",
        xp: 30
      },
      {
        id: "forex-basics-quiz-2",
        question: "What does leverage do in forex trading?",
        options: [
          "Reduces risk",
          "Amplifies both gains and losses",
          "Guarantees profits",
          "Eliminates losses"
        ],
        correctAnswer: 1,
        explanation: "Leverage amplifies both potential gains and losses, making risk management crucial.",
        xp: 30
      },
      {
        id: "forex-basics-quiz-3",
        question: "What is a pip in forex trading?",
        options: [
          "The profit from a trade",
          "The smallest price movement in a currency pair",
          "The commission charged by brokers",
          "The interest earned on positions"
        ],
        correctAnswer: 1,
        explanation: "A pip is the smallest price movement in a currency pair. For most pairs, 1 pip = 0.0001, except JPY pairs where 1 pip = 0.01.",
        xp: 30
      }
    ]
  },

  "mutual-funds-sip": {
    moduleId: "mutual-funds-sip",
    articles: [
      {
        id: "sip-basics",
        title: "SIP Basics: Systematic Investment Planning",
        content: "Learn how SIPs work and their benefits for long-term wealth creation.",
        keyPoints: [
          "SIP allows regular investment in mutual funds",
          "Rupee cost averaging reduces market timing risk",
          "Start with small amounts and increase gradually",
          "Long-term SIPs benefit from compounding",
          "Choose funds based on your risk profile",
          "Monitor performance but avoid frequent changes",
          "SIPs help in disciplined investing",
          "Consider tax implications of SIP investments"
        ],
        xp: 55,
        difficulty: "Beginner",
        externalLink: "https://www.investopedia.com/terms/s/systematicinvestmentplan.asp"
      },
      {
        id: "equity-vs-debt-funds",
        title: "Equity vs Debt Funds: Choosing the Right Mix",
        content: "Understand the differences between equity and debt mutual funds.",
        keyPoints: [
          "Equity funds invest in stocks for growth",
          "Debt funds invest in bonds for stability",
          "Equity funds have higher risk and return potential",
          "Debt funds provide steady income and capital preservation",
          "Asset allocation depends on age and risk tolerance",
          "Young investors can have higher equity allocation",
          "Near retirement, increase debt fund allocation",
          "Rebalance portfolio periodically"
        ],
        xp: 75,
        difficulty: "Beginner",
        externalLink: "https://www.investopedia.com/articles/mutualfund/05/equitydebt.asp"
      },
      {
        id: "expense-ratios",
        title: "Expense Ratios: Understanding Fund Costs",
        content: "Learn about expense ratios and their impact on mutual fund returns.",
        keyPoints: [
          "Expense ratio is the annual fee charged by funds",
          "Lower expense ratios mean higher net returns",
          "SEBI has capped expense ratios for different fund types",
          "Direct plans have lower expense ratios than regular plans",
          "Compare expense ratios when choosing funds",
          "Expense ratios are deducted from fund returns",
          "Index funds typically have lower expense ratios",
          "Consider total cost of ownership"
        ],
        xp: 100,
        difficulty: "Intermediate",
        externalLink: "https://www.investopedia.com/terms/e/expenseratio.asp"
      },
      {
        id: "tax-saving-funds",
        title: "Tax Saving Funds: ELSS and Section 80C",
        content: "Maximize tax savings with Equity Linked Savings Schemes (ELSS).",
        keyPoints: [
          "ELSS funds offer tax deduction under Section 80C",
          "3-year lock-in period for ELSS investments",
          "ELSS funds invest primarily in equity",
          "Higher returns potential compared to other 80C options",
          "Systematic approach to tax planning",
          "Choose funds with consistent performance",
          "Consider SIP in ELSS for better tax planning",
          "Monitor fund performance during lock-in period"
        ],
        xp: 110,
        difficulty: "Intermediate",
        externalLink: "https://www.investopedia.com/terms/e/elss.asp"
      },
      {
        id: "index-funds",
        title: "Index Funds: Low-Cost Market Tracking",
        content: "Discover the benefits of index funds for passive investing.",
        keyPoints: [
          "Index funds track market indices like Nifty 50",
          "Lower expense ratios compared to active funds",
          "Passive investment approach",
          "Diversification across market segments",
          "Consistent performance with market returns",
          "Suitable for long-term wealth creation",
          "Less fund manager risk",
          "Consider for core portfolio allocation"
        ],
        xp: 150,
        difficulty: "Advanced",
        externalLink: "https://www.investopedia.com/terms/i/indexfund.asp"
      }
    ],
    quizzes: [
      {
        id: "sip-quiz-1",
        question: "What is the main benefit of SIP?",
        options: [
          "Guaranteed returns",
          "Rupee cost averaging",
          "No risk",
          "Immediate liquidity"
        ],
        correctAnswer: 1,
        explanation: "SIP's main benefit is rupee cost averaging, which reduces the impact of market volatility.",
        xp: 25
      },
      {
        id: "sip-quiz-2",
        question: "What is the lock-in period for ELSS funds?",
        options: [
          "1 year",
          "2 years",
          "3 years",
          "5 years"
        ],
        correctAnswer: 2,
        explanation: "ELSS funds have a 3-year lock-in period as per SEBI regulations.",
        xp: 25
      },
      {
        id: "sip-quiz-3",
        question: "Which type of fund typically has lower expense ratios?",
        options: [
          "Active equity funds",
          "Index funds",
          "Sector funds",
          "International funds"
        ],
        correctAnswer: 1,
        explanation: "Index funds typically have lower expense ratios as they passively track indices.",
        xp: 25
      }
    ]
  }
};

export function getModuleContent(moduleId: string): ModuleContent | null {
  return moduleContent[moduleId] || null;
}np