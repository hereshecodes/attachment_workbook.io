import { AttachmentStyle } from '../types/attachment'
import { MoodKey, moodData } from '../data/moods'
import { attachmentShortLabels } from '../data/attachmentStyles'

interface LiveStatusCardsProps {
  myName: string
  partnerName: string
  myMood?: MoodKey
  partnerMood?: MoodKey
  myAttachment?: AttachmentStyle
  partnerAttachment?: AttachmentStyle
  myAttachmentSecondary?: AttachmentStyle
  partnerAttachmentSecondary?: AttachmentStyle
}

export default function LiveStatusCards({
  myName,
  partnerName,
  myMood,
  partnerMood,
  myAttachment,
  partnerAttachment,
  myAttachmentSecondary,
  partnerAttachmentSecondary
}: LiveStatusCardsProps) {
  const getAttachmentBadgeText = (primary?: AttachmentStyle, secondary?: AttachmentStyle) => {
    if (!primary) return null
    if (secondary) {
      return `${attachmentShortLabels[primary]} / ${attachmentShortLabels[secondary]}`
    }
    return attachmentShortLabels[primary]
  }

  const getAttachmentBadgeClass = (primary?: AttachmentStyle) => {
    if (!primary) return ''
    const colorMap = {
      anxious: 'from-blue-500 to-blue-600',
      avoidant: 'from-purple-500 to-purple-600',
      secure: 'from-green-500 to-green-600',
      fearful: 'from-orange-500 to-orange-600'
    }
    return `bg-gradient-to-r ${colorMap[primary]}`
  }

  const renderCard = (
    person: 'me' | 'partner',
    name: string,
    mood?: MoodKey,
    attachment?: AttachmentStyle,
    attachmentSecondary?: AttachmentStyle
  ) => {
    const moodInfo = mood ? moodData[mood] : null
    const nodeLabel = person === 'me' ? 'Node A' : 'Node B'

    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-slate-400 font-mono">{nodeLabel}</div>
            <div className="text-xl font-semibold">{name}</div>
          </div>
          {moodInfo && (
            <div
              className="text-4xl"
              style={{ filter: `drop-shadow(0 0 8px ${moodInfo.color}40)` }}
            >
              {moodInfo.emoji}
            </div>
          )}
        </div>

        {moodInfo && (
          <div className="mb-4">
            <div
              className="font-mono text-sm font-semibold mb-1"
              style={{ color: moodInfo.color }}
            >
              {moodInfo.label}
            </div>
            <div className="text-sm text-slate-300">
              {moodInfo.description}
            </div>
          </div>
        )}

        {attachment && (
          <div
            className={`text-center text-xs text-white py-2 px-3 rounded-full ${getAttachmentBadgeClass(attachment)}`}
          >
            {getAttachmentBadgeText(attachment, attachmentSecondary)}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {renderCard('me', myName, myMood, myAttachment, myAttachmentSecondary)}
      {renderCard('partner', partnerName, partnerMood, partnerAttachment, partnerAttachmentSecondary)}
    </div>
  )
}
