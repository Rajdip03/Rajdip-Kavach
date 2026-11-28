import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Lock } from 'lucide-react';
import AuthBrandPanel from './AuthBrandPanel';
import SignupForm from './SignupForm';

/**
 * Responsive Sign Up page matching the centered split-card UI design.
 * Mobile puts the form first (`order-1 lg:order-2`) above the trust panel (`order-2 lg:order-1`).
 */
export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F8FAFC]">
      {/* Top Header Bar */}
      <header className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
          <span className="text-base font-bold text-[#0F172A] tracking-tight">
            Kawach
          </span>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={15} />
          <span>Back to main site</span>
        </Link>
      </header>

      {/* Main Elevated Split-Card Container */}
      <main className="w-full px-3 sm:px-6 lg:px-8 my-auto">
        <div className="max-w-xl lg:max-w-[1120px] w-full mx-auto my-4 sm:my-8 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/70 border border-slate-200/80 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column — Brand & Trust Panel (5 cols on desktop, second on mobile) */}
            <AuthBrandPanel />

            {/* Right Column — Sign Up Form (7 cols on desktop, first on mobile) */}
            <div className="lg:col-span-7 order-1 lg:order-2 bg-white p-5 sm:p-8 lg:p-12 flex flex-col justify-between">
              {/* Top-Right Helper Link */}
              <div className="text-right mb-6 sm:mb-8">
                <Link
                  href="/"
                  className="text-xs sm:text-sm font-medium text-[#2563EB] hover:underline transition-colors"
                >
                  You can scan without an account. Try instant scanner →
                </Link>
              </div>

              {/* Centered Inner Form */}
              <div className="my-auto w-full">
                <SignupForm />
              </div>

              {/* Card Footer Reassurance */}
              <div className="border-t border-slate-100 mt-8 pt-5 flex items-center justify-center gap-1.5 text-xs text-slate-400 text-center">
                <Lock size={12} className="shrink-0" />
                <span>
                  256-bit encrypted authentication • Plainspoken security reassurance
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Footer Bar */}
      <footer className="border-t border-slate-200/80 w-full">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <div className="inline-flex items-center gap-1.5 text-center">
            <Lock size={12} className="text-slate-400 shrink-0" />
            <span>
              256-bit encrypted authentication • Kawach Personal Defense
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/how-it-works"
              className="hover:text-slate-900 transition-colors"
            >
              Security Standards
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-slate-900 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
