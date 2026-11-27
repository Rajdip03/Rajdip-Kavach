'use client';

import { useState } from 'react';
import {
  Smartphone,
  Laptop,
  Monitor,
  ShieldCheck,
  Check,
} from 'lucide-react';

const INITIAL_SESSIONS = [
  {
    id: 'mac-chrome',
    device: 'MacBook Pro (Chrome 124)',
    meta: 'Mumbai, India • Active now • IP: 103.21.***.***',
    current: true,
    icon: Laptop,
  },
  {
    id: 'iphone-ios',
    device: 'iPhone 15 Pro (Kawach iOS App)',
    meta: 'Mumbai, India • Last active 42m ago',
    current: false,
    icon: Smartphone,
  },
  {
    id: 'win-firefox',
    device: 'Windows PC (Firefox 125)',
    meta: 'Delhi, India • Last active 3 days ago',
    current: false,
    icon: Monitor,
  },
];

/**
 * Account Security card with 2FA status and active telemetry session management.
 *
 * @param {{ onSaveSuccess: (msg: string) => void }} props
 */
export default function AccountSecurityCard({ onSaveSuccess }) {
  const [sessions, setSessions] = useState(INITIAL_SESSIONS);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [showBackupCodes, setShowBackupCodes] = useState(false);

  const handleRevoke = (id, deviceName) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
    onSaveSuccess(`Session revoked for ${deviceName}.`);
  };

  const handleLogoutOthers = () => {
    setSessions((prev) => prev.filter((s) => s.current));
    onSaveSuccess('All secondary device sessions have been signed out.');
  };

  return (
    <section
      id="security"
      className="scroll-mt-24 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5"
    >
      {/* Header Row */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-[#101B35]">Account Security</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Defensive safeguards, multi-factor challenges, and connected perimeter devices.
          </p>
        </div>
        <span className="bg-blue-50 text-[#0051D5] border border-blue-100 text-[11px] font-semibold px-3 py-1 rounded-full">
          Max Protection
        </span>
      </div>

      {/* Two-Step Verification (2FA) Box */}
      <div className="bg-[#F4F7FC] border border-slate-200/70 rounded-xl p-4 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#DCE6FF] text-[#0051D5] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-[#101B35]">
                  Two-Step Verification (2FA)
                </span>
                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    twoFactorEnabled
                      ? 'bg-[#0051D5] text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {twoFactorEnabled ? 'Active' : 'Paused'}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                Add an extra layer of defense using an authenticator app like Google Authenticator, 1Password, or YubiKey hardware tokens during sign-in.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => {
                setTwoFactorEnabled((prev) => !prev);
                onSaveSuccess(
                  `Two-Step Verification ${
                    !twoFactorEnabled ? 'enabled' : 'updated'
                  }.`
                );
              }}
              className="bg-white hover:bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold text-[#101B35] shadow-2xs transition-colors"
            >
              Configure Authenticator
            </button>

            <button
              type="button"
              onClick={() => setShowBackupCodes((b) => !b)}
              className="bg-white hover:bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold text-[#101B35] shadow-2xs transition-colors"
            >
              Backup Codes
            </button>
          </div>
        </div>

        {showBackupCodes && (
          <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-slate-500">
              One-time recovery codes (keep offline):
            </span>
            <div className="flex flex-wrap gap-2 font-mono text-[11px] text-[#101B35] font-semibold">
              <span className="bg-slate-100 px-2 py-0.5 rounded">8492-KW19</span>
              <span className="bg-slate-100 px-2 py-0.5 rounded">3028-KW44</span>
              <span className="bg-slate-100 px-2 py-0.5 rounded">7741-KW02</span>
            </div>
          </div>
        )}
      </div>

      {/* Active Telemetry Sessions */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-xs font-bold text-[#101B35]">
              Active Telemetry Sessions
            </h3>
            <p className="text-[11px] text-slate-400">
              Devices currently authenticated to your Kawach personal defense mesh.
            </p>
          </div>

          {sessions.some((s) => !s.current) && (
            <button
              type="button"
              onClick={handleLogoutOthers}
              className="text-xs font-semibold text-[#DC2626] hover:text-red-700 hover:underline transition-colors"
            >
              Log out of all other sessions
            </button>
          )}
        </div>

        <div className="flex flex-col gap-2.5">
          {sessions.map((session) => {
            const Icon = session.icon;
            return (
              <div
                key={session.id}
                className="bg-[#F4F6F9] border border-slate-200/60 rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 text-slate-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Icon size={17} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-[#101B35]">
                        {session.device}
                      </span>
                      {session.current && (
                        <span className="bg-blue-50 text-[#0051D5] border border-blue-200 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                          Current Session
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5">
                      {session.meta}
                    </span>
                  </div>
                </div>

                {session.current ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0051D5] flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0051D5]" />
                    Live Shielded
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleRevoke(session.id, session.device)}
                    className="bg-white hover:bg-red-50 border border-slate-200 hover:border-red-200 text-slate-700 hover:text-[#DC2626] px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors self-start sm:self-center flex-shrink-0"
                  >
                    Revoke
                  </button>
                )}
              </div>
            );
          })}

          {sessions.length === 1 && (
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
              <Check size={13} />
              <span>Only your current device session is active.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
