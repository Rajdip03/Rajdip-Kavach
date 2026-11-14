import { Radar, Shield } from 'lucide-react';

export default function ScanHeader() {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
          <Radar size={13} />
          Personal Threat Inspector
        </span>
        <span className="text-slate-300 text-xs">•</span>
        <span className="text-xs font-semibold text-slate-500">Real-Time Evaluation Hub</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold text-[#101B35] tracking-tight">Scan Center</h1>
          <p className="text-base text-slate-500 mt-1">
            Inspect suspicious links, SMS messages, ecommerce storefronts, and employment offers with multi-signal probabilistic risk scoring.
          </p>
        </div>
        {/* Telemetry metric */}
        <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100 self-start md:self-auto flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#0051D5]">
            <Shield size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#101B35]">Client Sandbox Ready</span>
            <span className="text-xs text-slate-400">Zero session token leakage</span>
          </div>
        </div>
      </div>
    </section>
  );
}

