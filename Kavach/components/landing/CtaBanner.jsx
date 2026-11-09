import React from 'react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { ShieldCheck, CheckCircle2, Lock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-24">
      <div className="bg-[#0B1B3D] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <Badge variant="blue" icon={ShieldCheck} className="bg-blue-500/10 text-blue-300 border-blue-500/20 mb-8">
            Zero Setup Required
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Don't let a suspicious message cost you peace of mind.
          </h2>
          
          <p className="text-lg text-blue-200 mb-10 max-w-xl">
            Run a free scan right now on any link, email header, or mobile text.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <Link href="/signup">
              <Button variant="primary" size="lg" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white border-0">
                Start Free Scan
              </Button>
            </Link>
            <Link href="/threat-intelligence">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-blue-400/30 text-blue-100 hover:bg-blue-800/50 hover:text-white">
                Browse Threat Database
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-blue-300 font-medium">
            <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-blue-400" /> 100% Private</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> No Account Required</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-blue-400" /> Real-Time Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}