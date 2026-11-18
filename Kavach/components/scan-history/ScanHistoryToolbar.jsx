'use client';

import { Search, ChevronDown, Calendar, ArrowUpDown, RotateCcw } from 'lucide-react';

/**
 * Filter and search toolbar for Scan History.
 */
export default function ScanHistoryToolbar({
  searchQuery,
  onSearchChange,
  scanTypeFilter,
  onScanTypeChange,
  riskFilter,
  onRiskChange,
  dateRange,
  onDateRangeChange,
  sortBy,
  onSortByChange,
  totalCount,
  filteredCount,
  onResetFilters,
  isFiltered,
}) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-3.5">
      {/* Controls Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
        {/* Search Input */}
        <div className="lg:col-span-4 relative flex items-center">
          <Search className="absolute left-3.5 text-slate-400 w-4 h-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Filter by domain, phone, or keyword..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0051D5]/30 focus:border-[#0051D5] focus:bg-white transition-all shadow-sm"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="lg:col-span-8 flex flex-wrap items-center gap-2.5 justify-start lg:justify-end">
          {/* Scan Type Filter */}
          <div className="relative">
            <select
              value={scanTypeFilter}
              onChange={(e) => onScanTypeChange(e.target.value)}
              aria-label="Scan Type"
              className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0051D5]/30 cursor-pointer transition-colors"
            >
              <option value="all">Scan Type: All Types</option>
              <option value="URL">URL Scanner</option>
              <option value="Message">SMS / Message</option>
              <option value="Website">Website Checker</option>
              <option value="Job Offer">Job Offer</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>

          {/* Risk Level Filter */}
          <div className="relative">
            <select
              value={riskFilter}
              onChange={(e) => onRiskChange(e.target.value)}
              aria-label="Risk Level"
              className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0051D5]/30 cursor-pointer transition-colors"
            >
              <option value="all">Risk Level: All Levels</option>
              <option value="low">Safe (0-30)</option>
              <option value="medium">Caution (31-65)</option>
              <option value="high">High Risk (66-89)</option>
              <option value="critical">Critical (90+)</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>

          {/* Date Range Filter */}
          <div className="relative">
            <div className="flex items-center">
              <Calendar className="absolute left-3 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <select
                value={dateRange}
                onChange={(e) => onDateRangeChange(e.target.value)}
                aria-label="Date Range"
                className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl pl-8 pr-8 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0051D5]/30 cursor-pointer transition-colors"
              >
                <option value="today">Date Range: Today</option>
                <option value="7days">Date Range: Last 7 Days</option>
                <option value="30days">Date Range: Last 30 Days</option>
                <option value="90days">Date Range: Last 90 Days</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <ArrowUpDown className="absolute left-3 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => onSortByChange(e.target.value)}
                aria-label="Sort Order"
                className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl pl-8 pr-8 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0051D5]/30 cursor-pointer transition-colors"
              >
                <option value="newest">Sort by: Newest First</option>
                <option value="oldest">Sort by: Oldest First</option>
                <option value="highest_risk">Sort by: Highest Risk</option>
                <option value="lowest_risk">Sort by: Lowest Risk</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Filter Tags / Count Indicator */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
        <div className="flex items-center gap-2 text-slate-500">
          <span className="font-medium">
            {isFiltered
              ? `Showing ${filteredCount} of ${totalCount} total scans`
              : `Showing ${totalCount} total scans`}
          </span>
          {isFiltered && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 text-[#0051D5] font-semibold text-[11px]">
              Filters Active
            </span>
          )}
        </div>

        {isFiltered && (
          <button
            type="button"
            onClick={onResetFilters}
            className="text-[#0051D5] hover:text-[#003EA8] font-semibold text-xs inline-flex items-center gap-1 transition-colors"
          >
            <RotateCcw size={12} />
            <span>Reset filters</span>
          </button>
        )}
      </div>
    </div>
  );
}
