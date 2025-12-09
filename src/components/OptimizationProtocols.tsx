import { AttachmentStyle } from '../types/attachment'
import { optimizationProtocols } from '../data/optimizationProtocols'

interface OptimizationProtocolsProps {
  myAttachment?: AttachmentStyle
  partnerAttachment?: AttachmentStyle
}

export default function OptimizationProtocols({
  myAttachment,
  partnerAttachment
}: OptimizationProtocolsProps) {
  const myProtocols = myAttachment ? optimizationProtocols[myAttachment] : null
  const partnerProtocols = partnerAttachment ? optimizationProtocols[partnerAttachment] : null

  if (!myProtocols && !partnerProtocols) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h2 className="text-2xl font-serif font-semibold mb-4">System Optimization Protocols</h2>
        <p className="text-sm text-slate-400">
          Configure attachment styles to see personalized optimization recommendations
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h2 className="text-2xl font-serif font-semibold mb-6">System Optimization Protocols</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Node A Protocols */}
        {myProtocols && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 border-b border-blue-400/30 pb-2">
              Node A: Self-Optimization
            </h3>
            <ul className="space-y-3">
              {myProtocols.nodeOptimizations.map((protocol, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: protocol }}
                />
              ))}
            </ul>
          </div>
        )}

        {/* Node B Support */}
        {myProtocols && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400 border-b border-purple-400/30 pb-2">
              How Node B Can Support
            </h3>
            <ul className="space-y-3">
              {myProtocols.partnerSupport.map((protocol, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: protocol }}
                />
              ))}
            </ul>
          </div>
        )}

        {/* Node B Protocols */}
        {partnerProtocols && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400 border-b border-purple-400/30 pb-2">
              Node B: Self-Optimization
            </h3>
            <ul className="space-y-3">
              {partnerProtocols.nodeOptimizations.map((protocol, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: protocol }}
                />
              ))}
            </ul>
          </div>
        )}

        {/* Node A Support */}
        {partnerProtocols && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 border-b border-blue-400/30 pb-2">
              How Node A Can Support
            </h3>
            <ul className="space-y-3">
              {partnerProtocols.partnerSupport.map((protocol, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: protocol }}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
