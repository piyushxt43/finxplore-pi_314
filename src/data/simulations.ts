export interface SimulationOption {
  text: string;
  isCorrect: boolean;
  feedback: string;
  xp: number;
}

export interface Simulation {
  id: string;
  title: string;
  category: "Crypto" | "Stocks" | "Forex" | "Scam" | "Options";
  difficulty: 1 | 2 | 3 | 4 | 5;
  scenario: string;
  context: string;
  options: SimulationOption[];
  learningPoint: string;
  completedBy: string;
}

export const simulations: Simulation[] = [
  // Stocks Module Simulations
  {
    id: "stocks-ipo-hype",
    title: "IPO Hype Train",
    category: "Stocks",
    difficulty: 2,
    scenario: "Everyone's talking about XYZ IPO. Grey market premium at 90%.",
    context: "Friends are applying. What do you do?",
    options: [
      {
        text: "Apply immediately before it closes",
        isCorrect: false,
        feedback: "FOMO decision! 60% of hyped IPOs fall below issue price in 6 months.",
        xp: 50,
      },
      {
        text: "Wait for listing day to buy",
        isCorrect: false,
        feedback: "Still risky without research. Listing gains often fade quickly.",
        xp: 75,
      },
      {
        text: "Research company first",
        isCorrect: true,
        feedback: "Smart! Check financials, business model, and peer comparison before investing.",
        xp: 200,
      },
      {
        text: "FOMO buy at any premium",
        isCorrect: false,
        feedback: "Worst decision! Buying at inflated prices = high risk, low reward.",
        xp: 25,
      },
    ],
    learningPoint: "Grey market premiums are speculative. Always research before investing in IPOs.",
    completedBy: "58% users researched first",
  },
  {
    id: "stocks-market-crash",
    title: "Market Crash Survival",
    category: "Stocks",
    difficulty: 4,
    scenario: "Nifty crashes 8% in one day. Your portfolio is down ₹2 lakhs.",
    context: "Media is predicting further decline. What's your strategy?",
    options: [
      {
        text: "Sell everything immediately",
        isCorrect: false,
        feedback: "Panic selling! Markets recovered 12% in the next month. You locked in losses.",
        xp: 50,
      },
      {
        text: "Buy more quality stocks",
        isCorrect: true,
        feedback: "Excellent! Quality stocks at discount prices. Your portfolio recovered 15% in 2 months.",
        xp: 250,
      },
      {
        text: "Wait and watch",
        isCorrect: false,
        feedback: "Safe but missed opportunity. Quality stocks were available at great prices.",
        xp: 100,
      },
      {
        text: "Switch to bonds completely",
        isCorrect: false,
        feedback: "Too conservative. You missed the recovery and long-term growth potential.",
        xp: 75,
      },
    ],
    learningPoint: "Market crashes are opportunities to buy quality stocks at discounted prices.",
    completedBy: "34% users bought the dip",
  },
  {
    id: "stocks-dividend-trap",
    title: "Dividend Yield Trap",
    category: "Stocks",
    difficulty: 3,
    scenario: "Company XYZ offers 12% dividend yield. Stock price has fallen 40% this year.",
    context: "High dividend looks attractive. Should you invest?",
    options: [
      {
        text: "Buy for high dividend",
        isCorrect: false,
        feedback: "Dividend trap! Company is cutting dividends next quarter due to poor performance.",
        xp: 50,
      },
      {
        text: "Research company fundamentals",
        isCorrect: true,
        feedback: "Smart! You discovered the company has declining revenues and high debt.",
        xp: 200,
      },
      {
        text: "Buy only for short-term dividend",
        isCorrect: false,
        feedback: "Risky! Stock fell another 25% and dividend was cut.",
        xp: 75,
      },
      {
        text: "Avoid high dividend stocks",
        isCorrect: false,
        feedback: "Too broad generalization. Some high dividend stocks are excellent investments.",
        xp: 100,
      },
    ],
    learningPoint: "High dividend yield can be a trap. Always check company fundamentals first.",
    completedBy: "67% users fell for the trap",
  },

  // Crypto Module Simulations
  {
    id: "crypto-trump-tweet",
    title: "Trump Tweet Chaos",
    category: "Crypto",
    difficulty: 3,
    scenario: "Trump tweets 'Bitcoin is a scam'. Market drops 18% in 2 hours.",
    context: "Your portfolio: ₹50,000 in BTC. What do you do?",
    options: [
      {
        text: "HODL - Don't panic",
        isCorrect: false,
        feedback: "Not bad, but you missed an opportunity. Historical data shows recoveries after FUD.",
        xp: 100,
      },
      {
        text: "Panic Sell immediately",
        isCorrect: false,
        feedback: "Emotional decision! Market recovered 24% in 3 days. You locked in losses.",
        xp: 50,
      },
      {
        text: "Buy the Dip",
        isCorrect: true,
        feedback: "Smart move! Historical data shows recovery after similar FUD. Market rebounded 24% in 3 days.",
        xp: 200,
      },
      {
        text: "Convert to Stablecoin",
        isCorrect: false,
        feedback: "Safe choice but you missed gains. Market recovered within days.",
        xp: 75,
      },
    ],
    learningPoint: "FUD (Fear, Uncertainty, Doubt) causes temporary dips. Research before reacting emotionally.",
    completedBy: "67% users panic sold",
  },
  {
    id: "crypto-wallet-drain",
    title: "Wallet Drain Attack",
    category: "Crypto",
    difficulty: 4,
    scenario: "You installed a Chrome extension promising 'Free Airdrops'. Your wallet now shows $0.",
    context: "What should you do FIRST?",
    options: [
      {
        text: "Tweet about it to warn others",
        isCorrect: false,
        feedback: "Good intention but wrong priority. Stop the bleeding first!",
        xp: 50,
      },
      {
        text: "Revoke all token permissions immediately",
        isCorrect: true,
        feedback: "Correct! Use Etherscan/Token approval checkers to revoke malicious contracts ASAP.",
        xp: 250,
      },
      {
        text: "Contact exchange support",
        isCorrect: false,
        feedback: "Exchanges can't help with wallet drains. You need to revoke approvals yourself.",
        xp: 75,
      },
      {
        text: "Do nothing, it's too late",
        isCorrect: false,
        feedback: "Never give up! Revoking permissions can stop further drains.",
        xp: 25,
      },
    ],
    learningPoint: "Always verify extensions. Use tools like Etherscan to check and revoke token approvals.",
    completedBy: "42% users chose correctly",
  },
  {
    id: "crypto-defi-rugpull",
    title: "DeFi Rug Pull",
    category: "Crypto",
    difficulty: 5,
    scenario: "New DeFi protocol offers 1000% APY. Team is anonymous but project looks promising.",
    context: "Should you invest your savings?",
    options: [
      {
        text: "Invest everything for high returns",
        isCorrect: false,
        feedback: "Disaster! Protocol was a rug pull. You lost everything in 2 days.",
        xp: 0,
      },
      {
        text: "Invest small amount to test",
        isCorrect: false,
        feedback: "Still risky! Even small amounts can be lost in rug pulls.",
        xp: 50,
      },
      {
        text: "Research team and audit reports",
        isCorrect: true,
        feedback: "Smart! You discovered no audits and anonymous team. You avoided the rug pull.",
        xp: 300,
      },
      {
        text: "Wait for others to invest first",
        isCorrect: false,
        feedback: "FOMO trap! Others lost money too. Always do your own research.",
        xp: 75,
      },
    ],
    learningPoint: "Never invest in unaudited protocols with anonymous teams. Always DYOR (Do Your Own Research).",
    completedBy: "Only 28% avoided the trap",
  },

  // Forex Module Simulations
  {
    id: "forex-leverage-trap",
    title: "Forex Leverage Trap",
    category: "Forex",
    difficulty: 5,
    scenario: "100x leverage offered by offshore broker. ₹10k can control ₹10L position.",
    context: "Current: USD/INR up 0.5%. What's your move?",
    options: [
      {
        text: "Max leverage - YOLO!",
        isCorrect: false,
        feedback: "Disaster! One wrong move = account wiped. Plus this broker is illegal in India.",
        xp: 0,
      },
      {
        text: "Use 5x leverage only",
        isCorrect: false,
        feedback: "Still risky, but you're trading with an illegal offshore broker (RBI violation).",
        xp: 100,
      },
      {
        text: "No leverage",
        isCorrect: false,
        feedback: "Smart risk management but you're still using an illegal broker.",
        xp: 150,
      },
      {
        text: "Report broker + Don't trade",
        isCorrect: true,
        feedback: "Perfect! This is an illegal offshore broker (RBI/ED violation). Penalties up to ₹3L.",
        xp: 300,
      },
    ],
    learningPoint: "Most online forex brokers are ILLEGAL in India. Only SEBI-registered platforms are legal.",
    completedBy: "Only 23% passed",
  },
  {
    id: "forex-currency-crisis",
    title: "Currency Crisis",
    category: "Forex",
    difficulty: 4,
    scenario: "RBI announces new forex regulations. USD/INR jumps 2% in minutes.",
    context: "You have open positions. What's your strategy?",
    options: [
      {
        text: "Close all positions immediately",
        isCorrect: false,
        feedback: "Panic move! You locked in losses. Market stabilized after initial volatility.",
        xp: 75,
      },
      {
        text: "Add more positions to average down",
        isCorrect: false,
        feedback: "Dangerous! You're fighting the market and central bank policy.",
        xp: 50,
      },
      {
        text: "Review positions and risk management",
        isCorrect: true,
        feedback: "Smart! You adjusted stop losses and position sizes based on new volatility.",
        xp: 250,
      },
      {
        text: "Ignore and hope for reversal",
        isCorrect: false,
        feedback: "Risky! Central bank policies can have lasting impact on currency pairs.",
        xp: 100,
      },
    ],
    learningPoint: "Central bank announcements can cause sudden volatility. Always have proper risk management.",
    completedBy: "45% users managed risk properly",
  },
  {
    id: "forex-carry-trade",
    title: "Carry Trade Gone Wrong",
    category: "Forex",
    difficulty: 3,
    scenario: "You're earning 5% interest on JPY/INR carry trade. Bank of Japan hints at rate changes.",
    context: "What should you do with your carry trade positions?",
    options: [
      {
        text: "Increase position size for more interest",
        isCorrect: false,
        feedback: "Risky! Interest rate changes can cause massive currency moves against you.",
        xp: 50,
      },
      {
        text: "Close positions immediately",
        isCorrect: false,
        feedback: "Too hasty! You missed out on continued interest income.",
        xp: 100,
      },
      {
        text: "Monitor and set stop losses",
        isCorrect: true,
        feedback: "Perfect! You protected profits while staying in the trade.",
        xp: 200,
      },
      {
        text: "Hedge with options",
        isCorrect: false,
        feedback: "Complex strategy! Options hedging can be expensive and reduce carry trade profits.",
        xp: 150,
      },
    ],
    learningPoint: "Carry trades are profitable but risky. Always monitor central bank policies and use stop losses.",
    completedBy: "52% users used proper risk management",
  },

  // Options Module Simulations
  {
    id: "options-margin-call",
    title: "Margin Call Nightmare",
    category: "Options",
    difficulty: 4,
    scenario: "Your broker calls: Add ₹30k margin or positions will be squared off in 1 hour.",
    context: "Your account: ₹15k. Market is volatile. What do you do?",
    options: [
      {
        text: "Borrow from friends/family",
        isCorrect: false,
        feedback: "Never trade with borrowed money! You're compounding losses.",
        xp: 50,
      },
      {
        text: "Add margin from savings",
        isCorrect: false,
        feedback: "Throwing good money after bad. Market may move against you further.",
        xp: 75,
      },
      {
        text: "Exit positions immediately",
        isCorrect: true,
        feedback: "Smart! Take the loss and preserve remaining capital. Never over-leverage.",
        xp: 250,
      },
      {
        text: "Ignore and hope market recovers",
        isCorrect: false,
        feedback: "Broker will square off anyway. You lose control + pay penalties.",
        xp: 25,
      },
    ],
    learningPoint: "Position sizing is crucial. Never risk more than 2% of capital per trade.",
    completedBy: "49% users made the right choice",
  },
  {
    id: "options-expiry-day",
    title: "Expiry Day Chaos",
    category: "Options",
    difficulty: 3,
    scenario: "It's F&O expiry day. Your call options are ITM but market is volatile.",
    context: "Options expire in 2 hours. What's your strategy?",
    options: [
      {
        text: "Hold till expiry for maximum profit",
        isCorrect: false,
        feedback: "Risky! Market can reverse and your options can expire worthless.",
        xp: 75,
      },
      {
        text: "Sell immediately to lock profits",
        isCorrect: true,
        feedback: "Smart! You locked in profits and avoided expiry day volatility.",
        xp: 200,
      },
      {
        text: "Buy more options to increase exposure",
        isCorrect: false,
        feedback: "Greedy move! You're increasing risk on expiry day.",
        xp: 50,
      },
      {
        text: "Convert to futures",
        isCorrect: false,
        feedback: "Complex strategy! Futures have different risk profile than options.",
        xp: 100,
      },
    ],
    learningPoint: "On expiry day, it's better to book profits early than risk everything for maximum gains.",
    completedBy: "61% users booked profits early",
  },
  {
    id: "options-greeks-misunderstanding",
    title: "Greeks Confusion",
    category: "Options",
    difficulty: 5,
    scenario: "Your options are showing positive delta but negative theta. Market is moving sideways.",
    context: "What does this mean for your position?",
    options: [
      {
        text: "Great! Positive delta means profit",
        isCorrect: false,
        feedback: "Wrong! Negative theta means you're losing money due to time decay.",
        xp: 50,
      },
      {
        text: "Time decay is eating profits",
        isCorrect: true,
        feedback: "Correct! Negative theta means time decay is reducing option value daily.",
        xp: 250,
      },
      {
        text: "Greeks don't matter for retail traders",
        isCorrect: false,
        feedback: "Wrong! Greeks help understand option behavior and risk management.",
        xp: 25,
      },
      {
        text: "Close position immediately",
        isCorrect: false,
        feedback: "Too hasty! Understand the Greeks first before making decisions.",
        xp: 100,
      },
    ],
    learningPoint: "Understanding Greeks (Delta, Theta, Gamma, Vega) is crucial for options trading success.",
    completedBy: "Only 31% understood Greeks",
  },

  // Scam Awareness Module Simulations
  {
    id: "scam-pump-dump",
    title: "Pump & Dump Telegram",
    category: "Scam",
    difficulty: 3,
    scenario: "Anonymous Telegram admin: 'ABC coin will 100x tomorrow, buy now!'",
    context: "Channel has 50k members. What do you do?",
    options: [
      {
        text: "Buy immediately",
        isCorrect: false,
        feedback: "You're the exit liquidity! Admins already bought and will dump on you.",
        xp: 0,
      },
      {
        text: "Ask for proof/whitepaper",
        isCorrect: false,
        feedback: "They'll send fake documents. Pump & dump groups are scams by design.",
        xp: 50,
      },
      {
        text: "Report group to authorities",
        isCorrect: true,
        feedback: "Perfect! This is a classic pump & dump scheme. Report to cybercrime portal.",
        xp: 200,
      },
      {
        text: "Share with friends 'for their benefit'",
        isCorrect: false,
        feedback: "You're spreading the scam! Never share unverified investment tips.",
        xp: 25,
      },
    ],
    learningPoint: "Pump & dump groups are illegal. Admins profit, members lose money. Always report!",
    completedBy: "71% users reported correctly",
  },
  {
    id: "scam-fake-exchange",
    title: "Fake Exchange Trap",
    category: "Scam",
    difficulty: 4,
    scenario: "New exchange offers 0% trading fees and 20% bonus on deposits.",
    context: "Website looks professional. Should you sign up?",
    options: [
      {
        text: "Sign up immediately for the bonus",
        isCorrect: false,
        feedback: "Trap! You deposited money but can't withdraw. Exchange disappeared after 2 weeks.",
        xp: 0,
      },
      {
        text: "Check exchange registration",
        isCorrect: true,
        feedback: "Smart! You discovered it's not registered with any financial authority.",
        xp: 250,
      },
      {
        text: "Start with small amount",
        isCorrect: false,
        feedback: "Still risky! Even small amounts can be lost to fake exchanges.",
        xp: 50,
      },
      {
        text: "Ask friends for reviews",
        isCorrect: false,
        feedback: "Friends might be scammed too. Always verify independently.",
        xp: 75,
      },
    ],
    learningPoint: "Always verify exchange registration with financial authorities before depositing money.",
    completedBy: "43% users checked registration",
  },
  {
    id: "scam-phishing-attack",
    title: "Phishing Email Attack",
    category: "Scam",
    difficulty: 2,
    scenario: "Email from 'Zerodha Support': 'Your account will be suspended. Click here to verify.'",
    context: "Email looks official with Zerodha logo. What do you do?",
    options: [
      {
        text: "Click the link immediately",
        isCorrect: false,
        feedback: "Phishing attack! You entered credentials on fake website. Account compromised.",
        xp: 0,
      },
      {
        text: "Check sender email address",
        isCorrect: true,
        feedback: "Smart! You noticed the email is from 'zerodha-support@fake.com', not official domain.",
        xp: 200,
      },
      {
        text: "Forward to friends to warn them",
        isCorrect: false,
        feedback: "Good intention but wrong approach. Report to authorities instead.",
        xp: 75,
      },
      {
        text: "Ignore the email",
        isCorrect: false,
        feedback: "Safe but you should report phishing attempts to help others.",
        xp: 100,
      },
    ],
    learningPoint: "Always verify sender email addresses. Legitimate companies use official domains.",
    completedBy: "68% users checked sender address",
  },

  // Mutual Funds Module Simulations
  {
    id: "mf-expense-ratio-trap",
    title: "Expense Ratio Trap",
    category: "Mutual Funds",
    difficulty: 3,
    scenario: "Two similar funds: Fund A (2.5% expense ratio) vs Fund B (0.5% expense ratio).",
    context: "Fund A has slightly better past returns. Which do you choose?",
    options: [
      {
        text: "Choose Fund A for better returns",
        isCorrect: false,
        feedback: "Wrong! High expense ratio eats into returns. Fund B will outperform long-term.",
        xp: 50,
      },
      {
        text: "Choose Fund B for lower costs",
        isCorrect: true,
        feedback: "Smart! Lower expense ratio means more money stays invested and compounds.",
        xp: 200,
      },
      {
        text: "Split between both funds",
        isCorrect: false,
        feedback: "Unnecessary complexity. Choose the better fund based on total cost.",
        xp: 100,
      },
      {
        text: "Expense ratio doesn't matter",
        isCorrect: false,
        feedback: "Wrong! Even 1% difference compounds to significant amounts over time.",
        xp: 25,
      },
    ],
    learningPoint: "Expense ratio directly impacts returns. Always compare total costs, not just past performance.",
    completedBy: "54% users chose lower expense ratio",
  },
  {
    id: "mf-sip-timing",
    title: "SIP Timing Dilemma",
    category: "Mutual Funds",
    difficulty: 2,
    scenario: "You want to start SIP but market is at all-time high. Friends say wait for correction.",
    context: "What's your strategy?",
    options: [
      {
        text: "Wait for market correction",
        isCorrect: false,
        feedback: "Timing the market is difficult. You might wait forever and miss compounding.",
        xp: 75,
      },
      {
        text: "Start SIP immediately",
        isCorrect: true,
        feedback: "Perfect! SIP averages out market volatility. Time in market beats timing the market.",
        xp: 200,
      },
      {
        text: "Invest lump sum now",
        isCorrect: false,
        feedback: "Risky at market highs. SIP is better for averaging out volatility.",
        xp: 100,
      },
      {
        text: "Invest only in debt funds",
        isCorrect: false,
        feedback: "Too conservative. You'll miss long-term equity growth potential.",
        xp: 50,
      },
    ],
    learningPoint: "SIP works best when started immediately. Don't try to time the market.",
    completedBy: "67% users started SIP immediately",
  },
  {
    id: "mf-tax-saving-confusion",
    title: "Tax Saving Fund Confusion",
    category: "Mutual Funds",
    difficulty: 4,
    scenario: "You need to save tax under Section 80C. ELSS fund offers 15% returns vs PPF offers 7%.",
    context: "Which tax-saving option should you choose?",
    options: [
      {
        text: "Choose ELSS for higher returns",
        isCorrect: true,
        feedback: "Smart! ELSS offers higher returns with same tax benefits and 3-year lock-in.",
        xp: 200,
      },
      {
        text: "Choose PPF for safety",
        isCorrect: false,
        feedback: "Too conservative. You're missing out on higher returns with same tax benefits.",
        xp: 100,
      },
      {
        text: "Split between both",
        isCorrect: false,
        feedback: "Unnecessary complexity. ELSS is better for most investors.",
        xp: 150,
      },
      {
        text: "Don't invest in tax-saving instruments",
        isCorrect: false,
        feedback: "You're missing out on tax benefits and forced savings for long-term goals.",
        xp: 25,
      },
    ],
    learningPoint: "ELSS funds offer best combination of tax benefits, returns, and liquidity among 80C options.",
    completedBy: "58% users chose ELSS",
  },
];
