import { Lightbulb, History, Flag, ShieldCheck, ArrowRight, Shield } from 'lucide-react';

export const THREAT_SIGNALS = [
  {
    icon: History,
    title: 'Domain Longevity',
    description:
      'Newly registered domains (< 30 days) often host disposable credential harvesters and temporary landing pages.',
  },
  {
    icon: Flag,
    title: 'Brand Impersonation',
    description:
      'Typographical typosquatting and visual lookalikes mimicking national banks, couriers, or government tax boards.',
  },
  {
    icon: ShieldCheck,
    title: 'SSL & Security Certs',
    description:
      'Missing encryption layers, mismatched root authorities, or burner certificates coupled with high-risk hosters.',
  },
  {
    icon: ArrowRight,
    title: 'Deceptive Redirects',
    description:
      'Multi-hop link routing designed to evade crawler detection and conceal the final destination payload.',
  },
];

export default function EducationalSidebar() {
  return (
    <div className="lg:col-span-4 flex flex-col bg-white rounded-2xl shadow-sm p-6 border border-slate-100 justify-between gap-6">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-slate-100">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700">
            <Lightbulb size={18} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#101B35]">What we look for</h3>
            <span className="text-xs text-slate-400">Deterministic threat telemetry</span>
          </div>
        </div>

        {/* Signals */}
        <div className="flex flex-col gap-5">
          {THREAT_SIGNALS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[#0051D5] flex-shrink-0 mt-0.5">
                <Icon size={13} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#101B35]">{title}</span>
                <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Protected Environment callout */}
      <div className="p-4 rounded-xl bg-slate-50 flex flex-col gap-1.5 border border-slate-100">
        <div className="flex items-center gap-1.5 text-[#0051D5]">
          <Shield size={14} />
          <span className="text-xs font-semibold">Protected Environment</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          All inspections trigger safely in an isolated headless cloud container. No malicious script executes on your local browser or mobile device.
        </p>
      </div>
    </div>
  );
}

