import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { AlertTriangle, ExternalLink, Globe } from 'lucide-react';

export default function ThreatAlerts() {
  const threats = [
    {
      category: "DELIVERY SCAM",
      title: "Fake Postal Package Reschedule SMS",
      description: "Fraudulent text messages claiming an undelivered parcel, demanding a $1.99 redelivery fee to harvest card numbers.",
      time: "Updated 2 hours ago",
      risk: "High Risk"
    },
    {
      category: "JOB OFFER FRAUD",
      title: "Remote Data Entry Payment Scheme",
      description: "Unsolicited WhatsApp offers directing victims to deposit crypto as 'equipment collateral' before employment start.",
      time: "Updated 5 hours ago",
      risk: "High Risk"
    },
    {
      category: "BANKING PHISHING",
      title: "Urgent Account Suspension Alerts",
      description: "Mass emails mimicking leading banks send via spoofed caller ID urging immediate password confirmation.",
      time: "Updated 12 hours ago",
      risk: "High Risk"
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Live Threat Feed
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Recent Threat Alerts</h3>
          <p className="text-gray-600">Real-time updates on active scam campaigns spotted across the digital ecosystem.</p>
        </div>
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
          View All Threats <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {threats.map((threat, idx) => (
          <Card key={idx} className="flex flex-col h-full border-l-4 border-l-red-500">
            <CardContent className="pt-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{threat.category}</span>
                <Badge variant="red" icon={AlertTriangle}>{threat.risk}</Badge>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{threat.title}</h4>
              <p className="text-sm text-gray-500 line-clamp-3 mb-6">{threat.description}</p>
            </CardContent>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center rounded-b-xl">
              <span className="text-xs text-gray-400 font-medium">{threat.time}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}