# TaskPulse - AI Task Automation Agent

<div align="center">

![TaskPulse](https://img.shields.io/badge/Status-Active-00ff88?style=flat-square)
![React](https://img.shields.io/badge/React-18.2-blue?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**🚀 A sleek, cyberpunk-styled web interface for AI task automation powered by Groq Cloud's blazing-fast LLMs.**

[Live Demo](#) • [GitHub](https://github.com/khushi-infinity/AI-Task-Automation-Agent) • [Documentation](#documentation)

</div>

---

## ✨ Features

- **⚡ Lightning-Fast AI Processing** - Powered by Groq Cloud's Mixtral 8x7B model
- **🎨 Cyberpunk-Minimalist UI** - Dark mode interface with neon accents and glowing effects
- **💻 Terminal-Style Command Bar** - Input tasks like you're in a sci-fi terminal
- **🧠 Chain of Thought Visibility** - See the AI's reasoning process before the final result
- **📋 Task History Log** - View all your task executions with timestamps
- **🔐 Secure API Key Management** - Store API key locally in your browser
- **📱 Fully Responsive** - Works seamlessly on desktop and mobile devices
- **🚀 Zero Backend Required** - Runs entirely client-side

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend Framework** | React 18.2 |
| **Build Tool** | Vite 5.0 |
| **Styling** | Tailwind CSS 3.4 |
| **Icons** | Lucide React |
| **HTTP Client** | Axios |
| **AI Model** | Groq Cloud (Llama 3.3 70B) |
| **Hosting** | Vercel / Netlify / GitHub Pages |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm
- A free [Groq Cloud API key](https://console.groq.com)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/khushi-infinity/AI-Task-Automation-Agent.git
cd AI-Task-Automation-Agent

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# The app will automatically open at http://localhost:3000
```

### Get Your Groq API Key

1. Visit [console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Create a new API key in the API Keys section
4. Copy the key and paste it in TaskPulse's sidebar settings

---

## 📖 How to Use

1. **Set Your API Key**: Paste your Groq API key in the sidebar
2. **Enter a Task**: Type your task in the command bar (e.g., "Draft a LinkedIn post about AI")
3. **Execute**: Click "Execute" or press Enter
4. **View Results**: See the AI's chain of thought and final result in the task log

### Example Tasks

- "Draft a professional email responding to a client proposal"
- "Explain how quantum computing works in simple terms"
- "Create a Python function to sort a list of dictionaries by multiple keys"
- "Write a short story about a robot learning to paint"

---

## 📂 Project Structure

```
taskagent/
├── src/
│   ├── components/
│   │   ├── CommandBar.jsx      # Task input interface
│   │   ├── TaskLog.jsx          # Task history display
│   │   ├── AgentStatus.jsx      # Agent status indicator
│   │   ├── Sidebar.jsx          # Settings & API key config
│   │   └── Header.jsx           # App header
│   ├── hooks/
│   │   └── useGroq.js           # Groq API hook
│   ├── services/
│   │   └── groqApi.js           # Groq API client
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # This file
```

---

## 🎨 Customization

### Change Color Scheme

Edit `tailwind.config.js` to modify the cyberpunk colors:

```js
colors: {
  'cyber-accent': '#00ff88',    // Green neon
  'cyber-purple': '#7c3aed',    // Purple accent
  'cyber-blue': '#3b82f6',      // Blue accent
  'cyber-pink': '#ec4899',      // Pink accent
}
```

### Change AI Model

Edit `src/services/groqApi.js` and change the `model` parameter:

```js
model: 'llama-3.3-70b-versatile',  // Change this
```

**Available Groq models:**
- `llama-3.3-70b-versatile` (Default - powerful and fast)
- `llama-3.1-8b-instant` (Lightweight alternative)
- `mistral-saba-24b` (Fast and efficient)

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel
```

### Deploy to Netlify

```bash
# 1. Build the project
npm run build

# 2. Deploy using Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

The repository includes automated GitHub Actions workflow for deployment. Just push to the `main` branch and your site will be automatically deployed!

---

## 🔒 Security & Privacy

- **API Key Storage**: Your Groq API key is stored **only in your browser's localStorage**. It never touches our servers.
- **No Data Collection**: TaskPulse doesn't collect or store any of your tasks or results.
- **Client-Side Processing**: All processing happens in your browser.

---

## 🐛 Troubleshooting

### "API key not provided" error
- Make sure you've pasted a valid Groq API key in the sidebar
- Check that the key starts with `gsk_` (Groq keys format)

### "Failed to call Groq API" error
- Verify your API key is active at [console.groq.com](https://console.groq.com)
- Check your browser's internet connection
- Ensure you're not hitting rate limits (free tier: 30 requests/minute)

### CORS errors
- Make sure you're using a recent version of the Groq API
- Clear your browser cache and try again

---

## 📊 Features Roadmap

- [ ] **Task Templates** - Pre-built prompts for common tasks
- [ ] **Export Results** - Download task logs as PDF/JSON
- [ ] **Custom Models** - Support for other LLM providers (OpenAI, Anthropic, etc.)
- [ ] **Persistent Storage** - Save tasks to Supabase
- [ ] **Web Search Integration** - Real-time information retrieval
- [ ] **Dark/Light Theme Toggle** - User preference options
- [ ] **Multi-language Support** - i18n support

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Groq Cloud** - For providing free access to powerful LLMs
- **React & Vite** - For the excellent development experience
- **Tailwind CSS** - For simplifying CSS styling
- **Lucide React** - For beautiful SVG icons

---

## 📧 Contact & Support

Have questions or feedback? Feel free to:
- Open an [issue](https://github.com/khushi-infinity/AI-Task-Automation-Agent/issues)
- Start a [discussion](https://github.com/khushi-infinity/AI-Task-Automation-Agent/discussions)
- Check out the [documentation](#)

---

<div align="center">

**Made with ⚡ by [Khushi](https://github.com/khushi-infinity)**

⭐ If you find this useful, please consider giving it a star!

</div>
