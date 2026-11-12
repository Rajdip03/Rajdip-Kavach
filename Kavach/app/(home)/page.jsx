import HeroSection from '@/components/landing/HeroSection';
import StatsBar from '@/components/landing/StatsBar';
import HowItWorks from '@/components/landing/HowItWorks';
import ComprehensiveProtection from '@/components/landing/ComprehensiveProtection';
import ThreatAlerts from '@/components/landing/ThreatAlerts';
import SecurityGuides from '@/components/landing/SecurityGuides';
import CtaBanner from '@/components/landing/CtaBanner';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <ComprehensiveProtection />
      <ThreatAlerts />
      <SecurityGuides />
      <CtaBanner />
    </main>
  );
}