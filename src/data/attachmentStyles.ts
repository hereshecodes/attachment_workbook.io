import { AttachmentStyle, AttachmentStyleData } from '../types/attachment'

export const attachmentStyleData: Record<AttachmentStyle, AttachmentStyleData> = {
  anxious: {
    title: 'Connection-Optimized',
    subtitle: 'Low Latency Preference',
    traits: [
      'Processes state through synchronous communication',
      'Stability achieved through regular keepalive packets',
      'Lower tolerance for connection timeout',
      'High-frequency status checks preferred'
    ],
    preferredSignals: 'Acts of service, verbal acknowledgment, quality time',
    optimizationTarget: 'Trust async processing ≠ dropped connection',
    color: '#3B82F6'
  },
  avoidant: {
    title: 'Autonomy-Optimized',
    subtitle: 'Buffer Preference',
    traits: [
      'Processes state asynchronously with buffering',
      'Stability achieved through independent processing',
      'Higher tolerance for connection gaps',
      'Prefers batch processing over constant streams'
    ],
    preferredSignals: 'Space for processing, respect for boundaries, acts of service (non-invasive)',
    optimizationTarget: 'Connection requests ≠ autonomy loss',
    color: '#7C3AED'
  },
  secure: {
    title: 'Balanced Processing',
    subtitle: 'Adaptive Mode',
    traits: [
      'Flexibly alternates between sync and async processing',
      'Stability through self-regulation and trust',
      'Comfortable with variable latency',
      'Processes both connection and autonomy signals effectively'
    ],
    preferredSignals: 'All forms, context-dependent',
    optimizationTarget: 'Maintain equilibrium across load conditions',
    color: '#10B981'
  },
  fearful: {
    title: 'Mixed-Mode Processing',
    subtitle: 'Context-Dependent',
    traits: [
      'Oscillates between connection and autonomy protocols',
      'Stability requires external consistency',
      'Variable latency tolerance based on state',
      'May send conflicting signals under load'
    ],
    preferredSignals: 'Consistency, patience, gentle reassurance',
    optimizationTarget: 'Build trust in connection safety AND autonomy respect',
    color: '#F59E0B'
  }
}

export const attachmentLabels: Record<AttachmentStyle, string> = {
  anxious: '🔗 Connection-Optimized',
  avoidant: '🛡️ Autonomy-Optimized',
  secure: '⚖️ Balanced',
  fearful: '🔄 Mixed-Mode'
}

export const attachmentShortLabels: Record<AttachmentStyle, string> = {
  anxious: 'Connection',
  avoidant: 'Autonomy',
  secure: 'Balanced',
  fearful: 'Mixed-Mode'
}

export const attachmentDescriptions: Record<AttachmentStyle, string> = {
  anxious: 'connection-optimized with lower latency tolerance',
  avoidant: 'autonomy-optimized with buffer preference',
  secure: 'balanced with adaptive processing',
  fearful: 'mixed-mode with context-dependent behavior'
}
