'use client';

import { useRef, useState } from 'react';
import ReportScamHeader from './ReportScamHeader';
import ReportScamForm from './ReportScamForm';
import SubmissionConfirmationCard from './SubmissionConfirmationCard';
import SandboxTelemetryCard from './SandboxTelemetryCard';
import ReportScamFooter from './ReportScamFooter';

/**
 * ReportAScamPage – two-column orchestrator matching the Report a Scam screen design.
 */
export default function ReportAScamPage() {
  const formRef = useRef(null);
  const confirmationRef = useRef(null);

  const [formKey, setFormKey] = useState(0);
  const [submittedReport, setSubmittedReport] = useState(null);

  const handleSubmitReport = (data) => {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    setSubmittedReport({
      reportId: `REP-${randomDigits}-KW`,
      category: data.category,
    });

    confirmationRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  const handleReportAnother = () => {
    setSubmittedReport(null);
    setFormKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-6 py-6">
      {/* Breadcrumb, Header & Global Telemetry Badge */}
      <ReportScamHeader />

      {/* Main Two-Column Grid (7 cols form, 5 cols outcome + telemetry) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Primary Form Section */}
        <div className="lg:col-span-7">
          <ReportScamForm
            key={formKey}
            formRef={formRef}
            onSubmitReport={handleSubmitReport}
          />
        </div>

        {/* Right Column: Submission Confirmation Preview + Sandbox Telemetry */}
        <aside
          ref={confirmationRef}
          className="lg:col-span-5 flex flex-col gap-6 scroll-mt-24"
        >
          <SubmissionConfirmationCard
            reportId={submittedReport?.reportId || 'REP-93821-KW'}
            isLiveSubmission={Boolean(submittedReport)}
            submittedCategory={submittedReport?.category}
            onReportAnother={handleReportAnother}
          />
          <SandboxTelemetryCard />
        </aside>
      </div>

      {/* Footer Reassurance & Links */}
      <ReportScamFooter />
    </div>
  );
}
