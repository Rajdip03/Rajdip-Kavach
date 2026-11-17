'use client';

import { useState } from 'react';
import { CheckCircle, Ban } from 'lucide-react';

/**
 * Recommended Safety Actions checklist.
 *
 * @param {{
 *   warningTitle?: string,
 *   warningDescription?: string,
 *   actions: Array<{ title: string, description: string, defaultChecked?: boolean }>
 * }} props
 */
export default function SafetyActions({ warningTitle, warningDescription, actions }) {
  const [checked, setChecked] = useState(() =>
    actions.map((a) => !!a.defaultChecked)
  );

  const toggle = (idx) => {
    setChecked((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  if (!actions || actions.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle size={20} className="text-[#0051D5]" />
          <span className="text-lg font-semibold text-slate-800">
            Recommended Safety Actions
          </span>
        </div>
        <span className="text-xs text-slate-400">Step-by-step containment</span>
      </div>

      {/* Critical warning callout */}
      {warningTitle && (
        <div className="bg-red-50 p-4 rounded-xl flex items-start gap-3 border border-red-100">
          <Ban size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-800">{warningTitle}</span>
            {warningDescription && (
              <p className="text-sm text-slate-500 mt-0.5">{warningDescription}</p>
            )}
          </div>
        </div>
      )}

      {/* Action steps */}
      <div className="flex flex-col gap-2.5">
        {actions.map((action, i) => (
          <label
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => toggle(i)}
              className="mt-1 w-4 h-4 rounded text-[#0051D5] focus:ring-0 accent-[#0051D5]"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-800">
                {i + 1}. {action.title}
              </span>
              <span className="text-sm text-slate-500">{action.description}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
