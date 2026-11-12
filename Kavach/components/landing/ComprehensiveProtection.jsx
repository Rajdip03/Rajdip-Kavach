import React from 'react';
import { Link2, ShieldAlert, MessageSquareWarning, GlobeLock, FileWarning, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Link2,
    title: 'URL Scanner',
    description: 'Deep link inspection checking hidden redirect chains, obscured destination servers, and malicious payloads before navigation.',
  },
  {
    icon: ShieldAlert,
    title: 'Phishing Detection',
    description: 'AI pattern matching against impersonated bank portals, postal delivery notices, and official government correspondence.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Message Analysis',
    description: 'Paste suspicious SMS, WhatsApp messages, or email bodies to uncover hidden psychological urgency tricks and manipulation.',
  },
  {
    icon: GlobeLock,
    title: 'Website Trust Checker',
    description: 'Real-time domain reputation check, registration longevity, corporate ownership transparency, and SSL validation history.',
  },
  {
    icon: FileWarning,
    title: 'Scam Reporting',
    description: 'Crowdsourced verified reports and telemetry helping shield the broader community against rapid emergent fraud waves.',
  },
  {
    icon: Lightbulb,
    title: 'Security Awareness',
    description: 'Interactive bite-sized guides on identifying fraudulent invoices, romance scheme red flags, and bogus remote job contracts.',
  },
];

export default function ComprehensiveProtection() {
  return (
    <section className="w-full py-16 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Full Spectrum Defense</span>
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Comprehensive Protection</h2>
          <p className="text-base text-slate-500">
            Every tool you need to verify authenticity before you click, reply, or share credentials.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group flex flex-col p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
