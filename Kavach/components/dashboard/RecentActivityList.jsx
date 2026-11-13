import Link from 'next/link';
import { Link2, MessageSquare, Briefcase, Globe, ArrowRight } from 'lucide-react';

const activities = [
  {
    type: 'URL',
    icon: Link2,
    time: '2 min ago',
    content: 'https://icicibankk-login.net/secure-verify',
    risk: 'High Risk',
    riskColor: 'text-red-600 bg-red-50',
  },
  {
    type: 'Message',
    icon: MessageSquare,
    time: '18 min ago',
    content: 'Congratulations! You\'ve won ₹50,000. Click here to claim your prize...',
    risk: 'Critical Risk',
    riskColor: 'text-white bg-[#991B1B]',
  },
  {
    type: 'Job Offer',
    icon: Briefcase,
    time: '1 hr ago',
    content: 'Work from home — earn ₹5000/day. No experience needed. Register now...',
    risk: 'Needs Caution',
    riskColor: 'text-amber-700 bg-amber-50',
  },
  {
    type: 'Website',
    icon: Globe,
    time: '3 hr ago',
    content: 'amazon-lucky-draw.in',
    risk: 'Safe',
    riskColor: 'text-emerald-700 bg-emerald-50',
  },
  {
    type: 'URL',
    icon: Link2,
    time: '5 hr ago',
    content: 'https://hdfc-netbanking.secure-login.co/auth',
    risk: 'High Risk',
    riskColor: 'text-red-600 bg-red-50',
  },
];

export default function RecentActivityList() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-semibold text-[#101B35]">Recent Activity</h2>
          <p className="text-xs text-slate-500">Last 5 evaluations</p>
        </div>
      </div>

      <ul className="flex flex-col divide-y divide-slate-50">
        {activities.map(({ type, icon: Icon, time, content, risk, riskColor }, idx) => (
          <li key={idx} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
            <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon size={16} className="text-slate-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">{type}</span>
                <span className="text-[11px] text-slate-300">·</span>
                <span className="text-[11px] text-slate-400">{time}</span>
              </div>
              <p className="text-sm text-[#101B35] truncate">{content}</p>
            </div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold flex-shrink-0 ${riskColor}`}>
              {risk}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 pt-4 border-t border-slate-100">
        <Link href="/dashboard/scan-history" className="flex items-center gap-1 text-[#0051D5] text-xs font-semibold hover:gap-2 transition-all">
          View all scan history <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

