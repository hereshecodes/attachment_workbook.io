import { useState, useEffect } from 'react'
import { useSettings } from './hooks/useSettings'
import { useMoodState } from './hooks/useMoodState'
import { useFirebaseSync } from './hooks/useFirebaseSync'
import LiveStatusCards from './components/LiveStatusCards'
import MoodSelector from './components/MoodSelector'
import VennDiagram from './components/VennDiagram'
import OptimizationProtocols from './components/OptimizationProtocols'
import SettingsModal from './components/SettingsModal'
import PrivateNotes from './components/PrivateNotes'
import RoomSetup from './components/RoomSetup'
import AIInsights from './components/AIInsights'
import ComboAlert from './components/ComboAlert'
import TherapyExport from './components/TherapyExport'
import DateNightIdeas from './components/DateNightIdeas'

function App() {
  const { settings, saveSettings } = useSettings()
  const { myMood, partnerMood, updateMyMood, updatePartnerMood } = useMoodState()

  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isPrivateNotesOpen, setIsPrivateNotesOpen] = useState(false)
  const [roomId, setRoomId] = useState<string | null>(() => {
    return localStorage.getItem('roomId') || null
  })

  const { isConnected, syncToFirebase } = useFirebaseSync(
    roomId,
    settings,
    myMood,
    partnerMood
  )

  // Save room ID to localStorage
  useEffect(() => {
    if (roomId) {
      localStorage.setItem('roomId', roomId)
    } else {
      localStorage.removeItem('roomId')
    }
  }, [roomId])

  // Sync mood changes to Firebase
  useEffect(() => {
    if (isConnected && myMood) {
      syncToFirebase({ myMood })
    }
  }, [myMood, isConnected])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <header className="text-center py-8">
          <h1 className="font-serif text-5xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Attachment Workbook
          </h1>
          <p className="text-slate-400 text-sm">
            A systems engineering approach to relationship dynamics
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-xl font-semibold transition border border-white/20"
            >
              ⚙️ Settings
            </button>
            <button
              onClick={() => setIsPrivateNotesOpen(!isPrivateNotesOpen)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-xl font-semibold transition"
            >
              📝 Private Notes
            </button>
          </div>
        </header>

        {/* Room Setup */}
        <RoomSetup
          currentRoomId={roomId}
          onRoomChange={setRoomId}
        />

        {/* Private Notes Section */}
        {isPrivateNotesOpen && (
          <PrivateNotes
            isOpen={isPrivateNotesOpen}
            onClose={() => setIsPrivateNotesOpen(false)}
          />
        )}

        {/* Combo Alert */}
        <ComboAlert
          myAttachment={settings.myAttachment}
          partnerAttachment={settings.partnerAttachment}
          myMood={myMood}
          partnerMood={partnerMood}
        />

        {/* Live Status Cards */}
        <LiveStatusCards
          myName={settings.myName}
          partnerName={settings.partnerName}
          myMood={myMood}
          partnerMood={partnerMood}
          myAttachment={settings.myAttachment}
          partnerAttachment={settings.partnerAttachment}
          myAttachmentSecondary={settings.myAttachmentSecondary}
          partnerAttachmentSecondary={settings.partnerAttachmentSecondary}
        />

        {/* Mood Selectors */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <MoodSelector
              person="me"
              currentMood={myMood}
              onMoodSelect={updateMyMood}
            />
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <MoodSelector
              person="partner"
              currentMood={partnerMood}
              onMoodSelect={updatePartnerMood}
            />
          </div>
        </div>

        {/* Venn Diagram */}
        <VennDiagram
          myAttachment={settings.myAttachment}
          partnerAttachment={settings.partnerAttachment}
          myAttachmentSecondary={settings.myAttachmentSecondary}
          partnerAttachmentSecondary={settings.partnerAttachmentSecondary}
        />

        {/* Optimization Protocols */}
        <OptimizationProtocols
          myAttachment={settings.myAttachment}
          partnerAttachment={settings.partnerAttachment}
        />

        {/* AI Insights */}
        <AIInsights
          settings={settings}
          myMood={myMood}
          partnerMood={partnerMood}
        />

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <TherapyExport
            settings={settings}
            myMood={myMood}
            partnerMood={partnerMood}
          />
          <DateNightIdeas
            myAttachment={settings.myAttachment}
            partnerAttachment={settings.partnerAttachment}
            myMood={myMood}
            partnerMood={partnerMood}
          />
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-slate-500 text-sm">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
          <p className="mt-2">
            A modern, type-safe approach to understanding attachment dynamics
          </p>
        </footer>

        {/* Settings Modal */}
        <SettingsModal
          isOpen={isSettingsOpen}
          settings={settings}
          onClose={() => setIsSettingsOpen(false)}
          onSave={(newSettings) => {
            saveSettings(newSettings)
            setIsSettingsOpen(false)
          }}
        />
      </div>
    </div>
  )
}

export default App
