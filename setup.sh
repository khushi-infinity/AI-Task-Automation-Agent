#!/bin/bash
# Quick setup script for TaskPulse

echo "🚀 TaskPulse Setup Script"
echo "========================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo ""

# Create .env.local for development
if [ ! -f ".env.local" ]; then
    echo "VITE_GROQ_API_KEY=" > .env.local
    echo "✓ Created .env.local file"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "  1. Get your Groq API key: https://console.groq.com"
echo "  2. Start dev server: npm run dev"
echo "  3. Add your API key in the app's Settings sidebar"
echo ""
echo "🎉 Ready to go! Happy automating with TaskPulse!"
