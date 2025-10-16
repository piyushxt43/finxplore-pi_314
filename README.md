Fin Quest India is an interactive, gamified financial learning platform built for Indian investors and learners. Below is a more decorated, engaging, and beginner-friendly README styled for GitHub, introducing the platform, its core features, and technical details. Your requested repo link is updated.

MADE BY - PIYUSH SINGH ( https://www.linkedin.com/in/piyush-singh-023507359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app  )
 &        Azzah-mallick ( https://www.linkedin.com/in/azzah-mallick-6192b21b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app )
***

# 🚀 Fin Quest India — FinXplore

**Unlock the Financial Markets, Level Up Your Knowledge, and Lead the Game!**


## 📌 About Fin Quest India

Fin Quest India (now **FinXplore**) is the ultimate, gamified playground for mastering financial literacy in an Indian context. Designed for Gen-Z, college students, and early-career professionals, this app transforms stock market education, crypto basics, options trading, forex, and investment strategies into interactive modules, real-time practice, and social gamification—backed by robust security and compliance for peace of mind.

> **Become part of a thriving community of Indian investors! Track your progress, conquer challenges, and compete for the top spot on the leaderboard—all while learning how to build, manage, and protect wealth.**

***

## 🌟 Key Highlights

- 🎓 **Expert-Led Modules:** Bite-sized lessons on Indian stocks, crypto, forex, mutual funds, and more—each packed with local context, regulatory insights, and actionable knowledge.
- 🥇 **Gamification:** Earn XP, unlock badges, enjoy animated milestones, and climb leaderboards. Learning is now competitive *and* fun!
- 🧠 **Interactive Practice:** Real-time trading simulations, quizzes, and scenario-based challenges to build your confidence.
- 🏦 **Security & Compliance:** SEBI rules, scam awareness, secure Firebase authentication, and privacy-first management.
- 📱 **Modern UI/UX:** Crafted for Gen-Z with smooth animations, progress bars, and vibrant visuals for an energetic learning journey.
- 👥 **Community Features:** Connect, challenge, and learn together!

***

## 🏗️ Tech Stack

| Layer         | Stack / Tools                       |
|---|-----------------------------|
| Frontend      | React 18.3.1, TypeScript 5.8.3, Vite, Tailwind, shadcn/ui, Framer Motion |
| Data & Backend | Firebase Firestore, Authentication, TanStack Query, React Query |
| UI Libraries  | Radix UI, Lucide React icons, React Hook Form, Recharts |
| Dev Tools     | ESLint, PostCSS, Autoprefixer |

***

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm
- Git
- Firebase account

### Installation

```bash
git clone https://github.com/piyushxt43/finxplore-pi_314.git
cd finxplore-pi_314
npm install
```

1. **Set up Firebase:**
   - Create a project in [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication & Firestore
   - Paste your Firebase config in `src/lib/firebase.ts`

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Then open `http://localhost:5173`

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run build:dev   # Build for development
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

***

## 📚 Learning Modules

| Module                    | Duration | Difficulty | Lessons | Description                    |
|---------------------------|----------|------------|---------|--------------------------------|
| Stocks 101                | 45 min   | Beginner   | 6       | Market basics, NSE/BSE, ratios, dividends, SEBI rules |
| Crypto Fundamentals       | 65 min   | Beginner   | 7       | Blockchain, wallets, NFTs, scams, India tax rules      |
| Options Trading           | 55 min   | Intermediate | 5     | Calls, puts, Greeks, expiry, hedging                   |
| Forex Trading             | 48 min   | Intermediate | 5     | Currency pairs, RBI rules, leverage                    |
| Scam Awareness            | 70 min   | Beginner   | 7       | Fake apps, wallet drains, pump & dump, social engineering |
| Mutual Funds & SIPs       | 42 min   | Beginner   | 5       | SIP basics, fund types, expense ratios, tax saving      |

***

## 🎮 Gamification System

- **XP & Leveling:** Earn experience and level up while learning.
- **Achievements:** Unlock badges for completing modules and tasks.
- **Leaderboard:** Compete with learners across India; monthly and all-time rankings.
- **Progress Animations:** Smooth transitions to visualize growth.
- **Rewards:** Animated celebrations on reaching milestones.

***

## 📱 Pages & Navigation

- **Home**: Featured modules and announcements
- **Learn**: Browse all modules
- **Simulations**: Practice trading in safe environments
- **Leaderboard**: See your rank in the community
- **Regulations**: Stay updated with SEBI and finance laws
- **Profile**: Personalized achievement dashboard
- **Challenges**: Special events and quizzes
- **Resources**: Access articles, guides, and news
- **Community**: Forum and direct messaging

***

## 🛠️ Development

```
src/
├── components/         # UI elements
│   ├── ui/             # shadcn/ui
│   ├── ModuleCard.tsx  # Module info
│   ├── Navigation.tsx  # Main navigation
├── pages/              # Route components
│   ├── Index.tsx       # Home
│   ├── Learn.tsx       # Modules
├── data/               # Static data
│   ├── modules.ts      # Modules
│   ├── content.ts      # Lessons
├── hooks/              # React hooks
├── lib/                # Utilities
└── assets/             # Images etc.
```

**Key Components**

- ModuleCard — displays modules and progress bars
- AnimatedProgress — fluid progress visualization
- AchievementNotification — animated rewards
- XPAnimation — XP tracking effects
- Navigation — seamless app navigation

***

## 🚀 Deployment

**Firebase Hosting**
```bash
npm run build
firebase deploy
```

**Vercel**
```bash
npm run build
vercel --prod
```

**Netlify**
```bash
npm run build
# Upload dist to Netlify
```

***

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit (`git commit -m 'Add feature'`)
4. Push (`git push origin feature/my-feature`)
5. Open a pull request

**Guidelines:**
- Stick to TypeScript best practices
- Keep commit messages clear
- Test and lint code before pushing
- Update README/docs for major changes

***

## 📄 License

MIT — see the LICENSE file.

***

## 💡 Acknowledgments

- SEBI & Indian markets for data and compliance
- Firebase, shadcn/ui, and React community
- Learners and contributors from across India

***

### Made for Indian Investors, by Indian Investors.

**Start your journey with FinXplore — Learn, Level Up, Lead!**

***
