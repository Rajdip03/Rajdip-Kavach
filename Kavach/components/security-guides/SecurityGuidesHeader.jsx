'use client';

import Link from 'next/link';
import { ChevronRight, BookOpen, Search } from 'lucide-react';
import { GUIDE_CATEGORIES } from './guidesData';

/**
 * Header, search bar, and category filter pills for the Security Guides screen.
 *
 * @param {{
 *   searchQuery: string,
 *   onSearchChange: (q: string) => void,
 *   activeCategory: string,
 *   onCategoryChange: (catId: string) => void
 * }} props
 */
export default function SecurityGuidesHeader({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-col gap-5">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs">
        <Link
          href="/dashboard/overview"
          className="text-slate-400 hover:text-[#0051D5] transition-colors font-medium"
        >
          Dashboard
        </Link>
        <ChevronRight size={13} className="text-slate-300" />
        <span className="text-[#101B35] font-semibold">Security Guides</span>
      </nav>

      {/* Title & Playbooks Count Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#101B35] tracking-tight">
            Security Guides &amp; Plainspoken Playbooks
          </h1>
          <p className="mt-1.5 text-slate-500 text-sm max-w-2xl leading-relaxed">
            Clear, practical, non-technical guides to help you recognize digital deception, protect your family, and navigate the internet with calm confidence.
          </p>
        </div>

        <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/80 px-4 py-2.5 rounded-xl shadow-2xs self-start lg:self-center flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0051D5] flex items-center justify-center flex-shrink-0">
            <BookOpen size={15} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#101B35] leading-tight">
              18 Verified Playbooks
            </span>
          </div>
        </div>
      </div>

      {/* Full-Width Search Bar */}
      <div className="relative flex items-center">
        <Search
          size={17}
          className="absolute left-4 text-slate-400 pointer-events-none"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search guides, scam patterns, or red flags..."
          className="w-full bg-white border border-slate-200/90 rounded-xl pl-11 pr-4 py-3 text-sm text-[#101B35] placeholder:text-slate-400 shadow-2xs focus:outline-none focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all"
        />
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {GUIDE_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-[#0051D5] text-white shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50 hover:text-[#101B35]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
