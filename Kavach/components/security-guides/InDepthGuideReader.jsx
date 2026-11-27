'use client';

import { useState } from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  MessageSquare,
  AlertCircle,
  ThumbsUp,
  Download,
  Share2,
  Check,
} from 'lucide-react';

/**
 * Interactive In-Depth Guide Reader section.
 *
 * @param {{
 *   guide: object,
 *   readerRef?: React.RefObject<HTMLElement | null>
 * }} props
 */
export default function InDepthGuideReader({ guide, readerRef }) {
  const { article } = guide;

  const [checkedMap, setCheckedMap] = useState(() => {
    const initial = {};
    article.checklist.forEach((item) => {
      initial[item.id] = Boolean(item.defaultChecked);
    });
    return initial;
  });

  const [helpfulVote, setHelpfulVote] = useState(null);
  const [downloaded, setDownloaded] = useState(false);
  const [shared, setShared] = useState(false);

  const toggleCheck = (id) => {
    setCheckedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // Clipboard unavailable; show feedback regardless
    }
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <section
      ref={readerRef}
      className="flex flex-col gap-4 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0051D5]">
            Interactive Reader
          </span>
          <h2 className="text-xl font-bold text-[#101B35] tracking-tight">
            Example In-Depth Guide Layout
          </h2>
        </div>
        <span className="text-xs text-slate-400">
          Demonstrating one full-article experience
        </span>
      </div>

      {/* Main White Article Container */}
      <article className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col gap-6">
        {/* Top Metadata */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0051D5] border border-blue-100 text-xs font-semibold">
            {article.badge}
          </span>
          <span className="text-xs text-slate-400">
            {article.publishedAt} • {article.readTime} • {article.author}
          </span>
        </div>

        {/* Article Headline */}
        <h3 className="text-2xl sm:text-3xl font-bold text-[#101B35] tracking-tight leading-tight">
          {article.title}
        </h3>

        {/* Calm Assurance Strip */}
        <div className="bg-[#F4F6F9] border border-slate-200/70 rounded-xl px-4 py-3 flex items-center gap-2.5 text-xs text-slate-600">
          <ShieldCheck size={16} className="text-[#0051D5] flex-shrink-0" />
          <span>{article.assurance}</span>
        </div>

        {/* Jump Links Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-100">
          <span className="text-xs font-medium text-slate-400 mr-1">
            Jump to:
          </span>
          {[
            { id: 'guide-setup', label: '1. The Setup' },
            { id: 'guide-red-flags', label: '2. Critical Red Flags' },
            { id: 'guide-message-script', label: '3. Real Message Script' },
            { id: 'guide-checklist', label: '4. Action Checklist' },
          ].map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 text-xs font-semibold text-slate-700 hover:text-[#0051D5] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* 1. The Setup */}
        <div id="guide-setup" className="scroll-mt-24 flex flex-col gap-3">
          <h4 className="text-lg font-bold text-[#101B35]">
            {article.setupHeading}
          </h4>
          {article.setupParagraphs.map((para, i) => (
            <p
              key={i}
              className="text-sm text-slate-600 leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        {/* 2. Critical Red Flags to Watch For */}
        <div
          id="guide-red-flags"
          className="scroll-mt-24 bg-[#FEF2F2] border border-[#FECACA]/80 rounded-2xl p-5 sm:p-6 flex flex-col gap-4"
        >
          <div className="flex items-center gap-2 text-[#991B1B]">
            <AlertTriangle size={18} className="text-[#DC2626]" />
            <h4 className="text-base font-bold">
              Critical Red Flags to Watch For
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {article.redFlags.map((flag) => (
              <div
                key={flag.id}
                className="bg-white border border-red-100 rounded-xl p-4 flex items-start gap-3 shadow-2xs"
              >
                <span className="w-6 h-6 rounded-full bg-red-50 text-[#DC2626] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {flag.id}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-[#101B35]">
                    {flag.title}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {flag.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Real-World Message Example */}
        <div
          id="guide-message-script"
          className="scroll-mt-24 flex flex-col gap-3"
        >
          <div>
            <h4 className="text-base font-bold text-[#101B35]">
              Real-World Message Example
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              This message was submitted by a Kawach community member and flagged by our analysis engine:
            </p>
          </div>

          <div className="bg-[#F4F6F9] border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col gap-3">
            <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs flex flex-col gap-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <MessageSquare size={12} />
                  {article.messageSource}
                </span>
                <span>{article.messageTime}</span>
              </div>
              <p className="text-sm text-[#101B35] font-medium leading-relaxed">
                &ldquo;{article.messageCopy}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium text-[#DC2626]">
              <AlertCircle size={14} className="flex-shrink-0" />
              <span>{article.deceptionSignals}</span>
            </div>
          </div>
        </div>

        {/* 4. Step-by-Step "What to Do" Checklist */}
        <div id="guide-checklist" className="scroll-mt-24 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-base font-bold text-[#101B35]">
              Step-by-Step &ldquo;What to Do&rdquo; Checklist
            </h4>
            <span className="text-xs text-slate-400">Interactive checklist</span>
          </div>

          <div className="flex flex-col gap-2.5">
            {article.checklist.map((step, index) => {
              const isChecked = Boolean(checkedMap[step.id]);
              return (
                <label
                  key={step.id}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F6F9] hover:bg-slate-100/90 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheck(step.id)}
                    className="mt-1 w-4 h-4 rounded accent-[#0051D5] cursor-pointer flex-shrink-0"
                  />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <span className="font-semibold text-[#101B35]">
                      {index + 1}. {step.title}{' '}
                    </span>
                    <span className="text-slate-600">{step.detail}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Bottom Feedback & Utility Row */}
        <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-medium">
              Was this guide helpful?
            </span>
            <button
              type="button"
              onClick={() => setHelpfulVote('yes')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                helpfulVote === 'yes'
                  ? 'bg-blue-50 border-blue-200 text-[#0051D5]'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <ThumbsUp size={13} />
              <span>Yes</span>
            </button>
            <button
              type="button"
              onClick={() => setHelpfulVote('clarify')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                helpfulVote === 'clarify'
                  ? 'bg-amber-50 border-amber-200 text-amber-700'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              <span>
                {helpfulVote === 'clarify'
                  ? 'Feedback noted'
                  : 'Needs clarification'}
              </span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#101B35] font-semibold transition-colors"
            >
              {downloaded ? (
                <>
                  <Check size={13} className="text-emerald-600" />
                  <span className="text-emerald-700">Playbook Ready</span>
                </>
              ) : (
                <>
                  <Download size={13} />
                  <span>Download PDF Playbook</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#101B35] font-semibold transition-colors"
            >
              {shared ? (
                <>
                  <Check size={13} className="text-emerald-600" />
                  <span className="text-emerald-700">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 size={13} />
                  <span>Share with a Family Member</span>
                </>
              )}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
