import { CheckCircle } from 'lucide-react';

export default function WelcomeHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
      <div>
        {/* Telemetry badge */}
        <div className="flex items-center gap-3 mb-4">
          {/* Blue Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>

            <span className="text-blue-700 text-xs font-medium">
              Telemetry Stream Active
            </span>
          </div>

          {/* Outside Badge */}
          <span className="text-gray-500 text-xs">
            Last check: 12 minutes ago
          </span>
        </div>

        <h1 className="text-2xl lg:text-3xl font-semibold text-[#101B35] tracking-tight">
          Welcome back, Rajdip
        </h1>
        <p className="mt-1.5 text-slate-500 text-sm max-w-lg">
          Your digital perimeter is active. All systems operational no critical threats detected in the last 24 hours.
        </p>
      </div>

      {/* Engine badge */}
      <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm flex-shrink-0">
        <CheckCircle className="w-4 h-4 text-emerald-500" />
        <div>
          <p className="text-xs font-semibold text-[#101B35]">Calm Sentinel Engine v2.4</p>
          <p className="text-[11px] text-slate-400">AI protection layer active</p>
        </div>
      </div>
    </div>
  );
}
