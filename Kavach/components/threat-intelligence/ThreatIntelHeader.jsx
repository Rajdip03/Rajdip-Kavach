'use client';

import Link from 'next/link';
import { ChevronRight, Database, Target, ShieldCheck } from 'lucide-react';

/**
 * Header for the Threat Intelligence page with breadcrumb, title, subtitle,
 * and live telemetry status pills.
 */
export default function ThreatIntelHeader() {
  return (
    <div className="flex flex-col gap-4">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs">
        <Link
          href="/dashboard/overview"
          className="text-slate-400 hover:text-[#2563EB] transition-colors font-medium"
        >
          Dashboard
        </Link>
        <ChevronRight size={13} className="text-slate-300" />
        <span className="text-[#2563EB] font-semibold">Threat Intelligence</span>
      </nav>

      {/* Title & Telemetry Metrics */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#101B35] tracking-tight">
            Threat Intelligence
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm max-w-2xl leading-relaxed">
            Real-time threat feeds, community-submitted reports, and forensic telemetry across emerging scams and active campaigns.
          </p>
        </div>

        {/* Top Header Metrics / Pills */}
        <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
          {/* Live Feed Sync Status */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0051D5] px-3.5 py-2 rounded-full text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
            </span>
            <span>Telemetry Synced 1m ago</span>
          </div>

          {/* Active Signatures */}
          <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 text-[#101B35] px-3.5 py-2 rounded-full text-xs font-semibold shadow-2xs">
            <Database size={14} className="text-[#2563EB]" />
            <span>12,480 Active Signatures</span>
          </div>

          {/* Attribution Confidence */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3.5 py-2 rounded-full text-xs font-semibold">
            <Target size={14} className="text-emerald-600" />
            <span>99.4% Attribution Confidence</span>
          </div>
        </div>
      </div>

      {/* Clear Distinction Legend Bar */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0051D5] border border-blue-200 font-semibold text-[11px]">
            <ShieldCheck size={12} />
            Independently Verified Threats
          </span>
          <span className="text-slate-400">Audited by Kawach forensic sandbox</span>
        </div>
        <span className="text-slate-300 hidden sm:inline">•</span>
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-semibold text-[11px]">
            Community-Submitted Reports
          </span>
          <span className="text-slate-400">Unverified early-warning consensus feed</span>
        </div>
      </div>
    </div>
  );
}
