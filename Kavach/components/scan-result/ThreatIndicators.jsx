import {
  ShieldAlert,
  AlertTriangle,
} from 'lucide-react';

function ThreatIndicatorItem({ icon: Icon, title, tag, description }) {
  return (
    <div className="p-4 bg-slate-50 rounded-xl flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-red-500 flex-shrink-0 shadow-sm border border-slate-100">
        <Icon size={20} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-slate-800">{title}</span>
          {tag && (
            <span className="text-[11px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-mono">
              {tag}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/**
 * Detected Threat Indicators section.
 *
 * @param {{ indicators: Array<{ icon?: any, title: string, tag?: string, description: string }>, priorityLabel?: string }} props
 */
export default function ThreatIndicators({ indicators, priorityLabel = 'Priority 1' }) {
  if (!indicators || indicators.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-500" />
          <h2 className="text-lg font-semibold text-slate-800 tracking-tight">
            Detected Threat Indicators{' '}
            <span className="text-sm text-slate-400 font-normal">
              ({indicators.length} Flagged)
            </span>
          </h2>
        </div>
        <span className="text-[11px] bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full font-semibold border border-red-200 flex-shrink-0">
          {priorityLabel}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {indicators.map((indicator, i) => (
          <ThreatIndicatorItem
            key={i}
            icon={indicator.icon || ShieldAlert}
            title={indicator.title}
            tag={indicator.tag}
            description={indicator.description}
          />
        ))}
      </div>
    </div>
  );
}
