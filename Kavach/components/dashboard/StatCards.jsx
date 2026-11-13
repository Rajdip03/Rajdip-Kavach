import { ScanLine, AlertTriangle } from 'lucide-react';

function StatCard({ icon: Icon, iconBg, title, value, badge, badgeColor, detail }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-500 mb-3">{title}</p>
        <div className="flex items-baseline gap-3 mb-1.5">
          <span className="text-4xl font-bold text-[#101B35]">{value}</span>
          {badge && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${badgeColor}`}>
              {badge}
            </span>
          )}
        </div>
        {detail && <p className="text-xs text-slate-400 mt-1">{detail}</p>}
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
}

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StatCard
        icon={ScanLine}
        iconBg="bg-blue-50 text-blue-600"
        title="Total Scans"
        value="148"
        badge="+18 this week"
        badgeColor="text-emerald-700 bg-emerald-50"
        detail="Across all scan types in the last 30 days"
      />
      <StatCard
        icon={AlertTriangle}
        iconBg="bg-amber-50 text-amber-500"
        title="Suspicious Items"
        value="9"
        badge="Needs action"
        badgeColor="text-red-600 bg-red-50"
        detail="6 Phishing links · 2 Fake SMS · 1 Bogus offer"
      />
    </div>
  );
}

