import { BookOpen } from 'lucide-react';

export default function SecurityGuidesPage() {
  return (
    <div className="max-w-[1200px] mx-auto py-6">
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
          <BookOpen className="w-7 h-7 text-[#0051D5]" />
        </div>
        <h1 className="text-2xl font-semibold text-[#101B35]">Security Guides</h1>
        <p className="text-slate-500 max-w-md text-sm">Curated guides and tips to help you stay protected online. Coming soon.</p>
      </div>
    </div>
  );
}

