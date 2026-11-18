'use client';

import Link from 'next/link';
import {
  Link2,
  MessageSquare,
  Briefcase,
  Globe,
  ShieldAlert,
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Clock,
  SearchX,
} from 'lucide-react';

/**
 * Resolves scan type icon and styling.
 */
function getTypeIcon(type) {
  switch (type) {
    case 'URL':
      return { Icon: Link2, bg: 'bg-blue-50 text-[#0051D5]' };
    case 'Message':
      return { Icon: MessageSquare, bg: 'bg-purple-50 text-purple-600' };
    case 'Website':
      return { Icon: Globe, bg: 'bg-emerald-50 text-emerald-600' };
    case 'Job Offer':
      return { Icon: Briefcase, bg: 'bg-amber-50 text-amber-600' };
    default:
      return { Icon: Link2, bg: 'bg-slate-100 text-slate-600' };
  }
}

/**
 * Resolves risk badge configuration.
 */
function getRiskBadge(riskLevel, riskScoreText) {
  switch (riskLevel) {
    case 'critical':
      return {
        Icon: AlertOctagon,
        label: `Critical Risk (${riskScoreText})`,
        className: 'bg-[#991B1B] text-white',
      };
    case 'high':
      return {
        Icon: ShieldAlert,
        label: `High Risk (${riskScoreText})`,
        className: 'bg-red-50 text-[#DC2626] border border-red-200',
      };
    case 'medium':
      return {
        Icon: AlertTriangle,
        label: `Caution (${riskScoreText})`,
        className: 'bg-amber-50 text-[#D97706] border border-amber-200',
      };
    case 'low':
    default:
      return {
        Icon: CheckCircle,
        label: `Safe (${riskScoreText})`,
        className: 'bg-emerald-50 text-[#16A34A] border border-emerald-200',
      };
  }
}

/**
 * Resolves status pill with colored indicator dot.
 */
function getStatusPill(status) {
  let dotColor = 'bg-emerald-500';
  let textColor = 'text-slate-700';

  if (status === 'Blocked') {
    dotColor = 'bg-rose-500';
    textColor = 'text-rose-700';
  } else if (status === 'Flagged') {
    dotColor = 'bg-amber-500';
    textColor = 'text-amber-700';
  } else if (status === 'Verified') {
    dotColor = 'bg-blue-500';
    textColor = 'text-[#0051D5]';
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium">
      <span className={`w-2 h-2 rounded-full ${dotColor}`} />
      <span className={textColor}>{status}</span>
    </span>
  );
}

/**
 * Scan History Table component with pagination and responsive behavior.
 */
export default function ScanHistoryTable({
  scans,
  currentPage = 1,
  totalPages = 4,
  totalResults = 24,
  onPageChange,
}) {
  if (!scans || scans.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center">
          <SearchX size={24} />
        </div>
        <p className="text-base font-semibold text-[#101B35]">No matching scans found</p>
        <p className="text-xs text-slate-400 max-w-sm">
          No records match your active search or filter combination. Try adjusting or clearing your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
      {/* Desktop & Tablet Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[850px]">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/75">
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Scan ID
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Scan Type
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider max-w-xs">
                Submitted Content
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Risk Level
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Date &amp; Time
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Analysis Status
              </th>
              <th className="py-3.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {scans.map((item) => {
              const { Icon: TypeIcon, bg: typeBg } = getTypeIcon(item.type);
              const riskBadge = getRiskBadge(item.riskLevel, item.riskScoreText);
              const RiskIcon = riskBadge.Icon;

              return (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/70 transition-colors group"
                >
                  {/* Scan ID */}
                  <td className="py-4 px-4 font-mono font-semibold text-xs text-[#101B35] whitespace-nowrap">
                    #{item.id}
                  </td>

                  {/* Scan Type */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${typeBg}`}
                      >
                        <TypeIcon size={14} />
                      </div>
                      <span className="text-xs font-semibold text-slate-700">
                        {item.typeLabel}
                      </span>
                    </div>
                  </td>

                  {/* Submitted Content */}
                  <td className="py-4 px-4 max-w-xs">
                    <div className="flex flex-col gap-0.5">
                      <p
                        className="font-medium text-slate-900 text-xs truncate max-w-sm"
                        title={item.content}
                      >
                        {item.content}
                      </p>
                      {item.meta && (
                        <p className="text-[11px] text-slate-400 truncate">
                          {item.meta}
                        </p>
                      )}
                    </div>
                  </td>

                  {/* Risk Level Badge */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${riskBadge.className}`}
                    >
                      <RiskIcon size={13} />
                      <span>{riskBadge.label}</span>
                    </span>
                  </td>

                  {/* Date & Time */}
                  <td className="py-4 px-4 whitespace-nowrap text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-slate-400" />
                      <span>{item.date}</span>
                    </div>
                  </td>

                  {/* Analysis Status */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    {getStatusPill(item.status)}
                  </td>

                  {/* Action */}
                  <td className="py-4 px-4 whitespace-nowrap text-right">
                    <Link
                      href={`/dashboard/scan-result/${item.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0051D5] hover:text-[#003EA8] group-hover:translate-x-0.5 transition-all"
                    >
                      <span>View Details</span>
                      <ArrowRight size={13} />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-slate-100 bg-slate-50/40 text-xs">
        <div className="text-slate-500">
          Showing <span className="font-semibold text-slate-700">1</span> to{' '}
          <span className="font-semibold text-slate-700">{scans.length}</span> of{' '}
          <span className="font-semibold text-slate-700">{totalResults}</span> results
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange && onPageChange(currentPage - 1)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed font-medium transition-colors"
          >
            Previous
          </button>

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange && onPageChange(page)}
              className={`w-8 h-8 rounded-lg font-semibold text-xs transition-colors ${
                currentPage === page
                  ? 'bg-[#0051D5] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange && onPageChange(currentPage + 1)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed font-medium transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
