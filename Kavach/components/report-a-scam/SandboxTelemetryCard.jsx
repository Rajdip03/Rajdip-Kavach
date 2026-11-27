import { FlaskConical, ShieldCheck, Zap } from 'lucide-react';

/**
 * Right-column Sandbox Telemetry Engine status card matching the reference screenshot.
 */
export default function SandboxTelemetryCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FlaskConical size={16} className="text-[#0051D5]" />
          <span className="text-sm font-semibold text-[#101B35]">
            Sandbox Telemetry Engine
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0051D5]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0051D5]" />
          Operational
        </span>
      </div>

      {/* Pipeline Steps Container */}
      <div className="bg-[#F4F6F9] rounded-xl p-4 flex flex-col gap-3">
        {/* Labels */}
        <div className="grid grid-cols-3 text-[11px] font-semibold text-slate-600 text-center">
          <span className="text-left">DNS Heuristics</span>
          <span>DOM Emulation</span>
          <span className="text-right">Certificate Audit</span>
        </div>

        {/* 3-Node Progress Track */}
        <div className="relative flex items-center justify-between px-4 my-0.5">
          {/* Base Track */}
          <div className="absolute left-5 right-5 h-1 bg-slate-200 rounded-full" />
          {/* Active Half Track */}
          <div className="absolute left-5 right-1/2 h-1 bg-[#0051D5] rounded-full" />

          {/* Node 1 */}
          <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-[#0051D5] ring-2 ring-white" />
          {/* Node 2 */}
          <span className="relative z-10 w-3 h-3 rounded-full bg-[#0051D5] ring-4 ring-[#DCE6FF]" />
          {/* Node 3 */}
          <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-slate-300 ring-2 ring-white" />
        </div>

        <p className="text-[11px] text-slate-500 leading-relaxed">
          Kawach automated crawlers utilize randomized user-agent profiles to bypass evasion techniques.
        </p>
      </div>

      {/* Bottom Reassurance Row */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck size={13} className="text-slate-400" />
          No personal data logged
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Zap size={13} className="text-slate-400" />
          &lt; 300s quarantine
        </span>
      </div>
    </div>
  );
}
