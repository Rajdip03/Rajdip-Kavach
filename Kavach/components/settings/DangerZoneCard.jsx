'use client';

import { useState } from 'react';
import { AlertTriangle, Trash2 } from 'lucide-react';

/**
 * Danger Zone card matching the Danger Zone left navigation item.
 *
 * @param {{ onSaveSuccess: (msg: string) => void }} props
 */
export default function DangerZoneCard({ onSaveSuccess }) {
  const [confirmClear, setConfirmClear] = useState(false);

  return (
    <section
      id="danger-zone"
      className="scroll-mt-24 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-red-200/70 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle size={18} className="text-[#DC2626]" />
          <h2 className="text-lg font-bold text-[#101B35]">Danger Zone</h2>
        </div>
        <span className="text-[11px] font-semibold text-[#DC2626] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full">
          Irreversible Actions
        </span>
      </div>

      <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs sm:text-sm font-semibold text-[#101B35]">
            Purge Local Scan Telemetry &amp; Audit History
          </span>
          <p className="text-xs text-slate-500">
            Permanently erase all stored URL inspections, message logs, and personal bookmarks from your dashboard.
          </p>
        </div>

        {confirmClear ? (
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => {
                setConfirmClear(false);
                onSaveSuccess('All personal scan telemetry has been purged.');
              }}
              className="bg-[#DC2626] hover:bg-red-700 text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors"
            >
              Confirm Purge
            </button>
            <button
              type="button"
              onClick={() => setConfirmClear(false)}
              className="bg-white border border-slate-200 text-slate-600 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmClear(true)}
            className="inline-flex items-center gap-1.5 bg-white hover:bg-red-50 border border-red-200 text-[#DC2626] px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex-shrink-0 self-start sm:self-center"
          >
            <Trash2 size={14} />
            <span>Purge History</span>
          </button>
        )}
      </div>
    </section>
  );
}
