'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  ScanLine,
  History,
  Flag,
  Shield,
  BookOpen,
  Settings,
  ShieldCheck,
} from 'lucide-react';

const navItems = [
  { label: 'Overview', icon: LayoutGrid, href: '/dashboard/overview' },
  { label: 'Scan Center', icon: ScanLine, href: '/dashboard/scan-center' },
  { label: 'Scan History', icon: History, href: '/dashboard/scan-history' },
  { label: 'Report a Scam', icon: Flag, href: '/dashboard/report-a-scam' },
  { label: 'Threat Intelligence', icon: Shield, href: '/dashboard/threat-intelligence' },
  { label: 'Security Guides', icon: BookOpen, href: '/dashboard/security-guides' },
  { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-[#101B35] z-50 flex flex-col">
      {/* Logo */}
      <div className="h-20 px-6 flex items-center gap-3 border-b border-white/10">
        <div className="w-9 h-9 bg-[#0051D5] rounded-lg flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-white font-semibold text-base leading-tight">Kavach</p>
          <p className="text-[#7983A3] text-xs leading-tight">Personal Defense</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <p className="text-[#7983A3] text-[11px] font-semibold uppercase tracking-wider mb-4 px-2">
          Platform Navigation
        </p>
        <ul className="flex flex-col gap-1">
          {navItems.map(({ label, icon: Icon, href }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#0051D5] text-white'
                      : 'text-[#BBC6E8] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5 flex-shrink-0" size={18} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom status */}
      <div className="px-4 pb-6">
        <div className="bg-[#161D23] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white text-xs font-semibold">Shield Active</span>
          </div>
          <p className="text-[#7983A3] text-xs">Live threat monitoring enabled</p>
        </div>
      </div>
    </aside>
  );
}
