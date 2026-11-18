'use client';

import Link from 'next/link';
import { Download, Plus } from 'lucide-react';

/**
 * Scan History Header with breadcrumb, title, subtitle, and action buttons.
 *
 * @param {{ onExportCSV?: () => void }} props
 */
export default function ScanHistoryHeader({ onExportCSV }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs">
        <Link
          href="/dashboard/overview"
          className="text-slate-400 hover:text-[#0051D5] transition-colors font-medium"
        >
          Dashboard
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-semibold">Scan History</span>
      </div>

      {/* Title & Actions Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-[#101B35] tracking-tight">
            Scan History
          </h1>
          <p className="mt-1 text-slate-500 text-sm max-w-2xl">
            Review past link verifications, message inspections, and threat analyses across all your devices.
          </p>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={onExportCSV}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm border border-slate-200 transition-all hover:border-slate-300"
          >
            <Download size={16} className="text-slate-500" />
            <span>Export CSV</span>
          </button>

          <Link
            href="/dashboard/scan-center"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all"
          >
            <Plus size={16} />
            <span>New Scan +</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
