'use client';

import { useState, useMemo } from 'react';
import ThreatIntelHeader from './ThreatIntelHeader';
import VerificationScopeBanner from './VerificationScopeBanner';
import ThreatAnalyticsRow from './ThreatAnalyticsRow';
import RecentScamsGrid from './RecentScamsGrid';
import SuspiciousDomainsTable from './SuspiciousDomainsTable';
import PhishingTacticsSection from './PhishingTacticsSection';

const RECENT_SCAMS = [
  {
    id: 'CMP-4091',
    sourceType: 'verified',
    title: 'Electricity Bill Disconnection SMS',
    channel: 'SMS',
    firstSpotted: '18m ago',
    severity: 'Critical',
    snippet:
      'DEAR CONSUMER, Your electricity power will be disconnected tonight at 9:30 PM from electricity office because previous month bill was not update. Call helpline immediately...',
    scanResultId: 'KW-849204-7X',
  },
  {
    id: 'CMP-4088',
    sourceType: 'verified',
    title: 'Tax Refund Authority Impersonation',
    channel: 'Email',
    firstSpotted: '1h ago',
    severity: 'High',
    snippet:
      'Notice ID #ITR-9042: An unclaimed tax rebate of ₹18,450 is pending verification. Confirm your netbanking credentials before 23:59 IST to avoid forfeiture.',
    scanResultId: 'KW-849204-7X',
  },
  {
    id: 'CMP-4085',
    sourceType: 'community',
    title: 'Crypto Job Placement Bot',
    channel: 'WhatsApp',
    firstSpotted: '32m ago',
    severity: 'Medium',
    snippet:
      'Earn 4,500 USDT/week reviewing Web3 listings. Connect your hardware wallet signature to verify developer onboarding fee refund and unlock daily payouts.',
    scanResultId: 'KW-849204-7X',
  },
  {
    id: 'CMP-4081',
    sourceType: 'community',
    title: 'Express Courier Customs Clearance Hold',
    channel: 'Web',
    firstSpotted: '2h ago',
    severity: 'High',
    snippet:
      'Shipment #IN-44829 held at customs hub. Pay ₹49 re-dispatch verification charge via UPI link within 4 hours or parcel returns to sender.',
    scanResultId: 'KW-849204-7X',
  },
];

const SUSPICIOUS_DOMAINS = [
  {
    domain: 'secure-fedx-trace-parcel8.com',
    sourceType: 'community',
    detectionVector: 'Typo-squatting',
    threatCategory: 'Impersonation',
    riskIndex: 88,
    firstSeen: '24m ago',
    status: 'Pending Verification',
  },
  {
    domain: 'auth-hdfc-kyc-renewal.top',
    sourceType: 'verified',
    detectionVector: 'Phishing Kit',
    threatCategory: 'Credential Harvesting',
    riskIndex: 97,
    firstSeen: '1h ago',
    status: 'Blacklisted & Confirmed',
  },
  {
    domain: 'careers-remote-dataentry-us.net',
    sourceType: 'verified',
    detectionVector: 'Employment Trap',
    threatCategory: 'Advance Fee Fraud',
    riskIndex: 92,
    firstSeen: '3h ago',
    status: 'Confirmed Malicious',
  },
  {
    domain: 'support-apple-id-reactivate.cc',
    sourceType: 'verified',
    detectionVector: 'Brand Mimicry',
    threatCategory: 'OTP Interception',
    riskIndex: 95,
    firstSeen: '5h ago',
    status: 'Confirmed Malicious',
  },
  {
    domain: 'mega-discount-warehouse-sale.shop',
    sourceType: 'community',
    detectionVector: 'Unregistered Merchant',
    threatCategory: 'Payment Gateway Clone',
    riskIndex: 64,
    firstSeen: '8h ago',
    status: 'Under Emulation',
  },
  {
    domain: 'sbi-reward-points-redeem.live',
    sourceType: 'community',
    detectionVector: 'Lookalike Domain',
    threatCategory: 'Credential Harvesting',
    riskIndex: 84,
    firstSeen: '11h ago',
    status: 'Pending Verification',
  },
];

/**
 * ThreatIntelligencePage – orchestrates the Threat Intelligence view inside the Kavach dashboard.
 */
export default function ThreatIntelligencePage() {
  const [activeScope, setActiveScope] = useState('all');

  const filteredScams = useMemo(() => {
    if (activeScope === 'all') return RECENT_SCAMS;
    return RECENT_SCAMS.filter((s) => s.sourceType === activeScope);
  }, [activeScope]);

  const filteredDomains = useMemo(() => {
    if (activeScope === 'all') return SUSPICIOUS_DOMAINS;
    return SUSPICIOUS_DOMAINS.filter((d) => d.sourceType === activeScope);
  }, [activeScope]);

  const handleExportIOC = () => {
    const headers = [
      'Domain / Hostname',
      'Source Classification',
      'Detection Vector',
      'Threat Category',
      'Risk Index',
      'First Seen',
      'Status / Verification',
    ];
    const rows = filteredDomains.map((row) => [
      row.domain,
      row.sourceType === 'verified' ? 'Verified' : 'Community',
      `"${row.detectionVector}"`,
      `"${row.threatCategory}"`,
      `${row.riskIndex}/100`,
      `"${row.firstSeen}"`,
      `"${row.status}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', `kavach_ioc_feed_${activeScope}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-8 py-6">
      {/* Header & Live Feed Metrics */}
      <ThreatIntelHeader />

      {/* Verification Scope Switcher + Protocol Info Banner */}
      <VerificationScopeBanner
        activeScope={activeScope}
        onScopeChange={setActiveScope}
      />

      {/* Metrics & Analytics Row (Donut, 30-day Line Chart, Geo Map) */}
      <ThreatAnalyticsRow />

      {/* Recently Reported Scams Grid */}
      <RecentScamsGrid scams={filteredScams} activeScope={activeScope} />

      {/* Suspicious Domain Reports Table */}
      <SuspiciousDomainsTable
        domains={filteredDomains}
        onExportIOC={handleExportIOC}
      />

      {/* Common Phishing Techniques & Tactics */}
      <PhishingTacticsSection />
    </div>
  );
}
