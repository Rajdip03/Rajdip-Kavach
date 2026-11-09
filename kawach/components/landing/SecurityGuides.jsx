import React from 'react';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function SecurityGuides() {
  const guides = [
    {
      image: "bg-gray-200", // Replace with actual image classes or <Image /> tag
      readTime: "5 min read",
      title: "The 5 Anatomy Signs of an Urgent Phishing Email",
      excerpt: "Analyze email header spoofing, subtle domain misspellings, and urgency principles commonly deployed by bad actors.",
      slug: "anatomy-of-phishing"
    },
    {
      image: "bg-gray-300", 
      readTime: "7 min read",
      title: "Fake Remote Job Offers: What Real Companies Will Never Ask",
      excerpt: "Understand standard hiring procedures versus fraudulent requests for upfront equipment deposits or unauthorized background fee transfers.",
      slug: "fake-job-offers"
    },
    {
      image: "bg-gray-200", 
      readTime: "4 min read",
      title: "How to Tell if a Payment Link or QR Code is Genuine",
      excerpt: "Cross-gateway URL verification, visual QR inspection, and safe vendor payment methods before authorizing.",
      slug: "payment-link-safety"
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Knowledge Base</h2>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Security Guides & Education</h3>
        <p className="text-gray-600">Learn how to spot manipulation tactics before a scammer makes their move.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {guides.map((guide, idx) => (
          <Card key={idx} className="overflow-hidden flex flex-col group cursor-pointer border-0 ring-1 ring-gray-200 hover:ring-blue-300 transition-all">
            {/* Image Placeholder */}
            <div className={`w-full h-48 ${guide.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 mb-3">
                <Clock className="w-3.5 h-3.5" /> {guide.readTime}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                {guide.title}
              </h4>
              <p className="text-sm text-gray-500 mb-6 flex-grow">{guide.excerpt}</p>
              
              <Link href={`/security-guides/${guide.slug}`} className="inline-flex items-center text-sm font-bold text-blue-600 group-hover:gap-2 transition-all">
                Read Guide <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}