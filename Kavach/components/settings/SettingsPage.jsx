'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, X } from 'lucide-react';
import SettingsSubNav from './SettingsSubNav';
import ProfileSectionCard from './ProfileSectionCard';
import AccountSecurityCard from './AccountSecurityCard';
import PasswordCard from './PasswordCard';
import NotificationsCard from './NotificationsCard';
import PrivacyDataCard from './PrivacyDataCard';
import DangerZoneCard from './DangerZoneCard';

/**
 * SettingsPage – main client orchestrator matching the Account Settings & Privacy Controls UI.
 */
export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('profile');
  const [toastMessage, setToastMessage] = useState(
    'Your security settings and notification preferences are up to date across all devices.'
  );

  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSaveSuccess = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-6 py-6">
      {/* Top Status Banner */}
      {toastMessage && (
        <div className="bg-white rounded-2xl border border-blue-200/80 shadow-xs px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0051D5] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={17} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#101B35]">
                Changes saved successfully
              </span>
              <span className="text-xs text-slate-500">{toastMessage}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setToastMessage('')}
            aria-label="Dismiss notification"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* Breadcrumb & Page Header */}
      <div className="flex flex-col gap-2">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs">
          <Link
            href="/dashboard/overview"
            className="text-slate-400 hover:text-[#0051D5] transition-colors font-medium"
          >
            Dashboard
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#101B35] font-semibold">Settings</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-[#101B35] tracking-tight">
              Account Settings &amp; Privacy Controls
            </h1>
            <p className="mt-1 text-slate-500 text-sm">
              Manage your personal profile, threat notification preferences, multi-device sessions, and privacy safeguards.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-2xs text-xs font-semibold text-[#101B35] self-start sm:self-center flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#0051D5]" />
            <span>Shield Integrity 100%</span>
          </div>
        </div>
      </div>

      {/* Main 2-Column Settings Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Sticky Sub-Nav (3 cols) */}
        <aside className="lg:col-span-3">
          <SettingsSubNav
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
          />
        </aside>

        {/* Right Stacked Cards (9 cols) */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          <ProfileSectionCard onSaveSuccess={handleSaveSuccess} />
          <AccountSecurityCard onSaveSuccess={handleSaveSuccess} />
          <PasswordCard onSaveSuccess={handleSaveSuccess} />
          <NotificationsCard onSaveSuccess={handleSaveSuccess} />
          <PrivacyDataCard onSaveSuccess={handleSaveSuccess} />
          <DangerZoneCard onSaveSuccess={handleSaveSuccess} />
        </div>
      </div>
    </div>
  );
}
