import WelcomeHeader from '@/components/dashboard/WelcomeHeader';
import StatCards from '@/components/dashboard/StatCards';
import QuickActions from '@/components/dashboard/QuickActions';
import ScanHistoryChart from '@/components/dashboard/ScanHistoryChart';
import RecentActivityList from '@/components/dashboard/RecentActivityList';
import ThreatAlertsWidget from '@/components/dashboard/ThreatAlertsWidget';
import DefenseTip from '@/components/dashboard/DefenseTip';

export default function OverviewPage() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-8 py-6">
      <WelcomeHeader />
      <StatCards />
      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left column */}
        <section className="lg:col-span-7 flex flex-col gap-6">
          <ScanHistoryChart />
          <RecentActivityList />
        </section>

        {/* Right column */}
        <aside className="lg:col-span-5 flex flex-col gap-6">
          <ThreatAlertsWidget />
          <DefenseTip />
        </aside>
      </div>
    </div>
  );
}
