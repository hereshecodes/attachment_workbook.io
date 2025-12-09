import { useState } from 'react'
import { firebaseService, isFirebaseConfigured } from '../services/firebase'

interface RoomSetupProps {
  currentRoomId: string | null
  onRoomChange: (roomId: string) => void
}

export default function RoomSetup({ currentRoomId, onRoomChange }: RoomSetupProps) {
  const [showSetup, setShowSetup] = useState(false)
  const [inputRoomId, setInputRoomId] = useState('')

  if (!isFirebaseConfigured()) {
    return (
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-sm">
        <p className="text-yellow-400 font-semibold mb-2">Firebase Not Configured</p>
        <p className="text-slate-300 text-xs">
          Add your Firebase credentials to .env to enable real-time sync with your partner.
        </p>
      </div>
    )
  }

  const handleCreateRoom = () => {
    const newRoomId = firebaseService.generateRoomId()
    onRoomChange(newRoomId)
    setShowSetup(false)
  }

  const handleJoinRoom = () => {
    if (inputRoomId.trim()) {
      onRoomChange(inputRoomId.trim())
      setShowSetup(false)
      setInputRoomId('')
    }
  }

  const handleLeaveRoom = () => {
    onRoomChange('')
  }

  if (currentRoomId) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-green-400 font-semibold text-sm">Connected to Partner</p>
            <p className="text-xs text-slate-400 mt-1">Room ID: {currentRoomId}</p>
          </div>
          <button
            onClick={handleLeaveRoom}
            className="text-xs bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-1 rounded-lg transition"
          >
            Leave Room
          </button>
        </div>
        <p className="text-xs text-slate-300">
          Share the Room ID with your partner so they can join and sync data in real-time.
        </p>
      </div>
    )
  }

  return (
    <div>
      {!showSetup ? (
        <button
          onClick={() => setShowSetup(true)}
          className="w-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-purple-300 py-3 px-4 rounded-xl font-semibold transition text-sm"
        >
          🔗 Connect with Partner
        </button>
      ) : (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm">Partner Sync Setup</h3>
            <button
              onClick={() => setShowSetup(false)}
              className="text-slate-400 hover:text-white text-sm"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleCreateRoom}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-semibold transition text-sm"
            >
              Create New Room
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-slate-900 px-2 text-slate-400">or</span>
              </div>
            </div>

            <div>
              <input
                type="text"
                value={inputRoomId}
                onChange={(e) => setInputRoomId(e.target.value)}
                placeholder="Enter Room ID"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 mb-2"
              />
              <button
                onClick={handleJoinRoom}
                disabled={!inputRoomId.trim()}
                className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg font-semibold transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Join Existing Room
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Both you and your partner need to use the same Room ID to sync your moods and settings in real-time.
          </p>
        </div>
      )}
    </div>
  )
}
