import { useState } from 'react'
import { UserSettings } from '../types/attachment'
import { MoodKey } from '../data/moods'
import { aiService } from '../services/ai'

interface AIInsightsProps {
  settings: UserSettings
  myMood?: MoodKey
  partnerMood?: MoodKey
}

export default function AIInsights({ settings, myMood, partnerMood }: AIInsightsProps) {
  const [insight, setInsight] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [messageToOptimize, setMessageToOptimize] = useState('')
  const [optimizedMessage, setOptimizedMessage] = useState('')
  const [activeTab, setActiveTab] = useState<'insights' | 'optimizer'>('insights')

  const handleGetInsight = async () => {
    setLoading(true)
    try {
      const result = await aiService.getInsight({
        settings,
        myMood,
        partnerMood
      })
      setInsight(result)
    } finally {
      setLoading(false)
    }
  }

  const handleOptimizeMessage = async () => {
    if (!messageToOptimize.trim()) return

    setLoading(true)
    try {
      const result = await aiService.optimizeMessage(messageToOptimize, {
        settings,
        myMood,
        partnerMood
      })
      setOptimizedMessage(result)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <h2 className="text-2xl font-serif font-semibold mb-4">AI-Powered Insights</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-white/10">
        <button
          onClick={() => setActiveTab('insights')}
          className={`px-4 py-2 font-semibold transition ${
            activeTab === 'insights'
              ? 'text-purple-400 border-b-2 border-purple-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          System Analysis
        </button>
        <button
          onClick={() => setActiveTab('optimizer')}
          className={`px-4 py-2 font-semibold transition ${
            activeTab === 'optimizer'
              ? 'text-purple-400 border-b-2 border-purple-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Message Optimizer
        </button>
      </div>

      {/* System Analysis Tab */}
      {activeTab === 'insights' && (
        <div className="space-y-4">
          <button
            onClick={handleGetInsight}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-purple-500/50 disabled:to-pink-500/50 text-white py-3 rounded-xl font-semibold transition disabled:cursor-not-allowed"
          >
            {loading ? 'Analyzing System...' : 'Get AI Insight'}
          </button>

          {insight && (
            <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
              <div className="text-sm text-purple-400 font-semibold mb-2">System Analysis:</div>
              <div className="text-sm text-slate-200 whitespace-pre-wrap">{insight}</div>
            </div>
          )}

          <div className="text-xs text-slate-400">
            Claude analyzes your current attachment styles and moods to provide systems engineering insights
            for optimizing your relationship dynamics.
          </div>
        </div>
      )}

      {/* Message Optimizer Tab */}
      {activeTab === 'optimizer' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Message to Optimize
            </label>
            <textarea
              value={messageToOptimize}
              onChange={(e) => setMessageToOptimize(e.target.value)}
              placeholder="Enter a message you want to send to your partner..."
              className="w-full h-24 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>

          <button
            onClick={handleOptimizeMessage}
            disabled={loading || !messageToOptimize.trim()}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-blue-500/50 disabled:to-purple-500/50 text-white py-3 rounded-xl font-semibold transition disabled:cursor-not-allowed"
          >
            {loading ? 'Optimizing...' : 'Optimize Message'}
          </button>

          {optimizedMessage && (
            <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/30">
              <div className="text-sm text-blue-400 font-semibold mb-2">Optimized Message:</div>
              <div className="text-sm text-slate-200 whitespace-pre-wrap">{optimizedMessage}</div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(optimizedMessage)
                }}
                className="mt-3 text-xs bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-3 py-1 rounded-lg transition"
              >
                Copy to Clipboard
              </button>
            </div>
          )}

          <div className="text-xs text-slate-400">
            Claude rewrites your message using systems engineering language to reduce defensiveness
            and improve communication clarity.
          </div>
        </div>
      )}
    </div>
  )
}
