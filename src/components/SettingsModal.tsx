import { AttachmentStyle, UserSettings } from '../types/attachment'
import { attachmentLabels } from '../data/attachmentStyles'

interface SettingsModalProps {
  isOpen: boolean
  settings: UserSettings
  onClose: () => void
  onSave: (settings: UserSettings) => void
}

export default function SettingsModal({ isOpen, settings, onClose, onSave }: SettingsModalProps) {
  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newSettings: UserSettings = {
      myName: formData.get('myName') as string,
      partnerName: formData.get('partnerName') as string,
      myPronouns: formData.get('myPronouns') as string,
      partnerPronouns: formData.get('partnerPronouns') as string,
      myAttachment: formData.get('myAttachment') as AttachmentStyle,
      partnerAttachment: formData.get('partnerAttachment') as AttachmentStyle,
      myAttachmentSecondary: (formData.get('myAttachmentSecondary') as AttachmentStyle) || undefined,
      partnerAttachmentSecondary: (formData.get('partnerAttachmentSecondary') as AttachmentStyle) || undefined,
    }
    onSave(newSettings)
  }

  const attachmentOptions = Object.entries(attachmentLabels) as [AttachmentStyle, string][]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full border border-white/20 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-serif font-semibold mb-6">Personalization Settings</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Names */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="myName"
                defaultValue={settings.myName}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Partner's Name
              </label>
              <input
                type="text"
                name="partnerName"
                defaultValue={settings.partnerName}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                required
              />
            </div>
          </div>

          {/* Pronouns */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Your Pronouns
              </label>
              <input
                type="text"
                name="myPronouns"
                defaultValue={settings.myPronouns}
                placeholder="she/her, he/him, they/them"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Partner's Pronouns
              </label>
              <input
                type="text"
                name="partnerPronouns"
                defaultValue={settings.partnerPronouns}
                placeholder="she/her, he/him, they/them"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Attachment Styles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Attachment Styles</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Your Primary Style
                </label>
                <select
                  name="myAttachment"
                  defaultValue={settings.myAttachment}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  required
                >
                  {attachmentOptions.map(([value, label]) => (
                    <option key={value} value={value} className="bg-slate-800">
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Your Secondary Style (Optional)
                </label>
                <select
                  name="myAttachmentSecondary"
                  defaultValue={settings.myAttachmentSecondary || ''}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="" className="bg-slate-800">None</option>
                  {attachmentOptions.map(([value, label]) => (
                    <option key={value} value={value} className="bg-slate-800">
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Partner's Primary Style
                </label>
                <select
                  name="partnerAttachment"
                  defaultValue={settings.partnerAttachment}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  required
                >
                  {attachmentOptions.map(([value, label]) => (
                    <option key={value} value={value} className="bg-slate-800">
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Partner's Secondary Style (Optional)
                </label>
                <select
                  name="partnerAttachmentSecondary"
                  defaultValue={settings.partnerAttachmentSecondary || ''}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="" className="bg-slate-800">None</option>
                  {attachmentOptions.map(([value, label]) => (
                    <option key={value} value={value} className="bg-slate-800">
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition"
            >
              Save Settings
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 bg-white/10 text-white py-3 rounded-xl font-semibold hover:bg-white/20 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
