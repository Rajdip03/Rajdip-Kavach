import ScanResultPage from '@/components/scan-result/ScanResultPage';

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: `Scan Result #${id || 'KW-849204'} | Kavach Personal Defense`,
    description: 'Deep sandbox analysis and multi-vector synthetic threat score.',
  };
}

export default async function ScanResultPageRoute({ params }) {
  const { id } = await params;

  // Pass dynamic scan ID to the scan result page
  const result = {
    scanId: id || 'KW-849204-7X',
    scanLabel: id ? (id.includes('-') ? id.split('-').slice(0, 2).join('-') : id) : 'KW-849204',
  };

  return <ScanResultPage result={result} />;
}
