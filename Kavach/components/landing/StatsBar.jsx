import React from 'react';

const stats = [
  { value: '2.4M+',     label: 'Scans analyzed',                colorClass: 'text-blue-600' },
  { value: '185,000+',  label: 'Suspicious domains flagged',     colorClass: 'text-[#101B35]' },
  { value: '99.4%',     label: 'Threat detection accuracy',      colorClass: 'text-blue-600' },
  { value: '< 1.2s',    label: 'Average analysis speed',         colorClass: 'text-[#101B35]' },
];

export default function StatsBar() {
  return (
    <section className="w-full py-0 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="p-6 rounded-xl bg-white shadow-sm border border-slate-200 flex flex-col gap-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1 text-center sm:text-left">
                <span className={`text-3xl font-bold tracking-tight ${stat.colorClass}`}>{stat.value}</span>
                <span className="text-sm font-medium text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
          {/* <div className="text-center">
            <span className="text-xs text-slate-400">Illustrative placeholder figures</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
