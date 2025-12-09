import { AttachmentStyle, UserSettings } from '../types/attachment'
import { MoodKey } from '../data/moods'
import { attachmentDescriptions } from '../data/attachmentStyles'

interface AIContextParams {
  settings: UserSettings
  myMood?: MoodKey
  partnerMood?: MoodKey
  customPrompt?: string
}

export const aiService = {
  // Get AI context for Claude API
  getAIContext: (params: AIContextParams): string => {
    const { settings, myMood, partnerMood } = params

    const myDesc = attachmentDescriptions[settings.myAttachment]
    const partnerDesc = attachmentDescriptions[settings.partnerAttachment]

    const myFullDesc = settings.myAttachmentSecondary
      ? `${myDesc} with ${attachmentDescriptions[settings.myAttachmentSecondary]} tendencies`
      : myDesc

    const partnerFullDesc = settings.partnerAttachmentSecondary
      ? `${partnerDesc} with ${attachmentDescriptions[settings.partnerAttachmentSecondary]} tendencies`
      : partnerDesc

    let context = `You are a systems engineer consulting on a coupled network architecture.
Node A (${settings.myName}) is ${myFullDesc}. Node B (${settings.partnerName}) is ${partnerFullDesc}.
Use dev/network engineering language: status codes (200, 503), async/sync, latency, throughput, buffering, keepalive packets, circuit breakers, etc.
Keep responses brief (2-3 sentences), technical, and actionable. Frame relationship dynamics as system optimization, not emotional fixing.
Example language: "High latency detected", "implement circuit breaker", "buffer overflow", "ACK received", "graceful degradation", "eventual consistency".
Consider each node's attachment profile (including secondary tendencies) when providing recommendations.`

    if (myMood || partnerMood) {
      context += `\n\nCurrent system status: Node A is ${myMood || 'unknown'}, Node B is ${partnerMood || 'unknown'}.`
    }

    return context
  },

  // Call Claude API for insights
  getInsight: async (params: AIContextParams): Promise<string> => {
    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY

    if (!apiKey) {
      return 'Claude API key not configured. Add VITE_ANTHROPIC_API_KEY to your .env file to enable AI insights.'
    }

    const context = aiService.getAIContext(params)
    const userPrompt = params.customPrompt || 'Analyze the current system state and provide optimization recommendations.'

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 300,
          system: context,
          messages: [
            {
              role: 'user',
              content: userPrompt
            }
          ]
        })
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.content[0].text
    } catch (error) {
      console.error('AI insight error:', error)
      return 'Unable to generate insight at this time. Please check your API configuration.'
    }
  },

  // Optimize message for better communication
  optimizeMessage: async (
    message: string,
    params: AIContextParams
  ): Promise<string> => {
    const context = aiService.getAIContext(params)

    const prompt = `Given this message from Node A to Node B: "${message}"

Rewrite it using the system engineering metaphor to be clearer and less likely to trigger defensive responses. Keep the core meaning but frame it technically. Return ONLY the optimized message, no explanation.`

    return aiService.getInsight({ ...params, customPrompt: prompt })
  }
}
