import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

const threats = [
  {
    category: 'Delivery Scam',
    risk: 'high',
    title: 'Fake Postal Package Reschedule SMS',
    description: 'Fraudulent text messages claiming an undelivered parcel demanding a $1.85 redelivery fee to harvest card numbers.',
    time: 'Updated 2 hours ago',
  },
  {
    category: 'Job Offer Fraud',
    risk: 'critical',
    title: 'Remote Data Entry Payment Scheme',
    description: "Unsolicited WhatsApp offers directing victims to deposit crypto as 'equipment collateral' before assignment start.",
    time: 'Updated 5 hours ago',
  },
  {
    category: 'Banking Phishing',
    risk: 'high',
    title: 'Urgent Account Suspension Alerts',
    description: 'Cloned online banking landing pages sent via spoofed caller ID urging immediate password confirmation.',
    time: 'Updated Yesterday',
  },
];

function RiskBadge({ risk }) {
  if (risk === 'critical') {
    return (
      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600 text-white">
        <AlertTriangle className="w-3 h-3" />
        <span className="text-xs font-semibold">Critical Risk</span>
      </div>
    );
  }
  return (
    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200">
      <AlertTriangle className="w-3 h-3 text-red-600" />
      <span className="text-xs font-semibold text-red-700">High Risk</span>
    </div>
  );
}

export default function ThreatAlerts() {
  return (
    <section className="w-full py-16 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-12">

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600">Community Advisory</span>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Recent Threat Alerts</h2>
            <p className="text-base text-slate-500">Real-time updates on active scam campaigns spotted across the digital ecosystem.</p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-500 self-start">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium">Live Telemetry Active</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {threats.map((threat, idx) => (
            <div key={idx} className="flex flex-col p-6 rounded-xl bg-white border border-slate-200 shadow-sm gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{threat.category}</span>
                <RiskBadge risk={threat.risk} />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{threat.title}</h3>
              <p className="text-sm text-slate-500 flex-1 leading-relaxed">{threat.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-400">{threat.time}</span>
                <ExternalLink className="w-4 h-4 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
