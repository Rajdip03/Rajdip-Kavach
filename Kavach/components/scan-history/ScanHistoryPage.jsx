'use client';

import { useState, useMemo } from 'react';
import ScanHistoryHeader from './ScanHistoryHeader';
import ScanHistoryToolbar from './ScanHistoryToolbar';
import ScanHistoryTable from './ScanHistoryTable';
import MobilePreviewSection from './MobilePreviewSection';
import CompanionStatesSection from './CompanionStatesSection';
import ScanHistoryFooter from './ScanHistoryFooter';

export const SAMPLE_SCANS = [
  {
    id: 'KW-849204',
    scanLabel: 'Scan #KW-849204',
    type: 'URL',
    typeLabel: 'URL Scanner',
    content: 'https://secure-bank-login-verify.top/auth/session-renew',
    meta: 'Host: 185.220.101.42 • NameCheap Registrar',
    riskLevel: 'high',
    riskScore: 87,
    riskLabel: 'High Risk',
    riskScoreText: '87/100',
    date: 'Oct 24, 2024 • 14:32 UTC',
    timestamp: 1729780320000,
    status: 'Completed',
  },
  {
    id: 'KW-849182',
    scanLabel: 'Scan #KW-849182',
    type: 'Message',
    typeLabel: 'SMS Message',
    content: 'USPS: Your package cannot be delivered due to incomplete address. Update at parcel-redelivery-usps.info/auth',
    meta: 'Sender: +1 (833) 492-0199 • Phishing Kit',
    riskLevel: 'critical',
    riskScore: 96,
    riskLabel: 'Critical Risk',
    riskScoreText: '96/100',
    date: 'Oct 24, 2024 • 09:15 UTC',
    timestamp: 1729761300000,
    status: 'Blocked',
  },
  {
    id: 'KW-848901',
    scanLabel: 'Scan #KW-848901',
    type: 'Job Offer',
    typeLabel: 'Job Offer',
    content: 'Remote Data Entry Clerk - $48/hr (Required upfront software deposit and equipment wire transfer)',
    meta: 'Recruiter: Apex Global Logistics Ltd • Telegram Interview',
    riskLevel: 'critical',
    riskScore: 94,
    riskLabel: 'Critical Risk',
    riskScoreText: '94/100',
    date: 'Oct 23, 2024 • 18:40 UTC',
    timestamp: 1729708800000,
    status: 'Flagged',
  },
  {
    id: 'KW-848652',
    scanLabel: 'Scan #KW-848652',
    type: 'Website',
    typeLabel: 'Website Checker',
    content: 'https://nordic-outdoors-clearance-sale.shop',
    meta: 'Offshore Registrar • Copied Brand Imagery & Inconsistent Merchant Records',
    riskLevel: 'medium',
    riskScore: 58,
    riskLabel: 'Caution',
    riskScoreText: '58/100',
    date: 'Oct 22, 2024 • 11:05 UTC',
    timestamp: 1729595100000,
    status: 'Completed',
  },
  {
    id: 'KW-847219',
    scanLabel: 'Scan #KW-847219',
    type: 'URL',
    typeLabel: 'URL Scanner',
    content: 'https://support.apple.com/id/HT201222',
    meta: 'Apple Inc. • Extended Validation (EV) SSL & Valid DNSSEC',
    riskLevel: 'low',
    riskScore: 12,
    riskLabel: 'Safe',
    riskScoreText: '12/100',
    date: 'Oct 21, 2024 • 16:22 UTC',
    timestamp: 1729527720000,
    status: 'Verified',
  },
  {
    id: 'KW-846980',
    scanLabel: 'Scan #KW-846980',
    type: 'Message',
    typeLabel: 'Message Scanner',
    content: 'Hi Mom, I lost my phone, please text me on WhatsApp at this new number (+44 7911 123456) immediately...',
    meta: 'Impersonation Pattern • Coercive Urgent Financial Request',
    riskLevel: 'high',
    riskScore: 89,
    riskLabel: 'High Risk',
    riskScoreText: '89/100',
    date: 'Oct 20, 2024 • 08:44 UTC',
    timestamp: 1729413840000,
    status: 'Flagged',
  },
];

export default function ScanHistoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [scanTypeFilter, setScanTypeFilter] = useState('all');
  const [riskFilter, setRiskFilter] = useState('all');
  const [dateRange, setDateRange] = useState('30days');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter & Sort
  const filteredScans = useMemo(() => {
    let result = [...SAMPLE_SCANS];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.id.toLowerCase().includes(q) ||
          item.content.toLowerCase().includes(q) ||
          item.typeLabel.toLowerCase().includes(q) ||
          (item.meta && item.meta.toLowerCase().includes(q))
      );
    }

    // Scan type filter
    if (scanTypeFilter !== 'all') {
      result = result.filter((item) => item.type === scanTypeFilter);
    }

    // Risk level filter
    if (riskFilter !== 'all') {
      result = result.filter((item) => item.riskLevel === riskFilter);
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'newest') return b.timestamp - a.timestamp;
      if (sortBy === 'oldest') return a.timestamp - b.timestamp;
      if (sortBy === 'highest_risk') return b.riskScore - a.riskScore;
      if (sortBy === 'lowest_risk') return a.riskScore - b.riskScore;
      return 0;
    });

    return result;
  }, [searchQuery, scanTypeFilter, riskFilter, sortBy]);

  const isFiltered =
    searchQuery.trim() !== '' ||
    scanTypeFilter !== 'all' ||
    riskFilter !== 'all' ||
    dateRange !== '30days' ||
    sortBy !== 'newest';

  const handleResetFilters = () => {
    setSearchQuery('');
    setScanTypeFilter('all');
    setRiskFilter('all');
    setDateRange('30days');
    setSortBy('newest');
    setCurrentPage(1);
  };

  const handleExportCSV = () => {
    const headers = ['Scan ID', 'Type', 'Submitted Content', 'Meta', 'Risk Score', 'Risk Level', 'Date', 'Status'];
    const rows = filteredScans.map((s) => [
      s.id,
      s.typeLabel,
      `"${s.content.replace(/"/g, '""')}"`,
      `"${(s.meta || '').replace(/"/g, '""')}"`,
      s.riskScore,
      s.riskLabel,
      `"${s.date}"`,
      s.status,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `kavach_scan_history_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-8 py-6">
      {/* Breadcrumb & Header */}
      <ScanHistoryHeader onExportCSV={handleExportCSV} />

      {/* Toolbar & Filter Bar */}
      <ScanHistoryToolbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        scanTypeFilter={scanTypeFilter}
        onScanTypeChange={setScanTypeFilter}
        riskFilter={riskFilter}
        onRiskChange={setRiskFilter}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        totalCount={24}
        filteredCount={filteredScans.length}
        onResetFilters={handleResetFilters}
        isFiltered={isFiltered}
      />

      {/* Main Scan History Data Table */}
      <ScanHistoryTable
        scans={filteredScans}
        currentPage={currentPage}
        totalPages={4}
        totalResults={24}
        onPageChange={setCurrentPage}
      />

      {/* Section 1: Mobile View Layout (Stacked Responsive Cards) */}
      <MobilePreviewSection />

      {/* Section 2: Empty State & Skeleton Loading States */}
      <CompanionStatesSection />

      {/* Footer Security Reassurance Note */}
      <ScanHistoryFooter />
    </div>
  );
}
