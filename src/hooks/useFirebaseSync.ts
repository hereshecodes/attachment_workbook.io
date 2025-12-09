import { useEffect, useState } from 'react'
import { firebaseService, isFirebaseConfigured } from '../services/firebase'
import { UserSettings } from '../types/attachment'
import { MoodKey } from '../data/moods'

interface FirebaseSyncData {
  settings: UserSettings
  myMood?: MoodKey
  partnerMood?: MoodKey
}

export function useFirebaseSync(
  roomId: string | null,
  localSettings: UserSettings,
  localMyMood?: MoodKey,
  localPartnerMood?: MoodKey
) {
  const [isConnected, setIsConnected] = useState(false)
  const [syncEnabled, setSyncEnabled] = useState(false)

  useEffect(() => {
    if (!roomId || !isFirebaseConfigured()) {
      setIsConnected(false)
      return
    }

    setIsConnected(true)
    setSyncEnabled(true)

    // Listen to partner's updates
    const unsubscribe = firebaseService.listenToData(
      `rooms/${roomId}/partner`,
      (data: FirebaseSyncData | null) => {
        if (data) {
          // Update partner's mood if it changed
          if (data.myMood && data.myMood !== localPartnerMood) {
            localStorage.setItem('partnerMood', data.myMood)
            // Trigger a storage event to update the UI
            window.dispatchEvent(new Event('storage'))
          }
        }
      }
    )

    return () => {
      unsubscribe()
    }
  }, [roomId])

  // Sync local data to Firebase
  const syncToFirebase = (data: Partial<FirebaseSyncData>) => {
    if (!roomId || !isConnected) return

    firebaseService.updateData(`rooms/${roomId}/me`, {
      settings: localSettings,
      myMood: localMyMood,
      ...data
    })
  }

  return {
    isConnected,
    syncEnabled,
    syncToFirebase
  }
}
