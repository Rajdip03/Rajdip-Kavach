import { ShieldCheck } from 'lucide-react';

export default function ScanFooter() {
  return (
    <footer className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#0051D5]/10 flex items-center justify-center text-[#0051D5] flex-shrink-0">
          <ShieldCheck size={20} />
        </div>
        <div>
          <span className="text-sm font-semibold text-[#101B35] block">
            Empathetic Personal Defense Commitment
          </span>
          <span className="text-xs text-slate-400">
            Kavach prioritizes user autonomy, calm probabilistic risk scoring, and zero fear-based manipulation.
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 self-end sm:self-auto flex-shrink-0">
        <a href="#" className="text-xs font-semibold text-[#0051D5] hover:underline">
          Privacy Architecture
        </a>
        <span className="text-slate-300">•</span>
        <a href="#" className="text-xs font-semibold text-[#0051D5] hover:underline">
          Threat Methodology
        </a>
      </div>
    </footer>
  );
}

