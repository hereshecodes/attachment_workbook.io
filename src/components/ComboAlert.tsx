import { AttachmentStyle } from '../types/attachment'
import { MoodKey, moodData } from '../data/moods'
import { getPairingKey } from '../data/attachmentPairings'

interface ComboAlertProps {
  myAttachment?: AttachmentStyle
  partnerAttachment?: AttachmentStyle
  myMood?: MoodKey
  partnerMood?: MoodKey
}

export default function ComboAlert({
  myAttachment,
  partnerAttachment,
  myMood,
  partnerMood
}: ComboAlertProps) {
  if (!myAttachment || !partnerAttachment || !myMood || !partnerMood) {
    return null
  }

  // Check for problematic combinations
  const alerts = []

  // Anxious-Avoidant protest-withdraw loop
  if (
    (myAttachment === 'anxious' || myAttachment === 'fearful') &&
    (partnerAttachment === 'avoidant' || partnerAttachment === 'fearful') &&
    (myMood === 'anxious' || myMood === 'needClose') &&
    (partnerMood === 'shutdown' || partnerMood === 'needSpace')
  ) {
    alerts.push({
      level: 'warning',
      title: '⚠️ Protest-Withdraw Loop Detected',
      message: 'Node A seeking connection while Node B buffering. Circuit breaker recommended: both parties take 20min async processing time, then reconnect with status update.',
      color: 'orange'
    })
  }

  // Both anxious and escalating
  if (
    myAttachment === 'anxious' &&
    partnerAttachment === 'anxious' &&
    (myMood === 'anxious' || myMood === 'conflict') &&
    (partnerMood === 'anxious' || partnerMood === 'conflict')
  ) {
    alerts.push({
      level: 'critical',
      title: '🔄 Mutual Anxiety Amplification',
      message: 'Both nodes flooding the connection. Implement self-soothing protocols independently before attempting sync communication.',
      color: 'red'
    })
  }

  // Both avoidant and disconnecting
  if (
    myAttachment === 'avoidant' &&
    partnerAttachment === 'avoidant' &&
    (myMood === 'shutdown' || myMood === 'needSpace') &&
    (partnerMood === 'shutdown' || partnerMood === 'needSpace')
  ) {
    alerts.push({
      level: 'info',
      title: '🛡️ Parallel Processing Mode',
      message: 'Both nodes in async mode. Schedule sync touchpoint to prevent drift. Even 10min check-in maintains connection.',
      color: 'purple'
    })
  }

  // Conflict state
  if (myMood === 'conflict' || partnerMood === 'conflict') {
    alerts.push({
      level: 'warning',
      title: '⚡ Data Collision Detected',
      message: 'Implement conflict resolution protocol: (1) State needs clearly, (2) Listen without interrupting, (3) Find overlap in requirements, (4) Test solution.',
      color: 'pink'
    })
  }

  // Positive combo - both connected
  if (myMood === 'connected' && partnerMood === 'connected') {
    alerts.push({
      level: 'success',
      title: '✓ Optimal Sync State',
      message: 'Both nodes showing healthy connection status. Current protocols working well. Consider documenting what led to this state.',
      color: 'green'
    })
  }

  // Positive combo - both calm
  if (myMood === 'calm' && partnerMood === 'calm') {
    alerts.push({
      level: 'success',
      title: '200 OK - System Stable',
      message: 'Both nodes operating normally. Good time for proactive maintenance: discuss any minor issues before they escalate.',
      color: 'green'
    })
  }

  if (alerts.length === 0) return null

  return (
    <div className="space-y-3">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`rounded-xl p-4 border-2 ${
            alert.color === 'red'
              ? 'bg-red-500/10 border-red-500/30'
              : alert.color === 'orange'
              ? 'bg-orange-500/10 border-orange-500/30'
              : alert.color === 'green'
              ? 'bg-green-500/10 border-green-500/30'
              : alert.color === 'purple'
              ? 'bg-purple-500/10 border-purple-500/30'
              : 'bg-pink-500/10 border-pink-500/30'
          }`}
        >
          <div
            className={`font-semibold mb-2 text-sm ${
              alert.color === 'red'
                ? 'text-red-400'
                : alert.color === 'orange'
                ? 'text-orange-400'
                : alert.color === 'green'
                ? 'text-green-400'
                : alert.color === 'purple'
                ? 'text-purple-400'
                : 'text-pink-400'
            }`}
          >
            {alert.title}
          </div>
          <div className="text-xs text-slate-200">{alert.message}</div>
        </div>
      ))}
    </div>
  )
}
