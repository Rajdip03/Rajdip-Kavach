'use client';

import { useMemo, useRef, useState } from 'react';
import SecurityGuidesHeader from './SecurityGuidesHeader';
import FeaturedGuideCard from './FeaturedGuideCard';
import CorePlaybooksGrid from './CorePlaybooksGrid';
import InDepthGuideReader from './InDepthGuideReader';
import CommunityCtaBanner from './CommunityCtaBanner';
import { CORE_PLAYBOOKS } from './guidesData';

/**
 * SecurityGuidesPage – orchestrates the Security Guides & Playbooks view
 * inside the Kavach dashboard.
 */
export default function SecurityGuidesPage() {
  const readerRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  // Default to the Employment Defense deep-dive matching the UI mockup
  const [activeGuideId, setActiveGuideId] = useState('fake-job-offers');

  const filteredPlaybooks = useMemo(() => {
    return CORE_PLAYBOOKS.filter((guide) => {
      const matchesCategory =
        activeCategory === 'all' || guide.categoryId === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        guide.title.toLowerCase().includes(q) ||
        guide.description.toLowerCase().includes(q) ||
        guide.categoryLabel.toLowerCase().includes(q) ||
        guide.footerTag.toLowerCase().includes(q) ||
        guide.article.title.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, activeCategory]);

  const activeGuide =
    CORE_PLAYBOOKS.find((g) => g.id === activeGuideId) || CORE_PLAYBOOKS[1];

  const handleSelectGuide = (guideId) => {
    setActiveGuideId(guideId);
    readerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-8 py-6">
      {/* Breadcrumb, Header, Search & Category Pills */}
      <SecurityGuidesHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Featured Field Guide Hero */}
      <FeaturedGuideCard onReadFeatured={handleSelectGuide} />

      {/* Core Security Playbooks 6-Card Grid */}
      <CorePlaybooksGrid
        playbooks={filteredPlaybooks}
        activeGuideId={activeGuide.id}
        onSelectGuide={handleSelectGuide}
        onResetFilters={handleResetFilters}
      />

      {/* Interactive In-Depth Guide Reader (key resets checklist when switching guides) */}
      <InDepthGuideReader
        key={activeGuide.id}
        guide={activeGuide}
        readerRef={readerRef}
      />

      {/* Bottom Community CTA Banner */}
      <CommunityCtaBanner />
    </div>
  );
}
