import React from 'react';

export default function StatsBar() {
  const stats = [
    { value: "2.4M+", label: "Scans analyzed", colorClass: "text-blue-500"},
    { value: "185,000+", label: "Malicious threats flagged", colorClass: "text-black" },
    { value: "99.4%", label: "Threat detection accuracy", colorClass: "text-blue-500" },
    { value: "< 1.2s", label: "Average analysis speed", colorClass: "text-black" },
  ];

  return (
    <section className="border-y border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className={`text-3xl font-bold ${stat.colorClass}`}>{stat.value}</span>
              <span className="text-sm font-medium text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}