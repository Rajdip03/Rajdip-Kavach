import Link from 'next/link';
import { Lightbulb, Shield, ArrowRight } from 'lucide-react';

export default function DefenseTip() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-4 h-4 text-[#0051D5]" />
        <span className="text-[11px] font-bold text-[#0051D5] uppercase tracking-wider">Defense Tip of the Day</span>
      </div>

      {/* Quote */}
      <p className="text-sm text-[#101B35] font-medium leading-relaxed mb-4">
        &ldquo;Never share your OTP, PIN, or bank password with anyone — not even with someone claiming to be from your bank. Legitimate banks never ask for these details over phone or SMS.&rdquo;
      </p>

      {/* Inner highlight box */}
      <div className="bg-slate-50 rounded-xl p-3 flex gap-3 mb-5">
        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <Shield className="w-4 h-4 text-[#0051D5]" />
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          If you receive a suspicious call, hang up and call your bank directly using the number on the back of your card or on their official website.
        </p>
      </div>

      {/* CTA */}
      <Link
        href="/dashboard/security-guides"
        className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#F7F9FB] border border-slate-200 rounded-xl text-sm font-semibold text-[#101B35] hover:bg-slate-100 transition-colors"
      >
        Browse Security Guides <ArrowRight size={15} />
      </Link>
    </div>
  );
}
