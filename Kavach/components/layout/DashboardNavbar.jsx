'use client';

import { useState } from 'react';
import { Bell, Search, Menu } from 'lucide-react';

export default function DashboardNavbar({ onMenuClick }) {
  const [query, setQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 lg:left-72 right-0 h-20 bg-[#F7F9FB]/85 backdrop-blur-xl z-40 border-b border-slate-200 flex items-center px-6 gap-4">
      {/* Mobile hamburger */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search threats, scans, reports..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0051D5]/30 focus:border-[#0051D5]"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-3">
        {/* Bell */}
        <button className="relative p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#101B35] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">R</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#101B35] leading-tight">Rajdip</p>
            <p className="text-xs text-slate-500 leading-tight">Personal Guard</p>
          </div>
        </div>
      </div>
    </header>
  );
}
