import {
  AlertTriangle,
  ShieldCheck,
  AlertOctagon,
} from 'lucide-react';
 
function getRiskConfig(riskLevel) {
  switch (riskLevel) {
    case 'critical':
      return {
        icon: AlertOctagon,
        accentBarColor: 'bg-red-700',
        iconBoxBg: 'bg-red-600 text-white',
        badgeBg: 'bg-red-600 text-white',
        bannerBg: 'bg-[#101B35] text-white',
        titleColor: 'text-white',
        descColor: 'text-slate-300',
      };
    case 'high':
      return {
        icon: AlertTriangle,
        accentBarColor: 'bg-red-500',
        iconBoxBg: 'bg-red-50 text-red-600',
        badgeBg: 'bg-red-50 text-red-700 border border-red-200',
        bannerBg: 'bg-white',
        titleColor: 'text-slate-800',
        descColor: 'text-slate-500',
      };
    case 'medium':
      return {
        icon: AlertTriangle,
        accentBarColor: 'bg-amber-400',
        iconBoxBg: 'bg-amber-50 text-amber-600',
        badgeBg: 'bg-amber-50 text-amber-700 border border-amber-200',
        bannerBg: 'bg-white',
        titleColor: 'text-slate-800',
        descColor: 'text-slate-500',
      };
    case 'low':
    default:
      return {
        icon: ShieldCheck,
        accentBarColor: 'bg-[#0051D5]',
        iconBoxBg: 'bg-blue-50 text-[#0051D5]',
        badgeBg: 'bg-blue-50 text-[#0051D5] border border-blue-200',
        bannerBg: 'bg-white',
        titleColor: 'text-slate-800',
        descColor: 'text-slate-500',
      };
  }
}

/**
 * Overall Assessment Banner.
 * Shows the headline verdict with risk badge, icon, description, and confidence score.
 *
 * @param {{
 *   riskLevel: 'low' | 'medium' | 'high' | 'critical',
 *   title: string,
 *   description: string,
 *   riskScore: number,
 *   riskLabel: string,
 *   confidenceScore?: string
 * }} props
 */
export default function AssessmentBanner({
  riskLevel,
  title,
  description,
  riskScore,
  riskLabel,
  confidenceScore,
}) {
  const config = getRiskConfig(riskLevel);
  const Icon = config.icon;

  const isCritical = riskLevel === 'critical';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 shadow-sm border ${
        isCritical ? 'border-transparent' : 'border-slate-100'
      } ${config.bannerBg}`}
    >
      {/* Left accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${config.accentBarColor}`} />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pl-3">
        <div className="flex items-start sm:items-center gap-4">
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${config.iconBoxBg}`}
          >
            <Icon size={26} />
          </div>

          {/* Title + badge + description */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-lg font-semibold ${config.titleColor}`}>
                {title}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold ${config.badgeBg}`}
              >
                {riskLabel} • {riskScore} / 100
              </span>
            </div>
            <p className={`text-sm mt-1 leading-relaxed ${config.descColor}`}>
              {description}
            </p>
          </div>
        </div>

        {/* Confidence score (optional) */}
        {confidenceScore && (
          <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
            <span className="text-xs text-slate-400">Confidence Score</span>
            <span className="text-sm font-semibold text-slate-800 px-2.5 py-1 bg-slate-100 rounded-lg font-mono">
              {confidenceScore}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
