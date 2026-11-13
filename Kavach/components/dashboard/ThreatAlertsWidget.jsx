

const alerts = [
  {
    title: 'Fake Postal Redelivery SMS',
    risk: 'High Risk',
    riskColor: 'text-red-600 bg-red-50',
    description:
      'Fraudulent messages impersonating India Post, asking recipients to pay a small redelivery fee via a phishing link.',
    source: 'Threat Intel Feed',
    time: '2 hours ago',
  },
  {
    title: 'Telegram Remote Job Traps',
    risk: 'Critical Risk',
    riskColor: 'text-white bg-[#991B1B]',
    description:
      'Scammers posing as recruiters on Telegram, offering data-entry jobs with upfront registration fees and no real employment.',
    source: 'Community Report',
    time: '5 hours ago',
  },
  {
    title: 'Utility Disconnection Phishing',
    risk: 'High Risk',
    riskColor: 'text-red-600 bg-red-50',
    description:
      'Emails and SMS claiming electricity or gas disconnection, linking to fake payment portals harvesting banking credentials.',
    source: 'Threat Intel Feed',
    time: '1 day ago',
  },
];

export default function ThreatAlertsWidget() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-semibold text-[#101B35]">Recent Threat Alerts</h2>
        </div>
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
          </span>
          Live Feed
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {alerts.map(({ title, risk, riskColor, description, source, time }) => (
          <article key={title} className="bg-[#F7F9FB] rounded-xl p-3.5">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h3 className="text-sm font-semibold text-[#101B35] leading-tight">{title}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold flex-shrink-0 ${riskColor}`}>
                {risk}
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-2">{description}</p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span>{source}</span>
              <span>·</span>
              <span>{time}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
