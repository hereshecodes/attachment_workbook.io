import { AttachmentStyle, OptimizationProtocol } from '../types/attachment'

export const optimizationProtocols: Record<AttachmentStyle, OptimizationProtocol> = {
  anxious: {
    nodeOptimizations: [
      '<strong>Self-soothing protocols:</strong> Practice anxiety reduction before broadcasting distress signals',
      '<strong>Trust async mode:</strong> Partner\'s silence ≠ connection dropped',
      '<strong>Emit honest status:</strong> Broadcast needs directly vs seeking validation indirectly',
      '<strong>Buffer tolerance:</strong> Allow partner processing time without flooding with pings'
    ],
    partnerSupport: [
      '<strong>Send keepalive packets:</strong> Small reassurance signals prevent timeout anxiety',
      '<strong>Broadcast ETAs:</strong> "Processing, will reconnect in 2h" reduces latency fears',
      '<strong>Consistent responses:</strong> Reliability builds connection trust over time',
      '<strong>Validate then redirect:</strong> Acknowledge feelings before problem-solving'
    ]
  },
  avoidant: {
    nodeOptimizations: [
      '<strong>Connection tolerance:</strong> Practice staying online during emotional data transfer',
      '<strong>Broadcast needs:</strong> Share processing state instead of going dark',
      '<strong>Trust connection ≠ loss:</strong> Intimacy doesn\'t require giving up autonomy',
      '<strong>Scheduled check-ins:</strong> Proactive status updates prevent partner anxiety'
    ],
    partnerSupport: [
      '<strong>Respect buffer time:</strong> Allow async processing without pressure',
      '<strong>Non-invasive check-ins:</strong> Light touch status requests',
      '<strong>Appreciate independence:</strong> Validate autonomy as healthy, not rejection',
      '<strong>Create safety:</strong> Prove connection doesn\'t mean control'
    ]
  },
  secure: {
    nodeOptimizations: [
      '<strong>Model healthy patterns:</strong> Demonstrate balanced connection/autonomy',
      '<strong>Stay consistent:</strong> Maintain steady state even under partner\'s load spikes',
      '<strong>Communicate openly:</strong> Share processing state transparently',
      '<strong>Self-regulate:</strong> Handle own anxiety without offloading to system'
    ],
    partnerSupport: [
      '<strong>Provide stability:</strong> Be reliable reference point during partner\'s instability',
      '<strong>Patient guidance:</strong> Model secure patterns without forcing',
      '<strong>Adaptive support:</strong> Flex between reassurance and space as needed',
      '<strong>Maintain boundaries:</strong> Support without absorbing partner\'s dysregulation'
    ]
  },
  fearful: {
    nodeOptimizations: [
      '<strong>Identify patterns:</strong> Notice when you ping then ghost, want connection then flee',
      '<strong>Communicate conflicts:</strong> "I want closeness but I\'m scared" is valid data',
      '<strong>Build trust gradually:</strong> Small consistent connections > intense then vanishing',
      '<strong>Self-awareness:</strong> Recognize when fear drives contradictory signals'
    ],
    partnerSupport: [
      '<strong>Consistency is key:</strong> Predictable behavior builds safety',
      '<strong>Patience with mixed signals:</strong> Understand push-pull is fear, not rejection',
      '<strong>Gentle persistence:</strong> Stay steady through approach-avoid cycles',
      '<strong>Create safety:</strong> Prove you won\'t abandon OR engulf'
    ]
  }
}
