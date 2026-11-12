import React from 'react';
import { Shield, Link as LinkIcon, AlertTriangle, ChevronRight, Globe, MessageSquare, Clock, Fingerprint } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full pt-20 pb-4 overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-slate-100 text-slate-500">
              <Shield className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-widest">Public Defense Network</span>
            </div>

            {/* Headline */}
            <h1 className="text-[32px] sm:text-5xl font-bold text-[#101B35] tracking-tight leading-[1.2]">
              Stay One Step Ahead of Online Scams.
            </h1>

            {/* Sub */}
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Analyze suspicious links, messages, and websites before they put your digital safety at risk. Plainspoken evaluations designed for everyday reassurance.
            </p>

            {/* URL Input */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row items-stretch p-1.5 rounded-xl bg-white shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center flex-1 px-3 py-2 gap-2 min-w-0">
                  <LinkIcon className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    className="w-full bg-transparent text-slate-800 text-base placeholder:text-slate-400 focus:outline-none"
                    placeholder="Paste a suspicious link, domain, or message text here..."
                    type="text"
                    defaultValue="https://secure-bank-login-verify.top/auth"
                  />
                </div>
                <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all active:scale-[0.98] shrink-0">
                  <span>Analyze</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Scan Mode Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-slate-400">Quick scan modes:</span>
                <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-xs font-semibold text-slate-700 cursor-pointer">
                  <input type="radio" name="scanMode" value="message" className="sr-only" defaultChecked />
                  <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                  <span>Message Scanner</span>
                </label>
                <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-xs font-semibold text-slate-700 cursor-pointer">
                  <input type="radio" name="scanMode" value="website" className="sr-only" />
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>Website Checker</span>
                </label>
              </div>

              {/* Privacy Note */}
              <div className="flex items-center gap-2 text-slate-400">
                <Shield className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs">No account needed. Zero tracking. We do not store or sell your queries.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Result Card */}
          <div className="lg:col-span-5 relative">
            {/* Ambient aura */}
            <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Card */}
            <div className="relative z-10 p-5 rounded-xl bg-white shadow-xl border border-slate-200 flex flex-col gap-3">

              {/* Header bar */}
              <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                  <span className="text-xs font-semibold text-slate-700 truncate">secure-bank-login-verify.top/auth</span>
                </div>
                <span className="text-xs text-slate-400 shrink-0">Just now</span>
              </div>

              {/* Score Banner */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-lg bg-slate-50">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Assessed Threat Level</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-bold text-red-600">87</span>
                    <span className="text-sm font-semibold text-slate-400">/ 100</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                  <span className="text-xs font-semibold text-red-700">High Risk</span>
                </div>
              </div>

              {/* Risk Meter */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Safe</span>
                  <span>Caution</span>
                  <span className="font-semibold text-red-600">High Risk</span>
                  <span>Critical</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 h-2">
                  <div className="rounded-full bg-slate-200" />
                  <div className="rounded-full bg-slate-200" />
                  <div className="rounded-full bg-red-500" />
                  <div className="rounded-full bg-slate-200" />
                </div>
              </div>

              {/* Indicators */}
              <div className="flex flex-col gap-2">
                {/* Domain Age */}
                <div className="flex items-start gap-2 p-2 rounded-lg bg-white">
                  <Clock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">Domain Age</span>
                      <span className="text-xs text-red-600 font-medium">Flagged</span>
                    </div>
                    <span className="text-xs text-slate-500">Registered 3 days ago via anonymous registrar</span>
                  </div>
                </div>
                {/* Brand Mimicry */}
                <div className="flex items-start gap-2 p-2 rounded-lg bg-white">
                  <Fingerprint className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">Brand Mimicry</span>
                      <span className="text-xs text-red-600 font-medium">High Threat</span>
                    </div>
                    <span className="text-xs text-slate-500">High confidence spoofing of authentic tier-1 banking portal</span>
                  </div>
                </div>
                {/* Threat Blacklist */}
                <div className="flex items-start gap-2 p-2 rounded-lg bg-white">
                  <Shield className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">Threat Blacklist</span>
                      <span className="text-xs text-red-600 font-medium">Confirmed</span>
                    </div>
                    <span className="text-xs text-slate-500">Active match on 4 global community phishing databases</span>
                  </div>
                </div>
              </div>

              {/* Guidance Box */}
              <div className="p-4 rounded-lg bg-[#101B35] flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Plainspoken Guidance</span>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Do not provide credentials or download attachments. Close the page immediately and notify your bank directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}