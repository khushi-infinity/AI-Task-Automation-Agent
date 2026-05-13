#!/bin/bash
# TaskPulse GitHub Push Script
# Run this to push your project to GitHub

echo "🚀 TaskPulse - GitHub Push Script"
echo "=================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
    echo "✓ Git initialized"
else
    echo "✓ Git repository already exists"
fi

echo ""
echo "📋 Staging all files..."
git add .

echo "✓ Files staged"
echo ""
echo "💬 Creating commit..."
git commit -m "🚀 Initial commit: TaskPulse - AI Task Automation Agent

Features:
  ✓ React + Vite + Tailwind CSS
  ✓ Groq API integration (llama-3.3-70b-versatile)
  ✓ Cyberpunk minimalist UI
  ✓ Command bar interface for task automation
  ✓ Chain of thought visualization
  ✓ Task history logging
  ✓ Secure localStorage API key management
  ✓ GitHub Pages auto-deployment

Documentation:
  - README.md: Full project documentation
  - SETUP.md: Quick start guide
  - DEPLOYMENT.md: Deployment options
  - QUICK_REFERENCE.md: Command reference"

echo ""
echo "🔗 Setting up remote (if needed)..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/khushi-infinity/AI-Task-Automation-Agent.git

echo "✓ Remote configured"
echo ""
echo "📤 Setting main branch..."
git branch -M main

echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Success! Your project is now on GitHub!"
echo ""
echo "📍 Your repository:"
echo "   https://github.com/khushi-infinity/AI-Task-Automation-Agent"
echo ""
echo "🌐 Your live site will be at:"
echo "   https://khushi-infinity.github.io/AI-Task-Automation-Agent"
echo ""
echo "⏳ Note: GitHub Pages deployment takes 1-2 minutes"
echo "   Check the Actions tab on GitHub for status"
