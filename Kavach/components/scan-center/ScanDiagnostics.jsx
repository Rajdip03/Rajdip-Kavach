'use client';

import {
  ScanLine,
  CheckCircle,
  Loader2,
  AlertCircle,
  Info,
  Search,
  WifiOff,
  RefreshCw,
} from 'lucide-react';

export default function ScanDiagnostics({ setActiveTab }) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-2">
          <ScanLine size={18} className="text-[#0051D5]" />
          <h3 className="text-lg font-semibold text-[#101B35]">Scan Diagnostics & System States</h3>
        </div>
        <p className="text-sm text-slate-500 mt-0.5">
          Observable operational states demonstrating edge cases, real-time sandboxing, and non-alarmist plainspoken feedback.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* State 1 — Loading */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0051D5] animate-pulse" />
                <span className="text-sm font-semibold text-[#101B35]">Active Sandbox Analysis</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                In Progress
              </span>
            </div>
            {/* Progress bar */}
            <div className="flex flex-col gap-1.5 mb-5">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Evaluating Target Payload</span>
                <span className="font-semibold text-[#0051D5]">65% Complete</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#0051D5] rounded-full w-[65%] transition-all duration-500" />
              </div>
              <span className="text-xs text-slate-400">Analyzing... ~1.2s remaining</span>
            </div>
            {/* Checklist */}
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Resolving DNS & Domain Age', done: true },
                { label: 'Headless Virtual Browser Fetch', done: true },
                { label: 'Evaluating Brand Mimicry & Phishing Kits', active: true },
                { label: 'Scoring Probabilistic Risk & Synthesizing Guidance', pending: true },
              ].map(({ label, done, active, pending }) => (
                <div key={label} className="flex items-center gap-2.5 text-sm">
                  {done && <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />}
                  {active && <Loader2 size={16} className="text-[#0051D5] animate-spin flex-shrink-0" />}
                  {pending && <div className="w-4 h-4 rounded-full border-2 border-slate-200 flex-shrink-0" />}
                  <span className={done ? 'text-[#101B35]' : active ? 'text-[#0051D5] font-medium' : 'text-slate-400'}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">Node ID: US-WEST-SANDBOX-09</span>
            <button className="text-xs font-semibold text-slate-400 hover:text-[#101B35] transition-colors">Cancel</button>
          </div>
        </div>

        {/* State 2 — Validation Error */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <AlertCircle size={18} className="text-red-500" />
                <span className="text-sm font-semibold text-[#101B35]">Input Validation Handled</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-600">
                Invalid Format
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              Gracefully prevents malformed queries and provides plainspoken corrections without harsh warnings.
            </p>
            {/* Mock error field */}
            <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <label className="text-xs font-semibold text-red-500">Destination Target</label>
              <div className="relative flex items-center">
                <AlertCircle size={16} className="absolute left-3 text-red-500" />
                <input
                  type="text"
                  readOnly
                  value="hxxp//fake-login..account"
                  className="w-full bg-white text-[#101B35] pl-10 pr-4 py-2.5 rounded-lg text-sm ring-1 ring-red-300 shadow-sm"
                />
              </div>
              <div className="flex items-start gap-1.5 mt-1">
                <Info size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-red-500 leading-tight">
                  Please enter a valid URL. Include http:// or https:// (e.g., <span className="font-mono underline">https://example.com</span>).
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">Protocol Validation: RFC 3986</span>
            <button className="text-xs font-semibold text-[#0051D5] hover:underline">Autocorrect Prefix</button>
          </div>
        </div>

        {/* State 3 — Empty State */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex flex-col items-center justify-center text-center py-10">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-5">
            <Search size={28} />
          </div>
          <h4 className="text-lg font-semibold text-[#101B35]">Ready to inspect your first target</h4>
          <p className="text-sm text-slate-400 max-w-sm mt-1 leading-relaxed">
            Paste any link, suspicious message, or employment offer above to generate a safe, plainspoken risk assessment.
          </p>
          <div className="flex items-center gap-2 mt-5 flex-wrap justify-center">
            <button
              onClick={() => setActiveTab && setActiveTab('url')}
              className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#101B35] text-xs font-semibold transition-all"
            >
              Load Phishing Example
            </button>
            <button
              onClick={() => setActiveTab && setActiveTab('url')}
              className="px-5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-all"
            >
              Load Legitimate Example
            </button>
          </div>
        </div>

        {/* State 4 — System Error */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <WifiOff size={18} className="text-amber-500" />
                <span className="text-sm font-semibold text-[#101B35]">Host Inaccessible</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500">
                Server Timeout
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 flex flex-col gap-2 border border-slate-100">
              <span className="text-sm font-semibold text-[#101B35]">Unable to reach remote host</span>
              <p className="text-sm text-slate-500 leading-relaxed">
                The destination server timed out after 10 seconds or refused the secure sandbox connection. This often happens if a malicious server was recently taken offline by registrars.
              </p>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0051D5] text-white hover:bg-[#0051D5]/90 text-xs font-semibold transition-all shadow-sm">
              <RefreshCw size={13} />
              <span>Retry Scan</span>
            </button>
            <button className="text-xs font-semibold text-slate-400 hover:text-red-500 transition-colors">
              Report as Inaccessible
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

