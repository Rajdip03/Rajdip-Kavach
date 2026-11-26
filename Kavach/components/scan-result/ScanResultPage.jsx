'use client';

import { useState } from 'react';
import ScanResultHeader from './ScanResultHeader';
import SimulationViewTabs from './SimulationViewTabs';
import AssessmentBanner from './AssessmentBanner';
import RiskGauge from './RiskGauge';
import TargetDetailsCard from './TargetDetailsCard';
import ThreatIndicators from './ThreatIndicators';
import SafetyActions from './SafetyActions';
import DetailCards from './DetailCards';
import ComparativeTaxonomy from './ComparativeTaxonomy';
import DisclaimerFooter from './DisclaimerFooter';

const VARIANT_PRESETS = {
  high: {
    scanId: 'KW-849204-7X',
    scanLabel: 'KW-849204',
    scannedAt: 'Scanned 2 minutes ago • Oct 24, 2024 at 14:32 UTC',
    scanType: 'Automated Deep Sandbox',
    riskScore: 87,
    title: 'High Risk Detected: Likely Phishing & Credential Harvest',
    description:
      'Our sandboxed analyzers detected multiple high-confidence indicators mimicking a national banking portal. We advise extreme caution before interacting.',
    confidenceScore: '98.4% Match',
    target: {
      targetUrl: 'https://secure-bank-login-verify.top/auth/session-renew',
      resolvedIp: '185.220.101.42',
      hostProvider: 'Anonymous Hosting Provider',
      domainAge: 'Registered 3 days ago',
      domainRegisteredAt: 'Oct 21, 2024',
      domainRegistrar: 'NameCheap',
      sslIssuer: "Let's Encrypt Authority X3 (Free automated tier)",
      sslStatus: 'Mismatched Org',
      sslNote:
        'No Extended Validation (EV) or verified banking entity attached.',
      redirectChain: ['bit.ly/bank-urgent-alert', 'secure-bank-login-verify.top'],
    },
    indicators: [
      {
        icon: 'ShieldAlert',
        title: 'Suspicious URL Pattern & Spoofed Top-Level Domain',
        tag: 'MITRE: T1566.002',
        description:
          'Uses an untrusted high-risk top-level domain (.top) and misleading subdomains specifically structured to resemble authentic banking verification screens.',
      },
      {
        icon: 'Building',
        title: 'Unverified Website Corporate Identity',
        tag: 'Brand Impersonation',
        description:
          'No verified organizational certificate, corporate registration, or legitimate WHOIS identity matches the financial institution depicted on the landing page.',
      },
      {
        icon: 'Timer',
        title: 'Artificial Urgency & Financial Penalty Threats',
        tag: 'Psychological Coercion',
        description:
          'Page text threatens immediate account deactivation and fee penalties within 24 hours to induce panic credential submission without independent verification.',
      },
    ],
    warningTitle: 'Absolute Priority: Zero Credentials Input',
    warningDescription:
      'Do not share passwords, OTP codes, account numbers, or debit card information with this destination. It is not affiliated with any insured banking facility.',
    safetyActions: [
      {
        title: 'Close this tab or browser session immediately',
        description:
          'Do not click additional internal anchors or permit any prompt downloads.',
        defaultChecked: true,
      },
      {
        title: 'If you submitted details: Call your bank right now',
        description:
          'Dial the official customer service number printed directly on the reverse side of your physical card.',
      },
      {
        title: 'Clear recent browser site storage & cookies',
        description:
          'Prevent persistence of cached tracking beacons or third-party session tokens.',
      },
      {
        title: 'Report source communication to official anti-phishing channels',
        description:
          "Forward SMS messages to 7726 (SPAM) or submit the phishing link to your organization's IT helpdesk.",
      },
    ],
  },
  critical: {
    scanId: 'KW-962104-9C',
    scanLabel: 'KW-962104',
    scannedAt: 'Scanned 5 minutes ago • Oct 24, 2024 at 14:29 UTC',
    scanType: 'Automated Deep Sandbox',
    riskScore: 96,
    title: 'Critical Threat: Active Malware Dropper Detected',
    description:
      'Active command-and-control connection and weaponized binary execution confirmed in sandbox. Immediate device quarantine required.',
    confidenceScore: '99.1% Match',
    detailCards: [
      {
        icon: 'pestcontrol',
        iconColor: 'text-red-600',
        title: 'Malware Signature',
        value: 'trojan-update-patch.exe.download-cdn.pw',
        description:
          'Known Cobalt Strike beacon payload attempting privilege escalation via powershell.exe.',
      },
      {
        icon: 'hub',
        iconColor: 'text-red-600',
        title: 'Threat Intel Feeds',
        value: '14 of 16 Blacklists',
        description:
          'Flagged universally by AlienVault, VirusTotal, and US-CERT threat intelligence streams.',
      },
      {
        icon: 'securityupdatewarning',
        iconColor: 'text-[#0051D5]',
        title: 'Immediate Action',
        value: 'Quarantine Device Now',
        description:
          'Disconnect Wi-Fi immediately, delete downloaded setup binaries, and execute an offline boot antivirus scan.',
      },
    ],
  },
  medium: {
    scanId: 'KW-583204-3M',
    scanLabel: 'KW-583204',
    scannedAt: 'Scanned 12 minutes ago • Oct 24, 2024 at 14:22 UTC',
    scanType: 'Automated Deep Sandbox',
    riskScore: 58,
    title: 'Needs Caution: Unverified Retail Storefront',
    description:
      'Storefront contains inconsistent operational credentials, duplicated catalog images, and an absent corporate headquarters registry.',
    confidenceScore: '84.6% Match',
    detailCards: [
      {
        icon: 'storefront',
        iconColor: 'text-slate-700',
        title: 'Target Domain',
        value: 'discount-winter-gear-sale.shop',
        description:
          'Registered 11 days ago via offshore privacy registrar. Zero physical presence records.',
      },
      {
        icon: 'photolibrary',
        iconColor: 'text-slate-700',
        title: 'Asset Provenance',
        value: 'Copied Product Photography',
        description:
          'Image hashes directly matched catalog assets scraped from legitimate outdoor retailer brands.',
      },
      {
        icon: 'payments',
        iconColor: 'text-[#0051D5]',
        title: 'Safer Practice',
        value: 'Avoid Direct Debit Cards',
        description:
          'Do not use debit accounts. If purchasing, use buyer-protected payment escrow or virtual single-use cards.',
      },
    ],
  },
  low: {
    scanId: 'KW-120404-1S',
    scanLabel: 'KW-120404',
    scannedAt: 'Scanned 25 minutes ago • Oct 24, 2024 at 14:09 UTC',
    scanType: 'Automated Deep Sandbox',
    riskScore: 12,
    title: 'Low Risk: Trusted & Verified Destination',
    description:
      'Zero indicators of deceit, active credential harvesting, or payload transmission. Valid enterprise encryption and domain provenance established.',
    confidenceScore: '99.8% Match',
    detailCards: [
      {
        icon: 'link',
        iconColor: 'text-[#0051D5]',
        title: 'Inspected Target',
        value: 'https://github.com/features/security',
        description:
          'Domain active for >16 years. Valid Extended Validation (EV) certificate issued to GitHub, Inc.',
      },
      {
        icon: 'dns',
        iconColor: 'text-[#0051D5]',
        title: 'Global Reputation',
        value: '100% Clean Records',
        description:
          'Validated DNSSEC signing, verified SPF/DKIM records, and spotless historical telemetry.',
      },
      {
        icon: 'checkcircle',
        iconColor: 'text-[#0051D5]',
        title: 'Guidance',
        value: 'Safe to Authenticate',
        description:
          'No hostile scripts detected. Safe to browse, sign in, or download official release binaries.',
      },
    ],
  },
};
function getVariantKey(score) {
  if (score >= 90) return 'critical';
  if (score >= 66) return 'high';
  if (score >= 31) return 'medium';
  return 'low';
}

function getRiskLevel(score) {
  if (score >= 90) return 'critical';
  if (score >= 66) return 'high';
  if (score >= 31) return 'medium';
  return 'low';
}

function getRiskLabel(riskLevel) {
  switch (riskLevel) {
    case 'critical':
      return 'Critical Severity';
    case 'high':
      return 'High Risk';
    case 'medium':
      return 'Caution Required';
    case 'low':
      return 'Safe Destination';
    default:
      return 'Unknown';
  }
}

/**
 * ScanResultPage – main orchestrator for the Scan Result page.
 *
 * @param {{ result?: object }} props – the initial scan result data object
 */
export default function ScanResultPage({ result: initialResult }) {
  const initialKey = initialResult?.riskScore
    ? getVariantKey(initialResult.riskScore)
    : 'high';

  const [activeVariant, setActiveVariant] = useState(initialKey);
  const [useCustomData, setUseCustomData] = useState(true);

  const activeData =
    useCustomData && activeVariant === initialKey && initialResult
      ? { ...VARIANT_PRESETS[activeVariant], ...initialResult }
      : VARIANT_PRESETS[activeVariant] || VARIANT_PRESETS.high;

  const riskScore = activeData.riskScore ?? 0;
  const riskLevel = getRiskLevel(riskScore);
  const riskLabel = getRiskLabel(riskLevel);

  const scanLabel =
    activeData.scanLabel ||
    activeData.scanId?.split('-').slice(0, 2).join('-') ||
    'KW-849204';
  const scannedAt = activeData.scannedAt || 'Recently scanned';

  const handleSelectVariant = (variantId) => {
    setActiveVariant(variantId);
    if (variantId !== initialKey) {
      setUseCustomData(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col py-6">
      <ScanResultHeader
        scanId={activeData.scanId || 'N/A'}
        scanLabel={scanLabel}
        scannedAt={scannedAt}
        scanType={activeData.scanType}
      />
      <SimulationViewTabs
        activeVariant={activeVariant}
        onSelectVariant={handleSelectVariant}
      />
      <AssessmentBanner
        riskLevel={riskLevel}
        title={activeData.title}
        description={activeData.description}
        riskScore={riskScore}
        riskLabel={riskLabel}
        confidenceScore={activeData.confidenceScore}
      />

      {riskLevel === 'high' || (riskLevel === 'critical' && activeData.target) ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-6">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <RiskGauge riskScore={riskScore} />
            {activeData.target && <TargetDetailsCard {...activeData.target} />}
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            {activeData.indicators && activeData.indicators.length > 0 && (
              <ThreatIndicators indicators={activeData.indicators} />
            )}
            {activeData.safetyActions && activeData.safetyActions.length > 0 && (
              <SafetyActions
                warningTitle={activeData.warningTitle}
                warningDescription={activeData.warningDescription}
                actions={activeData.safetyActions}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="mt-6">
          {activeData.detailCards && (
            <DetailCards cards={activeData.detailCards} />
          )}
        </div>
      )}
      <ComparativeTaxonomy
        activeVariant={activeVariant}
        onSelectVariant={handleSelectVariant}
      />
      <DisclaimerFooter />
    </div>
  );
}
