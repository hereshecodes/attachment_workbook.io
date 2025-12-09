import { useState } from 'react'
import { AttachmentStyle } from '../types/attachment'
import { MoodKey } from '../data/moods'

interface DateNightIdeasProps {
  myAttachment?: AttachmentStyle
  partnerAttachment?: AttachmentStyle
  myMood?: MoodKey
  partnerMood?: MoodKey
}

interface DateIdea {
  title: string
  description: string
  duration: string
  energyLevel: string
}

export default function DateNightIdeas({
  myAttachment,
  partnerAttachment,
  myMood,
  partnerMood
}: DateNightIdeasProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [ideas, setIdeas] = useState<DateIdea[]>([])

  const generateIdeas = () => {
    const suggestions: DateIdea[] = []

    // Low energy / shutdown states
    if (myMood === 'shutdown' || partnerMood === 'shutdown' ||
        myMood === 'processing' || partnerMood === 'processing') {
      suggestions.push({
        title: 'Low-Bandwidth Connection',
        description: 'Watch a show together with minimal talking required. Physical proximity without demands.',
        duration: '1-2 hours',
        energyLevel: 'Low'
      })
      suggestions.push({
        title: 'Parallel Processing Session',
        description: 'Same room, different activities. Read books, work on hobbies, occasional check-ins.',
        duration: '2-3 hours',
        energyLevel: 'Low'
      })
    }

    // Anxious attachment needs
    if (myAttachment === 'anxious' || partnerAttachment === 'anxious') {
      suggestions.push({
        title: 'Quality Time Intensive',
        description: 'Full-attention activity: cooking together, board game, deep conversation over dinner.',
        duration: '2-3 hours',
        energyLevel: 'Medium'
      })
      suggestions.push({
        title: 'Planned Adventure',
        description: 'Try something new together - builds shared experience and connection.',
        duration: '3-4 hours',
        energyLevel: 'High'
      })
    }

    // Avoidant attachment needs
    if (myAttachment === 'avoidant' || partnerAttachment === 'avoidant') {
      suggestions.push({
        title: 'Side-by-Side Activity',
        description: 'Hike, bike ride, museum visit - connected but with natural breaks in conversation.',
        duration: '2-3 hours',
        energyLevel: 'Medium-High'
      })
      suggestions.push({
        title: 'Structured Date',
        description: 'Movie, concert, or event with clear start/end time and built-in topic of conversation.',
        duration: '2-3 hours',
        energyLevel: 'Medium'
      })
    }

    // Connected/calm states
    if ((myMood === 'connected' || myMood === 'calm') &&
        (partnerMood === 'connected' || partnerMood === 'calm')) {
      suggestions.push({
        title: 'Relationship Check-In',
        description: 'Appreciate what\'s working. Discuss system optimization over nice dinner.',
        duration: '1-2 hours',
        energyLevel: 'Low-Medium'
      })
      suggestions.push({
        title: 'Try Something New',
        description: 'Good time to expand comfort zone together - new restaurant, activity, or experience.',
        duration: '2-4 hours',
        energyLevel: 'Medium-High'
      })
    }

    // Conflict state
    if (myMood === 'conflict' || partnerMood === 'conflict') {
      suggestions.push({
        title: 'Reset Activity',
        description: 'Low-stakes fun to rebuild connection: mini golf, arcade, ice cream walk.',
        duration: '1-2 hours',
        energyLevel: 'Low-Medium'
      })
    }

    // Both need space
    if (myMood === 'needSpace' && partnerMood === 'needSpace') {
      suggestions.push({
        title: 'Separate But Together',
        description: 'Solo activities in morning, brief connection point for lunch, back to solo time.',
        duration: 'Flexible',
        energyLevel: 'Low'
      })
    }

    // Both need closeness
    if (myMood === 'needClose' && partnerMood === 'needClose') {
      suggestions.push({
        title: 'Intimacy Focus',
        description: 'Stay home, eliminate distractions, full focus on each other. Talk, touch, connect.',
        duration: '2-4 hours',
        energyLevel: 'Variable'
      })
    }

    // Default suggestions
    if (suggestions.length === 0) {
      suggestions.push(
        {
          title: 'Classic Dinner Date',
          description: 'Nice restaurant, dress up a bit, have real conversation.',
          duration: '2-3 hours',
          energyLevel: 'Medium'
        },
        {
          title: 'Active Date',
          description: 'Physical activity together - hike, bike, dance class, rock climbing.',
          duration: '2-3 hours',
          energyLevel: 'High'
        },
        {
          title: 'Home Cozy Night',
          description: 'Cook together, movie, games - comfortable and low-pressure.',
          duration: '3-4 hours',
          energyLevel: 'Low'
        }
      )
    }

    setIdeas(suggestions)
  }

  const handleOpen = () => {
    setIsOpen(true)
    generateIdeas()
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        💕 Date Night Ideas
      </button>

      {isOpen && (
        <div className="mt-4 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Attachment-Aware Date Suggestions</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-slate-300 mb-4">
            Based on your current attachment styles and mood states:
          </p>

          <div className="space-y-3">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-slate-900/50 rounded-lg p-4 border border-pink-500/30"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-pink-400">{idea.title}</h4>
                  <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">
                    {idea.energyLevel}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-2">{idea.description}</p>
                <div className="text-xs text-slate-400">Duration: {idea.duration}</div>
              </div>
            ))}
          </div>

          <button
            onClick={generateIdeas}
            className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg font-semibold transition text-sm"
          >
            🔄 Refresh Suggestions
          </button>

          <div className="mt-4 text-xs text-slate-500">
            Suggestions are tailored to your attachment styles and current emotional states
            to maximize connection and minimize stress.
          </div>
        </div>
      )}
    </div>
  )
}
