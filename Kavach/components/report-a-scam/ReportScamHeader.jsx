'use client';

import Link from 'next/link';
import { ChevronRight, History, EyeOff, Share2 } from 'lucide-react';

/**
 * Header for the Report a Scam page matching the Stitch/Kavach layout:
 * breadcrumb + anonymous badge + view past reports button,
 * followed by title, subtitle, and Threats Defused telemetry pill.
 */
export default function ReportScamHeader() {
  return (
    <div className="flex flex-col gap-4">
      {/* Top Row: Breadcrumb + Utility Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs">
          <Link
            href="/dashboard/overview"
            className="text-slate-400 hover:text-[#0051D5] transition-colors font-medium"
          >
            Dashboard
          </Link>
          <ChevronRight size={13} className="text-slate-300" />
          <span className="text-[#0051D5] font-semibold">Report a Scam</span>
        </nav>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200/80 text-slate-600 px-3 py-1.5 rounded-xl text-xs font-medium">
            <EyeOff size={13} className="text-[#101B35]" />
            <span className="font-mono text-[10px] font-bold tracking-wider text-[#101B35] uppercase">
              Incognito
            </span>
            <span>Anonymous Submission Enabled</span>
          </div>

          <Link
            href="/dashboard/scan-history"
            className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-[#101B35] px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-2xs border border-slate-200/90 transition-all"
          >
            <History size={14} className="text-slate-500" />
            <span>View Past Reports</span>
          </Link>
        </div>
      </div>

      {/* Main Title Row + Global Telemetry Counter */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#101B35] tracking-tight">
            Report a Scam
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm max-w-2xl leading-relaxed">
            Help protect the community by submitting deceptive links, fraudulent messages, or impersonation attempts. Our automated sandboxes investigate every report without exposing your personal information.
          </p>
        </div>

        {/* Threats Defused Counter Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 px-4 py-3 shadow-xs flex items-center gap-3 self-start lg:self-center flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0051D5] flex items-center justify-center flex-shrink-0">
            <Share2 size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#101B35] leading-tight">
              3,842 Threats Defused
            </span>
            <span className="text-xs text-slate-500 leading-tight mt-0.5">
              Shared with global threat telemetry
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
