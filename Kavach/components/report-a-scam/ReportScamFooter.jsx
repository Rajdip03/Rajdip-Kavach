import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

/**
 * Centered footer reassurance bar matching the Report a Scam layout.
 */
export default function ReportScamFooter() {
  return (
    <footer className="mt-4 pt-6 border-t border-slate-200/70 flex flex-col items-center text-center gap-2 text-xs text-slate-500">
      <div className="inline-flex items-center gap-2">
        <ShieldCheck size={14} className="text-[#0051D5] flex-shrink-0" />
        <span>
          256-bit encrypted audit storage • Zero session logging • Kawach Personal Defense
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400">
        <Link
          href="/help-center"
          className="hover:text-[#0051D5] transition-colors"
        >
          Emergency Helplines (1930)
        </Link>
        <span>•</span>
        <Link
          href="/privacy-policy"
          className="hover:text-[#0051D5] transition-colors"
        >
          Privacy Policy
        </Link>
        <span>•</span>
        <Link
          href="/terms-of-service"
          className="hover:text-[#0051D5] transition-colors"
        >
          Responsible Disclosure
        </Link>
      </div>
    </footer>
  );
}
