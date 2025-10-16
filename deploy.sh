#!/bin/bash

# Fin Quest India - Production Deployment Script
# This script helps deploy the application to production

set -e  # Exit on any error

echo "🚀 Fin Quest India - Production Deployment Script"
echo "=================================================="

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "❌ Error: .env.local file not found!"
    echo "Please copy .env.example to .env.local and configure your Firebase settings."
    echo ""
    echo "Run: cp .env.example .env.local"
    echo "Then edit .env.local with your Firebase configuration."
    exit 1
fi

echo "✅ Environment file found"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run type checking
echo "🔍 Running type check..."
npm run type-check

# Run linting
echo "🧹 Running linter..."
npm run lint

# Build the project
echo "🏗️  Building project..."
npm run build

echo "✅ Build completed successfully!"

# Test the production build locally
echo "🧪 Testing production build..."
npm run preview &
PREVIEW_PID=$!

# Wait a moment for the server to start
sleep 3

# Check if the preview server is running
if kill -0 $PREVIEW_PID 2>/dev/null; then
    echo "✅ Production build test successful!"
    kill $PREVIEW_PID
else
    echo "❌ Production build test failed!"
    exit 1
fi

echo ""
echo "🎉 Project is ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Push your code to GitHub"
echo "2. Connect your repository to Vercel or Netlify"
echo "3. Set up environment variables in your hosting platform"
echo "4. Deploy!"
echo ""
echo "For detailed instructions, see:"
echo "- DEPLOYMENT.md"
echo "- DEPLOYMENT_CHECKLIST.md"
echo ""
echo "Happy deploying! 🚀"
