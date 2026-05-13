import React, { useState, useEffect } from 'react'
import { useGroq } from './hooks/useGroq'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CommandBar from './components/CommandBar'
import TaskLog from './components/TaskLog'
import AgentStatus from './components/AgentStatus'

export default function App() {
  const { loading, error, apiKey, saveApiKey, executeTask, clearError } =
    useGroq()
  const [logs, setLogs] = useState([])
  const [agentStatus, setAgentStatus] = useState('ready')

  // Handle task execution
  const handleExecuteTask = async (task) => {
    setAgentStatus('executing')
    clearError()

    const result = await executeTask(task)

    if (result) {
      setLogs((prevLogs) => [
        {
          task,
          chainOfThought: result.chainOfThought,
          finalResult: result.finalResult,
          timestamp: new Date().toISOString(),
          error: null,
        },
        ...prevLogs,
      ])
      setAgentStatus('ready')
    } else {
      setLogs((prevLogs) => [
        {
          task,
          chainOfThought: '',
          finalResult: '',
          timestamp: new Date().toISOString(),
          error: error || 'Unknown error occurred',
        },
        ...prevLogs,
      ])
      setAgentStatus('error')
    }
  }

  // Reset status after error
  useEffect(() => {
    if (agentStatus === 'error') {
      const timer = setTimeout(() => setAgentStatus('ready'), 3000)
      return () => clearTimeout(timer)
    }
  }, [agentStatus])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-darker to-cyber-dark">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <Header />

        {/* Main layout - Sidebar + Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Sidebar
              apiKey={apiKey}
              onApiKeyChange={saveApiKey}
              onClearLogs={() => setLogs([])}
            />
          </div>

          {/* Main content */}
          <div className="md:col-span-3 space-y-6">
            {/* Error notification */}
            {error && (
              <div className="p-4 rounded-lg border-2 border-red-500/50 bg-red-900/20 text-red-300 terminal-text text-sm">
                <span className="font-semibold">✗ Error: </span>
                {error}
              </div>
            )}

            {/* Command Bar */}
            <CommandBar onExecute={handleExecuteTask} loading={loading} />

            {/* Stats + Task Log Row */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Agent Status */}
              <div className="lg:col-span-1">
                <AgentStatus
                  status={agentStatus}
                  taskCount={logs.length}
                  apiKeySet={!!apiKey}
                />
              </div>

              {/* Task Log */}
              <div className="lg:col-span-3">
                <TaskLog logs={logs} />
              </div>
            </div>

            {/* Welcome message */}
            {logs.length === 0 && (
              <div className="p-6 rounded-lg border border-cyber-purple/30 bg-cyber-dark/30 text-center">
                <p className="text-cyber-purple terminal-text font-semibold mb-2">
                  Welcome to TaskPulse
                </p>
                <p className="text-gray-400 text-sm">
                  Set up your Groq API key in the sidebar, then enter a task in
                  the command bar to get started.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-cyber-accent/10 text-center text-gray-600 text-xs">
          <p>
            TaskPulse © 2026 |{' '}
            <a
              href="https://github.com/khushi-infinity/AI-Task-Automation-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-accent hover:underline"
            >
              GitHub
            </a>
            {' '} | Built with React + Vite + Tailwind CSS | Powered by Groq Cloud
          </p>
        </div>
      </div>
    </div>
  )
}
