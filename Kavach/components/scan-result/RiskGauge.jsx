import { ShieldAlert } from 'lucide-react';

/**
 * Semicircular risk gauge with 4-segment indicator bar.
 *
 * @param {{ riskScore: number }} props
 */
export default function RiskGauge({ riskScore }) {
  // Determine which segment is active: 0=Low, 1=Medium, 2=High, 3=Critical
  let activeSegment;
  let activeColor;
  let hazardLabel;

  if (riskScore >= 90) {
    activeSegment = 3;
    activeColor = '#991B1B'; // deep red
    hazardLabel = 'Critical Threat';
  } else if (riskScore >= 66) {
    activeSegment = 2;
    activeColor = '#DC2626'; // red
    hazardLabel = 'High Hazard';
  } else if (riskScore >= 31) {
    activeSegment = 1;
    activeColor = '#F59E0B'; // amber
    hazardLabel = 'Elevated Caution';
  } else {
    activeSegment = 0;
    activeColor = '#16A34A'; // green
    hazardLabel = 'Low Risk';
  }

  // SVG arc calculation: map riskScore (0–100) to angle on a semicircle
  // The arc spans from (20,100) to (180,100) with center at (100,100) and radius 80
  const normalizedScore = Math.min(100, Math.max(0, riskScore));
  const angleRad = Math.PI * (normalizedScore / 100);
  const endX = 100 - 80 * Math.cos(angleRad);
  const endY = 100 - 80 * Math.sin(angleRad);
  const largeArcFlag = normalizedScore > 50 ? 1 : 0;

  const segments = [
    { label: 'Low (0-30)', idx: 0 },
    { label: 'Medium (31-65)', idx: 1 },
    { label: 'High (66-89)', idx: 2 },
    { label: 'Critical (90+)', idx: 3 },
  ];

  const segmentColors = {
    0: 'bg-green-500',
    1: 'bg-amber-400',
    2: 'bg-red-500',
    3: 'bg-red-800',
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between pb-2 text-left">
        <div>
          <span className="text-sm font-semibold text-slate-800 block">
            Composite Risk Gauge
          </span>
          <span className="text-xs text-slate-400">
            Multi-vector synthetic threat score
          </span>
        </div>
      </div>

      {/* SVG Semicircular Gauge */}
      <div className="relative w-64 h-36 flex items-center justify-center mt-2">
        <svg className="w-64 h-36 overflow-visible" viewBox="0 0 200 110">
          {/* Background arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#E2E8F0"
            strokeLinecap="round"
            strokeWidth="16"
          />
          {/* Active fill arc */}
          {normalizedScore > 0 && (
            <path
              d={`M 20 100 A 80 80 0 ${largeArcFlag} 1 ${endX.toFixed(1)} ${endY.toFixed(1)}`}
              fill="none"
              stroke={activeColor}
              strokeLinecap="round"
              strokeWidth="16"
            />
          )}
        </svg>
        <div className="absolute bottom-2 flex flex-col items-center">
          <span className="text-5xl font-bold text-slate-800 leading-none">
            {riskScore}
          </span>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
            Risk Index
          </span>
        </div>
      </div>

      {/* 4-segment bar */}
      <div className="w-full mt-4 flex flex-col gap-1.5">
        <div className="grid grid-cols-4 gap-1.5 h-2 w-full">
          {segments.map((seg) => (
            <div
              key={seg.idx}
              className={`rounded-full ${
                activeSegment === seg.idx ? segmentColors[seg.idx] : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
        <div className="grid grid-cols-4 text-[11px] text-slate-400 font-medium px-1">
          {segments.map((seg) => (
            <span
              key={seg.idx}
              className={
                activeSegment === seg.idx ? 'font-semibold' : ''
              }
              style={activeSegment === seg.idx ? { color: activeColor } : undefined}
            >
              {seg.label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom assessment label */}
      <div className="w-full bg-slate-50 rounded-xl p-3.5 mt-5 flex items-center justify-between text-left">
        <div className="flex items-center gap-2.5">
          <ShieldAlert size={18} style={{ color: activeColor }} />
          <span className="text-sm font-medium text-slate-800">
            Algorithmic Assessment:
          </span>
        </div>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{
            color: activeColor,
            backgroundColor: `${activeColor}14`,
          }}
        >
          {hazardLabel}
        </span>
      </div>
    </div>
  );
}
