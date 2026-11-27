'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BadgeCheck, Copy, Check, PlusCircle } from 'lucide-react';

const NEXT_STEPS = [
  {
    step: 1,
    title: 'Automated Forensic Sandboxing',
    description:
      'Our headless analysis engine crawls the submitted URL and analyzes domain registry patterns within 5 minutes.',
  },
  {
    step: 2,
    title: 'Community Shield Updates',
    description:
      'If malicious payloads or deceptive mimicry are verified, anti-phishing hashes are synced across all Kawach active shields.',
  },
  {
    step: 3,
    title: 'Telemetry & Audit Log',
    description:
      'You can track the investigation status in your Scan History anytime.',
  },
];

/**
 * Right-column Submission Confirmation State card matching the provided mockup.
 *
 * @param {{
 *   reportId?: string,
 *   isLiveSubmission?: boolean,
 *   submittedCategory?: string,
 *   onReportAnother?: () => void
 * }} props
 */
export default function SubmissionConfirmationCard({
  reportId = 'REP-93821-KW',
  isLiveSubmission = false,
  submittedCategory,
  onReportAnother,
}) {
  const [copied, setCopied] = useState(false);

  const formattedId = `#${reportId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedId);
    } catch {
      // Clipboard API unavailable; still show copied confirmation feedback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-5">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0051D5] flex-shrink-0" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#101B35]">
            {isLiveSubmission
              ? 'Submission Confirmed'
              : 'Submission Outcome Preview'}
          </span>
        </div>
        <span className="bg-[#DCE6FF] text-[#003EA8] text-[10px] font-semibold px-2.5 py-1 rounded-full leading-tight text-center">
          Automated Sandbox
        </span>
      </div>

      {/* Inner Highlight Box */}
      <div className="bg-[#F4F7FC] border border-slate-200/70 rounded-2xl p-5 flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-[#0051D5] text-white flex items-center justify-center shadow-sm">
          <BadgeCheck size={26} />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold text-[#101B35] leading-snug">
            Report Submitted Successfully
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
            Thank you for safeguarding the community. Your report has been dispatched to our automated deep inspection sandbox.
          </p>
          {isLiveSubmission && submittedCategory && (
            <p className="text-[11px] font-semibold text-[#0051D5] mt-0.5">
              Queued: {submittedCategory}
            </p>
          )}
        </div>

        {/* Report Reference Callout */}
        <div className="mt-1 inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-2xs">
          <span className="text-[11px] text-slate-500">Report Reference:</span>
          <span className="font-mono text-xs font-bold text-[#0051D5]">
            {formattedId}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            title="Copy Report ID"
            aria-label="Copy report reference number"
            className="text-slate-400 hover:text-[#0051D5] transition-colors flex items-center"
          >
            {copied ? (
              <Check size={13} className="text-emerald-600" />
            ) : (
              <Copy size={13} />
            )}
          </button>
        </div>
      </div>

      {/* What Happens Next Vertical Timeline */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xs font-bold text-[#101B35]">What happens next</h3>

        <div className="flex flex-col gap-3.5">
          {NEXT_STEPS.map(({ step, title, description }) => (
            <div key={step} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#EAF0FF] text-[#0051D5] text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {step}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-[#101B35]">
                  {title}
                </span>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="pt-1 grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={onReportAnother}
          className="inline-flex items-center justify-center gap-1.5 bg-[#0051D5] hover:bg-[#003EA8] text-white px-3.5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all text-center leading-tight"
        >
          <PlusCircle size={15} className="flex-shrink-0" />
          <span>Report Another Scam</span>
        </button>

        <Link
          href="/dashboard/overview"
          className="inline-flex items-center justify-center bg-[#ECEFF4] hover:bg-slate-200 text-[#101B35] px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors text-center leading-tight"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
