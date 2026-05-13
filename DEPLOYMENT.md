# 🚀 Deployment Guide for TaskPulse

This guide shows you how to deploy TaskPulse to the internet for free.

## Option 1: Deploy to GitHub Pages (Recommended ⭐)

### Prerequisites
- Project is already in a Git repository
- You have push access to your GitHub repo

### Steps

1. **Enable GitHub Pages in your repository settings:**
   - Go to your repo on GitHub
   - Navigate to **Settings** → **Pages**
   - Set "Build and deployment" to:
     - Source: **GitHub Actions**

2. **The workflow will automatically deploy on push:**
   ```bash
   git add .
   git commit -m "Deploy TaskPulse"
   git push origin main
   ```

3. **Check the Actions tab:**
   - Go to **Actions** tab on GitHub
   - You'll see the "Build and Deploy to GitHub Pages" workflow running
   - Once completed (✅), your site is live!

4. **Access your live site:**
   - URL: `https://yourusername.github.io/AI-Task-Automation-Agent`
   - (Replace with your actual username and repo name)

**Note:** The GitHub Actions workflow (`.github/workflows/deploy.yml`) is already configured in this project!

---

## Option 2: Deploy to Vercel (Fastest)

### Prerequisites
- GitHub/GitLab/Bitbucket account

### Steps

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd AI-Task-Automation-Agent
   vercel
   ```

3. **Follow the prompts:**
   - Select your project folder
   - Confirm project settings
   - Vercel will automatically build and deploy

4. **Your site is live!**
   - Vercel will give you a URL: `https://taskpulse-xyz.vercel.app`
   - Every push to main automatically redeploys

**Advantages:**
- ⚡ Ultra-fast edge deployment
- 🔄 Automatic deploys on every push
- 📊 Built-in analytics
- 🎯 Custom domains

---

## Option 3: Deploy to Netlify

### Prerequisites
- GitHub account connected

### Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Or connect with GitHub:**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Netlify handles everything automatically!

**Advantages:**
- 🎨 Great UI
- 🔄 Continuous deployment
- 📝 Netlify forms support
- 🌍 Global CDN

---

## Post-Deployment Checklist

After deploying, verify everything works:

- [ ] Site loads at your custom URL
- [ ] API key input field works
- [ ] Command bar executes tasks
- [ ] Results display correctly
- [ ] Styling looks good (colors, fonts, layout)
- [ ] Mobile responsive on phone/tablet
- [ ] No console errors (check browser DevTools)

---

## Setting Up a Custom Domain

### For GitHub Pages
1. Go to repo **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `taskpulse.com`)
3. Update your domain's DNS records to point to GitHub Pages

### For Vercel
1. Go to your project settings on Vercel
2. Click **Domains**
3. Add your domain and follow DNS setup instructions

### For Netlify
1. Go to **Domain settings**
2. Click **Add custom domain**
3. Follow the DNS configuration guide

---

## Environment Variables

TaskPulse doesn't require environment variables for deployment since the API key is entered by users.

However, if you want to preload a default key:
1. Create a `.env` file with: `VITE_GROQ_API_KEY=your_key`
2. Build with `npm run build`

**⚠️ Warning:** Never commit real API keys to GitHub!

---

## Troubleshooting Deployment

### "Build failed" error
→ Run `npm run build` locally to see the error
→ Usually a missing dependency or typo

### Site shows "404 Not Found"
→ Check deployment logs on your hosting platform
→ Ensure `dist/index.html` was deployed
→ Verify build command is `npm run build`

### Styling looks broken
→ Check CSS file sizes (should be >10KB)
→ Verify Tailwind CSS built correctly
→ Clear browser cache (Ctrl+Shift+Delete)

### API calls fail with CORS error
→ This is normal - use a proxy or fix via Groq API headers
→ Current setup should work as-is with Groq API

---

## Automatic Deployments

### GitHub Pages (Already Configured)
Every time you push to `main`, the workflow automatically:
1. Runs `npm install`
2. Runs `npm run build`
3. Deploys to GitHub Pages

No additional setup needed!

### Vercel
Once connected, automatic deployments happen on:
- Every push to `main`
- Every pull request (preview deployment)
- Manual redeploy option

### Netlify
Configure automatic deploys:
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Done! Auto-deploys on every push

---

## Performance Tips

- ✅ Current build size: ~70KB gzipped (excellent!)
- 📦 No heavy dependencies used
- ⚡ Vite optimizes bundle automatically
- 🚀 Deployed sites load in <1 second

---

## Support

Need help?
- 📖 [Full README](README.md)
- 📝 [Setup Guide](SETUP.md)
- 🔗 [GitHub Issues](https://github.com/khushi-infinity/AI-Task-Automation-Agent/issues)
- 💬 Check deployment platform docs

---

**Your TaskPulse is now live! 🎉**
