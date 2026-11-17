'use client';

import {
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  Sliders,
} from 'lucide-react';

const TAXONOMY_TIERS = [
  {
    id: 'low',
    score: '12 / 100',
    title: 'Variant 4: Low Risk (Safe)',
    badgeBg: 'bg-blue-50 text-[#0051D5] border border-blue-100',
    icon: ShieldCheck,
    iconColor: 'text-[#0051D5]',
    description:
      'Enterprise EV SSL, 16+ year domain age, spotless telemetry across all threat trackers. Safe to authenticate.',
  },
  {
    id: 'medium',
    score: '58 / 100',
    title: 'Variant 3: Medium (Caution)',
    badgeBg: 'bg-slate-100 text-slate-700',
    icon: AlertTriangle,
    iconColor: 'text-slate-500',
    description:
      'Unverified storefronts, stolen product imagery, newly registered domains. Recommend withholding debit cards.',
  },
  {
    id: 'high',
    score: '87 / 100',
    title: 'Variant 1: High Risk',
    badgeBg: 'bg-red-50 text-red-600 border border-red-100',
    icon: AlertTriangle,
    iconColor: 'text-red-500',
    description:
      'Deceptive bank login replica, false urgency timers, invalid corporate credentials. High credential loss probability.',
  },
  {
    id: 'critical',
    score: '96 / 100',
    title: 'Variant 2: Critical Threat',
    badgeBg: 'bg-red-600 text-white',
    icon: AlertOctagon,
    iconColor: 'text-red-600',
    description:
      'Active malware dropper payloads, verified C2 communication, universal global blacklist triggers. Urgent quarantine.',
  },
];

/**
 * Comparative Threat Taxonomy section.
 * Renders the 4-tier standardized calibration cards with interactive preview triggers.
 *
 * @param {{
 *   activeVariant: string,
 *   onSelectVariant: (variantId: string) => void
 * }} props
 */
export default function ComparativeTaxonomy({ activeVariant, onSelectVariant }) {
  return (
    <div className="mt-8 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sliders size={18} className="text-slate-400" />
          <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
            Comparative Threat Taxonomy
          </span>
        </div>
        <span className="text-xs text-slate-400">
          Standardized 4-tier calibration metrics
        </span>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {TAXONOMY_TIERS.map((tier) => {
          const Icon = tier.icon;
          const isActive = activeVariant === tier.id;

          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => onSelectVariant(tier.id)}
              className={`text-left p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-3 transition-all border ${
                isActive
                  ? 'bg-white border-[#0051D5] ring-2 ring-[#0051D5]/20'
                  : 'bg-white hover:bg-slate-50 border-slate-100'
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${tier.badgeBg}`}
                  >
                    Score {tier.score}
                  </span>
                  <Icon size={20} className={tier.iconColor} />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {tier.title}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <span
                className={`text-xs font-medium flex items-center gap-1 ${
                  isActive ? 'text-[#0051D5] font-semibold' : 'text-[#0051D5]'
                }`}
              >
                {isActive ? 'Active View ✓' : 'Click to preview view →'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
