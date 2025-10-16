export interface Lesson {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  xp: number;
  duration: string;
  completed?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  learners: string;
  rating: number;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  lessons: Lesson[];
  icon: string;
}

export const modules: Module[] = [
  {
    id: "stocks-101",
    title: "Stocks 101",
    description: "Master the fundamentals of stock market investing from NSE/BSE basics to advanced analysis techniques.",
    learners: "4.2k",
    rating: 4.7,
    duration: "45 min",
    difficulty: "Beginner",
    icon: "TrendingUp",
    lessons: [
      { id: "what-are-stocks", title: "What are Stocks?", difficulty: "Beginner", xp: 50, duration: "8 min" },
      { id: "nse-bse-basics", title: "How NSE/BSE Work", difficulty: "Beginner", xp: 75, duration: "10 min" },
      { id: "reading-stock-charts", title: "Reading Stock Charts", difficulty: "Intermediate", xp: 100, duration: "12 min" },
      { id: "pe-ratios-explained", title: "P/E Ratios Explained", difficulty: "Intermediate", xp: 125, duration: "10 min" },
      { id: "dividend-strategies", title: "Dividend Strategies", difficulty: "Advanced", xp: 150, duration: "15 min" },
      { id: "sebi-regulations", title: "SEBI Regulations", difficulty: "Advanced", xp: 200, duration: "20 min" },
    ],
  },
  {
    id: "crypto-fundamentals",
    title: "Crypto Fundamentals",
    description: "Navigate the world of cryptocurrency safely with blockchain basics, wallet security, and India-specific regulations.",
    learners: "6.8k",
    rating: 4.9,
    duration: "65 min",
    difficulty: "Beginner",
    icon: "Bitcoin",
    lessons: [
      { id: "blockchain-basics", title: "Blockchain Basics", difficulty: "Beginner", xp: 60, duration: "10 min" },
      { id: "bitcoin-vs-altcoins", title: "Bitcoin vs Altcoins", difficulty: "Beginner", xp: 80, duration: "12 min" },
      { id: "wallet-security-101", title: "Wallet Security 101", difficulty: "Intermediate", xp: 120, duration: "15 min" },
      { id: "defi-explained", title: "DeFi Explained", difficulty: "Intermediate", xp: 140, duration: "18 min" },
      { id: "nft-reality-check", title: "NFT Reality Check", difficulty: "Advanced", xp: 160, duration: "14 min" },
      { id: "indias-crypto-tax-rules", title: "India's Crypto Tax Rules", difficulty: "Advanced", xp: 180, duration: "16 min" },
      { id: "spot-the-rugpull", title: "Spot the Rugpull", difficulty: "Expert", xp: 250, duration: "20 min" },
    ],
  },
  {
    id: "options-trading",
    title: "Options Trading",
    description: "Understand calls, puts, Greeks, and hedging strategies for F&O trading with proper risk management.",
    learners: "2.1k",
    rating: 4.3,
    duration: "55 min",
    difficulty: "Intermediate",
    icon: "Layers",
    lessons: [
      { id: "calls-puts-basics", title: "Calls & Puts Basics", difficulty: "Beginner", xp: 70, duration: "12 min" },
      { id: "strike-price-selection", title: "Strike Price Selection", difficulty: "Intermediate", xp: 110, duration: "14 min" },
      { id: "greeks-simplified", title: "Greeks Simplified", difficulty: "Advanced", xp: 180, duration: "18 min" },
      { id: "hedging-strategies", title: "Hedging Strategies", difficulty: "Expert", xp: 220, duration: "20 min" },
      { id: "fo-expiry-day", title: "F&O Expiry Day", difficulty: "Expert", xp: 200, duration: "16 min" },
    ],
  },
  {
    id: "forex-trading",
    title: "Forex Trading",
    description: "Learn currency pair trading, leverage risks, and RBI regulations for legal forex trading in India.",
    learners: "3.4k",
    rating: 4.5,
    duration: "48 min",
    difficulty: "Intermediate",
    icon: "DollarSign",
    lessons: [
      { id: "currency-pairs-101", title: "Currency Pairs 101", difficulty: "Beginner", xp: 65, duration: "10 min" },
      { id: "rbi-forex-rules", title: "RBI Forex Rules", difficulty: "Beginner", xp: 90, duration: "12 min" },
      { id: "leverage-dangers", title: "Leverage Dangers", difficulty: "Intermediate", xp: 130, duration: "14 min" },
      { id: "technical-analysis", title: "Technical Analysis", difficulty: "Advanced", xp: 170, duration: "16 min" },
      { id: "spot-vs-futures", title: "Spot vs Futures", difficulty: "Expert", xp: 210, duration: "18 min" },
    ],
  },
  {
    id: "scam-awareness",
    title: "Scam Awareness",
    description: "Protect yourself from fake apps, wallet drains, pump & dump schemes, and social engineering attacks.",
    learners: "8.9k",
    rating: 5.0,
    duration: "70 min",
    difficulty: "Beginner",
    icon: "Shield",
    lessons: [
      { id: "fake-trading-apps", title: "Fake Trading Apps", difficulty: "Beginner", xp: 100, duration: "10 min" },
      { id: "wallet-drain-attacks", title: "Wallet Drain Attacks", difficulty: "Beginner", xp: 120, duration: "12 min" },
      { id: "pump-dump-schemes", title: "Pump & Dump Schemes", difficulty: "Intermediate", xp: 150, duration: "14 min" },
      { id: "telegram-scams", title: "Telegram Scams", difficulty: "Intermediate", xp: 140, duration: "12 min" },
      { id: "fake-exchanges", title: "Fake Exchanges", difficulty: "Advanced", xp: 180, duration: "16 min" },
      { id: "social-engineering", title: "Social Engineering", difficulty: "Advanced", xp: 200, duration: "18 min" },
      { id: "red-flag-checklist", title: "Red Flag Checklist", difficulty: "Expert", xp: 250, duration: "20 min" },
    ],
  },
  {
    id: "mutual-funds-sip",
    title: "Mutual Funds & SIPs",
    description: "Build wealth systematically with SIP strategies, fund selection, and tax-efficient investing.",
    learners: "5.6k",
    rating: 4.6,
    duration: "42 min",
    difficulty: "Beginner",
    icon: "PieChart",
    lessons: [
      { id: "sip-basics", title: "SIP Basics", difficulty: "Beginner", xp: 55, duration: "8 min" },
      { id: "equity-vs-debt-funds", title: "Equity vs Debt Funds", difficulty: "Beginner", xp: 75, duration: "10 min" },
      { id: "expense-ratios", title: "Expense Ratios", difficulty: "Intermediate", xp: 100, duration: "12 min" },
      { id: "tax-saving-funds", title: "Tax Saving Funds", difficulty: "Intermediate", xp: 110, duration: "14 min" },
      { id: "index-funds", title: "Index Funds", difficulty: "Advanced", xp: 150, duration: "16 min" },
    ],
  },
];
