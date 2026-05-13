# 🚀 TaskPulse Setup Guide

This guide will help you get TaskPulse running in 5 minutes.

## Step 1: Get Your Groq API Key (2 minutes)

1. **Visit** [console.groq.com](https://console.groq.com)
2. **Sign up** with your email (or sign in if you already have an account)
3. **Navigate** to the "API Keys" section in the dashboard
4. **Create** a new API key
5. **Copy** the key (it will look like `gsk_...`)

**💡 Pro Tip:** Free tier includes 30 requests per minute - plenty for experimenting!

---

## Step 2: Start the Development Server (2 minutes)

```bash
# Make sure you're in the project directory
cd AI-Task-Automation-Agent

# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

The app will automatically open at `http://localhost:3000`

---

## Step 3: Configure Your API Key (1 minute)

1. **Look for** the **Settings** panel on the left sidebar
2. **Paste** your Groq API key (from Step 1) into the "Groq API Key" field
3. **Click** "Save Key" button
4. **Confirm** you see "✓ Configured" next to "API Key" in the Agent Status panel

---

## Step 4: Try Your First Task (1 minute)

1. **Click** the command bar at the top
2. **Type** a task, for example:
   ```
   Draft a professional email thanking a client for their business
   ```
3. **Press Enter** or click the "Execute" button
4. **Watch** as the AI processes your task and displays:
   - **Chain of Thought**: The AI's step-by-step reasoning
   - **Final Result**: The completed task

---

## 📝 Example Tasks to Try

Here are some tasks to get you started:

- "Explain quantum computing in 3 paragraphs"
- "Write a Python function to validate email addresses"
- "Create a marketing tagline for an AI productivity tool"
- "Debug this code: `const x = arr.filter(i => i > 5).reduce((a,b) => a+b)`"
- "Write a haiku about technology"
- "List 5 creative business ideas for a coffee shop"

---

## 🛠️ Available Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

---

## 🎨 Customization Tips

### Change the Model

To use a different Groq model, edit `src/services/groqApi.js`:

```js
model: 'llama-3.3-70b-versatile',  // Change this line
```

**Available options:**
- `llama-3.3-70b-versatile` (Recommended - most powerful)
- `llama-3.1-8b-instant` (Fast and lightweight)
- `mistral-saba-24b` (Balanced performance)

### Change Colors

Edit `tailwind.config.js` to customize the cyberpunk aesthetic:

```js
colors: {
  'cyber-accent': '#00ff88',    // Green neon
  'cyber-purple': '#7c3aed',    // Purple accent
}
```

---

## 📂 Project File Structure

```
taskagent/
├── src/
│   ├── components/           # UI components
│   ├── hooks/                # Custom React hooks
│   ├── services/             # API integration
│   ├── App.jsx               # Main app component
│   └── index.css             # Global styles
├── public/                   # Static files
├── package.json              # Dependencies
├── vite.config.js            # Vite config
├── tailwind.config.js        # Tailwind config
└── README.md                 # Full documentation
```

---

## 🔒 Privacy & Security

✅ Your API key is stored **only in your browser** (localStorage)
✅ No data is sent to any server except Groq Cloud
✅ All processing happens client-side
✅ You control your API usage and can revoke keys anytime

---

## ⚡ Troubleshooting

### "API key not provided" error
→ Make sure you've saved your API key in the Settings sidebar

### "Failed to call Groq API" error
→ Check your internet connection and API key validity at [console.groq.com](https://console.groq.com)

### Port 3000 already in use
→ Run: `npm run dev -- --port 3001`

### Module not found errors
→ Run: `rm -rf node_modules && npm install`

---

## 📚 Next Steps

1. **Explore**: Try different tasks and models
2. **Customize**: Modify colors and styling to match your brand
3. **Deploy**: Push to GitHub and enable GitHub Pages
4. **Extend**: Add more features (templates, export, etc.)

---

**Happy automating! ⚡**
