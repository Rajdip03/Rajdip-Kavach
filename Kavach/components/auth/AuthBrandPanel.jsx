import Link from 'next/link';
import {
  ShieldCheck,
  Shield,
  Radar,
  Lock,
  BellRing,
  RefreshCw,
  Users,
} from 'lucide-react';

const ICON_MAP = {
  radar: Radar,
  lock: Lock,
  bell: BellRing,
  sync: RefreshCw,
  community: Users,
};

const DEFAULT_SUBHEADING =
  'Join thousands who verify suspicious links, deceptive messages, and spoofed domains in seconds without technical jargon.';

const DEFAULT_BENEFITS = [
  {
    iconKey: 'radar',
    title: 'Instant Multi-signal Threat Scoring',
    description:
      'Uncover spoofed domains, phishing kits, and SMS traps before sharing credentials.',
  },
  {
    iconKey: 'lock',
    title: 'Zero Tracking & Strict Privacy',
    description:
      'Your queries and sensitive pasteboards are never logged, monetized, or shared.',
  },
  {
    iconKey: 'bell',
    title: 'Real-Time Telemetry Alerts',
    description:
      'Get community-verified warning updates on active spoof campaigns targeting everyday users.',
  },
];

/**
 * Left navy brand & trust proposition panel inside the split card.
 * Sits below the form on mobile (`order-2 lg:order-1`) and takes 5/12 columns on desktop.
 *
 * @param {{
 *   subheading?: string,
 *   benefits?: Array<{ iconKey: string, title: string, description: string }>,
 *   statHighlight?: string,
 *   statText?: string
 * }} props
 */
export default function AuthBrandPanel({
  subheading = DEFAULT_SUBHEADING,
  benefits = DEFAULT_BENEFITS,
  statHighlight = '99.4%',
  statText = 'threat detection accuracy • Plain-language assessments',
}) {
  return (
    <aside className="lg:col-span-5 order-2 lg:order-1 bg-gradient-to-b from-[#0F172A] via-[#101B35] to-[#0B142A] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
      <div className="flex flex-col gap-6 sm:gap-7">
        {/* Top Brand Block */}
        <Link href="/" className="inline-flex items-center gap-3 self-start group">
          <div className="bg-white/10 border border-white/10 p-2.5 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-white/15 transition-colors">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white leading-none">
              Kavach
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-300/80 mt-1 leading-none">
              Kavach DEFENSE CORE
            </span>
          </div>
        </Link>

        {/* Consumer Grade Protection Pill */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-400/20 px-3 py-1 text-[11px] font-semibold tracking-wider text-blue-300 uppercase self-start">
          <Shield size={12} />
          <span>Consumer Grade Protection</span>
        </div>

        {/* Headline & Subheading */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Check before
            <br />
            you click.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* 3 Benefit Cards */}
        <div className="space-y-3.5">
          {benefits.map(({ iconKey, title, description }) => {
            const Icon = ICON_MAP[iconKey] || ShieldCheck;
            return (
              <div
                key={title}
                className="rounded-xl bg-white/[0.05] border border-white/[0.08] p-4 flex items-start gap-3.5"
              >
                <div className="bg-blue-500/15 text-blue-400 p-2 rounded-lg shrink-0">
                  <Icon size={16} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h2 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {title}
                  </h2>
                  <p className="text-xs text-slate-300/90 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Assurance Box */}
      <div className="rounded-xl bg-white/[0.05] border border-white/[0.08] p-3.5 flex items-center gap-3 text-xs text-slate-300">
        <ShieldCheck size={16} className="text-blue-400 shrink-0" />
        <span className="leading-snug">
          <strong className="text-white font-bold">{statHighlight}</strong>{' '}
          {statText}
        </span>
      </div>
    </aside>
  );
}
