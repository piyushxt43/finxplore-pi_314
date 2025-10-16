import { Calculator, FileText, BookOpen, ExternalLink, Download, TrendingUp, Shield, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Resources = () => {
  const calculators = [
    {
      title: "SIP Calculator",
      description: "Calculate returns on your Systematic Investment Plans",
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      link: "https://www.sipcalculator.in/",
      features: ["Future value calculation", "Goal-based planning", "Tax benefits"]
    },
    {
      title: "Tax Calculator",
      description: "Calculate capital gains tax on your investments",
      icon: DollarSign,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      link: "https://www.incometax.gov.in/iec/foportal/help/individual/return-preparation/calculators",
      features: ["STCG/LTCG calculation", "Crypto tax calculation", "TDS computation"]
    },
    {
      title: "Risk Analyzer",
      description: "Assess your risk tolerance and portfolio risk",
      icon: Shield,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      link: "https://www.moneycontrol.com/personal-finance/tools/risk-analyzer",
      features: ["Risk profiling", "Portfolio analysis", "Asset allocation"]
    },
    {
      title: "Options Calculator",
      description: "Calculate options premiums and Greeks",
      icon: Calculator,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      link: "https://www.nseindia.com/market-data/option-chain",
      features: ["Premium calculation", "Greeks analysis", "P&L scenarios"]
    }
  ];

  const checklists = [
    {
      title: "Investment Checklist",
      description: "Essential checklist before making any investment",
      icon: FileText,
      items: [
        "Verify broker SEBI registration",
        "Complete KYC documentation",
        "Set investment goals and timeline",
        "Assess risk tolerance",
        "Diversify across asset classes",
        "Review expense ratios (for MFs)",
        "Check historical performance",
        "Understand tax implications"
      ]
    },
    {
      title: "Scam Red Flags",
      description: "Warning signs to avoid investment scams",
      icon: Shield,
      items: [
        "Guaranteed high returns",
        "Pressure to invest immediately",
        "Unregistered investment advisors",
        "Promises of insider information",
        "Requests for upfront fees",
        "Poor online reviews",
        "No physical office address",
        "Unusual payment methods"
      ]
    },
    {
      title: "Security Guide",
      description: "Protect your trading accounts and investments",
      icon: Shield,
      items: [
        "Enable 2FA on all accounts",
        "Use strong, unique passwords",
        "Never share OTP or PIN",
        "Regularly update apps",
        "Avoid public WiFi for trading",
        "Monitor account activity",
        "Keep transaction records",
        "Report suspicious activity"
      ]
    }
  ];

  const articles = [
    {
      title: "Crypto Taxation in India 2024",
      description: "Complete guide to cryptocurrency tax rules and compliance",
      category: "Crypto",
      readTime: "8 min read",
      link: "https://cleartax.in/s/cryptocurrency-tax-india"
    },
    {
      title: "SEBI Guidelines for Retail Investors",
      description: "Understanding SEBI regulations and investor protection",
      category: "Regulations",
      readTime: "12 min read",
      link: "https://www.sebi.gov.in/legal/circulars/2024/november/sebi-circular-on-investor-protection_82000.html"
    },
    {
      title: "Forex Trading Rules in India",
      description: "RBI guidelines and legal forex trading practices",
      category: "Forex",
      readTime: "10 min read",
      link: "https://www.investopedia.com/articles/forex/08/leverage-forex-trading.asp"
    },
    {
      title: "Options Trading Strategies for Beginners",
      description: "Basic options strategies and risk management",
      category: "Options",
      readTime: "15 min read",
      link: "https://zerodha.com/varsity/chapter/options-basics/"
    },
    {
      title: "Mutual Fund vs Direct Equity",
      description: "Choosing between mutual funds and direct stock investment",
      category: "Investing",
      readTime: "6 min read",
      link: "https://www.investopedia.com/articles/mutualfund/05/equitydebt.asp"
    },
    {
      title: "Budget 2024 Impact on Markets",
      description: "How budget announcements affect different sectors",
      category: "Analysis",
      readTime: "9 min read",
      link: "https://www.investopedia.com/articles/investing/052014/how-budget-affects-stock-market.asp"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4">
          <BookOpen className="inline-block w-10 h-10 mr-3 text-primary" />
          <span className="gradient-text">Resources & Tools</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Essential calculators, checklists, and articles to help you make informed financial decisions
        </p>
      </div>

      {/* Calculators Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3">
          <Calculator className="w-8 h-8 text-primary" />
          Financial Calculators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calc, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-lift">
              <div className={`w-12 h-12 rounded-lg ${calc.bgColor} flex items-center justify-center mb-4`}>
                <calc.icon className={`w-6 h-6 ${calc.color}`} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{calc.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{calc.description}</p>
              <ul className="space-y-1 mb-4">
                {calc.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground">• {feature}</li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full gap-2"
                onClick={() => window.open(calc.link, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                Use Calculator
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Checklists Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3">
          <FileText className="w-8 h-8 text-primary" />
          Essential Checklists
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {checklists.map((checklist, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <checklist.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">{checklist.title}</h3>
                  <p className="text-sm text-muted-foreground">{checklist.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {checklist.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full border-2 border-primary mt-0.5 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" className="w-full mt-4 gap-2">
                <Download className="w-4 h-4" />
                Download Checklist
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-lift">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="text-xs">
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">{article.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{article.description}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full gap-2"
                onClick={() => window.open(article.link, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                Read Article
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="glass-card p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <h2 className="text-2xl font-heading font-bold mb-6 text-center">
          🚀 Quick Access Links
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "SEBI Website", link: "https://www.sebi.gov.in/" },
            { name: "RBI Portal", link: "https://www.rbi.org.in/" },
            { name: "Income Tax Portal", link: "https://www.incometax.gov.in/" },
            { name: "NSE India", link: "https://www.nseindia.com/" }
          ].map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open(link.link, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
