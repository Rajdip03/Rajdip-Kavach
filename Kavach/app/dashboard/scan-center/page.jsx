import { Suspense } from 'react';
import ScanCenterPage from '@/components/scan-center/ScanCenterPage';

export default async function Page({ searchParams }) {
  const params = await searchParams;

  const validTabs = ['url', 'message', 'website', 'job'];

  const requestedTab = params?.type;

  const initialTab = validTabs.includes(requestedTab)
    ? requestedTab
    : 'url';

  return (
    <Suspense fallback={<div className="p-6">Loading Scan Center...</div>}>
      <ScanCenterPage
        key={initialTab}
        initialTab={initialTab}
      />
    </Suspense>
  );
}