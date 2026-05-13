import React from 'react'
import { Zap, AlertCircle, CheckCircle } from 'lucide-react'

export default function AgentStatus({ status, taskCount, apiKeySet }) {
  const getStatusColor = () => {
    switch (status) {
      case 'ready':
        return 'text-cyber-accent'
      case 'executing':
        return 'text-cyber-blue'
      case 'error':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'ready':
        return <CheckCircle size={16} />
      case 'executing':
        return <Zap size={16} className="animate-pulse" />
      case 'error':
        return <AlertCircle size={16} />
      default:
        return null
    }
  }

  const getStatusText = () => {
    switch (status) {
      case 'ready':
        return 'Ready'
      case 'executing':
        return 'Executing...'
      case 'error':
        return 'Error'
      default:
        return 'Idle'
    }
  }

  return (
    <div className="glow-border-blue rounded-lg p-4 bg-cyber-dark/50 backdrop-blur">
      <div className="terminal-text text-cyber-blue font-semibold mb-3">
        ⟨ AGENT STATUS ⟩
      </div>

      <div className="space-y-3 text-sm">
        {/* API Key Status */}
        <div className="flex items-center justify-between">
          <span className="text-gray-400">API Key:</span>
          <span
            className={`terminal-text font-semibold ${
              apiKeySet ? 'text-cyber-accent' : 'text-red-400'
            }`}
          >
            {apiKeySet ? '✓ Configured' : '✗ Not Set'}
          </span>
        </div>

        {/* Status */}
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Status:</span>
          <div className={`terminal-text font-semibold flex items-center gap-2 ${getStatusColor()}`}>
            {getStatusIcon()}
            {getStatusText()}
          </div>
        </div>

        {/* Tasks Completed */}
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Tasks:</span>
          <span className="terminal-text font-semibold text-cyber-purple">
            {taskCount} completed
          </span>
        </div>

        {/* System Prompt Indicator */}
        <div className="pt-2 border-t border-cyber-blue/30">
          <p className="text-xs text-gray-500">
            Model: Mixtral 8x7B | Running on Groq Cloud
          </p>
        </div>
      </div>
    </div>
  )
}
