import React from 'react';
import { Shield, Search, Database, CheckCircle, UserX, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="w-full py-16 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden p-12 md:py-16 md:px-16 rounded-3xl bg-[#101B35] text-white shadow-xl">

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold">
              <Shield className="w-4 h-4" />
              <span>Zero Configuration Required</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Don&apos;t let a suspicious message cost you peace of mind.
            </h2>

            {/* Sub */}
            <p className="text-lg text-blue-200">
              Run a free check right now. No sign-up, no downloads, no hassle.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full justify-center">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[#101B35] text-sm font-semibold hover:bg-slate-100 transition-colors shadow-md"
              >
                <Search className="w-4 h-4 text-blue-600" />
                Start Free Scan
              </Link>
              <Link
                href="/threat-intelligence"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#101B35]/60 border border-white/20 text-white text-sm font-semibold hover:bg-[#101B35] transition-colors"
              >
                <Database className="w-4 h-4" />
                Browse Threat Database
              </Link>
            </div>

            {/* Trust Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 w-full">
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <CheckCircle className="w-4 h-4 text-blue-300" />
                <span className="text-xs">100% Private</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <UserX className="w-4 h-4 text-blue-300" />
                <span className="text-xs">No Account Required</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <RefreshCw className="w-4 h-4 text-blue-300" />
                <span className="text-xs">Real-Time Updates</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
