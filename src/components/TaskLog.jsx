import React from 'react'
import { Copy, Check } from 'lucide-react'

export default function TaskLog({ logs }) {
  const [copiedId, setCopiedId] = React.useState(null)

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="w-full h-96 glow-border-purple rounded-lg p-4 bg-cyber-dark/50 backdrop-blur overflow-y-auto">
      <div className="terminal-text text-cyber-purple mb-4 font-semibold">
        ⟨ TASK LOG ⟩
      </div>

      {logs.length === 0 ? (
        <div className="h-full flex items-center justify-center text-gray-500 text-sm">
          <p>No tasks executed yet. Enter a command in the bar above.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {logs.map((log, idx) => (
            <div
              key={idx}
              className="border-l-2 border-cyber-blue pl-4 pb-4 relative"
            >
              {/* Task Input */}
              <div className="mb-3">
                <div className="text-cyber-blue text-xs font-mono mb-1">
                  [INPUT]
                </div>
                <p className="text-white text-sm bg-cyber-darker p-2 rounded border-l-2 border-cyber-blue">
                  {log.task}
                </p>
              </div>

              {/* Chain of Thought */}
              {log.chainOfThought && (
                <div className="mb-3">
                  <div className="text-cyber-pink text-xs font-mono mb-1">
                    ⟨ CHAIN OF THOUGHT ⟩
                  </div>
                  <div className="text-gray-300 text-xs bg-cyber-darker p-2 rounded whitespace-pre-wrap max-h-32 overflow-y-auto">
                    {log.chainOfThought}
                  </div>
                </div>
              )}

              {/* Final Result */}
              {log.finalResult && (
                <div className="mb-2">
                  <div className="flex justify-between items-center">
                    <div className="text-cyber-accent text-xs font-mono mb-1">
                      ⟨ FINAL RESULT ⟩
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(log.finalResult, `result-${idx}`)
                      }
                      className="text-cyber-accent hover:text-white text-xs p-1"
                    >
                      {copiedId === `result-${idx}` ? (
                        <Check size={14} />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                  <div className="text-white text-xs bg-cyber-darker p-2 rounded whitespace-pre-wrap max-h-40 overflow-y-auto">
                    {log.finalResult}
                  </div>
                </div>
              )}

              {/* Error */}
              {log.error && (
                <div className="mt-2">
                  <div className="text-red-400 text-xs font-mono mb-1">
                    ✗ ERROR
                  </div>
                  <p className="text-red-300 text-xs bg-cyber-darker p-2 rounded">
                    {log.error}
                  </p>
                </div>
              )}

              {/* Timestamp */}
              <div className="text-gray-600 text-xs mt-2">
                {new Date(log.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
