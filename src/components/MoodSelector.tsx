import { moodData, MoodKey } from '../data/moods'

interface MoodSelectorProps {
  person: 'me' | 'partner'
  currentMood?: MoodKey
  onMoodSelect: (mood: MoodKey) => void
}

export default function MoodSelector({ person, currentMood, onMoodSelect }: MoodSelectorProps) {
  const moods = Object.entries(moodData) as [MoodKey, typeof moodData[MoodKey]][]

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-slate-200">
        {person === 'me' ? 'Your Status' : 'Their Status'}
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {moods.map(([key, mood]) => (
          <button
            key={key}
            onClick={() => onMoodSelect(key)}
            className={`
              p-3 rounded-xl border-2 transition-all text-left
              ${currentMood === key
                ? 'scale-105 shadow-lg'
                : 'hover:scale-102 hover:shadow-md'
              }
            `}
            style={{
              borderColor: currentMood === key ? mood.color : 'rgba(255, 255, 255, 0.1)',
              backgroundColor: currentMood === key
                ? `${mood.color}20`
                : 'rgba(255, 255, 255, 0.05)'
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{mood.emoji}</span>
              <span className="font-mono text-sm" style={{ color: mood.color }}>
                {mood.label}
              </span>
            </div>
            <div className="text-xs text-slate-400">
              {mood.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
