'use client';

import { useState } from 'react';
import { Search, Clipboard } from 'lucide-react';

export default function MessagePanel() {
  const [msg, setMsg] = useState('');
  const maxLen = 5000;

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setMsg(text.slice(0, maxLen));
    } catch {
      // Clipboard access denied
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-[#101B35] tracking-tight">
          Inspect SMS, Email, or WhatsApp Messages
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Detect coercive language, urgent monetary demands, impersonated family members, and fake delivery notifications.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-[#101B35]" htmlFor="msg-input-field">
            Pasted Message Body
          </label>
          <span className="text-xs text-slate-400">{msg.length} / {maxLen.toLocaleString()} characters</span>
        </div>
        <textarea
          id="msg-input-field"
          value={msg}
          onChange={(e) => setMsg(e.target.value.slice(0, maxLen))}
          placeholder="Paste SMS text, WhatsApp message, email body, or urgent alert here (e.g., 'URGENT: Your parcel is on hold due to missing road tax...')"
          rows={4}
          className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 p-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 focus:bg-white transition-all shadow-sm resize-none border border-slate-200"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0051D5] text-white hover:bg-[#0051D5]/90 transition-all text-sm font-semibold shadow-sm">
            <Search size={16} />
            <span>Analyze Message</span>
          </button>
          <button
            onClick={handlePaste}
            className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-slate-100 text-[#101B35] hover:bg-slate-200 transition-all text-sm font-semibold"
          >
            <Clipboard size={16} />
            <span>Paste from Clipboard</span>
          </button>
        </div>
        <span className="text-xs text-slate-400 max-w-xs">
          Client-side redaction strips sensitive names and phone numbers prior to evaluation.
        </span>
      </div>
    </div>
  );
}

