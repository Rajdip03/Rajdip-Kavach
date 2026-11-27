'use client';

import { useState } from 'react';
import { PieChart, TrendingUp, MapPin, Shield } from 'lucide-react';

const DONUT_SEGMENTS = [
  {
    label: 'Phishing & Bank Lookalikes',
    pct: 42,
    color: '#2563EB',
    dotClass: 'bg-[#2563EB]',
  },
  {
    label: 'Impersonation & SMS',
    pct: 28,
    color: '#0EA5E9',
    dotClass: 'bg-sky-500',
  },
  {
    label: 'Fake Employment',
    pct: 18,
    color: '#F59E0B',
    dotClass: 'bg-amber-500',
  },
  {
    label: 'Bogus Storefronts',
    pct: 12,
    color: '#64748B',
    dotClass: 'bg-slate-500',
  },
];

// 30-day verified vs community upward trend data
const ACTIVITY_DAYS = Array.from({ length: 30 }, (_, idx) => {
  const day = idx + 1;
  const verified = Math.round(18 + idx * 1.45 + Math.sin(idx * 0.7) * 4);
  const community = Math.round(28 + idx * 2.1 + Math.cos(idx * 0.6) * 6);
  return {
    day,
    label: `Oct ${day}`,
    verified,
    community,
  };
});

const REGIONAL_CLUSTERS = [
  {
    id: 'ncr',
    region: 'Delhi NCR',
    surge: '+28% Smishing',
    cx: 138,
    cy: 46,
    r: 13,
    severity: 'high',
  },
  {
    id: 'west',
    region: 'Mumbai / West',
    surge: '+34% Banking Phish',
    cx: 96,
    cy: 102,
    r: 16,
    severity: 'critical',
  },
  {
    id: 'south',
    region: 'Bengaluru Corridor',
    surge: '+19% Job Scams',
    cx: 132,
    cy: 142,
    r: 12,
    severity: 'high',
  },
  {
    id: 'east',
    region: 'Kolkata / East',
    surge: '+14% Utility SMS',
    cx: 204,
    cy: 86,
    r: 10,
    severity: 'medium',
  },
];

function DonutBreakdownCard() {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  // Build cumulative stroke offsets
  const segmentsWithOffsets = DONUT_SEGMENTS.reduce((acc, seg) => {
    const prevCumulative =
      acc.length > 0
        ? acc[acc.length - 1].cumulativePct
        : 0;
    const dashLength = (seg.pct / 100) * circumference;
    const gap = 3;
    acc.push({
      ...seg,
      cumulativePct: prevCumulative + seg.pct,
      dashArray: `${Math.max(0, dashLength - gap)} ${circumference}`,
      dashOffset: -((prevCumulative / 100) * circumference),
    });
    return acc;
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold text-[#101B35]">
            Scam Categories Breakdown
          </h2>
          <p className="text-xs text-slate-500">30-day verified attribution</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center flex-shrink-0">
          <PieChart size={16} />
        </div>
      </div>

      {/* SVG Donut Chart */}
      <div className="flex items-center justify-center py-2">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg viewBox="0 0 140 140" className="w-36 h-36 -rotate-90">
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke="#F1F5F9"
              strokeWidth="16"
            />
            {segmentsWithOffsets.map((seg) => (
              <circle
                key={seg.label}
                cx="70"
                cy="70"
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth="16"
                strokeDasharray={seg.dashArray}
                strokeDashoffset={seg.dashOffset}
                strokeLinecap="butt"
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-xl font-bold text-[#101B35] leading-none">
              42%
            </span>
            <span className="text-[11px] font-semibold text-slate-500 mt-1">
              Phishing
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
        {DONUT_SEGMENTS.map((seg) => (
          <div
            key={seg.label}
            className="flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${seg.dotClass}`}
              />
              <span className="text-slate-600 truncate">{seg.label}</span>
            </div>
            <span className="font-semibold text-[#101B35] tabular-nums">
              {seg.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThreatActivityChartCard() {
  const [hoveredIdx, setHoveredIdx] = useState(29);

  const width = 360;
  const height = 165;
  const padL = 10;
  const padR = 10;
  const padT = 14;
  const padB = 22;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;
  const maxVal = 105;

  const toX = (i) => padL + (i / (ACTIVITY_DAYS.length - 1)) * chartW;
  const toY = (v) => padT + chartH - (v / maxVal) * chartH;

  const verifiedPath = ACTIVITY_DAYS.map(
    (d, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(d.verified).toFixed(1)}`
  ).join(' ');

  const communityPath = ACTIVITY_DAYS.map(
    (d, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(d.community).toFixed(1)}`
  ).join(' ');

  const verifiedAreaPath = `${verifiedPath} L${toX(ACTIVITY_DAYS.length - 1).toFixed(1)},${toY(0).toFixed(1)} L${toX(0).toFixed(1)},${toY(0).toFixed(1)} Z`;

  const gridLines = [0, 30, 60, 90];
  const xTicks = [
    { i: 0, label: 'Oct 1' },
    { i: 14, label: 'Oct 15' },
    { i: 29, label: 'Oct 30' },
  ];

  const activePoint = ACTIVITY_DAYS[hoveredIdx] || ACTIVITY_DAYS[29];
  const peakDay = ACTIVITY_DAYS[27];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold text-[#101B35]">
            Threat Activity Over Time
          </h2>
          <p className="text-xs text-slate-500">
            30-day verified vs community surge
          </p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center flex-shrink-0">
          <TrendingUp size={16} />
        </div>
      </div>

      {/* Interactive Tooltip Pill */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 flex items-center justify-between text-xs">
        <span className="font-semibold text-[#101B35]">{activePoint.label}</span>
        <div className="flex items-center gap-3">
          <span className="text-[#2563EB] font-semibold">
            Verified: {activePoint.verified}
          </span>
          <span className="text-slate-600 font-semibold">
            Community: {activePoint.community}
          </span>
        </div>
      </div>

      {/* SVG Line Chart */}
      <div className="w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40 overflow-visible">
          <defs>
            <linearGradient id="intelVerifiedGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Gridlines */}
          {gridLines.map((val) => (
            <line
              key={val}
              x1={padL}
              y1={toY(val)}
              x2={width - padR}
              y2={toY(val)}
              stroke="#E2E8F0"
              strokeWidth="1"
            />
          ))}

          {/* Verified gradient area */}
          <path d={verifiedAreaPath} fill="url(#intelVerifiedGrad)" />

          {/* Community line (dashed slate/amber) */}
          <path
            d={communityPath}
            fill="none"
            stroke="#64748B"
            strokeWidth="2"
            strokeDasharray="4,3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Verified line */}
          <path
            d={verifiedPath}
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Peak marker */}
          <circle
            cx={toX(peakDay.day - 1)}
            cy={toY(peakDay.community)}
            r="4"
            fill="#F59E0B"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />

          {/* Hovered guide + dots */}
          <line
            x1={toX(hoveredIdx)}
            y1={padT}
            x2={toX(hoveredIdx)}
            y2={padT + chartH}
            stroke="#CBD5E1"
            strokeDasharray="2,2"
          />
          <circle
            cx={toX(hoveredIdx)}
            cy={toY(activePoint.verified)}
            r="4"
            fill="#2563EB"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          <circle
            cx={toX(hoveredIdx)}
            cy={toY(activePoint.community)}
            r="3.5"
            fill="#64748B"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />

          {/* Invisible hover columns for interactivity */}
          {ACTIVITY_DAYS.map((d, i) => (
            <rect
              key={d.day}
              x={toX(i) - chartW / 60}
              y={padT}
              width={chartW / 30}
              height={chartH}
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIdx(i)}
              onClick={() => setHoveredIdx(i)}
            />
          ))}

          {/* X-axis labels */}
          {xTicks.map(({ i, label }) => (
            <text
              key={label}
              x={toX(i)}
              y={height - 4}
              textAnchor={i === 0 ? 'start' : i === 29 ? 'end' : 'middle'}
              fontSize="10"
              fill="#94A3B8"
            >
              {label}
            </text>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            Verified Threats
          </span>
          <span className="inline-flex items-center gap-1.5 text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
            Community Reports
          </span>
        </div>
        <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
          Peak: {peakDay.label}
        </span>
      </div>
    </div>
  );
}

function GeographicThreatCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold text-[#101B35]">
            Geographic Threat Visualization
          </h2>
          <p className="text-xs text-slate-500">Regional smishing heat clusters</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center flex-shrink-0">
          <MapPin size={16} />
        </div>
      </div>

      {/* Stylized Minimalist SVG Regional Cluster Map */}
      <div className="relative bg-[#F8FAFC] border border-slate-200/70 rounded-xl p-3 overflow-hidden">
        <svg viewBox="0 0 280 180" className="w-full h-36">
          {/* Subtle coordinate grid */}
          {[36, 72, 108, 144].map((y) => (
            <line
              key={`h-${y}`}
              x1="0"
              y1={y}
              x2="280"
              y2={y}
              stroke="#E2E8F0"
              strokeWidth="0.7"
              strokeDasharray="3,3"
            />
          ))}
          {[56, 112, 168, 224].map((x) => (
            <line
              key={`v-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2="180"
              stroke="#E2E8F0"
              strokeWidth="0.7"
              strokeDasharray="3,3"
            />
          ))}

          {/* Stylized regional boundary polygon */}
          <path
            d="M 122 18 L 160 28 L 175 56 L 222 68 L 234 94 L 185 112 L 154 156 L 126 168 L 106 140 L 82 106 L 76 74 L 104 42 Z"
            fill="#EFF6FF"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Connection lines */}
          <line
            x1="138"
            y1="46"
            x2="96"
            y2="102"
            stroke="#93C5FD"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <line
            x1="96"
            y1="102"
            x2="132"
            y2="142"
            stroke="#93C5FD"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <line
            x1="138"
            y1="46"
            x2="204"
            y2="86"
            stroke="#93C5FD"
            strokeWidth="1"
            strokeDasharray="2,2"
          />

          {/* Regional Heat Clusters */}
          {REGIONAL_CLUSTERS.map((cluster) => {
            const fill =
              cluster.severity === 'critical'
                ? '#DC2626'
                : cluster.severity === 'high'
                ? '#2563EB'
                : '#F59E0B';
            return (
              <g key={cluster.id}>
                <circle
                  cx={cluster.cx}
                  cy={cluster.cy}
                  r={cluster.r}
                  fill={fill}
                  fillOpacity="0.16"
                />
                <circle
                  cx={cluster.cx}
                  cy={cluster.cy}
                  r="4.5"
                  fill={fill}
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}
        </svg>

        {/* Regional Callout Chips */}
        <div className="grid grid-cols-2 gap-1.5 mt-2">
          {REGIONAL_CLUSTERS.map((c) => (
            <div
              key={c.id}
              className="bg-white border border-slate-200/70 rounded-lg px-2.5 py-1.5 flex items-center justify-between text-[11px]"
            >
              <span className="font-semibold text-[#101B35] truncate">
                {c.region}
              </span>
              <span
                className={`font-semibold flex-shrink-0 ml-1 ${
                  c.severity === 'critical'
                    ? 'text-[#DC2626]'
                    : c.severity === 'high'
                    ? 'text-[#2563EB]'
                    : 'text-amber-700'
                }`}
              >
                {c.surge.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mandatory Privacy Note */}
      <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 border border-slate-100 rounded-xl p-2.5 leading-snug">
        <Shield size={13} className="text-slate-400 flex-shrink-0 mt-0.5" />
        <span>
          Shown only when reliable data exists — IP geolocation sanitized to preserve reporter privacy
        </span>
      </div>
    </div>
  );
}

/**
 * 3-card Metrics & Analytics Row.
 */
export default function ThreatAnalyticsRow() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      <DonutBreakdownCard />
      <ThreatActivityChartCard />
      <GeographicThreatCard />
    </section>
  );
}
