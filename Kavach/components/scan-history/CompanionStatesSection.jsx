'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  Plus,
  MessageSquare,
  History,
  Layers,
} from 'lucide-react';

/**
 * Section 2: Empty State & Skeleton Loading States (2-column grid).
 */
export default function CompanionStatesSection() {
  return (
    <div className="flex flex-col gap-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div className="flex items-center gap-2">
          <Layers size={18} className="text-[#0051D5]" />
          <h2 className="text-base font-semibold text-[#101B35]">
            Companion UX States (Empty &amp; Async Skeleton)
          </h2>
        </div>
        <p className="text-xs text-slate-500">
          Design specifications for initial onboarding and pending data synchronization states.
        </p>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Column: Empty State */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center justify-between gap-6">
          <div className="flex flex-col items-center text-center gap-3 mt-2">
            {/* Friendly Shield Icon with Soft Circular Background */}
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0051D5] flex items-center justify-center shadow-inner">
              <ShieldCheck size={32} />
            </div>

            <h3 className="text-lg font-semibold text-[#101B35]">
              No scans yet
            </h3>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              You haven&apos;t inspected any links, messages, or websites yet. Once you submit content for analysis, your full audit trail and threat telemetry will appear here.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
            <Link
              href="/dashboard/scan-center"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all"
            >
              <Plus size={15} />
              <span>Start your first scan</span>
            </Link>

            <Link
              href="/dashboard/scan-center?type=message"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 transition-colors"
            >
              <MessageSquare size={14} className="text-slate-500" />
              <span>Scan an SMS message</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Loading Skeleton Rows */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History size={16} className="text-slate-400" />
                <span className="text-xs font-semibold text-[#101B35] uppercase tracking-wider">
                  Loading Skeleton Preview
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0051D5] text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0051D5] animate-ping" />
                Pulse Active
              </span>
            </div>

            {/* Skeleton Table Simulation */}
            <div className="border border-slate-100 rounded-xl overflow-hidden animate-pulse">
              {/* Header */}
              <div className="bg-slate-50 py-2.5 px-4 flex items-center justify-between border-b border-slate-100">
                <div className="w-14 h-3 bg-slate-200 rounded" />
                <div className="w-20 h-3 bg-slate-200 rounded hidden sm:block" />
                <div className="w-28 h-3 bg-slate-200 rounded" />
                <div className="w-16 h-3 bg-slate-200 rounded" />
              </div>

              {/* 3 Pulse Rows */}
              <div className="divide-y divide-slate-100">
                {[1, 2, 3].map((row) => (
                  <div
                    key={row}
                    className="p-3.5 flex items-center justify-between gap-3"
                  >
                    {/* ID + Type */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-16 h-4 bg-slate-200 rounded" />
                      <div className="w-7 h-7 rounded-lg bg-slate-200 flex-shrink-0" />
                    </div>

                    {/* Content Line */}
                    <div className="flex-1 flex flex-col gap-1.5 max-w-xs">
                      <div className="w-full h-3.5 bg-slate-200 rounded" />
                      <div className="w-2/3 h-2.5 bg-slate-100 rounded" />
                    </div>

                    {/* Badge */}
                    <div className="w-20 h-6 bg-slate-200 rounded-full flex-shrink-0" />

                    {/* Action */}
                    <div className="w-14 h-4 bg-slate-200 rounded hidden sm:block flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skeleton Status Note */}
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Pulse animation active during async telemetry sync.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
