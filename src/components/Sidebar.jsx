import React from 'react'
import { Key, Plus, Trash2, Eye, EyeOff } from 'lucide-react'

export default function Sidebar({ apiKey, onApiKeyChange, onClearLogs }) {
  const [showKey, setShowKey] = React.useState(false)
  const [localKey, setLocalKey] = React.useState(apiKey)

  const handleSaveKey = () => {
    onApiKeyChange(localKey)
  }

  return (
    <div className="w-full md:w-64 bg-cyber-dark/80 backdrop-blur border-r border-cyber-accent/30 p-4 rounded-lg">
      <div className="terminal-text text-cyber-accent font-semibold mb-4 flex items-center gap-2">
        <Key size={16} />
        Settings
      </div>

      <div className="space-y-4">
        {/* API Key Configuration */}
        <div className="space-y-2">
          <label className="terminal-text text-xs text-cyber-purple font-semibold uppercase">
            Groq API Key
          </label>
          <div className="relative">
            <input
              type={showKey ? 'text' : 'password'}
              value={localKey}
              onChange={(e) => setLocalKey(e.target.value)}
              placeholder="sk-..."
              className="cyber-input-secondary"
            />
            <button
              onClick={() => setShowKey(!showKey)}
              className="absolute right-3 top-3 text-cyber-purple hover:text-cyber-accent"
            >
              {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <button
            onClick={handleSaveKey}
            className="w-full neon-btn-secondary text-xs mt-2"
          >
            Save Key
          </button>
          <p className="text-xs text-gray-500 leading-relaxed">
            Get your free Groq API key from{' '}
            <a
              href="https://console.groq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-accent hover:underline"
            >
              console.groq.com
            </a>
          </p>
        </div>

        {/* Quick Actions */}
        <div className="border-t border-cyber-purple/30 pt-4 space-y-2">
          <label className="terminal-text text-xs text-cyber-accent font-semibold uppercase">
            Quick Actions
          </label>
          <button
            onClick={onClearLogs}
            className="w-full neon-btn-secondary text-xs flex items-center justify-center gap-2"
          >
            <Trash2 size={14} />
            Clear Logs
          </button>
        </div>

        {/* Info */}
        <div className="border-t border-cyber-accent/30 pt-4 text-xs text-gray-500 space-y-2">
          <p className="font-semibold text-cyber-blue">⚡ TaskPulse v1.0</p>
          <p>
            Powered by Groq Cloud with Mixtral 8x7B for blazing-fast AI task
            automation.
          </p>
          <a
            href="https://github.com/khushi-infinity/AI-Task-Automation-Agent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-accent hover:underline block"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}
