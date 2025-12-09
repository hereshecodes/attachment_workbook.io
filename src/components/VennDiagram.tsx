import { AttachmentStyle } from '../types/attachment'
import { attachmentStyleData } from '../data/attachmentStyles'
import { attachmentPairingData, getPairingKey } from '../data/attachmentPairings'

interface VennDiagramProps {
  myAttachment?: AttachmentStyle
  partnerAttachment?: AttachmentStyle
  myAttachmentSecondary?: AttachmentStyle
  partnerAttachmentSecondary?: AttachmentStyle
}

export default function VennDiagram({
  myAttachment,
  partnerAttachment,
  myAttachmentSecondary,
  partnerAttachmentSecondary
}: VennDiagramProps) {
  const myData = myAttachment ? attachmentStyleData[myAttachment] : null
  const partnerData = partnerAttachment ? attachmentStyleData[partnerAttachment] : null

  const getBlendedTraits = (primary?: AttachmentStyle, secondary?: AttachmentStyle) => {
    if (!primary) return []
    const primaryData = attachmentStyleData[primary]
    const traits = [...primaryData.traits]

    if (secondary) {
      const secondaryData = attachmentStyleData[secondary]
      traits.splice(2, 0, `(With ${secondaryData.title.toLowerCase()} tendencies in certain contexts)`)
      traits.push(secondaryData.traits[0])
    }

    return traits
  }

  const getBlendedSignals = (primary?: AttachmentStyle, secondary?: AttachmentStyle) => {
    if (!primary) return ''
    const primaryData = attachmentStyleData[primary]
    if (!secondary) return primaryData.preferredSignals

    const secondaryData = attachmentStyleData[secondary]
    return `${primaryData.preferredSignals} (especially when ${secondaryData.title.toLowerCase()} needs activate)`
  }

  const myTraits = getBlendedTraits(myAttachment, myAttachmentSecondary)
  const partnerTraits = getBlendedTraits(partnerAttachment, partnerAttachmentSecondary)
  const mySignals = getBlendedSignals(myAttachment, myAttachmentSecondary)
  const partnerSignals = getBlendedSignals(partnerAttachment, partnerAttachmentSecondary)

  const pairingKey = myAttachment && partnerAttachment
    ? getPairingKey(myAttachment, partnerAttachment)
    : null
  const pairingData = pairingKey ? attachmentPairingData[pairingKey] : null

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h2 className="text-2xl font-serif font-semibold mb-6 text-center">
        System Architecture Map
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Circle - Node A */}
        <div className="space-y-4">
          <h3
            className="text-lg font-semibold pb-2 border-b-2"
            style={{ borderColor: myData?.color || '#64748b' }}
          >
            Node A Specs
          </h3>
          {myData && (
            <>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">Processing Mode</div>
                <div className="text-sm text-slate-400">{myData.subtitle}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-2">Core Traits</div>
                <ul className="text-xs text-slate-400 space-y-1">
                  {myTraits.map((trait, i) => (
                    <li key={i} className="leading-relaxed">
                      {trait.includes('(With') ? (
                        <em className="text-slate-500">{trait}</em>
                      ) : (
                        `• ${trait}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">Preferred Signals</div>
                <div className="text-xs text-slate-400">{mySignals}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">Optimization Target</div>
                <div className="text-xs text-slate-400">{myData.optimizationTarget}</div>
              </div>
            </>
          )}
        </div>

        {/* Center - Interface Layer */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold pb-2 border-b-2 border-pink-400">
            Interface Layer
          </h3>
          {pairingData ? (
            <>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">System Dynamics</div>
                <div className="text-xs text-slate-400">{pairingData.dynamics}</div>
                {(myAttachmentSecondary || partnerAttachmentSecondary) && (
                  <div className="text-xs text-slate-500 italic mt-1">
                    (Influenced by secondary attachment modes)
                  </div>
                )}
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">Known Challenges</div>
                <div className="text-xs text-slate-400">{pairingData.challenges}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">System Strengths</div>
                <div className="text-xs text-slate-400">{pairingData.strengths}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">Recommended Protocol</div>
                <div className="text-xs text-slate-400">{pairingData.protocol}</div>
              </div>
            </>
          ) : (
            <div className="text-xs text-slate-500 italic">
              Configure attachment styles to see system dynamics
            </div>
          )}
        </div>

        {/* Right Circle - Node B */}
        <div className="space-y-4">
          <h3
            className="text-lg font-semibold pb-2 border-b-2"
            style={{ borderColor: partnerData?.color || '#64748b' }}
          >
            Node B Specs
          </h3>
          {partnerData && (
            <>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">Processing Mode</div>
                <div className="text-sm text-slate-400">{partnerData.subtitle}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-2">Core Traits</div>
                <ul className="text-xs text-slate-400 space-y-1">
                  {partnerTraits.map((trait, i) => (
                    <li key={i} className="leading-relaxed">
                      {trait.includes('(With') ? (
                        <em className="text-slate-500">{trait}</em>
                      ) : (
                        `• ${trait}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">Preferred Signals</div>
                <div className="text-xs text-slate-400">{partnerSignals}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">Optimization Target</div>
                <div className="text-xs text-slate-400">{partnerData.optimizationTarget}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
