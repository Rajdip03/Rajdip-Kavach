'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function JobPanel() {
  const [form, setForm] = useState({ position: '', company: '', link: '', details: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-[#101B35] tracking-tight">
          Employment Scam & Recruiter Verification
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Flag fraudulent remote hiring scams, fake equipment checks, and unverified recruiter channels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#101B35]">Position Title</label>
          <input
            type="text"
            value={form.position}
            onChange={set('position')}
            placeholder="e.g. Remote Data Entry Specialist"
            className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 px-4 py-3 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 shadow-sm border border-slate-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#101B35]">Company or Recruiter Claim</label>
          <input
            type="text"
            value={form.company}
            onChange={set('company')}
            placeholder="e.g. Apex Global Logistics Ltd"
            className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 px-4 py-3 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 shadow-sm border border-slate-200"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#101B35]">Application Link or Interview Channel</label>
        <input
          type="text"
          value={form.link}
          onChange={set('link')}
          placeholder="e.g. https://telegram.me/apex_recruitment_agent"
          className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 px-4 py-3 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 shadow-sm border border-slate-200"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#101B35]">Offer or Message Details</label>
        <textarea
          value={form.details}
          onChange={set('details')}
          placeholder="Paste the offer email, WhatsApp chat, or check payment instructions here..."
          rows={3}
          className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 p-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 shadow-sm resize-none border border-slate-200"
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0051D5] text-white hover:bg-[#0051D5]/90 transition-all text-sm font-semibold shadow-sm">
          <Search size={16} />
          <span>Analyze Job Offer</span>
        </button>
      </div>
    </div>
  );
}

