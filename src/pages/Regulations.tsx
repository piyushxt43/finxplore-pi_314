import { Shield, AlertTriangle, FileText, Scale, ExternalLink, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Regulations = () => {
  const regulations = [
    {
      icon: Scale,
      title: "SEBI Regulations",
      description: "Securities and Exchange Board of India",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      content: {
        overview: "SEBI regulates all securities markets in India including stocks, bonds, mutual funds, and derivatives.",
        keyRules: [
          "Mandatory KYC for all trading accounts",
          "Minimum ₹50,000 margin for F&O trading",
          "Prohibition of insider trading",
          "Disclosure requirements for listed companies",
          "Investor protection fund for compensation"
        ],
        penalties: [
          "Insider trading: Up to ₹25 crores or 3x profit made",
          "Market manipulation: Up to ₹25 crores penalty",
          "Unauthorized trading: Suspension or cancellation of license",
          "False disclosures: Up to ₹1 crore penalty"
        ],
        resources: [
          "SEBI Official Website",
          "Investor Grievance Portal",
          "Educational Materials",
          "Circulars and Notifications"
        ]
      }
    },
    {
      icon: FileText,
      title: "RBI Guidelines",
      description: "Reserve Bank of India",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      content: {
        overview: "RBI regulates foreign exchange transactions, cryptocurrency, and banking operations in India.",
        keyRules: [
          "Maximum 1:50 leverage for retail forex trading",
          "Only authorized dealers can facilitate forex transactions",
          "Cryptocurrency is not legal tender",
          "30% tax on crypto gains + 1% TDS",
          "FEMA compliance for foreign investments"
        ],
        penalties: [
          "Forex violations: Up to 3x the amount involved",
          "FEMA violations: Up to ₹2 lakhs + confiscation",
          "Unauthorized forex trading: Criminal prosecution",
          "Crypto non-compliance: Tax penalties + interest"
        ],
        resources: [
          "RBI Master Directions",
          "Foreign Exchange Manual",
          "FEMA Guidelines",
          "Crypto Taxation Rules"
        ]
      }
    },
    {
      icon: AlertTriangle,
      title: "ED & FEMA",
      description: "Enforcement Directorate",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      content: {
        overview: "ED enforces FEMA (Foreign Exchange Management Act) and investigates money laundering cases.",
        keyRules: [
          "All foreign investments must be reported",
          "Prohibition on unauthorized forex transactions",
          "Anti-money laundering compliance",
          "Know Your Customer (KYC) requirements",
          "Suspicious transaction reporting"
        ],
        penalties: [
          "FEMA violations: Up to 3x the amount involved",
          "Money laundering: 3-7 years imprisonment",
          "Non-compliance: Asset confiscation",
          "False declarations: Up to ₹5 lakhs fine"
        ],
        resources: [
          "FEMA Act 1999",
          "ED Investigation Guidelines",
          "AML/CFT Framework",
          "Reporting Procedures"
        ]
      }
    },
    {
      icon: Shield,
      title: "Security Best Practices",
      description: "Protect Your Investments",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      content: {
        overview: "Essential security practices to protect your investments and personal information.",
        keyRules: [
          "Use strong, unique passwords for all accounts",
          "Enable two-factor authentication (2FA)",
          "Never share OTP or PIN with anyone",
          "Verify broker credentials before investing",
          "Keep transaction records for tax purposes"
        ],
        penalties: [
          "Account compromise: Financial losses",
          "Identity theft: Credit score damage",
          "Unauthorized transactions: No insurance coverage",
          "Tax evasion: Penalties + interest charges"
        ],
        resources: [
          "Cybersecurity Guidelines",
          "Safe Trading Practices",
          "Fraud Prevention Tips",
          "Emergency Contacts"
        ]
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4">
          <Shield className="inline-block w-10 h-10 mr-3 text-primary" />
          <span className="gradient-text">Regulations & Safety</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Understanding Indian financial regulations is crucial for safe and legal investing. 
          Stay compliant and protect your investments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {regulations.map((regulation, index) => (
          <div key={regulation.title} className="glass-card p-8 rounded-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-16 h-16 rounded-xl ${regulation.bgColor} flex items-center justify-center flex-shrink-0`}>
                <regulation.icon className={`w-8 h-8 ${regulation.color}`} />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold mb-2">{regulation.title}</h2>
                <p className="text-muted-foreground">{regulation.description}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Overview
                </h3>
                <p className="text-muted-foreground">{regulation.content.overview}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Key Rules & Requirements
                </h3>
                <ul className="space-y-2">
                  {regulation.content.keyRules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-400" />
                  Penalties & Consequences
                </h3>
                <ul className="space-y-2">
                  {regulation.content.penalties.map((penalty, penaltyIndex) => (
                    <li key={penaltyIndex} className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{penalty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  Resources & References
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {regulation.content.resources.map((resource, resourceIndex) => (
                    <Button
                      key={resourceIndex}
                      variant="outline"
                      size="sm"
                      className="justify-start text-xs"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      {resource}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Reference Card */}
      <div className="glass-card p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <h2 className="text-2xl font-heading font-bold mb-4 text-center">
          🚨 Emergency Contacts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-semibold mb-2">SEBI Grievances</h3>
            <p className="text-sm text-muted-foreground">1800 266 7575</p>
            <Button variant="outline" size="sm" className="mt-2">
              <ExternalLink className="w-4 h-4 mr-2" />
              File Complaint
            </Button>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">RBI Consumer</h3>
            <p className="text-sm text-muted-foreground">14448</p>
            <Button variant="outline" size="sm" className="mt-2">
              <ExternalLink className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Cyber Crime</h3>
            <p className="text-sm text-muted-foreground">1930</p>
            <Button variant="outline" size="sm" className="mt-2">
              <ExternalLink className="w-4 h-4 mr-2" />
              Report Fraud
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regulations;
