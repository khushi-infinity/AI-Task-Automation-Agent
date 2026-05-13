import { useState, useCallback } from 'react'
import { callGroqAPI, parseTaskResponse } from '../services/groqApi'

export const useGroq = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('groq_api_key') || ''
  })

  const saveApiKey = useCallback((key) => {
    localStorage.setItem('groq_api_key', key)
    setApiKey(key)
  }, [])

  const executeTask = useCallback(
    async (task, customSystemPrompt = '') => {
      if (!apiKey) {
        setError('Please provide your Groq API key first')
        return null
      }

      setLoading(true)
      setError(null)

      try {
        const response = await callGroqAPI(apiKey, task, customSystemPrompt)
        const parsed = parseTaskResponse(response.content)
        setLoading(false)
        return {
          ...parsed,
          rawContent: response.content,
          usage: response.usage,
        }
      } catch (err) {
        const errorMessage = err.message
        setError(errorMessage)
        setLoading(false)
        return null
      }
    },
    [apiKey]
  )

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return {
    loading,
    error,
    apiKey,
    saveApiKey,
    executeTask,
    clearError,
  }
}
