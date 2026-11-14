'use client';

import { useState } from 'react';
import { Globe, ShieldCheck } from 'lucide-react';

export default function WebsitePanel() {
  const [url, setUrl] = useState('');
  const [deepCheck, setDeepCheck] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-[#101B35] tracking-tight">
          Storefront & Domain Safety Evaluation
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Determine merchant legitimacy, WHOIS longevity, and payment spoofing traps before entering card numbers.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#101B35]" htmlFor="web-input-field">
          Storefront Web Address
        </label>
        <div className="relative flex items-center">
          <Globe className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
          <input
            id="web-input-field"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://eshop-clearance-outlet-sale.com"
            className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 pl-11 pr-4 py-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 focus:bg-white transition-all shadow-sm border border-slate-200"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
        <input
          type="checkbox"
          checked={deepCheck}
          onChange={(e) => setDeepCheck(e.target.checked)}
          id="deep-trust-check"
          className="w-4 h-4 text-[#0051D5] rounded focus:ring-[#0051D5] border-slate-300"
        />
        <label htmlFor="deep-trust-check" className="text-sm text-[#101B35] cursor-pointer select-none">
          Perform deep checkout trust analysis (inspect payment iframe endpoints and customer review sentiment)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0051D5] text-white hover:bg-[#0051D5]/90 transition-all text-sm font-semibold shadow-sm">
          <ShieldCheck size={16} />
          <span>Check Website</span>
        </button>
      </div>
    </div>
  );
}

