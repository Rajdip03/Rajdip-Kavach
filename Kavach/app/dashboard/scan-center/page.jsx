'use client';

import { useState, useRef } from 'react';
import {
  Link2, MessageSquare, Globe, Briefcase, Radar, Shield,
  ScanLine, X, RotateCcw, Lock, Lightbulb, BookOpen,
  History, ChevronRight, CheckCircle, Loader2, AlertCircle,
  WifiOff, RefreshCw, Search, ShieldCheck, Clipboard,
  ArrowRight, Info, Flag
} from 'lucide-react';

//  Tab types 
const TABS = [
  { id: 'url', label: 'URL Scanner', icon: Link2 },
  { id: 'message', label: 'Message Scanner', icon: MessageSquare },
  { id: 'website', label: 'Website Checker', icon: Globe },
  { id: 'job', label: 'Job Offer Checker', icon: Briefcase },
];

// Threat signals 
const THREAT_SIGNALS = [
  {
    icon: History,
    title: 'Domain Longevity',
    description:
      'Newly registered domains (< 30 days) often host disposable credential harvesters and temporary landing pages.',
  },
  {
    icon: Flag,
    title: 'Brand Impersonation',
    description:
      'Typographical typosquatting and visual lookalikes mimicking national banks, couriers, or government tax boards.',
  },
  {
    icon: ShieldCheck,
    title: 'SSL & Security Certs',
    description:
      'Missing encryption layers, mismatched root authorities, or burner certificates coupled with high-risk hosters.',
  },
  {
    icon: ArrowRight,
    title: 'Deceptive Redirects',
    description:
      'Multi-hop link routing designed to evade crawler detection and conceal the final destination payload.',
  },
];

//  Additional inspection modes 
const INSPECTION_MODES = [
  {
    tabId: 'message',
    icon: MessageSquare,
    title: 'Message Scanner',
    description:
      'Deconstruct urgent texts, package delivery scams, and spoofed fraud department SMS notifications.',
    sample: '"Your bank card has been suspended. Tap immediately to verify..."',
    cta: 'Open Message Tool',
  },
  {
    tabId: 'website',
    icon: Globe,
    title: 'Website Checker',
    description:
      'Verify retail discount stores, wholesale copycats, and suspicious checkout payment gateways.',
    sample: '"90% OFF luxury winter coats - limited stock checkout..."',
    cta: 'Open Website Tool',
  },
  {
    tabId: 'job',
    icon: Briefcase,
    title: 'Job Offer Checker',
    description:
      'Identify bogus interviewers requesting check deposits, upfront equipment fees, or encrypted chat interviews.',
    sample: '"Immediate remote offer: $65/hr with zero experience..."',
    cta: 'Open Recruiter Tool',
  },
];

//  URL Scanner Panel 
function UrlPanel({ onSwitchTab }) {
  const [url, setUrl] = useState('');

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-[#101B35] tracking-tight">
          Inspect Link or Redirect Chain
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Detect hidden phishing kits, suspicious top-level domains, and brand impersonation before clicking.
        </p>
      </div>

      {/* URL Input */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#101B35]" htmlFor="url-input-field">
          Target Web Address or Shortlink
        </label>
        <div className="relative flex items-center">
          <Link2 className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
          <input
            id="url-input-field"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/verify-account"
            className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 pl-11 pr-24 py-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 focus:bg-white transition-all shadow-sm border border-slate-200"
          />
          <button
            onClick={() => setUrl('')}
            title="Clear field"
            className="absolute right-3 px-2 py-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1 transition-all"
          >
            <X size={14} />
            <span>Clear</span>
          </button>
        </div>
        <span className="text-xs text-slate-400 pl-1">
          Supported formats: http://, https://, or shortened tracking links (bit.ly, t.co, tinyurl).
        </span>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0051D5] text-white hover:bg-[#0051D5]/90 transition-all text-sm font-semibold shadow-sm">
            <Search size={16} />
            <span>Analyze URL</span>
          </button>
          <button
            onClick={() => setUrl('')}
            className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-slate-100 text-[#101B35] hover:bg-slate-200 transition-all text-sm font-semibold"
          >
            <RotateCcw size={16} />
            <span>Reset</span>
          </button>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-500 text-xs border border-slate-100">
          <Lock size={14} className="text-[#0051D5]" />
          <span>Zero session logging · Sandboxed headless inspection</span>
        </div>
      </div>

      {/* Quick Testing Benchmarks */}
      <div className="flex flex-col gap-2 pt-2 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Quick Testing Benchmarks:
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setUrl('https://fedx-package-track-help.xyz')}
            className="text-left px-3 py-1.5 rounded-lg bg-white text-slate-500 hover:text-[#0051D5] hover:bg-blue-50 text-xs transition-all shadow-sm flex items-center gap-1.5 border border-slate-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
            <span>Try suspicious lookalike:</span>
            <code className="font-mono text-red-600 font-medium">https://fedx-package-track-help.xyz</code>
          </button>
          <button
            onClick={() => setUrl('https://github.com')}
            className="text-left px-3 py-1.5 rounded-lg bg-white text-slate-500 hover:text-[#0051D5] hover:bg-blue-50 text-xs transition-all shadow-sm flex items-center gap-1.5 border border-slate-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0051D5] flex-shrink-0" />
            <span>Try trusted authority:</span>
            <code className="font-mono text-[#101B35] font-medium">https://github.com</code>
          </button>
        </div>
      </div>
    </div>
  );
}

//  Message Scanner Panel 
function MessagePanel() {
  const [msg, setMsg] = useState('');
  const maxLen = 5000;

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setMsg(text.slice(0, maxLen));
    } catch {
      // Clipboard access denied
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-[#101B35] tracking-tight">
          Inspect SMS, Email, or WhatsApp Messages
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Detect coercive language, urgent monetary demands, impersonated family members, and fake delivery notifications.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-[#101B35]" htmlFor="msg-input-field">
            Pasted Message Body
          </label>
          <span className="text-xs text-slate-400">{msg.length} / {maxLen.toLocaleString()} characters</span>
        </div>
        <textarea
          id="msg-input-field"
          value={msg}
          onChange={(e) => setMsg(e.target.value.slice(0, maxLen))}
          placeholder="Paste SMS text, WhatsApp message, email body, or urgent alert here (e.g., 'URGENT: Your parcel is on hold due to missing road tax...')"
          rows={4}
          className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 p-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 focus:bg-white transition-all shadow-sm resize-none border border-slate-200"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0051D5] text-white hover:bg-[#0051D5]/90 transition-all text-sm font-semibold shadow-sm">
            <Search size={16} />
            <span>Analyze Message</span>
          </button>
          <button
            onClick={handlePaste}
            className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-slate-100 text-[#101B35] hover:bg-slate-200 transition-all text-sm font-semibold"
          >
            <Clipboard size={16} />
            <span>Paste from Clipboard</span>
          </button>
        </div>
        <span className="text-xs text-slate-400 max-w-xs">
          Client-side redaction strips sensitive names and phone numbers prior to evaluation.
        </span>
      </div>
    </div>
  );
}

//  Website Checker Panel 
function WebsitePanel() {
  const [url, setUrl] = useState('');
  const [deepCheck, setDeepCheck] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-[#101B35] tracking-tight">
          Storefront & Domain Safety Evaluation
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Determine merchant legitimacy, WHOIS longevity, and payment spoofing traps before entering card numbers.
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#101B35]" htmlFor="web-input-field">
          Storefront Web Address
        </label>
        <div className="relative flex items-center">
          <Globe className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
          <input
            id="web-input-field"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://eshop-clearance-outlet-sale.com"
            className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 pl-11 pr-4 py-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 focus:bg-white transition-all shadow-sm border border-slate-200"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
        <input
          type="checkbox"
          checked={deepCheck}
          onChange={(e) => setDeepCheck(e.target.checked)}
          id="deep-trust-check"
          className="w-4 h-4 text-[#0051D5] rounded focus:ring-[#0051D5] border-slate-300"
        />
        <label htmlFor="deep-trust-check" className="text-sm text-[#101B35] cursor-pointer select-none">
          Perform deep checkout trust analysis (inspect payment iframe endpoints and customer review sentiment)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0051D5] text-white hover:bg-[#0051D5]/90 transition-all text-sm font-semibold shadow-sm">
          <ShieldCheck size={16} />
          <span>Check Website</span>
        </button>
      </div>
    </div>
  );
}

//  Job Offer Checker Panel 
function JobPanel() {
  const [form, setForm] = useState({ position: '', company: '', link: '', details: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-[#101B35] tracking-tight">
          Employment Scam & Recruiter Verification
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Flag fraudulent remote hiring scams, fake equipment checks, and unverified recruiter channels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#101B35]">Position Title</label>
          <input
            type="text"
            value={form.position}
            onChange={set('position')}
            placeholder="e.g. Remote Data Entry Specialist"
            className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 px-4 py-3 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 shadow-sm border border-slate-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#101B35]">Company or Recruiter Claim</label>
          <input
            type="text"
            value={form.company}
            onChange={set('company')}
            placeholder="e.g. Apex Global Logistics Ltd"
            className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 px-4 py-3 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 shadow-sm border border-slate-200"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#101B35]">Application Link or Interview Channel</label>
        <input
          type="text"
          value={form.link}
          onChange={set('link')}
          placeholder="e.g. https://telegram.me/apex_recruitment_agent"
          className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 px-4 py-3 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 shadow-sm border border-slate-200"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#101B35]">Offer or Message Details</label>
        <textarea
          value={form.details}
          onChange={set('details')}
          placeholder="Paste the offer email, WhatsApp chat, or check payment instructions here..."
          rows={3}
          className="w-full bg-slate-50 text-[#101B35] placeholder:text-slate-400 p-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 shadow-sm resize-none border border-slate-200"
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0051D5] text-white hover:bg-[#0051D5]/90 transition-all text-sm font-semibold shadow-sm">
          <Search size={16} />
          <span>Analyze Job Offer</span>
        </button>
      </div>
    </div>
  );
}

//  Main Page 
export default function ScanCenterPage() {
  const [activeTab, setActiveTab] = useState('url');

  const renderPanel = () => {
    switch (activeTab) {
      case 'url': return <UrlPanel onSwitchTab={setActiveTab} />;
      case 'message': return <MessagePanel />;
      case 'website': return <WebsitePanel />;
      case 'job': return <JobPanel />;
      default: return null;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-8 py-6">

      {/* Page Header*/}
      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
            <Radar size={13} />
            Personal Threat Inspector
          </span>
          <span className="text-slate-300 text-xs">•</span>
          <span className="text-xs font-semibold text-slate-500">Real-Time Evaluation Hub</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold text-[#101B35] tracking-tight">Scan Center</h1>
            <p className="text-base text-slate-500 mt-1">
              Inspect suspicious links, SMS messages, ecommerce storefronts, and employment offers with multi-signal probabilistic risk scoring.
            </p>
          </div>
          {/* Telemetry metric */}
          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100 self-start md:self-auto flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#0051D5]">
              <Shield size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#101B35]">Client Sandbox Ready</span>
              <span className="text-xs text-slate-400">Zero session token leakage</span>
            </div>
          </div>
        </div>
      </section>

      {/*  Primary Scanning Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left — Interactive Scanner (8 cols) */}
        <div className="lg:col-span-8 flex flex-col bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
          {/* Tabs */}
          <div
            role="tablist"
            className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-100 scrollbar-hide"
          >
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                role="tab"
                aria-selected={activeTab === id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap text-sm font-semibold transition-all flex-shrink-0 ${
                  activeTab === id
                    ? 'bg-[#0051D5] text-white shadow-sm'
                    : 'text-slate-500 hover:text-[#101B35] hover:bg-slate-100'
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Active Panel */}
          {renderPanel()}
        </div>

        {/* Right — Educational Companion (4 cols) */}
        <div className="lg:col-span-4 flex flex-col bg-white rounded-2xl shadow-sm p-6 border border-slate-100 justify-between gap-6">
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700">
                <Lightbulb size={18} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#101B35]">What we look for</h3>
                <span className="text-xs text-slate-400">Deterministic threat telemetry</span>
              </div>
            </div>

            {/* Signals */}
            <div className="flex flex-col gap-5">
              {THREAT_SIGNALS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[#0051D5] flex-shrink-0 mt-0.5">
                    <Icon size={13} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#101B35]">{title}</span>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Protected Environment callout */}
          <div className="p-4 rounded-xl bg-slate-50 flex flex-col gap-1.5 border border-slate-100">
            <div className="flex items-center gap-1.5 text-[#0051D5]">
              <Shield size={14} />
              <span className="text-xs font-semibold">Protected Environment</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              All inspections trigger safely in an isolated headless cloud container. No malicious script executes on your local browser or mobile device.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Inspection Modes  */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#101B35]">Additional Inspection Modes</h3>
            <p className="text-sm text-slate-500">Access specialized engines for targeted threat categories.</p>
          </div>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">3 Modules Available</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {INSPECTION_MODES.map(({ tabId, icon: Icon, title, description, sample, cta }) => (
            <div
              key={tabId}
              className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
                  <Icon size={20} />
                </div>
                <h4 className="text-base font-semibold text-[#101B35]">{title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
                <div className="bg-slate-50 rounded-lg p-2.5">
                  <span className="font-mono text-xs text-slate-400 block truncate">{sample}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveTab(tabId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#101B35] text-sm font-semibold transition-all mt-5"
              >
                <span>{cta}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Scan Diagnostics & System States */}
      <section className="flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ScanLine size={18} className="text-[#0051D5]" />
            <h3 className="text-lg font-semibold text-[#101B35]">Scan Diagnostics & System States</h3>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">
            Observable operational states demonstrating edge cases, real-time sandboxing, and non-alarmist plainspoken feedback.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* State 1 — Loading */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0051D5] animate-pulse" />
                  <span className="text-sm font-semibold text-[#101B35]">Active Sandbox Analysis</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                  In Progress
                </span>
              </div>
              {/* Progress bar */}
              <div className="flex flex-col gap-1.5 mb-5">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Evaluating Target Payload</span>
                  <span className="font-semibold text-[#0051D5]">65% Complete</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-[#0051D5] rounded-full w-[65%] transition-all duration-500" />
                </div>
                <span className="text-xs text-slate-400">Analyzing... ~1.2s remaining</span>
              </div>
              {/* Checklist */}
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'Resolving DNS & Domain Age', done: true },
                  { label: 'Headless Virtual Browser Fetch', done: true },
                  { label: 'Evaluating Brand Mimicry & Phishing Kits', active: true },
                  { label: 'Scoring Probabilistic Risk & Synthesizing Guidance', pending: true },
                ].map(({ label, done, active, pending }) => (
                  <div key={label} className="flex items-center gap-2.5 text-sm">
                    {done && <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />}
                    {active && <Loader2 size={16} className="text-[#0051D5] animate-spin flex-shrink-0" />}
                    {pending && <div className="w-4 h-4 rounded-full border-2 border-slate-200 flex-shrink-0" />}
                    <span className={done ? 'text-[#101B35]' : active ? 'text-[#0051D5] font-medium' : 'text-slate-400'}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Node ID: US-WEST-SANDBOX-09</span>
              <button className="text-xs font-semibold text-slate-400 hover:text-[#101B35] transition-colors">Cancel</button>
            </div>
          </div>

          {/* State 2 — Validation Error */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <AlertCircle size={18} className="text-red-500" />
                  <span className="text-sm font-semibold text-[#101B35]">Input Validation Handled</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-600">
                  Invalid Format
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Gracefully prevents malformed queries and provides plainspoken corrections without harsh warnings.
              </p>
              {/* Mock error field */}
              <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <label className="text-xs font-semibold text-red-500">Destination Target</label>
                <div className="relative flex items-center">
                  <AlertCircle size={16} className="absolute left-3 text-red-500" />
                  <input
                    type="text"
                    readOnly
                    value="hxxp//fake-login..account"
                    className="w-full bg-white text-[#101B35] pl-10 pr-4 py-2.5 rounded-lg text-sm ring-1 ring-red-300 shadow-sm"
                  />
                </div>
                <div className="flex items-start gap-1.5 mt-1">
                  <Info size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-red-500 leading-tight">
                    Please enter a valid URL. Include http:// or https:// (e.g., <span className="font-mono underline">https://example.com</span>).
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Protocol Validation: RFC 3986</span>
              <button className="text-xs font-semibold text-[#0051D5] hover:underline">Autocorrect Prefix</button>
            </div>
          </div>

          {/* State 3 — Empty State */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex flex-col items-center justify-center text-center py-10">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-5">
              <Search size={28} />
            </div>
            <h4 className="text-lg font-semibold text-[#101B35]">Ready to inspect your first target</h4>
            <p className="text-sm text-slate-400 max-w-sm mt-1 leading-relaxed">
              Paste any link, suspicious message, or employment offer above to generate a safe, plainspoken risk assessment.
            </p>
            <div className="flex items-center gap-2 mt-5 flex-wrap justify-center">
              <button
                onClick={() => setActiveTab('url')}
                className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#101B35] text-xs font-semibold transition-all"
              >
                Load Phishing Example
              </button>
              <button
                onClick={() => setActiveTab('url')}
                className="px-5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-all"
              >
                Load Legitimate Example
              </button>
            </div>
          </div>

          {/* State 4 — System Error */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <WifiOff size={18} className="text-amber-500" />
                  <span className="text-sm font-semibold text-[#101B35]">Host Inaccessible</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500">
                  Server Timeout
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 flex flex-col gap-2 border border-slate-100">
                <span className="text-sm font-semibold text-[#101B35]">Unable to reach remote host</span>
                <p className="text-sm text-slate-500 leading-relaxed">
                  The destination server timed out after 10 seconds or refused the secure sandbox connection. This often happens if a malicious server was recently taken offline by registrars.
                </p>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0051D5] text-white hover:bg-[#0051D5]/90 text-xs font-semibold transition-all shadow-sm">
                <RefreshCw size={13} />
                <span>Retry Scan</span>
              </button>
              <button className="text-xs font-semibold text-slate-400 hover:text-red-500 transition-colors">
                Report as Inaccessible
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Banner */}
      <footer className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0051D5]/10 flex items-center justify-center text-[#0051D5] flex-shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#101B35] block">
              Empathetic Personal Defense Commitment
            </span>
            <span className="text-xs text-slate-400">
              Kavach prioritizes user autonomy, calm probabilistic risk scoring, and zero fear-based manipulation.
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 self-end sm:self-auto flex-shrink-0">
          <a href="#" className="text-xs font-semibold text-[#0051D5] hover:underline">Privacy Architecture</a>
          <span className="text-slate-300">•</span>
          <a href="#" className="text-xs font-semibold text-[#0051D5] hover:underline">Threat Methodology</a>
        </div>
      </footer>

    </div>
  );
}
