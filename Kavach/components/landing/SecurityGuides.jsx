import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const guides = [
  {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeOJ_lBIu41g-eQzNcoMq32wFpvPA3IO8GZo-uM-Bmwghvt_fTEj-ZlK9_wkjfTGCmMrh0WjE1cTTCueUxWpfDy4awNqt2EIkxQvLa35L5wf8QMvMgcPkDWVAGKzzO_8_aoRQNQh6n0dwcy6pBnselveEeGIRNAKpqi-e3E2GtVgU7xIUh3mvE467BPw_7JVIKd-84E5J3_-NiTmnlp1pg6HDG9cOsHMyDgJEZtRA',
    tag: 'Phishing',
    readTime: '4 min read',
    title: 'The 5 Anatomy Signs of an Urgent Phishing Email',
    excerpt: 'Unpack artificial deadlines, subtle domain misspellings, and signature mismatches commonly deployed by bad actors.',
    slug: 'anatomy-of-phishing',
  },
  {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsuTYXjfzg3CJGrKDnha0cItB3Sk4PlazxKIMZYGXx5Idx23cUXxt0-PuwbDS4OlOjBP1IpR9J5Uxa-BOteWw2ILP5LbM2hoCjzpd9M9ov0sud3fd-LBofXG5kiRRX2g5aHfN6iw4d3KGaHdAdE_kY1hF4-jM8u-fGGa8uMpNV9GQeGuF-IBd-Z3Sn-IxRFVGVl8WJh62mLxZmcUVdo9qXBoT7HL1ExUJjNuTcByo',
    tag: 'Employment Scams',
    readTime: '6 min read',
    title: 'Fake Remote Job Offers: What Real Companies Will Never Ask',
    excerpt: 'Understand standard hiring processes versus fraudulent requests for upfront equipment deposits or unauthorized background fee transfers.',
    slug: 'fake-job-offers',
  },
  {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcsDeySbCtk4TyxRPujOSz9R04FW9-3Otz6vmC0Fw9fCbrZSm1jyUkPOokfBA2Uy1thhjBIInWjUIebcB08gUtigA1STHZxc4KAKdDy3LDUJY6soezgz2VT779vVaVlyOsI8hszBrDRa4aEAk8TSus3jque2FjX5fRQOOybx56Zfl2iks-kwbD7TKWtItRe1nCEqJNusvy179W6fpY4KbttTbncIVHIFswerilxcc',
    tag: 'Payment Safety',
    readTime: '5 min read',
    title: 'How to Tell if a Payment Link or QR Code is Genuine',
    excerpt: 'Check gateway SSL credentials, detect shortened URL disguises, and verify secure payment redirects before authorizing.',
    slug: 'payment-link-safety',
  },
];

export default function SecurityGuides() {
  return (
    <section className="w-full py-16 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Knowledge Base</span>
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Security Guides &amp; Education</h2>
          <p className="text-base text-slate-500">Learn how to spot manipulative tactics before scammers make their move.</p>
        </div>

        {/* Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <div key={idx} className="group flex flex-col rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md overflow-hidden transition-all">
              {/* Image */}
              <div className="relative w-full h-44 bg-slate-100 overflow-hidden">
                <img
                  src={guide.imageUrl}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-800">
                  {guide.tag}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 gap-2 flex-1">
                <span className="text-xs text-slate-400">{guide.readTime}</span>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {guide.title}
                </h3>
                <p className="text-sm text-slate-500 flex-1 leading-relaxed">{guide.excerpt}</p>
                <Link
                  href={`/security-guides/${guide.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 pt-2"
                >
                  Read Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
