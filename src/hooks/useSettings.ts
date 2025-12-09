import { useState, useEffect } from 'react'
import { UserSettings } from '../types/attachment'

const DEFAULT_SETTINGS: UserSettings = {
  myName: 'Node A',
  partnerName: 'Node B',
  myPronouns: '',
  partnerPronouns: '',
  myAttachment: 'secure',
  partnerAttachment: 'secure',
  myAttachmentSecondary: undefined,
  partnerAttachmentSecondary: undefined
}

export function useSettings() {
  const [settings, setSettings] = useState<UserSettings>(DEFAULT_SETTINGS)

  useEffect(() => {
    const stored = localStorage.getItem('userSettings')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setSettings({ ...DEFAULT_SETTINGS, ...parsed })
      } catch (e) {
        console.error('Failed to parse settings:', e)
      }
    }
  }, [])

  const saveSettings = (newSettings: UserSettings) => {
    setSettings(newSettings)
    localStorage.setItem('userSettings', JSON.stringify(newSettings))
  }

  return { settings, saveSettings }
}
