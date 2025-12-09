import { useState } from 'react'
import { PrivateNote } from '../types/attachment'

interface PrivateNotesProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivateNotes({ isOpen, onClose }: PrivateNotesProps) {
  const [note, setNote] = useState('')
  const [showSaved, setShowSaved] = useState(false)

  if (!isOpen) return null

  const handleSave = () => {
    const privateNotes: PrivateNote[] = JSON.parse(
      localStorage.getItem('privateNotes') || '[]'
    )

    privateNotes.push({
      note,
      timestamp: Date.now(),
      mood: 'general'
    })

    localStorage.setItem('privateNotes', JSON.stringify(privateNotes))

    setShowSaved(true)
    setTimeout(() => setShowSaved(false), 2000)
    setNote('')
  }

  return (
    <div className="bg-orange-50/10 backdrop-blur-md rounded-2xl p-6 border-2 border-dashed border-orange-500/30">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-orange-400">Private Notes</h3>
          <p className="text-xs text-slate-400 mt-1">
            Only saved locally on your device. Not synced with partner.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition"
        >
          ✕
        </button>
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your private thoughts here..."
        className="w-full h-32 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 resize-none"
      />

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleSave}
          disabled={!note.trim()}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Save Note
        </button>

        {showSaved && (
          <span className="text-sm text-green-400 font-semibold animate-pulse">
            ✓ Saved locally
          </span>
        )}
      </div>

      <div className="mt-4 text-xs text-slate-500">
        These notes are stored only on this device and are never shared or synced.
      </div>
    </div>
  )
}
