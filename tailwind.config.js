/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0e27',
        'cyber-darker': '#050812',
        'cyber-accent': '#00ff88',
        'cyber-purple': '#7c3aed',
        'cyber-blue': '#3b82f6',
        'cyber-pink': '#ec4899',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.5)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.5)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
