import React from 'react';
import { Shield, Link as LinkIcon, AlertTriangle, ChevronRight, Globe, MessageSquare, Clock, Fingerprint } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Badge from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        {/* Left Column: Content & Form */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-gray-100 border border-gray-100">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-900">
              Public & Enterprise Security
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Stay One Step Ahead of
            <br className="hidden lg:block" />
            Online Scams
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

          <div className="flex items-center gap-2 text-sm mt-2">
            <span className="font-medium text-gray-700 mr-2">Scan mode:</span>

            <label className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-black-600 cursor-pointer hover:bg-gray-200 transition">
              <input
                type="radio"
                name="scanMode"
                value="message"
                className="sr-only peer"
                defaultChecked
              />
              <MessageSquare className="w-4 h-4 text-blue-800 font-bold" />
              <span>Message Scanner</span>
            </label>

            <label className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-black-600 cursor-pointer hover:bg-gray-200 transition">
              <input
                type="radio"
                name="scanMode"
                value="website"
                className="sr-only peer"
              />
              <Globe className="w-4 h-4 text-blue-800 font-bold" />
              <span>Website Scanner</span>
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
            <div className="mb-8 p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-medium text-gray-700 tracking-wider uppercase">
                  Assessed Threat Level
                </span>
                <Badge variant="red" icon={AlertTriangle}>
                  <p className='text-red-700'> High Risk </p>
                </Badge>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-red-700">87</span>
                <span className="text-gray-700 font-medium">/ 100</span>
              </div>
            </div>
            {/* Segmented Risk Meter */}
            <div className="flex flex-col gap-1.5 mt-5">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Safe</span>
                <span>Caution</span>
                <span className="font-semibold text-red-700">High Risk</span>
                <span>Critical</span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 h-2">
                <div className="rounded-full bg-gray-200"></div>
                <div className="rounded-full bg-gray-200"></div>
                <div className="rounded-full bg-red-600"></div>
                <div className="rounded-full bg-gray-200"></div>
              </div>
            </div>

            <div className="space-y-4 mb-6 mt-8">
              {/* Domain Age */}
              <div className="flex justify-between items-start text-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-700" />
                    <span className="text-gray-900 font-medium">Domain Age</span>
                  </div>

                  <p className="ml-6 mt-1 text-gray-600 text-xs">
                    Registered 3 days ago via anonymous registrar
                  </p>
                </div>

                <span className="font-medium text-red-700 whitespace-nowrap">
                  Flagged
                </span>
              </div>

              <div className="h-px bg-gray-100 w-full"></div>

              {/* Brand Mimicry */}
              <div className="flex justify-between items-start text-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <Fingerprint className="w-5 h-5 text-red-700" />
                    <span className="text-gray-900 font-medium">Brand Mimicry</span>
                  </div>

                  <p className="ml-6 mt-1 text-gray-600 text-xs">
                    High confidence spoofing of authentic tier-1 banking portal
                  </p>
                </div>

                <span className="font-medium text-red-700 whitespace-nowrap">
                  High Threat
                </span>
              </div>
              <div className="h-px bg-gray-100 w-full"></div>

              <div className="flex justify-between items-start text-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-700" />
                    <span className="text-gray-900 font-medium">Threat Blacklist</span>
                  </div>

                  <p className="ml-6 mt-1 text-gray-600 text-xs">
                    Active match on 4 global community phishing databases                  </p>
                </div>

                <span className="font-medium text-red-700 whitespace-nowrap">
                  Confirmed
                </span>
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