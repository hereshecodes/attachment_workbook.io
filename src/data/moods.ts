export type MoodKey =
  | 'calm'
  | 'anxious'
  | 'shutdown'
  | 'conflict'
  | 'connected'
  | 'needSpace'
  | 'needClose'
  | 'processing'

export interface MoodData {
  label: string
  emoji: string
  color: string
  description: string
}

export const moodData: Record<MoodKey, MoodData> = {
  calm: {
    label: '200 OK',
    emoji: '✓',
    color: '#10b981',
    description: 'System operating normally'
  },
  anxious: {
    label: '408 Timeout',
    emoji: '⚠',
    color: '#f59e0b',
    description: 'Connection latency detected'
  },
  shutdown: {
    label: '503 Unavailable',
    emoji: '■',
    color: '#ef4444',
    description: 'Node in maintenance mode'
  },
  conflict: {
    label: '409 Conflict',
    emoji: '⚡',
    color: '#ec4899',
    description: 'Data collision detected'
  },
  connected: {
    label: '201 Created',
    emoji: '♥',
    color: '#8b5cf6',
    description: 'New connection established'
  },
  needSpace: {
    label: '429 Rate Limit',
    emoji: '⟳',
    color: '#6366f1',
    description: 'Request buffer time'
  },
  needClose: {
    label: '102 Processing',
    emoji: '→',
    color: '#06b6d4',
    description: 'Requesting sync connection'
  },
  processing: {
    label: '206 Partial',
    emoji: '◐',
    color: '#64748b',
    description: 'Data processing in progress'
  }
}
