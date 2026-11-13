export default function ScanHistoryChart() {
  // Data points for 30 days (Oct 1 – Oct 29, weekly labels)
  // Safe scans line (blue) and Flagged (red dashed)
  const safeData = [4, 7, 5, 9, 6, 8, 11, 7, 6, 9, 8, 10, 7, 9, 12, 8, 7, 10, 9, 11, 8, 6, 9, 10, 7, 9, 8, 11, 7, 6];
  const flaggedData = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1];

  const width = 540;
  const height = 160;
  const padL = 8;
  const padR = 8;
  const padT = 10;
  const padB = 20;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;
  const maxVal = 14;

  const toX = (i) => padL + (i / (safeData.length - 1)) * chartW;
  const toY = (v) => padT + chartH - (v / maxVal) * chartH;

  const safePath = safeData.map((v, i) => `${i === 0 ? 'M' : 'L'}${toX(i)},${toY(v)}`).join(' ');
  const flaggedPath = flaggedData.map((v, i) => `${i === 0 ? 'M' : 'L'}${toX(i)},${toY(v)}`).join(' ');

  // Gradient fill for safe line
  const safeAreaPath = safePath + ` L${toX(safeData.length - 1)},${toY(0)} L${toX(0)},${toY(0)} Z`;

  // X-axis labels at indices 0, 7, 14, 21, 29
  const xLabels = [
    { i: 0, label: 'Oct 1' },
    { i: 7, label: 'Oct 8' },
    { i: 14, label: 'Oct 15' },
    { i: 21, label: 'Oct 22' },
    { i: 29, label: 'Oct 29' },
  ];

  // Gridlines
  const gridLines = [0, 4, 8, 12];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <h2 className="text-base font-semibold text-[#101B35]">Scan History</h2>
          <p className="text-xs text-slate-500">Last 30 Days</p>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full border border-amber-100">
          Highest activity: Mondays
        </span>
      </div>

      {/* Chart */}
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-44" preserveAspectRatio="none">
          <defs>
            <linearGradient id="safeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0051D5" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0051D5" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Gridlines */}
          {gridLines.map((v) => (
            <line
              key={v}
              x1={padL}
              y1={toY(v)}
              x2={width - padR}
              y2={toY(v)}
              stroke="#E2E8F0"
              strokeWidth="1"
            />
          ))}

          {/* Safe area fill */}
          <path d={safeAreaPath} fill="url(#safeGrad)" />

          {/* Safe line */}
          <path d={safePath} fill="none" stroke="#0051D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Flagged line (dashed red) */}
          <path d={flaggedPath} fill="none" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Safe data nodes */}
          {safeData.map((v, i) => (
            (i % 7 === 0 || i === safeData.length - 1) && (
              <circle key={i} cx={toX(i)} cy={toY(v)} r="3.5" fill="#0051D5" stroke="white" strokeWidth="1.5" />
            )
          ))}

          {/* X-axis labels */}
          {xLabels.map(({ i, label }) => (
            <text key={i} x={toX(i)} y={height - 2} textAnchor="middle" fontSize="10" fill="#94A3B8">
              {label}
            </text>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#0051D5] flex-shrink-0"></span>
            <span className="text-xs text-slate-600">Safe Scans (139)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></span>
            <span className="text-xs text-slate-600">Flagged Risks (9)</span>
          </div>
        </div>
        <span className="text-xs font-semibold text-emerald-600">93.9% safe ratio</span>
      </div>
    </div>
  );
}

