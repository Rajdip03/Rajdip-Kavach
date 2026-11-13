import Link from 'next/link';
import { Link2, MessageSquare, Globe, Briefcase, ArrowRight } from 'lucide-react';

const actions = [
  {
    icon: Link2,
    title: 'Scan a URL',
    description: 'Paste any link to instantly check if it leads to a phishing or malware site.',
    cta: 'Inspect link',
    href: '/dashboard/scan-center',
  },
  {
    icon: MessageSquare,
    title: 'Scan a Message',
    description: 'Paste SMS, WhatsApp or email text to detect scam patterns and suspicious intent.',
    cta: 'Paste text',
    href: '/dashboard/scan-center',
  },
  {
    icon: Globe,
    title: 'Check a Website',
    description: 'Verify domain age, SSL status, and reputation before entering personal details.',
    cta: 'Check site',
    href: '/dashboard/scan-center',
  },
  {
    icon: Briefcase,
    title: 'Check a Job Offer',
    description: 'Analyze job postings for red flags like advance fees, vague roles, or fake companies.',
    cta: 'Evaluate offer',
    href: '/dashboard/scan-center',
  },
];

export default function QuickActions() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-[#101B35]">Quick Actions</h2>
        <p className="text-sm text-slate-500">Instant probabilistic risk parsing</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {actions.map(({ icon: Icon, title, description, cta, href }) => (
          <Link
            key={title}
            href={href}
            className="group bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-[#0051D5] group-hover:text-white transition-colors flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-[#101B35] mb-1.5">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
            </div>
            <div className="flex items-center gap-1 mt-4 text-[#0051D5] text-xs font-semibold group-hover:gap-2 transition-all">
              {cta} <ArrowRight size={13} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

