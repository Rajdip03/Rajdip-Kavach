'use client';

import { useState } from 'react';
import { Link2, X, Search, RotateCcw, Lock } from 'lucide-react';

export default function UrlPanel() {
  const [url, setUrl] = useState('');

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-[#101B35] tracking-tight">
          Inspect Link or Redirect Chain
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Detect hidden phishing kits, suspicious top-level domains, and brand impersonation before clicking.
        </p>
      </div>

      {/* URL Input */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#101B35]" htmlFor="url-input-field">
          Target Web Address or Shortlink
        </label>
        <div className="relative flex items-center">
          <Link2 className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
          <input
            id="url-input-field"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/verify-account"
            className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 pl-11 pr-24 py-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 focus:bg-white transition-all shadow-sm border border-slate-200"
          />
          <button
            onClick={() => setUrl('')}
            title="Clear field"
            className="absolute right-3 px-2 py-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1 transition-all"
          >
            <X size={14} />
            <span>Clear</span>
          </button>
        </div>
        <span className="text-xs text-slate-400 pl-1">
          Supported formats: http://, https://, or shortened tracking links (bit.ly, t.co, tinyurl).
        </span>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0051D5] text-white hover:bg-[#0051D5]/90 transition-all text-sm font-semibold shadow-sm">
            <Search size={16} />
            <span>Analyze URL</span>
          </button>
          <button
            onClick={() => setUrl('')}
            className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-slate-100 text-[#101B35] hover:bg-slate-200 transition-all text-sm font-semibold"
          >
            <RotateCcw size={16} />
            <span>Reset</span>
          </button>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-500 text-xs border border-slate-100">
          <Lock size={14} className="text-[#0051D5]" />
          <span>Zero session logging · Sandboxed headless inspection</span>
        </div>
      </div>

      {/* Quick Testing Benchmarks */}
      <div className="flex flex-col gap-2 pt-2 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Quick Testing Benchmarks:
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setUrl('https://fedx-package-track-help.xyz')}
            className="text-left px-3 py-1.5 rounded-lg bg-white text-slate-500 hover:text-[#0051D5] hover:bg-blue-50 text-xs transition-all shadow-sm flex items-center gap-1.5 border border-slate-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
            <span>Try suspicious lookalike:</span>
            <code className="font-mono text-red-600 font-medium">https://fedx-package-track-help.xyz</code>
          </button>
          <button
            onClick={() => setUrl('https://github.com')}
            className="text-left px-3 py-1.5 rounded-lg bg-white text-slate-500 hover:text-[#0051D5] hover:bg-blue-50 text-xs transition-all shadow-sm flex items-center gap-1.5 border border-slate-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0051D5] flex-shrink-0" />
            <span>Try trusted authority:</span>
            <code className="font-mono text-[#101B35] font-medium">https://github.com</code>
          </button>
        </div>
      </div>
    </div>
  );
}

