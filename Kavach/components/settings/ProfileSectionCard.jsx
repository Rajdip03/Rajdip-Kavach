'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Upload, CheckCircle2, Check } from 'lucide-react';

/**
 * Personal Profile card.
 *
 * @param {{ onSaveSuccess: (msg: string) => void }} props
 */
export default function ProfileSectionCard({ onSaveSuccess }) {
  const fileInputRef = useRef(null);

  const [fullName, setFullName] = useState('Rajdip Mondal');
  const [email, setEmail] = useState('rajdip@example.com');
  const [roleTitle, setRoleTitle] = useState(
    'Personal Guard / Community Contributor'
  );
  const [avatarUrl, setAvatarUrl] = useState(null);

  const initials = fullName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('') || 'RM';

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarUrl(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveSuccess(
      'Your personal profile and community contributor details have been updated.'
    );
  };

  return (
    <section
      id="profile"
      className="scroll-mt-24 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5"
    >
      {/* Header Row */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-[#101B35]">Personal Profile</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Update your public identity and community contributor persona.
          </p>
        </div>
        <span className="bg-slate-100 border border-slate-200/70 text-slate-500 text-[11px] font-mono font-semibold px-3 py-1 rounded-full">
          Public ID: KAV-8921
        </span>
      </div>

      {/* Avatar Upload Box */}
      <div className="bg-[#F4F6F9] border border-slate-200/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-[#101B35] text-white flex items-center justify-center text-xl font-bold tracking-wide flex-shrink-0 overflow-hidden shadow-xs">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={fullName}
              width={64}
              height={64}
              unoptimized
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <p className="text-xs font-bold text-[#101B35]">Profile Avatar</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Supports high-resolution PNG, JPG or WebP up to 5MB. Sanitized in safety logs and reports.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handlePhotoChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#101B35] shadow-2xs transition-colors"
            >
              <Upload size={13} className="text-slate-500" />
              <span>Upload new photo</span>
            </button>

            <button
              type="button"
              onClick={() => setAvatarUrl(null)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Form Inputs */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="settings-fullname"
              className="text-xs font-semibold text-[#101B35]"
            >
              Full Name
            </label>
            <input
              id="settings-fullname"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-[#F4F6F9] border border-slate-200/80 rounded-xl px-4 py-2.5 text-sm text-[#101B35] focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="settings-email"
                className="text-xs font-semibold text-[#101B35]"
              >
                Email Address
              </label>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0051D5]">
                <CheckCircle2 size={12} />
                Verified
              </span>
            </div>
            <input
              id="settings-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F4F6F9] border border-slate-200/80 rounded-xl px-4 py-2.5 text-sm text-[#101B35] focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="settings-role"
            className="text-xs font-semibold text-[#101B35]"
          >
            Display Role &amp; Credentials
          </label>
          <input
            id="settings-role"
            type="text"
            value={roleTitle}
            onChange={(e) => setRoleTitle(e.target.value)}
            className="w-full bg-[#F4F6F9] border border-slate-200/80 rounded-xl px-4 py-2.5 text-sm text-[#101B35] focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all"
          />
          <span className="text-[11px] text-slate-400">
            Shown next to verified threat submissions in the collective intelligence registry.
          </span>
        </div>

        {/* Save Button */}
        <div className="pt-1 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 bg-[#0051D5] hover:bg-[#003EA8] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all"
          >
            <Check size={14} />
            <span>Save Profile Changes</span>
          </button>
        </div>
      </form>
    </section>
  );
}
