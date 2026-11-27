'use client';

import { useState } from 'react';
import { Lock, ShieldCheck, Download, Check } from 'lucide-react';

function PrivacyToggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0051D5]/30 ${
        checked ? 'bg-[#0051D5]' : 'bg-slate-200'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs transition duration-200 ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

/**
 * Privacy & Data Safeguards card matching the screenshot.
 *
 * @param {{ onSaveSuccess: (msg: string) => void }} props
 */
export default function PrivacyDataCard({ onSaveSuccess }) {
  const [saveScanHistory, setSaveScanHistory] = useState(true);
  const [anonymousSharing, setAnonymousSharing] = useState(true);
  const [exported, setExported] = useState(false);

  const handleExportArchive = () => {
    const archivePayload = {
      account: 'KAV-8921',
      exportedAt: new Date().toISOString(),
      preferences: {
        saveScanHistory,
        anonymousSharing,
      },
      policy: 'Zero Credential Logging Guarantee',
    };
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(archivePayload, null, 2));
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', 'kavach_personal_archive.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setExported(true);
    onSaveSuccess('Personal data & audit archive download started.');
    setTimeout(() => setExported(false), 2500);
  };

  return (
    <section
      id="privacy"
      className="scroll-mt-24 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5"
    >
      {/* Header Row */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-[#101B35]">
            Privacy &amp; Data Safeguards
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Zero-knowledge inspection parameters and private telemetry retention policies.
          </p>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0051D5]">
          <Lock size={13} />
          Strict Policy
        </span>
      </div>

      {/* Toggle Boxes */}
      <div className="flex flex-col gap-3">
        <div className="bg-[#F4F6F9] border border-slate-200/60 rounded-xl p-4 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5 max-w-xl">
            <span className="text-xs sm:text-sm font-semibold text-[#101B35]">
              Save Scan History
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              Retain scanned URLs and analysis logs in your private dashboard for 90 days. If disabled, scans are purged immediately after inspection.
            </p>
          </div>
          <PrivacyToggle
            checked={saveScanHistory}
            onChange={() => {
              const next = !saveScanHistory;
              setSaveScanHistory(next);
              onSaveSuccess(
                `Scan history retention ${next ? 'enabled' : 'disabled'}.`
              );
            }}
            label="Save Scan History"
          />
        </div>

        <div className="bg-[#F4F6F9] border border-slate-200/60 rounded-xl p-4 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5 max-w-xl">
            <span className="text-xs sm:text-sm font-semibold text-[#101B35]">
              Anonymous Threat Sharing
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              Contribute sanitized, de-identified scan indicators to Kawach&apos;s community defense registry to protect other members without exposing private data.
            </p>
          </div>
          <PrivacyToggle
            checked={anonymousSharing}
            onChange={() => {
              const next = !anonymousSharing;
              setAnonymousSharing(next);
              onSaveSuccess(
                `Anonymous threat sharing ${next ? 'enabled' : 'paused'}.`
              );
            }}
            label="Anonymous Threat Sharing"
          />
        </div>
      </div>

      {/* Zero Credential Logging Guarantee Box */}
      <div className="bg-[#EEF2F7] border border-slate-200/70 rounded-xl p-4 flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#DCE6FF] text-[#0051D5] flex items-center justify-center flex-shrink-0">
          <ShieldCheck size={16} />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-bold text-[#101B35]">
            Zero Credential Logging Guarantee
          </span>
          <p className="text-xs text-slate-500 leading-relaxed">
            Kawach scans execute within sandboxed memory clusters. We never store submitted form passwords, OTP values, or private conversation fragments.
          </p>
        </div>
      </div>

      {/* Export Personal Data & Audit Log Row */}
      <div className="bg-[#F4F6F9] border border-slate-200/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5 max-w-lg">
          <span className="text-xs sm:text-sm font-semibold text-[#101B35]">
            Export Personal Data &amp; Audit Log
          </span>
          <p className="text-xs text-slate-500 leading-relaxed">
            Download a complete JSON and CSV archive containing all your historic scans, reported phishing incidents, and security logs.
          </p>
        </div>

        <button
          type="button"
          onClick={handleExportArchive}
          className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#101B35] shadow-2xs transition-colors flex-shrink-0"
        >
          {exported ? (
            <>
              <Check size={14} className="text-emerald-600" />
              <span className="text-emerald-700">Archive Exported</span>
            </>
          ) : (
            <>
              <Download size={14} className="text-[#0051D5]" />
              <span>Download Data Archive (.ZIP)</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
