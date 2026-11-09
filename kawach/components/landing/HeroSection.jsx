import React from 'react';
import { Shield, Link as LinkIcon, AlertTriangle, ChevronRight, Globe, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Badge from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Content & Form */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start">
            <Badge variant="blue" icon={Shield}>Public & Enterprise Security</Badge>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Stay One Step Ahead of <br className="hidden lg:block" /> Online Scams.
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Analyze suspicious links, messages, and websites before they put your digital safety at risk. Real-time threat evaluation, designed for everyday reassurance.
          </p>
          
          <div className="mt-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-2">
            <Input 
              icon={LinkIcon} 
              placeholder="https://secure-login-verify-byp.com" 
              className="border-none shadow-none focus:ring-0"
            />
            <Button variant="primary" className="whitespace-nowrap rounded-xl">
              Analyze <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 mt-2">
            <span className="font-medium text-gray-700">Scan mode:</span>
            <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
              <input type="radio" name="scanMode" className="w-4 h-4 text-blue-600 focus:ring-blue-500" defaultChecked />
              <MessageSquare className="w-4 h-4" /> Message Scanner
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
              <input type="radio" name="scanMode" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
              <Globe className="w-4 h-4" /> Website Scanner
            </label>
          </div>
          
          <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-2">
            <Shield className="w-3.5 h-3.5" /> No account needed. Scanning is strictly confidential.
          </p>
        </div>

        {/* Right Column: Floating Mockup */}
        <div className="relative lg:pl-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
          <Card className="p-6 shadow-xl border-0 ring-1 ring-gray-900/5">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">Threat Level</span>
              <Badge variant="red" icon={AlertTriangle}>High Risk</Badge>
            </div>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-red-600">87</span>
              <span className="text-gray-400 font-medium">/ 100</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 flex items-center gap-2"><Globe className="w-4 h-4 text-red-500"/> Domain Age</span>
                <span className="font-medium text-gray-900">Registered 2 days ago</span>
              </div>
              <div className="h-px bg-gray-100 w-full"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 flex items-center gap-2"><Shield className="w-4 h-4 text-orange-500"/> Brand Mimicry</span>
                <span className="font-medium text-gray-900">High match (PayPal)</span>
              </div>
            </div>

            <div className="bg-[#0B1B3D] text-white p-4 rounded-xl">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Phishing Guidance</h4>
                  <p className="text-xs text-blue-100 leading-relaxed">Do not provide credentials or payment information. Close this page immediately and verify your accounts directly.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
}