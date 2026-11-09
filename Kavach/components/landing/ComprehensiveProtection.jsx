import React from 'react';
import {Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Link2, ShieldAlert, MessageSquareWarning, GlobeLock, FileWarning, Lightbulb } from 'lucide-react';

export default function ComprehensiveProtection() {
  const features = [
    {
      title: "URL Scanner",
      description: "Deep link inspections checking hidden redirect chains, blacklisted destination IPs, and malicious payloads before navigation.",
      icon: Link2,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Phishing Detection",
      description: "AI pattern matching against impersonated bank portals, fake delivery notices, and API-driven credential harvest forms.",
      icon: ShieldAlert,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Message Analysis",
      description: "Paste suspicious SMS, WhatsApp messages, or email bodies to uncover hidden psychological urgency tactics and manipulation.",
      icon: MessageSquareWarning,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Website Trust Checker",
      description: "Real-time domain scans to check registration longevity, corporate ownership transparency, and SSL certificate history.",
      icon: GlobeLock,
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      title: "Scam Reporting",
      description: "Contribute verified threats and remarks, helping shield the broader community against rapid emergent fraud waves.",
      icon: FileWarning,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Security Awareness",
      description: "Bite-sized visual guides on identifying deepfake financials, advance-fee schemes, and rogue browser extensions.",
      icon: Lightbulb,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Full Spectrum Defense</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Protection</h3>
          <p className="text-gray-600">Every tool you need to verify authenticity before you click, reply, or share credentials.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${feature.bgColor} ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}