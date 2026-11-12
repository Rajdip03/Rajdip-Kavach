import React from 'react';
import Link from 'next/link';
import { Shield, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-[#101B35]">Kavach</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-blue-600 transition-colors">Home</Link>
            <Link href="/how-it-works" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">How It Works</Link>
            <Link href="/threat-intelligence" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Threat Intelligence</Link>
            <Link href="/security-guides" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Security Guides</Link>
            <Link href="/login" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Login</Link>
          </nav>

          {/* CTA + Avatar */}
          <div className="flex items-center gap-4">
            <Link
              href="/signup"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get Started
            </Link>
            <div className="w-8 h-8 rounded-full bg-[#101B35] flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
