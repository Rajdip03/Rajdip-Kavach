'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  Users,
  AlertOctagon,
  ShieldAlert,
  AlertTriangle,
  MessageSquare,
  Mail,
  Globe,
  Clock,
  ArrowRight,
} from 'lucide-react';

function SeverityBadge({ severity }) {
  switch (severity) {
    case 'Critical':
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#991B1B] text-white">
          <AlertOctagon size={12} />
          Critical
        </span>
      );
    case 'High':
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-[#DC2626] border border-red-200">
          <ShieldAlert size={12} />
          High
        </span>
      );
    case 'Medium':
    default:
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
          <AlertTriangle size={12} />
          Medium
        </span>
      );
  }
}

function ChannelPill({ channel }) {
  let Icon = MessageSquare;
  if (channel === 'Email') Icon = Mail;
  if (channel === 'Web') Icon = Globe;

  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
      <Icon size={11} className="text-slate-500" />
      {channel}
    </span>
  );
}

/**
 * Recently Reported Scams cards grid.
 *
 * @param {{
 *   scams: Array<object>,
 *   activeScope: 'all' | 'verified' | 'community'
 * }} props
 */
export default function RecentScamsGrid({ scams, activeScope }) {
  return (
    <section className="flex flex-col gap-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold text-[#101B35]">
            Recently Reported Scams
          </h2>
          <p className="text-xs text-slate-500">
            Active threat campaigns isolated by Kawach sandboxes and crowdsourced telemetry.
          </p>
        </div>
        <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200/80 px-3 py-1 rounded-full self-start sm:self-center">
          Showing {scams.length}{' '}
          {activeScope === 'verified'
            ? 'verified'
            : activeScope === 'community'
            ? 'community'
            : 'active'}{' '}
          campaigns
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {scams.map((scam) => {
          const isVerified = scam.sourceType === 'verified';

          return (
            <article
              key={scam.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-3">
                {/* Top Classification & Severity Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  {isVerified ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-[#0051D5] border border-blue-200">
                      <ShieldCheck size={12} />
                      ✓ Verified Threat
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                      <Users size={12} />
                      Unverified Community Report
                    </span>
                  )}

                  <SeverityBadge severity={scam.severity} />
                </div>

                {/* Title & Channel Meta */}
                <div>
                  <h3 className="text-base font-semibold text-[#101B35] leading-snug">
                    {scam.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5 mt-1.5">
                    <ChannelPill channel={scam.channel} />
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock size={11} />
                      First spotted {scam.firstSpotted}
                    </span>
                  </div>
                </div>

                {/* Scam Copy Snippet */}
                <div className="bg-[#F8FAFC] border border-slate-200/70 rounded-xl p-3">
                  <p className="text-xs text-slate-600 italic leading-relaxed line-clamp-2">
                    &ldquo;{scam.snippet}&rdquo;
                  </p>
                </div>
              </div>

              {/* Footer Action */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400">
                  Campaign #{scam.id}
                </span>
                <Link
                  href={`/dashboard/scan-result/${scam.scanResultId}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  <span>Investigate IOCs</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
