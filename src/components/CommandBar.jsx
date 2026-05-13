import React, { useState } from 'react'
import { Send, Zap } from 'lucide-react'

export default function CommandBar({ onExecute, loading }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onExecute(input)
      setInput('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full glow-border-green rounded-lg p-4 bg-cyber-dark/50 backdrop-blur"
    >
      <div className="flex gap-3 items-center">
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task... (e.g., Draft a LinkedIn post about AI)"
            className="cyber-input"
            disabled={loading}
            autoFocus
          />
        </div>
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className={`neon-btn flex items-center gap-2 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <Zap size={18} className="animate-pulse" />
          ) : (
            <Send size={18} />
          )}
          <span>{loading ? 'Processing' : 'Execute'}</span>
        </button>
      </div>
      <p className="terminal-text text-cyber-accent text-xs mt-2 opacity-70">
        ▶ Ready for your command...
      </p>
    </form>
  )
}
