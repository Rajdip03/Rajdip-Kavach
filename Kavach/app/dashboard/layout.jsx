'use client';

import { useState } from 'react';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import DashboardNavbar from '@/components/layout/DashboardNavbar';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F9FB]">
      {/* Sidebar - desktop always visible, mobile overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
      </div>

      <div className={`lg:block ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <DashboardSidebar />
      </div>

      {/* Main area offset by sidebar width on desktop */}
      <div className="lg:pl-72">
        <DashboardNavbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="pt-20 px-6 lg:px-8 pb-12 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
