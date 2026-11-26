import { ShieldCheck, Lock } from 'lucide-react';

export default function DisclaimerFooter() {
  return (
    <div className="mt-8 bg-slate-50 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-100">
      <div className="flex items-start gap-3">
        <ShieldCheck size={20} className="text-slate-400 flex-shrink-0 mt-0.5" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-800">
            Probabilistic Risk Advisory Notice
          </span>
          <p className="text-xs text-slate-500 mt-0.5 max-w-3xl leading-relaxed">
            This report represents an algorithmic assessment calculated from real-time
            telemetry, not a legally binding guarantee. Threat actors evolve rapidly;
            always exercise personal judgment before sharing sensitive credentials or
            authorizing financial transactions.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center text-slate-400 text-xs">
        <Lock size={14} />
        <span>Zero session logs recorded</span>
      </div>
    </div>
  );
}
