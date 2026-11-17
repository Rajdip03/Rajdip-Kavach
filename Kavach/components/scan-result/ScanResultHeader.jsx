'use client';

import Link from 'next/link';
import { Search, Download, Flag, Clock } from 'lucide-react';

/**
 * Breadcrumb, metadata bar, and action buttons for the Scan Result page.
 *
 * @param {{ scanId: string, scanLabel: string, scannedAt: string, scanType?: string }} props
 */
export default function ScanResultHeader({ scanId, scanLabel, scannedAt, scanType = 'Automated Deep Sandbox' }) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left – breadcrumb + meta */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href="/dashboard/scan-center"
              className="text-xs font-semibold text-slate-400 hover:text-[#0051D5] transition-colors"
            >
              Scan Center
            </Link>
            <span className="text-xs text-slate-400">/</span>
            <span className="text-xs font-semibold text-slate-800">
              Scan Result #{scanLabel}
            </span>
            {scanType && (
              <span className="ml-2 text-[11px] bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full font-medium">
                {scanType}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="text-xs flex items-center gap-1">
              <Clock size={13} className="text-slate-400" />
              {scannedAt}
            </span>
            <span className="text-xs">•</span>
            <span className="text-xs font-mono">Scan ID: {scanId}</span>
          </div>
        </div>

        {/* Right – action buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/dashboard/scan-center"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm border border-slate-100 transition-all"
          >
            <Search size={16} className="text-slate-400" />
            <span>Scan Another Item</span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm border border-slate-100 transition-all"
          >
            <Download size={16} className="text-[#0051D5]" />
            <span>Download Report</span>
          </button>
          <Link
            href="/dashboard/report-a-scam"
            className="inline-flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm border border-red-100 transition-all"
          >
            <Flag size={16} />
            <span>Report This Scam</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
