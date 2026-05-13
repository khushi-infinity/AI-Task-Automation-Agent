# 📋 TaskPulse Quick Reference

## 🎯 Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Focus command bar | Click the input field |
| Execute task | `Enter` or Click "Execute" |
| Submit API key | Click "Save Key" |
| Clear task logs | Click "Clear Logs" in sidebar |
| Copy result | Click the copy icon on results |

---

## 🔧 Configuration Locations

| Setting | File/Location |
|---------|--------------|
| Colors & Theme | `tailwind.config.js` |
| Vite Build | `vite.config.js` |
| Component Layout | `src/App.jsx` |
| API Service | `src/services/groqApi.js` |
| Global Styles | `src/index.css` |
| Deployment Workflow | `.github/workflows/deploy.yml` |

---

## 🚀 Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Check TypeScript
npm run type-check  # (if added)
```

---

## 📊 Component Tree

```
App.jsx
├── Header.jsx
├── Sidebar.jsx
│   └── API Key input
│   └── Quick actions
├── CommandBar.jsx
│   └── Task input + Execute button
├── AgentStatus.jsx
│   └── API status
│   └── Task counter
│   └── Status indicator
└── TaskLog.jsx
    └── Task history
    └── Chain of Thought
    └── Final Result
```

---

## 🔑 Key Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2 | UI Framework |
| Vite | 5.0 | Build tool |
| Tailwind CSS | 3.4 | Styling |
| Axios | 1.6 | HTTP requests |
| Lucide React | 0.394 | Icons |
| Groq Cloud | Latest | LLM API |

---

## 🎨 Color Palette

| Color Name | Hex | Usage |
|-----------|-----|-------|
| Cyber Accent | `#00ff88` | Primary green neon |
| Cyber Purple | `#7c3aed` | Secondary accent |
| Cyber Blue | `#3b82f6` | Information color |
| Cyber Pink | `#ec4899` | Highlight color |
| Cyber Dark | `#0a0e27` | Light backgrounds |
| Cyber Darker | `#050812` | Dark backgrounds |

---

## 📝 CSS Classes

| Class | Purpose |
|-------|---------|
| `.neon-btn` | Primary button style |
| `.neon-btn-secondary` | Secondary button |
| `.cyber-input` | Input field (accent) |
| `.cyber-input-secondary` | Input field (purple) |
| `.terminal-text` | Monospace text style |
| `.glow-border-*` | Glowing borders |
| `.pulse-glow` | Pulsing animation |

---

## 🧠 Available Groq Models

| Model | Speed | Quality | Best For |
|-------|-------|---------|----------|
| `llama-3.3-70b-versatile` | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | General tasks (Default) |
| `llama-3.1-8b-instant` | ⚡⚡⚡⚡ | ⭐⭐⭐⭐ | Fast & lightweight |
| `mistral-saba-24b` | ⚡⚡⚡ | ⭐⭐⭐⭐ | Balanced performance |

---

## 📁 File Sizes

| File | Size |
|------|------|
| `dist/index.html` | 0.75 KB |
| `dist/assets/index.css` | 16.99 KB |
| `dist/assets/index.js` | 201.69 KB |
| **Total (gzipped)** | **71 KB** |

---

## ⚙️ Performance Metrics

- **Build time:** ~860ms
- **Bundle size:** 71 KB gzipped
- **Modules:** 1563 transformed
- **First load:** <1 second
- **API response:** <500ms (typical)

---

## 🔍 Debugging Tips

### In the Browser
1. Open DevTools: `F12` or `Ctrl+Shift+I`
2. Check Console tab for errors
3. Network tab shows API calls
4. Storage tab shows API key in localStorage

### Terminal
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Debug build
npm run build -- --debug

# Check for outdated packages
npm outdated
```

---

## 📚 Useful Links

| Link | Purpose |
|------|---------|
| [Groq Console](https://console.groq.com) | Get/manage API keys |
| [React Docs](https://react.dev) | React reference |
| [Tailwind Docs](https://tailwindcss.com) | CSS utility classes |
| [Vite Docs](https://vitejs.dev) | Build tool guide |
| [Axios Docs](https://axios-http.com) | HTTP client |
| [Lucide Icons](https://lucide.dev) | Icon reference |

---

## 🛠️ Environment Variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `VITE_GROQ_API_KEY` | (empty) | Optional: Pre-load API key |

---

## 📞 Getting Help

**Error Message** | **Solution**
---|---
"API key not provided" | Enter API key in Settings sidebar
"Failed to call Groq API" | Check internet connection & API key validity
"Port 3000 in use" | Run `npm run dev -- --port 3001`
"Module not found" | Run `npm install`
"Build failed" | Delete `node_modules`, then `npm install`

---

## ✅ Pre-Launch Checklist

- [ ] API key configured and validated
- [ ] Test task executed successfully
- [ ] Results display in task log
- [ ] All styling loads correctly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Ready for deployment

---

**Last Updated:** May 13, 2026
