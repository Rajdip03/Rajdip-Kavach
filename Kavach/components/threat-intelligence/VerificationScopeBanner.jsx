'use client';

import { ShieldCheck, Users, Layers, Lock } from 'lucide-react';

const SCOPE_TABS = [
  {
    id: 'all',
    label: 'All Intel',
    count: null,
    icon: Layers,
  },
  {
    id: 'verified',
    label: 'Independently Verified',
    count: '842',
    icon: ShieldCheck,
  },
  {
    id: 'community',
    label: 'Community-Submitted',
    count: '1,290',
    icon: Users,
  },
];

/**
 * Dual View Verification Scope Switcher and Protocol Explanation Banner.
 *
 * @param {{
 *   activeScope: 'all' | 'verified' | 'community',
 *   onScopeChange: (scope: 'all' | 'verified' | 'community') => void
 * }} props
 */
export default function VerificationScopeBanner({ activeScope, onScopeChange }) {
  return (
    <div className="flex flex-col gap-3.5">
      {/* Scope Switcher Bar */}
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold px-3 hidden md:inline-block">
            Intel Scope:
          </span>
          {SCOPE_TABS.map(({ id, label, count, icon: Icon }) => {
            const isActive = activeScope === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onScopeChange(id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'bg-transparent text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon
                  size={14}
                  className={
                    isActive
                      ? 'text-white'
                      : id === 'verified'
                      ? 'text-[#2563EB]'
                      : 'text-slate-400'
                  }
                />
                <span>
                  {label}
                  {count ? ` (${count})` : ''}
                </span>
              </button>
            );
          })}
        </div>

        <span className="text-[11px] text-slate-400 px-3 self-end sm:self-center">
          Filters active threat cards &amp; IOC table below
        </span>
      </div>

      {/* Verification Protocol Info Banner */}
      <div className="bg-[#EFF6FF]/75 border border-[#DBEAFE] rounded-2xl p-4 flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-xl bg-white border border-[#DBEAFE] text-[#2563EB] flex items-center justify-center flex-shrink-0 shadow-2xs">
          <Lock size={16} />
        </div>
        <div className="text-xs text-slate-600 leading-relaxed">
          <span className="font-semibold text-[#101B35]">
            Verification Protocol:{' '}
          </span>
          <span className="font-medium text-[#0051D5]">
            Independently Verified Threats
          </span>{' '}
          have completed headless sandbox emulation, DNS forensics, and telemetry validation.{' '}
          <span className="font-medium text-slate-700">
            Community-Submitted Reports
          </span>{' '}
          are unvetted user observations displayed for zero-day situational awareness.
        </div>
      </div>
    </div>
  );
}
