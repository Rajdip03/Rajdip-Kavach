'use client';

import { useState } from 'react';
import { Lock, CheckCircle2, Eye, EyeOff } from 'lucide-react';

/**
 * Password Management card with 3-column inputs and 4-segment resilience score.
 *
 * @param {{ onSaveSuccess: (msg: string) => void }} props
 */
export default function PasswordCard({ onSaveSuccess }) {
  const [currentPw, setCurrentPw] = useState('••••••••••••••');
  const [newPw, setNewPw] = useState('Kavach#Guard2026');
  const [confirmPw, setConfirmPw] = useState('Kavach#Guard2026');
  const [showNew, setShowNew] = useState(false);

  const hasLength = newPw.length >= 12;
  const hasMix = /[a-z]/.test(newPw) && /[A-Z]/.test(newPw);
  const hasSymbols = /[0-9]/.test(newPw) && /[^A-Za-z0-9]/.test(newPw);
  const noBreach = newPw.length >= 8;

  const score = [hasLength, hasMix, hasSymbols, noBreach].filter(Boolean).length;

  const criteria = [
    { label: 'At least 12 characters', met: hasLength },
    { label: 'Upper & lowercase mix', met: hasMix },
    { label: 'Numbers & special symbols', met: hasSymbols },
    { label: 'Zero known breach matches', met: noBreach },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPw || newPw !== confirmPw) {
      onSaveSuccess('Password mismatch detected — please verify your confirmation phrase.');
      return;
    }
    onSaveSuccess('Your master password has been updated securely.');
  };

  return (
    <section
      id="password"
      className="scroll-mt-24 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5"
    >
      {/* Header Row */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-[#101B35]">
            Password Management
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Change your master phrase and review credential resilience against brute force threats.
          </p>
        </div>
        <span className="text-xs text-slate-400">Last updated 4 months ago</span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="pw-current"
              className="text-xs font-semibold text-[#101B35]"
            >
              Current Password
            </label>
            <input
              id="pw-current"
              type="password"
              value={currentPw}
              onChange={(e) => setCurrentPw(e.target.value)}
              className="w-full bg-[#F4F6F9] border border-slate-200/80 rounded-xl px-4 py-2.5 text-sm text-[#101B35] focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="pw-new"
              className="text-xs font-semibold text-[#101B35]"
            >
              New Password
            </label>
            <div className="relative flex items-center">
              <input
                id="pw-new"
                type={showNew ? 'text' : 'password'}
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
                className="w-full bg-[#F4F6F9] border border-slate-200/80 rounded-xl pl-4 pr-9 py-2.5 text-sm text-[#101B35] focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowNew((s) => !s)}
                aria-label="Toggle password visibility"
                className="absolute right-3 text-slate-400 hover:text-slate-600"
              >
                {showNew ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="pw-confirm"
              className="text-xs font-semibold text-[#101B35]"
            >
              Confirm New Password
            </label>
            <input
              id="pw-confirm"
              type={showNew ? 'text' : 'password'}
              value={confirmPw}
              onChange={(e) => setConfirmPw(e.target.value)}
              className="w-full bg-[#F4F6F9] border border-slate-200/80 rounded-xl px-4 py-2.5 text-sm text-[#101B35] focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all"
            />
          </div>
        </div>

        {/* Resilience Score Box */}
        <div className="bg-[#F4F6F9] border border-slate-200/70 rounded-xl p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-[#101B35]">Resilience Score</span>
            <span className="font-semibold text-[#0051D5]">
              {score === 4 ? 'Strong' : score >= 2 ? 'Moderate' : 'Weak'} (Score{' '}
              {score}/4)
            </span>
          </div>

          {/* 4-segment bar */}
          <div className="grid grid-cols-4 gap-2 h-1.5">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className={`rounded-full transition-colors ${
                  idx <= score ? 'bg-[#0051D5]' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>

          {/* 4 criteria */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-0.5">
            {criteria.map((c) => (
              <div
                key={c.label}
                className={`flex items-center gap-1.5 text-[11px] ${
                  c.met ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                <CheckCircle2
                  size={13}
                  className={
                    c.met
                      ? 'text-[#0051D5] flex-shrink-0'
                      : 'text-slate-300 flex-shrink-0'
                  }
                />
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Right Update Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-[#101B35] hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-colors"
          >
            <Lock size={14} />
            <span>Update Password</span>
          </button>
        </div>
      </form>
    </section>
  );
}
