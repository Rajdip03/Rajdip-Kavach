'use client';

import { MessageSquare, Globe, Briefcase, ArrowRight } from 'lucide-react';

export const INSPECTION_MODES = [
  {
    tabId: 'message',
    icon: MessageSquare,
    title: 'Message Scanner',
    description:
      'Deconstruct urgent texts, package delivery scams, and spoofed fraud department SMS notifications.',
    sample: '"Your bank card has been suspended. Tap immediately to verify..."',
    cta: 'Open Message Tool',
  },
  {
    tabId: 'website',
    icon: Globe,
    title: 'Website Checker',
    description:
      'Verify retail discount stores, wholesale copycats, and suspicious checkout payment gateways.',
    sample: '"90% OFF luxury winter coats - limited stock checkout..."',
    cta: 'Open Website Tool',
  },
  {
    tabId: 'job',
    icon: Briefcase,
    title: 'Job Offer Checker',
    description:
      'Identify bogus interviewers requesting check deposits, upfront equipment fees, or encrypted chat interviews.',
    sample: '"Immediate remote offer: $65/hr with zero experience..."',
    cta: 'Open Recruiter Tool',
  },
];

export default function AdditionalModes({ setActiveTab }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#101B35]">Additional Inspection Modes</h3>
          <p className="text-sm text-slate-500">Access specialized engines for targeted threat categories.</p>
        </div>
        <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">3 Modules Available</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {INSPECTION_MODES.map(({ tabId, icon: Icon, title, description, sample, cta }) => (
          <div
            key={tabId}
            className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
                <Icon size={20} />
              </div>
              <h4 className="text-base font-semibold text-[#101B35]">{title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
              <div className="bg-slate-50 rounded-lg p-2.5">
                <span className="font-mono text-xs text-slate-400 block truncate">{sample}</span>
              </div>
            </div>
            <button
              onClick={() => {
                if (setActiveTab) {
                  setActiveTab(tabId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#101B35] text-sm font-semibold transition-all mt-5"
            >
              <span>{cta}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

