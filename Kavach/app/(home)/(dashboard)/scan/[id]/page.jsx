import { redirect } from 'next/navigation';

export default async function ScanRedirectPage({ params }) {
  const { id } = await params;
  redirect(`/dashboard/scan-result/${id || 'KW-849204-7X'}`);
}
