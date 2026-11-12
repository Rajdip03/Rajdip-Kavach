import React from 'react';
import { Copy, Activity, AlertCircle, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: '01',
    icon: Copy,
    title: 'Submit suspicious content',
    description: 'Paste any link, email sender, or SMS body into our instant inspector. No credentials needed.',
  },
  {
    id: '02',
    icon: Activity,
    title: 'Analyze security indicators',
    description: 'Multi-vector scan evaluates domain age, spoofing signals, TLS validity, and known threat lists.',
  },
  {
    id: '03',
    icon: AlertCircle,
    title: 'Understand potential risks',
    description: 'Plain-language risk score and clear breakdown without confusing technical cyber-speak.',
  },
  {
    id: '04',
    icon: ShieldCheck,
    title: 'Take recommended action',
    description: 'Practical, immediate guidance on what to do next to safeguard your accounts and data.',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-16 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Simple 4-Step Process</span>
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">How It Works</h2>
          <p className="text-base text-slate-500">
            A clear, 4-step assessment designed for everyday reassurance without technical jargon.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">{step.id}</span>
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600">
                  <step.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
