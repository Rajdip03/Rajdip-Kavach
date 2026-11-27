'use client';

import {
  User,
  Shield,
  KeyRound,
  Bell,
  Lock,
  AlertTriangle,
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'profile', label: 'Profile', icon: User, danger: false },
  { id: 'security', label: 'Account Security', icon: Shield, danger: false },
  { id: 'password', label: 'Password', icon: KeyRound, danger: false },
  { id: 'notifications', label: 'Notifications', icon: Bell, danger: false },
  { id: 'privacy', label: 'Privacy', icon: Lock, danger: false },
  { id: 'danger-zone', label: 'Danger Zone', icon: AlertTriangle, danger: true },
];

/**
 * Sticky left settings sub-navigation matching the screenshot.
 *
 * @param {{
 *   activeSection: string,
 *   onSelectSection: (sectionId: string) => void
 * }} props
 */
export default function SettingsSubNav({ activeSection, onSelectSection }) {
  return (
    <nav
      aria-label="Settings sections"
      className="bg-white lg:bg-transparent rounded-2xl p-2 lg:p-0 border lg:border-0 border-slate-100 shadow-xs lg:shadow-none lg:sticky lg:top-24 flex lg:flex-col gap-1 overflow-x-auto"
    >
      {NAV_ITEMS.map(({ id, label, icon: Icon, danger }) => {
        const isActive = activeSection === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelectSection(id)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap text-left ${
              isActive
                ? danger
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-[#101B35] text-white shadow-xs'
                : danger
                ? 'text-[#DC2626] hover:bg-red-50'
                : 'text-slate-600 hover:bg-white hover:text-[#101B35]'
            }`}
          >
            <Icon
              size={15}
              className={
                isActive
                  ? 'text-white'
                  : danger
                  ? 'text-[#DC2626]'
                  : 'text-slate-400'
              }
            />
            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
