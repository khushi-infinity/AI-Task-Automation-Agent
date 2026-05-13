import React from 'react'
import { Zap } from 'lucide-react'

export default function Header() {
  return (
    <div className="w-full border-b border-cyber-accent/30 pb-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded bg-cyber-accent/20">
          <Zap size={28} className="text-cyber-accent" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-wider">
            TaskPulse
          </h1>
          <p className="text-sm text-gray-400 terminal-text">
            AI Task Automation Agent • Powered by Groq Cloud
          </p>
        </div>
      </div>
    </div>
  )
}
