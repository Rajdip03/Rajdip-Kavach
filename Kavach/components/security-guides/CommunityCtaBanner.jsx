import Link from 'next/link';
import { Lightbulb, ArrowRight } from 'lucide-react';

/**
 * Bottom deep-navy community CTA banner linking to Report a Scam.
 */
export default function CommunityCtaBanner() {
  return (
    <section className="bg-[#101B35] rounded-2xl p-6 sm:p-7 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Lightbulb size={18} className="text-blue-400 flex-shrink-0" />
          <h3 className="text-base sm:text-lg font-semibold text-white">
            Have a new scam technique to teach us?
          </h3>
        </div>
        <p className="text-xs text-[#BBC6E8] max-w-2xl leading-relaxed">
          All submissions are sanitized, verified by our defense desk, and help protect over 25,000+ community members.
        </p>
      </div>

      <Link
        href="/dashboard/report-a-scam"
        className="inline-flex items-center justify-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-3 rounded-xl text-xs font-semibold shadow-sm transition-all flex-shrink-0 self-start sm:self-center"
      >
        <span>Share Your Experience</span>
        <ArrowRight size={14} />
      </Link>
    </section>
  );
}
