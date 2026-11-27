'use client';

import {
  Link2,
  Briefcase,
  ShoppingBag,
  CreditCard,
  Shield,
  AlertCircle,
  ArrowRight,
  SearchX,
} from 'lucide-react';

function PlaybookIcon({ name }) {
  switch (name) {
    case 'link':
      return <Link2 size={17} />;
    case 'briefcase':
      return <Briefcase size={17} />;
    case 'shopping':
      return <ShoppingBag size={17} />;
    case 'card':
      return <CreditCard size={17} />;
    case 'shield':
      return <Shield size={17} />;
    case 'alert':
    default:
      return <AlertCircle size={17} />;
  }
}

/**
 * 6-card Core Security Playbooks grid.
 *
 * @param {{
 *   playbooks: Array<object>,
 *   activeGuideId: string,
 *   onSelectGuide: (guideId: string) => void,
 *   onResetFilters: () => void
 * }} props
 */
export default function CorePlaybooksGrid({
  playbooks,
  activeGuideId,
  onSelectGuide,
  onResetFilters,
}) {
  return (
    <section className="flex flex-col gap-4">
      {/* Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-[#101B35]">
          Core Security Playbooks
        </h2>
        <span className="text-xs text-slate-400">
          Click any playbook to inspect breakdown
        </span>
      </div>

      {/* Empty Search Fallback */}
      {playbooks.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center">
            <SearchX size={22} />
          </div>
          <p className="text-sm font-semibold text-[#101B35]">
            No matching playbooks found
          </p>
          <p className="text-xs text-slate-400 max-w-sm">
            Try clearing your search keyword or selecting &ldquo;All Guides&rdquo; above.
          </p>
          <button
            type="button"
            onClick={onResetFilters}
            className="mt-1 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-[#101B35] transition-colors"
          >
            Show All Playbooks
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {playbooks.map((guide) => {
            const isSelected = activeGuideId === guide.id;

            return (
              <article
                key={guide.id}
                onClick={() => onSelectGuide(guide.id)}
                className={`bg-white rounded-2xl p-5 shadow-sm border flex flex-col justify-between gap-4 cursor-pointer transition-all hover:shadow-md ${
                  isSelected
                    ? 'border-[#0051D5] ring-2 ring-[#0051D5]/15'
                    : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <div className="flex flex-col gap-3">
                  {/* Top Category Pill + Read Time */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        guide.isDanger
                          ? 'bg-red-50 text-[#DC2626] border border-red-100'
                          : 'bg-blue-50 text-[#0051D5] border border-blue-100'
                      }`}
                    >
                      {guide.categoryLabel}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {guide.readTime}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      guide.isDanger
                        ? 'bg-red-50 text-[#DC2626]'
                        : 'bg-slate-100 text-[#0051D5]'
                    }`}
                  >
                    <PlaybookIcon name={guide.icon} />
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-base font-semibold text-[#101B35] leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                      {guide.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action Row */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">
                    {guide.footerTag}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#0051D5]">
                    <span>Read guide</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
