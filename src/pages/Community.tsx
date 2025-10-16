import { Twitter, RefreshCw, ExternalLink, TrendingUp, MessageSquare, Heart, Repeat2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const Community = () => {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      username: "CryptoIndia",
      handle: "@CryptoIndia",
      avatar: "https://pbs.twimg.com/profile_images/1234567890/avatar.jpg",
      content: "🚨 SCAM ALERT: Fake 'Binance India' app is stealing user funds. Always download from official sources only! #CryptoScam #StaySafe",
      timestamp: "2m",
      likes: 1247,
      retweets: 89,
      replies: 23,
      category: "Crypto"
    },
    {
      id: 2,
      username: "SEBI_India",
      handle: "@SEBI_India",
      avatar: "https://pbs.twimg.com/profile_images/1234567890/sebi.jpg",
      content: "New circular on investor protection: All brokers must provide clear risk disclosures before F&O trading. Read more: sebi.gov.in",
      timestamp: "15m",
      likes: 892,
      retweets: 156,
      replies: 45,
      category: "Regulations"
    },
    {
      id: 3,
      username: "Zerodha",
      handle: "@zerodhaonline",
      avatar: "https://pbs.twimg.com/profile_images/1234567890/zerodha.jpg",
      content: "Options trading tip: Start with covered calls if you own stocks. It's a great way to generate income while learning options! 📈",
      timestamp: "1h",
      likes: 2156,
      retweets: 234,
      replies: 78,
      category: "Options"
    },
    {
      id: 4,
      username: "MoneyControl",
      handle: "@moneycontrolcom",
      avatar: "https://pbs.twimg.com/profile_images/1234567890/moneycontrol.jpg",
      content: "Budget 2024 impact: IT sector gets tax relief, pharma gets boost. Here's how it affects your portfolio: moneycontrol.com/budget2024",
      timestamp: "2h",
      likes: 3456,
      retweets: 567,
      replies: 123,
      category: "Stocks"
    },
    {
      id: 5,
      username: "ForexTradingIndia",
      handle: "@ForexIndia",
      avatar: "https://pbs.twimg.com/profile_images/1234567890/forex.jpg",
      content: "USD/INR hits 83.50! RBI intervention expected. Remember: Only trade with authorized dealers. Check RBI list before investing. 💱",
      timestamp: "3h",
      likes: 1876,
      retweets: 234,
      replies: 67,
      category: "Forex"
    },
    {
      id: 6,
      username: "MutualFundIndia",
      handle: "@MFIndia",
      avatar: "https://pbs.twimg.com/profile_images/1234567890/mf.jpg",
      content: "SIP vs Lump Sum: Which is better? Our analysis shows SIP wins in volatile markets. Start your SIP journey today! 📊",
      timestamp: "4h",
      likes: 1234,
      retweets: 189,
      replies: 34,
      category: "Mutual Funds"
    }
  ]);

  const [lastRefresh, setLastRefresh] = useState(new Date());

  const refreshTweets = () => {
    // Simulate new tweets coming in
    const newTweets = [...tweets];
    newTweets.unshift({
      id: Date.now(),
      username: "MarketUpdate",
      handle: "@MarketUpdate",
      avatar: "https://pbs.twimg.com/profile_images/1234567890/market.jpg",
      content: `📊 Market Update: Nifty 50 up 0.8%, Bank Nifty up 1.2%. Strong buying in banking and IT sectors. #Nifty50 #BankNifty`,
      timestamp: "now",
      likes: Math.floor(Math.random() * 1000),
      retweets: Math.floor(Math.random() * 100),
      replies: Math.floor(Math.random() * 50),
      category: "Stocks"
    });
    setTweets(newTweets.slice(0, 10)); // Keep only latest 10 tweets
    setLastRefresh(new Date());
  };

  // Auto-refresh every minute
  useEffect(() => {
    const interval = setInterval(refreshTweets, 60000);
    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Crypto": return "bg-orange-500/20 text-orange-400";
      case "Regulations": return "bg-blue-500/20 text-blue-400";
      case "Options": return "bg-purple-500/20 text-purple-400";
      case "Stocks": return "bg-green-500/20 text-green-400";
      case "Forex": return "bg-red-500/20 text-red-400";
      case "Mutual Funds": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4">
          <Twitter className="inline-block w-10 h-10 mr-3 text-blue-400" />
          <span className="gradient-text">Live Community Feed</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Real-time updates from crypto, stocks, options, and forex communities
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={refreshTweets}
            className="gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh Feed
          </Button>
          <span className="text-sm text-muted-foreground">
            Last updated: {lastRefresh.toLocaleTimeString()}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="glass-card p-6 rounded-xl hover-lift">
            <div className="flex gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">
                  {tweet.username[0]}
                </span>
              </div>

              {/* Tweet Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-white">{tweet.username}</span>
                  <span className="text-muted-foreground">{tweet.handle}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{tweet.timestamp}</span>
                  <Badge className={`ml-auto ${getCategoryColor(tweet.category)}`}>
                    {tweet.category}
                  </Badge>
                </div>

                <p className="text-white mb-4 leading-relaxed">{tweet.content}</p>

                {/* Tweet Actions */}
                <div className="flex items-center gap-6 text-muted-foreground">
                  <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>{tweet.replies}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <Repeat2 className="w-4 h-4" />
                    <span>{tweet.retweets}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-red-400 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{tweet.likes}</span>
                  </button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open(`https://twitter.com/${tweet.handle.replace('@', '')}`, '_blank')}
                    className="ml-auto gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Tweet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Community Stats */}
      <div className="mt-12 glass-card p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
        <h2 className="text-2xl font-heading font-bold mb-6 text-center">
          📊 Community Insights
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Active Users", value: "12,847", icon: "👥" },
            { label: "Tweets Today", value: "2,456", icon: "🐦" },
            { label: "Topics Trending", value: "8", icon: "🔥" },
            { label: "Scams Prevented", value: "1,249", icon: "🛡️" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
