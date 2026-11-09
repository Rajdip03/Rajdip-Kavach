import React from 'react';
import Link from 'next/link';
import { Shield, User } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-xl tracking-tight text-gray-900">Kavach</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-8">
            <Link href="/Home" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">How it Works</Link>
            <Link href="/threat-intelligence" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Threat Intelligence</Link>
            <Link href="/security-guides" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Security Guides</Link>
          </nav>

          {/* Auth & Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="sm">Get Started</Button>
            </Link>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}