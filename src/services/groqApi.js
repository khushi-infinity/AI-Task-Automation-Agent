import axios from 'axios'

const GROQ_API_BASE_URL = 'https://api.groq.com/openai/v1/chat/completions'

export const callGroqAPI = async (apiKey, userMessage, systemPrompt = '') => {
  if (!apiKey) {
    throw new Error('Groq API key is not provided')
  }

  const defaultSystemPrompt =
    systemPrompt ||
    `You are TaskPulse, an AI automation agent. You help users complete tasks efficiently.
When a user gives you a task, think through it step-by-step (show your "Chain of Thought"), then provide the final result.
Format your response as:
CHAIN OF THOUGHT:
[Your step-by-step reasoning]

FINAL RESULT:
[The actual output/solution]`

  try {
    const response = await axios.post(
      GROQ_API_BASE_URL,
      {
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: defaultSystemPrompt,
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        temperature: 0.7,
        max_tokens: 2048,
        top_p: 1,
        stream: false,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return {
      success: true,
      content: response.data.choices[0].message.content,
      usage: response.data.usage,
    }
  } catch (error) {
    throw new Error(error.response?.data?.error?.message || error.message || 'Failed to call Groq API')
  }
}

export const parseTaskResponse = (content) => {
  const chainOfThoughtMatch = content.match(
    /CHAIN OF THOUGHT:\s*([\s\S]*?)(?=FINAL RESULT:|$)/i
  )
  const finalResultMatch = content.match(/FINAL RESULT:\s*([\s\S]*?)$/i)

  return {
    chainOfThought: chainOfThoughtMatch
      ? chainOfThoughtMatch[1].trim()
      : 'Processing...',
    finalResult: finalResultMatch
      ? finalResultMatch[1].trim()
      : content,
  }
}
