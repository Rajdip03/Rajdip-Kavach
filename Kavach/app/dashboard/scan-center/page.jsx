import { Suspense } from 'react';
import ScanCenterPage from '@/components/scan-center/ScanCenterPage';

async function ScanCenterContent({ searchParams }) {
  const params = await searchParams;

  const validTabs = ['url', 'message', 'website', 'job'];
  const requestedTab = params?.type;
  const initialTab = validTabs.includes(requestedTab) ? requestedTab : 'url';

  return (
    <ScanCenterPage
      key={initialTab}
      initialTab={initialTab}
    />
  );
}

export default function Page({ searchParams }) {
  return (
    <Suspense fallback={<div className="p-6">Loading Scan Center...</div>}>
      <ScanCenterContent searchParams={searchParams} />
    </Suspense>
  );
}
