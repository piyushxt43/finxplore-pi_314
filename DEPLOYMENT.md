# 🚀 Deployment Guide - Fin Quest India

This guide will help you deploy your Fin Quest India application to Vercel and Netlify.

## 📋 Prerequisites

- GitHub repository with your code
- Vercel account (free)
- Netlify account (free)
- Firebase project set up

## 🔧 Pre-Deployment Setup

### 1. Environment Variables
Create environment variables in your deployment platform:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 2. Firebase Configuration
Make sure your Firebase project has:
- ✅ Authentication enabled (Google provider)
- ✅ Firestore database created
- ✅ Project is public or has proper security rules

## 🚀 Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Connect GitHub to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"

2. **Import Repository**
   - Select your `fin-quest-india-main` repository
   - Vercel will auto-detect it's a Vite project

3. **Configure Build Settings**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all Firebase environment variables
   - Make sure to add them for Production, Preview, and Development

5. **Deploy**
   - Click "Deploy"
   - Your app will be live at `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel --prod
```

## 🌐 Deploy to Netlify

### Method 1: GitHub Integration (Recommended)

1. **Connect GitHub to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"

2. **Configure Build Settings**
   - Repository: Select your `fin-quest-india-main` repository
   - Branch: `main`
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Add Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add all Firebase environment variables

4. **Deploy**
   - Click "Deploy site"
   - Your app will be live at `https://your-site-name.netlify.app`

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Deploy from project directory
netlify deploy --prod --dir=dist
```

## 🔍 Troubleshooting

### Common Issues

#### 1. **404 Errors on Refresh**
- ✅ **Solution**: Make sure `vercel.json` and `netlify.toml` are in your repository
- ✅ **Check**: Both files have SPA redirect rules

#### 2. **Firebase Authentication Not Working**
- ✅ **Solution**: Check environment variables are set correctly
- ✅ **Check**: Firebase project has Google Auth enabled
- ✅ **Check**: Authorized domains include your deployment URL

#### 3. **Build Failures**
- ✅ **Solution**: Check Node.js version (use 18+)
- ✅ **Solution**: Run `npm install` locally first
- ✅ **Solution**: Check for TypeScript errors

#### 4. **Assets Not Loading**
- ✅ **Solution**: Check if `public` folder files are included
- ✅ **Solution**: Verify build output in `dist` folder

### Debug Steps

1. **Test Build Locally**
```bash
npm run build
npm run preview
```

2. **Check Environment Variables**
```bash
# In your deployment platform, verify all VITE_* variables are set
```

3. **Check Firebase Console**
- Verify project is active
- Check authentication providers
- Verify Firestore rules

## 📊 Performance Optimization

### Build Optimization
The current build generates a large bundle. To optimize:

1. **Code Splitting**
```typescript
// Use dynamic imports for large components
const LazyComponent = lazy(() => import('./LargeComponent'));
```

2. **Bundle Analysis**
```bash
npm install --save-dev vite-bundle-analyzer
# Add to vite.config.ts
```

### Caching
Both Vercel and Netlify configurations include:
- ✅ Static asset caching (1 year)
- ✅ CDN distribution
- ✅ Gzip compression

## 🔄 Continuous Deployment

### Automatic Deployments
Once connected to GitHub:
- ✅ Every push to `main` triggers deployment
- ✅ Pull requests create preview deployments
- ✅ Environment variables persist across deployments

### Manual Deployment
```bash
# Vercel
npm run deploy:vercel

# Netlify
npm run deploy:netlify
```

## 📱 Custom Domains

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

## 🛡️ Security Checklist

- ✅ Firebase security rules configured
- ✅ Environment variables not exposed in client code
- ✅ HTTPS enabled (automatic on both platforms)
- ✅ Authentication properly configured
- ✅ CORS settings correct for Firebase

## 📈 Monitoring

### Vercel Analytics
- Built-in performance monitoring
- Real-time analytics
- Error tracking

### Netlify Analytics
- Built-in analytics
- Form submissions tracking
- Error monitoring

## 🎯 Next Steps After Deployment

1. **Test All Features**
   - User registration/login
   - Module navigation
   - Progress tracking
   - Quiz functionality

2. **SEO Optimization**
   - Add meta tags
   - Configure sitemap
   - Set up Google Analytics

3. **Performance Monitoring**
   - Set up error tracking
   - Monitor Core Web Vitals
   - Optimize loading times

---

**Your Fin Quest India app should now be live and ready for users! 🎉**
