import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Copy, Activity, AlertCircle, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Submit suspicious content",
      description: "Paste any link, email header, or SMS body into our threat inspector for immediate review.",
      icon: Copy
    },
    {
      id: "02",
      title: "Analyze security indicators",
      description: "Multi-vector scan evaluates domain age, spoofing signals, SSL validity, and known threat lists.",
      icon: Activity
    },
    {
      id: "03",
      title: "Understand potential risks",
      description: "View transparent risk scores and clear breakdowns without confusing technical jargon.",
      icon: AlertCircle
    },
    {
      id: "04",
      title: "Take recommended action",
      description: "Follow clear, immediate guidance on what to do next to safeguard your accounts and data.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Simple 4-Step Process</h2>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
        <p className="text-gray-600">A clear, 4-step framework designed for everyday reassurance without technical jargon.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <Card key={step.id} className="relative overflow-hidden group hover:border-blue-100">
            <CardHeader className="flex flex-row justify-between items-start">
              <span className="text-3xl font-black text-gray-100 group-hover:text-blue-600 transition-colors">{step.id}</span>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <step.icon className="w-5 h-5" />
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}