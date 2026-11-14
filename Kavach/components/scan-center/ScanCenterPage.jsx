'use client';

import { useState } from 'react';

import ScanHeader from '@/components/scan-center/ScanHeader';
import ScanTabs from '@/components/scan-center/ScanTabs';
import EducationalSidebar from '@/components/scan-center/EducationalSidebar';
import AdditionalModes from '@/components/scan-center/AdditionalModes';
import ScanDiagnostics from '@/components/scan-center/ScanDiagnostics';
import ScanFooter from '@/components/scan-center/ScanFooter';
import UrlPanel from '@/components/scan-center/UrlPanel';
import MessagePanel from '@/components/scan-center/MessagePanel';
import WebsitePanel from '@/components/scan-center/WebsitePanel';
import JobPanel from '@/components/scan-center/JobPanel';

export default function ScanCenterPage({ initialTab = 'url' }) {
  const validTabs = ['url', 'message', 'website', 'job'];

  const [activeTab, setActiveTab] = useState(
    validTabs.includes(initialTab) ? initialTab : 'url'
  );

  const renderPanel = () => {
    switch (activeTab) {
      case 'url':
        return <UrlPanel onSwitchTab={setActiveTab} />;

      case 'message':
        return <MessagePanel />;

      case 'website':
        return <WebsitePanel />;

      case 'job':
        return <JobPanel />;

      default:
        return <UrlPanel onSwitchTab={setActiveTab} />;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-8 py-6">

      <ScanHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        <div className="lg:col-span-8 flex flex-col bg-white rounded-2xl shadow-sm p-6 border border-slate-100">

          <ScanTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {renderPanel()}

        </div>

        <div className="lg:col-span-4">
          <EducationalSidebar />
        </div>

      </div>

      <AdditionalModes setActiveTab={setActiveTab} />

      <ScanDiagnostics setActiveTab={setActiveTab} />

      <ScanFooter />

    </div>
  );
}