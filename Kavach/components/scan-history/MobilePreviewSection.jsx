'use client';

import Link from 'next/link';
import {
  Smartphone,
  Link2,
  ShieldAlert,
  CheckCircle,
  ArrowRight,
  Clock,
} from 'lucide-react';

export default function MobilePreviewSection() {
  return (
    <div className="flex flex-col gap-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div className="flex items-center gap-2">
          <Smartphone size={18} className="text-[#0051D5]" />
          <h2 className="text-base font-semibold text-[#101B35]">
            Mobile View (390px Layout Preview)
          </h2>
        </div>
        <p className="text-xs text-slate-500">
          Demonstrating how tabular rows transform into accessible touch-friendly stacked cards on mobile viewports.
        </p>
      </div>

      {/* Mobile Mockup Preview Shell */}
      <div className="bg-slate-100/70 p-4 sm:p-6 rounded-2xl border border-slate-200/80 flex justify-center">
        <div className="w-full max-w-[390px] flex flex-col gap-3.5">
          {/* Mockup Top Status Bar */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono px-1">
            <span>Viewport: 390 × 844</span>
            <span className="flex items-center gap-1 text-[#0051D5] font-sans font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Responsive Touch Tier
            </span>
          </div>

          {/* Card 1: High Risk Bank Phishing */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col gap-3">
            {/* Top row */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#101B35]">
                  #KW-849204
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50 text-[#0051D5]">
                  <Link2 size={12} /> URL Scanner
                </span>
              </div>

              {/* High Risk Badge */}
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-[#DC2626] border border-red-200">
                <ShieldAlert size={12} /> 87/100
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold text-slate-900 break-all leading-snug">
                https://secure-bank-login-verify.top/auth/session-renew
              </p>
              <p className="text-[11px] text-slate-400 flex items-center gap-1">
                <Clock size={11} /> Oct 24, 2024 • 14:32 UTC
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Completed
              </span>

              <Link
                href="/dashboard/scan-result/KW-849204"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0051D5] hover:text-[#003EA8] transition-colors"
              >
                <span>View Details</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Card 2: Safe Apple Support URL */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col gap-3">
            {/* Top row */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#101B35]">
                  #KW-847219
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50 text-[#0051D5]">
                  <Link2 size={12} /> URL Scanner
                </span>
              </div>

              {/* Safe Badge */}
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-[#16A34A] border border-emerald-200">
                <CheckCircle size={12} /> 12/100
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold text-slate-900 break-all leading-snug">
                https://support.apple.com/id/HT201222
              </p>
              <p className="text-[11px] text-slate-400 flex items-center gap-1">
                <Clock size={11} /> Oct 21, 2024 • 16:22 UTC
              </p>
            </div>

            {/* Full Width Button */}
            <Link
              href="/dashboard/scan-result/KW-847219"
              className="mt-1 w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-[#0051D5] flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              <span>View Details</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
