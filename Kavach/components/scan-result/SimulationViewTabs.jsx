'use client';

import {
  AlertTriangle,
  AlertOctagon,
  ShieldCheck,
  Info,
} from 'lucide-react';

const TABS = [
  {
    id: 'high',
    label: 'Variant 1: High Risk (87/100)',
    icon: AlertTriangle,
    hasDot: true,
  },
  {
    id: 'critical',
    label: 'Variant 2: Critical Threat (96/100)',
    icon: AlertOctagon,
    hasDot: false,
  },
  {
    id: 'medium',
    label: 'Variant 3: Medium / Caution (58/100)',
    icon: AlertTriangle,
    hasDot: false,
  },
  {
    id: 'low',
    label: 'Variant 4: Low / Safe (12/100)',
    icon: ShieldCheck,
    hasDot: false,
  },
];

/**
 * Simulation View / Variant Selector Bar.
 *
 * @param {{
 *   activeVariant: string,
 *   onSelectVariant: (variantId: string) => void
 * }} props
 */
export default function SimulationViewTabs({ activeVariant, onSelectVariant }) {
  return (
    <div className="bg-white rounded-2xl p-2 shadow-sm mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 border border-slate-100">
      <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
        <span className="text-xs uppercase tracking-wider text-slate-400 px-3 font-semibold hidden lg:inline-block">
          Simulation View:
        </span>

        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeVariant === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectVariant(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-[#0051D5] text-white shadow-sm'
                  : 'bg-transparent text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon size={15} />
              <span>{tab.label}</span>
              {tab.hasDot && (
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-red-300' : 'bg-red-500'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="px-3 py-1 flex items-center gap-1.5 text-slate-400 text-xs self-end md:self-auto">
        <Info size={14} />
        <span>Live comparison mode active</span>
      </div>
    </div>
  );
}
