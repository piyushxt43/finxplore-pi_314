# 🚀 Environment Setup Guide

## For Local Development

Create a `.env.local` file in your project root with these values:

```bash
VITE_FIREBASE_API_KEY=AIzaSyDH0ZTkJDOEtyVTvh4Efo3WQ23gUmK7RE8
VITE_FIREBASE_AUTH_DOMAIN=trial-1-9d942.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=trial-1-9d942
VITE_FIREBASE_STORAGE_BUCKET=trial-1-9d942.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=851953229329
VITE_FIREBASE_APP_ID=1:851953229329:web:8c4aafb9779c007dd71bb0
VITE_FIREBASE_MEASUREMENT_ID=G-0LVQ97PB28
```

## Steps to Create .env.local:

1. **In your project root directory**, create a new file called `.env.local`
2. **Copy the content above** into the file
3. **Save the file**
4. **Restart your development server** (`npm run dev`)

## For Vercel Deployment:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable with the values above
5. Make sure to add them for Production, Preview, and Development environments
6. Redeploy your project

## For Netlify Deployment:

1. Go to your Netlify dashboard
2. Select your site
3. Go to Site Settings → Environment Variables
4. Add each variable with the values above
5. Redeploy your site

## Testing:

After setting up the environment variables:
- **Local**: Run `npm run dev` - should work without Firebase errors
- **Vercel**: Trigger a new deployment
- **Netlify**: Trigger a new deployment

Your app should now work properly! 🎉
