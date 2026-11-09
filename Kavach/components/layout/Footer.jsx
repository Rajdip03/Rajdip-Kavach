import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-lg text-gray-900">Kavach</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              An AI-powered security companion providing real-time threat detection and actionable recommendations for everyday digital communications.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link href="/help-center" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Legal & Privacy</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Bottom Bar */}
        <div className="pt-8 border-t border-gray-100">
          <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
            <Shield className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Security Warning:</strong> The internet is constantly evolving, and no security guarantee is absolute. Always exercise caution and verify independently when providing sensitive information or personal details.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}