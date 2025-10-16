# 🚀 Deployment Checklist - Fin Quest India

Use this checklist to ensure your project is ready for production deployment.

## ✅ Pre-Deployment Setup

### 1. Environment Variables
- [ ] Copy `.env.example` to `.env.local` for local development
- [ ] Set up Firebase project at [Firebase Console](https://console.firebase.google.com/)
- [ ] Get Firebase configuration values:
  - [ ] API Key
  - [ ] Auth Domain
  - [ ] Project ID
  - [ ] Storage Bucket
  - [ ] Messaging Sender ID
  - [ ] App ID
  - [ ] Measurement ID (optional)

### 2. Firebase Configuration
- [ ] Enable Authentication with Google provider
- [ ] Create Firestore database
- [ ] Set up Firestore security rules
- [ ] Configure authorized domains for your deployment URLs
- [ ] Enable Firebase Analytics (optional)

### 3. Local Testing
- [ ] Run `npm install` to install dependencies
- [ ] Create `.env.local` with your Firebase config
- [ ] Run `npm run dev` to test locally
- [ ] Test user authentication
- [ ] Test all major features
- [ ] Run `npm run build` to test production build
- [ ] Run `npm run preview` to test production build locally

## ✅ GitHub Repository Setup

### 1. Repository Configuration
- [ ] Push code to GitHub repository
- [ ] Ensure `.env*` files are in `.gitignore`
- [ ] Verify `package.json` has correct metadata
- [ ] Check that all configuration files are committed:
  - [ ] `vercel.json`
  - [ ] `netlify.toml`
  - [ ] `.gitignore`
  - [ ] `.env.example`

### 2. Repository Settings
- [ ] Set repository visibility (public/private)
- [ ] Enable GitHub Pages if needed
- [ ] Configure branch protection rules
- [ ] Set up issue templates (optional)

## ✅ Vercel Deployment

### 1. Vercel Setup
- [ ] Create account at [vercel.com](https://vercel.com)
- [ ] Connect GitHub account
- [ ] Import repository

### 2. Project Configuration
- [ ] Framework Preset: Vite
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Install Command: `npm install`
- [ ] Node.js Version: 18.x

### 3. Environment Variables
Add these in Vercel dashboard (Project Settings → Environment Variables):
- [ ] `VITE_FIREBASE_API_KEY`
- [ ] `VITE_FIREBASE_AUTH_DOMAIN`
- [ ] `VITE_FIREBASE_PROJECT_ID`
- [ ] `VITE_FIREBASE_STORAGE_BUCKET`
- [ ] `VITE_FIREBASE_MESSAGING_SENDER_ID`
- [ ] `VITE_FIREBASE_APP_ID`
- [ ] `VITE_FIREBASE_MEASUREMENT_ID` (optional)

### 4. Deployment
- [ ] Deploy to production
- [ ] Test deployed application
- [ ] Verify all features work
- [ ] Check console for errors

## ✅ Netlify Deployment (Alternative)

### 1. Netlify Setup
- [ ] Create account at [netlify.com](https://netlify.com)
- [ ] Connect GitHub account
- [ ] Create new site from Git

### 2. Build Settings
- [ ] Repository: Your GitHub repository
- [ ] Branch: `main`
- [ ] Build Command: `npm run build`
- [ ] Publish Directory: `dist`

### 3. Environment Variables
Add in Netlify dashboard (Site Settings → Environment Variables):
- [ ] All Firebase environment variables (same as Vercel)

### 4. Deployment
- [ ] Deploy site
- [ ] Test deployed application
- [ ] Verify all features work

## ✅ Post-Deployment Verification

### 1. Functionality Testing
- [ ] User registration/login works
- [ ] Navigation between pages works
- [ ] Learning modules load correctly
- [ ] Progress tracking works
- [ ] Quiz functionality works
- [ ] Leaderboard displays correctly
- [ ] User profile works

### 2. Performance Testing
- [ ] Page load times are acceptable
- [ ] Images load properly
- [ ] No console errors
- [ ] Mobile responsiveness works
- [ ] SEO meta tags are present

### 3. Security Testing
- [ ] HTTPS is enabled
- [ ] Security headers are present
- [ ] Firebase security rules are configured
- [ ] No sensitive data in client code
- [ ] Authentication flows properly

## ✅ Firebase Security Rules

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own user data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Users can read public leaderboard data
    match /leaderboard/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Users can read/write their own progress
    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Storage Rules (if using Firebase Storage)
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## ✅ Monitoring & Analytics

### 1. Error Monitoring
- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Monitor console errors
- [ ] Set up alerts for critical errors

### 2. Analytics
- [ ] Configure Google Analytics (if using)
- [ ] Set up Firebase Analytics
- [ ] Monitor user engagement metrics

### 3. Performance Monitoring
- [ ] Set up Core Web Vitals monitoring
- [ ] Monitor page load times
- [ ] Track user experience metrics

## ✅ Custom Domain (Optional)

### 1. Domain Setup
- [ ] Purchase domain name
- [ ] Configure DNS settings
- [ ] Add domain to hosting platform
- [ ] Set up SSL certificate

### 2. DNS Configuration
- [ ] Point domain to hosting platform
- [ ] Configure subdomains if needed
- [ ] Set up redirects if needed

## ✅ Backup & Recovery

### 1. Data Backup
- [ ] Set up Firebase backup
- [ ] Export user data regularly
- [ ] Backup configuration files

### 2. Recovery Plan
- [ ] Document recovery procedures
- [ ] Test backup restoration
- [ ] Set up monitoring alerts

## 🚨 Common Issues & Solutions

### Build Failures
- [ ] Check Node.js version (use 18+)
- [ ] Verify all dependencies are installed
- [ ] Check for TypeScript errors
- [ ] Ensure environment variables are set

### Authentication Issues
- [ ] Verify Firebase project configuration
- [ ] Check authorized domains
- [ ] Ensure Google Auth is enabled
- [ ] Verify environment variables

### Performance Issues
- [ ] Enable code splitting
- [ ] Optimize images
- [ ] Use CDN for static assets
- [ ] Implement lazy loading

---

## 📞 Support

If you encounter issues:
1. Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
2. Review Firebase console for errors
3. Check hosting platform logs
4. Test locally with production build

**Your Fin Quest India app should now be live and ready for users! 🎉**
