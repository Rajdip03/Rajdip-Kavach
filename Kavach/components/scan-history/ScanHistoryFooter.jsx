'use client';

import { Lock, ShieldCheck } from 'lucide-react';

/**
 * Footer security and audit reassurance note for Scan History.
 */
export default function ScanHistoryFooter() {
  return (
    <div className="mt-4 bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 shadow-2xs">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
          <ShieldCheck size={14} />
        </div>
        <span className="font-semibold text-slate-700">
          Zero Session Logging • 256-bit encrypted audit storage • Reports retainable for 90 days.
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px] self-end sm:self-auto">
        <Lock size={12} className="text-slate-400" />
        <span>Hardware Tamper-Proof Audit Store</span>
      </div>
    </div>
  );
}
