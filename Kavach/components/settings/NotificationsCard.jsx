'use client';

import { useState } from 'react';

const NOTIFICATION_CHANNELS = [
  {
    key: 'emailAlerts',
    title: 'Email Threat Alerts',
    description:
      'Immediate alerts when a submitted link or domain is verified as high-risk phishing or malware.',
  },
  {
    key: 'inAppTelemetry',
    title: 'In-App Telemetry & Scam Notifications',
    description:
      'Real-time updates on active scam trends, spoofing campaigns, and malware strains targeting your region.',
  },
  {
    key: 'weeklyDigest',
    title: 'Weekly Security Digest & Summary',
    description:
      'Weekly recap of protected scans, community threats defused, and newly published defense playbooks.',
  },
  {
    key: 'marketingTips',
    title: 'Marketing & Product Tips',
    description:
      'Occasional updates regarding new Kawach platform capabilities, feature releases, and research tools.',
  },
];

function ToggleSwitch({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0051D5]/30 ${
        checked ? 'bg-[#0051D5]' : 'bg-slate-200'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs transition duration-200 ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

/**
 * Threat & Dispatch Notifications settings card.
 *
 * @param {{ onSaveSuccess: (msg: string) => void }} props
 */
export default function NotificationsCard({ onSaveSuccess }) {
  const [prefs, setPrefs] = useState({
    emailAlerts: true,
    inAppTelemetry: true,
    weeklyDigest: true,
    marketingTips: false,
  });

  const activeCount = Object.values(prefs).filter(Boolean).length;

  const togglePref = (key) => {
    setPrefs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    onSaveSuccess(
      `Saved notification preferences (${activeCount} active dispatch channels).`
    );
  };

  return (
    <section
      id="notifications"
      className="scroll-mt-24 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5"
    >
      {/* Header Row */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-[#101B35]">
            Threat &amp; Dispatch Notifications
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Tune real-time security alerts without unnecessary alert fatigue.
          </p>
        </div>
        <span className="text-xs text-slate-400 font-medium">
          {activeCount} channels active
        </span>
      </div>

      {/* Toggle Rows */}
      <div className="divide-y divide-slate-100">
        {NOTIFICATION_CHANNELS.map((item) => (
          <div
            key={item.key}
            className="py-4 first:pt-1 last:pb-1 flex items-center justify-between gap-4"
          >
            <div className="flex flex-col gap-0.5 max-w-xl">
              <span className="text-sm font-semibold text-[#101B35]">
                {item.title}
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
            <ToggleSwitch
              checked={prefs[item.key]}
              onChange={() => togglePref(item.key)}
              label={item.title}
            />
          </div>
        ))}
      </div>

      {/* Bottom Right Action */}
      <div className="pt-1 flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center justify-center bg-[#0051D5] hover:bg-[#003EA8] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all"
        >
          Save Notification Preferences
        </button>
      </div>
    </section>
  );
}
