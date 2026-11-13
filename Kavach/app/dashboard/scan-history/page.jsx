import { History } from 'lucide-react';

export default function ScanHistoryPage() {
  return (
    <div className="max-w-[1200px] mx-auto py-6">
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
          <History className="w-7 h-7 text-[#0051D5]" />
        </div>
        <h1 className="text-2xl font-semibold text-[#101B35]">Scan History</h1>
        <p className="text-slate-500 max-w-md text-sm">View all your previous scans and their results. This section is coming soon.</p>
      </div>
    </div>
  );
}

