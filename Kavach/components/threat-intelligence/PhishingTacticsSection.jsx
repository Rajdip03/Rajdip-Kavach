import { Zap, Eye, KeyRound, ShieldCheck } from 'lucide-react';

const TACTICS = [
  {
    icon: Zap,
    iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    vector: 'SMS & Email Vectors',
    title: 'Urgency Manipulation & Threat of Service Suspension',
    description:
      'Attackers send SMS or email alerts claiming imminent utility disconnection, bank KYC freezes, or tax penalties to trigger hasty clicks before users verify.',
    indicators: [
      'Countdown deadlines (e.g., "within 2 hours")',
      'Threats of account lock or legal action',
      'Off-hours delivery via disposable virtual numbers',
    ],
    defense:
      'Open your bank or service provider’s official app independently instead of tapping links inside unsolicited alerts.',
  },
  {
    icon: Eye,
    iconBg: 'bg-blue-50 text-[#2563EB] border-blue-100',
    vector: 'DNS & Domain Spoofing',
    title: 'Homoglyph & Brand Typo-squatting',
    description:
      'Campaigns register domains replacing ASCII characters with Cyrillic/Unicode lookalikes or pair trusted brand names with low-cost TLDs such as .top, .live, or .shop.',
    indicators: [
      'Punycode prefixes (xn--) in email or URL bars',
      'Hyphenated verification strings (e.g., -kyc-login)',
      'Domain WHOIS age under 14 days with privacy shields',
    ],
    defense:
      'Check the root domain directly before the first slash and rely on a password manager that refuses to autofill on mismatched origins.',
  },
  {
    icon: KeyRound,
    iconBg: 'bg-red-50 text-[#DC2626] border-red-100',
    vector: 'Session Hijacking (AiTM)',
    title: 'Reverse Proxy OTP Interception',
    description:
      'Adversary-in-the-Middle frameworks such as Evilginx proxy legitimate login pages in real time, capturing both passwords and active session cookies after OTP entry.',
    indicators: [
      'Valid automated SSL certificate on an unfamiliar host',
      'Instantaneous credential & 2FA prompt mirroring',
      'Unexpected logout or simultaneous foreign session creation',
    ],
    defense:
      'Use phishing-resistant FIDO2/Passkey authentication where supported and revoke active sessions immediately if an unfamiliar login is suspected.',
  },
];

/**
 * Common Phishing Techniques & Threat Actor Tactics section (3 detailed cards).
 */
export default function PhishingTacticsSection() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-lg font-semibold text-[#101B35]">
          Common Phishing Techniques &amp; Threat Actor Tactics
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Behavioral indicators and practical defense guidance observed across active campaigns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {TACTICS.map((tactic) => {
          const Icon = tactic.icon;
          return (
            <article
              key={tactic.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between gap-5"
            >
              <div className="flex flex-col gap-3.5">
                {/* Icon & Vector Tag */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${tactic.iconBg}`}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {tactic.vector}
                  </span>
                </div>

                {/* Title & Overview */}
                <div>
                  <h3 className="text-base font-semibold text-[#101B35] leading-snug">
                    {tactic.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                    {tactic.description}
                  </p>
                </div>

                {/* Tactical Indicators */}
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-3.5 flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Tactical Indicators
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-slate-600">
                    {tactic.indicators.map((ind) => (
                      <li key={ind} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5 flex-shrink-0" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Defense Recommendation */}
              <div className="bg-[#EFF6FF]/70 border border-[#DBEAFE] rounded-xl p-3.5 flex items-start gap-2.5">
                <ShieldCheck
                  size={16}
                  className="text-[#2563EB] flex-shrink-0 mt-0.5"
                />
                <div className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-[#101B35]">Defense: </span>
                  {tactic.defense}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
