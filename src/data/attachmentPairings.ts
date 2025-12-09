import { AttachmentPairingData } from '../types/attachment'

export const attachmentPairingData: Record<string, AttachmentPairingData> = {
  'secure-secure': {
    dynamics: 'Two adaptive nodes with self-regulation',
    challenges: 'May become complacent; low urgency for growth',
    strengths: 'Stable baseline; handles load spikes well',
    protocol: 'Maintain healthy patterns; stay curious about each other'
  },
  'anxious-avoidant': {
    dynamics: 'Classic protest-withdraw loop',
    challenges: 'One floods, other buffers → escalating dysfunction',
    strengths: 'Growth potential if both willing to adapt protocols',
    protocol: 'Anxious: practice async tolerance. Avoidant: increase keepalives'
  },
  'anxious-secure': {
    dynamics: 'Secure node provides stability for anxious node',
    challenges: 'Secure node fatigue from constant reassurance load',
    strengths: 'Anxious node can learn secure patterns through modeling',
    protocol: 'Anxious: gradual trust building. Secure: patient consistency'
  },
  'avoidant-secure': {
    dynamics: 'Secure node respects autonomy while maintaining connection',
    challenges: 'Avoidant may still retreat; secure must stay grounded',
    strengths: 'Avoidant learns connection safety through secure\'s steadiness',
    protocol: 'Avoidant: practice vulnerability. Secure: balance patience/needs'
  },
  'anxious-anxious': {
    dynamics: 'Both nodes seek constant validation',
    challenges: 'Mutual anxiety amplification; neither can self-soothe',
    strengths: 'Deep understanding of each other\'s needs',
    protocol: 'Both must develop independent self-regulation protocols'
  },
  'avoidant-avoidant': {
    dynamics: 'Both nodes prefer async processing',
    challenges: 'May drift into parallel processing; minimal data exchange',
    strengths: 'Mutual respect for autonomy; low conflict',
    protocol: 'Schedule intentional sync sessions; practice vulnerability'
  },
  'fearful-secure': {
    dynamics: 'Secure provides safe base for fearful\'s approach-avoid cycles',
    challenges: 'Secure must weather push-pull without taking it personally',
    strengths: 'Best pairing for fearful to develop earned security',
    protocol: 'Fearful: communicate mixed feelings. Secure: stay steady'
  },
  'fearful-anxious': {
    dynamics: 'Anxious pursues, fearful alternates between approach and flee',
    challenges: 'Anxious triggered by fearful\'s withdrawal; fearful overwhelmed by pursuit',
    strengths: 'Both understand fear of abandonment',
    protocol: 'Both need external support; practice self-soothing individually'
  },
  'fearful-avoidant': {
    dynamics: 'Both fear intimacy but fearful also fears abandonment',
    challenges: 'Fearful wants connection avoidant won\'t provide consistently',
    strengths: 'Mutual understanding of need for space',
    protocol: 'Avoidant: increase emotional availability. Fearful: communicate needs clearly'
  },
  'fearful-fearful': {
    dynamics: 'Both oscillate between connection seeking and distancing',
    challenges: 'Chaotic dance of simultaneous approach-avoid from both sides',
    strengths: 'Deep empathy for each other\'s internal conflicts',
    protocol: 'Both seek individual therapy; practice identifying patterns together'
  }
}

export function getPairingKey(style1: string, style2: string): string {
  const sorted = [style1, style2].sort()
  return `${sorted[0]}-${sorted[1]}`
}
