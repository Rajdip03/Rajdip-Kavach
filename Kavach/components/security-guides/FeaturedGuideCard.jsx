'use client';

import { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Bookmark,
  Check,
  Search,
  Link2,
} from 'lucide-react';
import { FEATURED_GUIDE } from './guidesData';

/**
 * Featured Field Guide hero card matching the Security Guides UI mockup.
 *
 * @param {{ onReadFeatured: (guideId: string) => void }} props
 */
export default function FeaturedGuideCard({ onReadFeatured }) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <section className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Text & Actions */}
        <div className="lg:col-span-8 flex flex-col gap-3.5">
          {/* Top Badge + Timestamp */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0051D5] border border-blue-100 text-[11px] font-semibold">
              <Sparkles size={12} />
              {FEATURED_GUIDE.badge}
            </span>
            <span className="text-xs text-slate-400">
              {FEATURED_GUIDE.updatedAt} • {FEATURED_GUIDE.readTime}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-xl sm:text-2xl font-bold text-[#101B35] tracking-tight leading-snug">
            {FEATURED_GUIDE.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
            {FEATURED_GUIDE.description}
          </p>

          {/* Bottom Trust Meta + Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={15} className="text-emerald-600 flex-shrink-0" />
              <span>{FEATURED_GUIDE.trustNote}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => onReadFeatured(FEATURED_GUIDE.targetArticleId)}
                className="inline-flex items-center gap-1.5 bg-[#0051D5] hover:bg-[#003EA8] text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all"
              >
                <span>Read Complete Guide</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={() => setBookmarked((b) => !b)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${
                  bookmarked
                    ? 'bg-blue-50 border-blue-200 text-[#0051D5]'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-[#101B35]'
                }`}
              >
                {bookmarked ? <Check size={14} /> : <Bookmark size={14} />}
                <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Minimalist Illustration Box */}
        <div className="lg:col-span-4">
          <div className="bg-[#F4F6F9] border border-slate-200/70 rounded-2xl h-44 sm:h-48 flex items-center justify-center relative overflow-hidden">
            {/* Subtle background grid dots */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:14px_14px]" />

            {/* Centered Stylized URL Inspection Graphic */}
            <div className="relative z-10 flex flex-col items-center gap-2.5">
              <div className="w-20 h-20 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#0051D5] flex items-center justify-center">
                  <Search size={24} strokeWidth={2.2} />
                </div>
                <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-[#0051D5] text-white flex items-center justify-center shadow-sm">
                  <Link2 size={14} />
                </span>
              </div>
              <span className="text-[11px] font-mono font-semibold text-slate-500 bg-white/90 px-2.5 py-0.5 rounded-full border border-slate-200/80 shadow-2xs">
                3-Second URL Check
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
