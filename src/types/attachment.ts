export type AttachmentStyle = 'anxious' | 'avoidant' | 'secure' | 'fearful';

export interface AttachmentStyleData {
  title: string;
  subtitle: string;
  traits: string[];
  preferredSignals: string;
  optimizationTarget: string;
  color: string;
}

export interface AttachmentPairingData {
  dynamics: string;
  challenges: string;
  strengths: string;
  protocol: string;
}

export interface OptimizationProtocol {
  nodeOptimizations: string[];
  partnerSupport: string[];
}

export interface UserSettings {
  myName: string;
  partnerName: string;
  myPronouns: string;
  partnerPronouns: string;
  myAttachment: AttachmentStyle;
  partnerAttachment: AttachmentStyle;
  myAttachmentSecondary?: AttachmentStyle;
  partnerAttachmentSecondary?: AttachmentStyle;
}

export type MoodKey =
  | 'calm'
  | 'anxious'
  | 'shutdown'
  | 'conflict'
  | 'connected'
  | 'needSpace'
  | 'needClose'
  | 'processing';

export interface MoodData {
  label: string;
  emoji: string;
  color: string;
  description: string;
}

export interface MoodUpdate {
  mood: MoodKey;
  label: string;
  customNote?: string;
  timestamp: number;
}

export interface PrivateNote {
  note: string;
  timestamp: number;
  mood: MoodKey | 'general';
}
