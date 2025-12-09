import { useState, useEffect } from 'react'
import { MoodKey } from '../data/moods'

export function useMoodState() {
  const [myMood, setMyMood] = useState<MoodKey | undefined>(undefined)
  const [partnerMood, setPartnerMood] = useState<MoodKey | undefined>(undefined)

  useEffect(() => {
    const storedMyMood = localStorage.getItem('myMood') as MoodKey | null
    const storedPartnerMood = localStorage.getItem('partnerMood') as MoodKey | null

    if (storedMyMood) setMyMood(storedMyMood)
    if (storedPartnerMood) setPartnerMood(storedPartnerMood)
  }, [])

  const updateMyMood = (mood: MoodKey) => {
    setMyMood(mood)
    localStorage.setItem('myMood', mood)
    // TODO: Sync to Firebase when implemented
  }

  const updatePartnerMood = (mood: MoodKey) => {
    setPartnerMood(mood)
    localStorage.setItem('partnerMood', mood)
    // TODO: Sync to Firebase when implemented
  }

  return {
    myMood,
    partnerMood,
    updateMyMood,
    updatePartnerMood
  }
}
