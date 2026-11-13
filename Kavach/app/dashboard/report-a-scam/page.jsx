import { Flag } from 'lucide-react';

export default function ReportAScamPage() {
  return (
    <div className="max-w-[1200px] mx-auto py-6">
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center">
          <Flag className="w-7 h-7 text-red-600" />
        </div>
        <h1 className="text-2xl font-semibold text-[#101B35]">Report a Scam</h1>
        <p className="text-slate-500 max-w-md text-sm">Help protect the community by reporting scams you encounter. This section is coming soon.</p>
      </div>
    </div>
  );
}

