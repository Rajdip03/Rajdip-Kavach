'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Check,
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  MailCheck,
} from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 shrink-0"
      viewBox="0 0 24 24"
    >
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
      />
    </svg>
  );
}

/**
 * Interactive Login form with real-time validation, inline error alert box,
 * password visibility toggle, Remember device checkbox, Forgot Password flow, and Google SSO.
 */
export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [forgotMode, setForgotMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const trimmedEmail = email.trim();
  const isEmailValid = EMAIL_REGEX.test(trimmedEmail);
  const isPasswordValid = password.trim().length > 0;
  const isFormValid = isEmailValid && isPasswordValid;

  const emailError =
    touched.email && !isEmailValid
      ? 'Please enter a valid email address.'
      : '';
  const passwordError =
    touched.password && !isPasswordValid
      ? 'Please enter your account password.'
      : '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    setTouched({ email: true, password: true });

    if (!isFormValid) {
      setAuthError(
        'Please check the highlighted fields and provide both a valid email and password.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      // Ready to connect to /api/auth/login
      await new Promise((resolve) => setTimeout(resolve, 850));
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/dashboard/overview');
      }, 1000);
    } catch {
      setAuthError(
        'We could not sign you in right now. Please verify your credentials and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSSO = async () => {
    setAuthError('');
    setIsGoogleLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 750));
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/dashboard/overview');
      }, 900);
    } catch {
      setAuthError('Google sign-in could not be completed. Please try again.');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    setTouched((t) => ({ ...t, email: true }));
    if (!isEmailValid) {
      setAuthError('Enter a valid email address to receive your password reset link.');
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setIsSubmitting(false);
    setResetSent(true);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md w-full mx-auto py-8 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center">
          <ShieldCheck size={28} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Signed in successfully
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          Syncing your saved threat telemetry and alerts. Opening your dashboard...
        </p>
        <Link
          href="/dashboard/overview"
          className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 px-5 rounded-[10px] text-sm font-semibold transition-colors"
        >
          <span>Open Dashboard</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  if (forgotMode) {
    return (
      <div className="max-w-md w-full mx-auto flex flex-col">
        <div>
          <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight leading-tight">
            Reset your password
          </h2>
          <p className="text-sm text-slate-500 mt-1.5 mb-6">
            Enter the email associated with your Kavach account and we&apos;ll send a secure recovery link.
          </p>
        </div>

        {authError && (
          <div
            role="alert"
            className="mb-4 bg-[#FEF2F2] border border-[#FECACA] text-[#DC2626] rounded-[10px] p-3.5 flex items-start gap-2.5 text-xs font-medium"
          >
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>{authError}</span>
          </div>
        )}

        {resetSent ? (
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[#0051D5] font-semibold text-sm">
              <MailCheck size={18} />
              <span>Recovery link dispatched</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              If an account exists for <strong className="text-slate-900">{trimmedEmail}</strong>, you will receive password reset instructions within a minute.
            </p>
            <button
              type="button"
              onClick={() => {
                setForgotMode(false);
                setResetSent(false);
                setAuthError('');
              }}
              className="mt-1 self-start text-xs font-semibold text-[#2563EB] hover:underline"
            >
              ← Return to Log in
            </button>
          </div>
        ) : (
          <form onSubmit={handleForgotSubmit} noValidate className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="reset-email"
                className="text-sm font-semibold text-slate-800"
              >
                Email Address
              </label>
              <input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah.jenkins@example.com"
                className="w-full min-h-[44px] h-11 bg-white border border-[#E2E8F0] rounded-[10px] py-2.5 px-3.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm rounded-[10px] py-3 px-5 inline-flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Sending reset link...</span>
                </>
              ) : (
                <span>Send recovery link</span>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setForgotMode(false);
                setAuthError('');
              }}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 text-center pt-1"
            >
              ← Back to Log in
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto flex flex-col">
      {/* Form Header */}
      <div>
        <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight leading-tight">
          Welcome back
        </h2>
        <p className="text-sm text-slate-500 mt-1.5 mb-6">
          Log in to your Kavach account
        </p>
      </div>

      {/* Friendly Inline Alert / Error State */}
      {authError && (
        <div
          role="alert"
          className="mb-4 bg-[#FEF2F2] border border-[#FECACA] text-[#DC2626] rounded-[10px] p-3.5 flex items-start gap-2.5 text-xs font-medium"
        >
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>{authError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {/* 1. Email Address */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="login-email"
            className="text-sm font-semibold text-slate-800"
          >
            Email Address
          </label>
          <div className="relative flex items-center">
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (authError) setAuthError('');
              }}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              placeholder="sarah.jenkins@example.com"
              aria-invalid={Boolean(emailError)}
              aria-describedby={emailError ? 'login-email-error' : undefined}
              className={`w-full min-h-[44px] h-11 bg-white border rounded-[10px] py-2.5 px-3.5 pr-10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all ${
                emailError ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
              }`}
            />
            {isEmailValid && (
              <span
                aria-label="Valid email format"
                className="absolute right-3 w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center pointer-events-none"
              >
                <Check size={12} strokeWidth={3} />
              </span>
            )}
          </div>
          {emailError && (
            <p
              id="login-email-error"
              className="text-xs font-medium text-[#DC2626]"
            >
              {emailError}
            </p>
          )}
        </div>

        {/* 2. Password */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="login-password"
            className="text-sm font-semibold text-slate-800"
          >
            Password
          </label>
          <div className="relative flex items-center">
            <input
              id="login-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (authError) setAuthError('');
              }}
              onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              placeholder="Enter your password"
              aria-invalid={Boolean(passwordError)}
              aria-describedby={passwordError ? 'login-password-error' : undefined}
              className={`w-full min-h-[44px] h-11 bg-white border rounded-[10px] py-2.5 px-3.5 pr-11 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all ${
                passwordError ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-3 p-1 rounded-md text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
          {passwordError && (
            <p
              id="login-password-error"
              className="text-xs font-medium text-[#DC2626]"
            >
              {passwordError}
            </p>
          )}
        </div>

        {/* 3. Utility Row */}
        <div className="flex flex-wrap justify-between items-center gap-2 pt-0.5">
          <label
            htmlFor="login-remember"
            className="inline-flex items-center gap-2 cursor-pointer select-none"
          >
            <input
              id="login-remember"
              type="checkbox"
              checked={rememberDevice}
              onChange={(e) => setRememberDevice(e.target.checked)}
              className="w-4 h-4 rounded border-[#CBD5E1] text-[#2563EB] accent-[#2563EB] focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
            />
            <span className="text-xs sm:text-sm text-slate-600">
              Remember this device
            </span>
          </label>

          <button
            type="button"
            onClick={() => {
              setForgotMode(true);
              setAuthError('');
            }}
            className="text-xs sm:text-sm font-medium text-[#2563EB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded"
          >
            Forgot password?
          </button>
        </div>

        {/* Primary Action Button */}
        <button
          type="submit"
          disabled={isSubmitting || isGoogleLoading}
          className="mt-1 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm rounded-[10px] py-3 px-5 inline-flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Logging in...</span>
            </>
          ) : (
            <span>Log in</span>
          )}
        </button>
      </form>

      {/* Social Login Divider */}
      <div className="relative my-5 flex items-center">
        <div className="flex-grow border-t border-slate-200" />
        <span className="mx-3 text-xs font-medium text-slate-400">
          or continue with
        </span>
        <div className="flex-grow border-t border-slate-200" />
      </div>

      {/* Google SSO Button */}
      <button
        type="button"
        onClick={handleGoogleSSO}
        disabled={isSubmitting || isGoogleLoading}
        className="w-full min-h-[44px] bg-white border border-slate-200 hover:bg-slate-50 rounded-[10px] py-2.5 px-4 inline-flex items-center justify-center gap-2.5 text-sm font-semibold text-slate-700 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isGoogleLoading ? (
          <>
            <Loader2 size={16} className="animate-spin text-slate-500" />
            <span>Connecting Google...</span>
          </>
        ) : (
          <>
            <GoogleIcon />
            <span>Continue with Google</span>
          </>
        )}
      </button>

      {/* Footer Sign Up Link */}
      <p className="text-sm text-slate-600 mt-5 text-center">
        Don&apos;t have an account?{' '}
        <Link
          href="/signup"
          className="text-[#2563EB] font-semibold hover:underline transition-colors"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
