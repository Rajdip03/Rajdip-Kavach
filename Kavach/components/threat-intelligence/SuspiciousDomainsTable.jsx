'use client';

import { useState } from 'react';
import {
  ShieldCheck,
  Users,
  Download,
  Check,
  AlertOctagon,
  ShieldAlert,
  AlertTriangle,
  Clock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

function RiskPill({ score }) {
  if (score >= 90) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#991B1B] text-white">
        <AlertOctagon size={12} />
        {score}/100
      </span>
    );
  }
  if (score >= 70) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-[#DC2626] border border-red-200">
        <ShieldAlert size={12} />
        {score}/100
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
      <AlertTriangle size={12} />
      {score}/100
    </span>
  );
}

function StatusBadge({ status, isVerified }) {
  if (isVerified) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        {status}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
      <span className="w-2 h-2 rounded-full bg-amber-400" />
      {status}
    </span>
  );
}

/**
 * Suspicious Domain Reports high-density IOC table with pagination and STIX/CSV export.
 *
 * @param {{
 *   domains: Array<object>,
 *   onExportIOC?: () => void
 * }} props
 */
export default function SuspiciousDomainsTable({ domains, onExportIOC }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    if (onExportIOC) onExportIOC();
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
      {/* Table Top Bar */}
      <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[#101B35]">
            Suspicious Domain Reports
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Live indicator-of-compromise (IOC) registry separating verified sandbox findings from pending community observations.
          </p>
        </div>

        <button
          type="button"
          onClick={handleExport}
          className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#101B35] border border-slate-200 px-4 py-2 rounded-xl text-xs font-semibold shadow-2xs transition-colors flex-shrink-0"
        >
          {exported ? (
            <>
              <Check size={14} className="text-emerald-600" />
              <span className="text-emerald-700">Exported IOC CSV</span>
            </>
          ) : (
            <>
              <Download size={14} className="text-[#2563EB]" />
              <span>Export IOC Feed (STIX/CSV)</span>
            </>
          )}
        </button>
      </div>

      {/* High-density Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[920px]">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80">
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Domain / Hostname
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Source Classification
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Detection Vector
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Threat Category
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Risk Index
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                First Seen
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Status / Verification
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {domains.map((row) => {
              const isVerified = row.sourceType === 'verified';
              return (
                <tr
                  key={row.domain}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  {/* Domain */}
                  <td className="py-3.5 px-4 font-mono font-semibold text-[#101B35] whitespace-nowrap">
                    {row.domain}
                  </td>

                  {/* Source Classification */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {isVerified ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-[#0051D5] border border-blue-200">
                        <ShieldCheck size={12} />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                        <Users size={12} />
                        Community
                      </span>
                    )}
                  </td>

                  {/* Detection Vector */}
                  <td className="py-3.5 px-4 text-slate-700 font-medium whitespace-nowrap">
                    {row.detectionVector}
                  </td>

                  {/* Threat Category */}
                  <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                    {row.threatCategory}
                  </td>

                  {/* Risk Index */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <RiskPill score={row.riskIndex} />
                  </td>

                  {/* First Seen */}
                  <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} className="text-slate-400" />
                      {row.firstSeen}
                    </span>
                  </td>

                  {/* Status / Verification */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <StatusBadge status={row.status} isVerified={isVerified} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border-t border-slate-100 bg-slate-50/40 text-xs">
        <span className="text-slate-500">
          Showing <span className="font-semibold text-slate-700">1</span> to{' '}
          <span className="font-semibold text-slate-700">{domains.length}</span> of{' '}
          <span className="font-semibold text-slate-700">2,132</span> IOC records
        </span>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed font-medium transition-colors"
          >
            <ChevronLeft size={13} />
            <span>Previous</span>
          </button>
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setCurrentPage(p)}
              className={`w-8 h-8 rounded-lg font-semibold text-xs transition-colors ${
                currentPage === p
                  ? 'bg-[#2563EB] text-white shadow-2xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            disabled={currentPage === 3}
            onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed font-medium transition-colors"
          >
            <span>Next</span>
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
