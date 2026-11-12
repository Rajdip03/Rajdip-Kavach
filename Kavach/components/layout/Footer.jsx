import React from 'react';
import Link from 'next/link';
import { Shield, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-[#101B35]">Kavach</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              AI-assisted personal security companion providing plainspoken risk evaluations and actionable recommendations for everyday digital communications.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Navigation</span>
            <Link href="/about" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">About</Link>
            <Link href="/contact" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Contact</Link>
            <Link href="/help-center" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Help Center</Link>
          </div>

          {/* Legal */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Legal &amp; Privacy</span>
            <Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>

        </div>

        {/* Advisory Banner */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-700 font-semibold">Security Advisory:</strong>{' '}
              Assessments are probabilistic guidance, not absolute guarantees. Always exercise prudent personal judgment before sharing financial credentials or personal information.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
          <span className="text-xs text-slate-400">© 2026 Kavach Inc. All rights reserved.</span>
          <span className="text-xs text-slate-400">Zero-Terminal Plainspoken Security</span>
        </div>

      </div>
    </footer>
  );
}
