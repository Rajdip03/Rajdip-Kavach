'use client';

import { Link2, MessageSquare, Globe, Briefcase } from 'lucide-react';

export const TABS = [
  { id: 'url', label: 'URL Scanner', icon: Link2 },
  { id: 'message', label: 'Message Scanner', icon: MessageSquare },
  { id: 'website', label: 'Website Checker', icon: Globe },
  { id: 'job', label: 'Job Offer Checker', icon: Briefcase },
];

export default function ScanTabs({ activeTab, setActiveTab }) {
  return (
    <div
      role="tablist"
      className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-100 scrollbar-hide"
    >
      {TABS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          role="tab"
          aria-selected={activeTab === id}
          onClick={() => setActiveTab(id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap text-sm font-semibold transition-all flex-shrink-0 ${
            activeTab === id
              ? 'bg-[#0051D5] text-white shadow-sm'
              : 'text-slate-500 hover:text-[#101B35] hover:bg-slate-100'
          }`}
        >
          <Icon size={16} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

