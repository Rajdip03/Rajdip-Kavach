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
} from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function evaluatePassword(password) {
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const hasUpperOrLowerMix =
    /[a-z]/.test(password) && /[A-Z]/.test(password);

  let score = 0;
  if (hasMinLength) score += 1;
  if (hasNumber) score += 1;
  if (hasSpecial) score += 1;
  if (
    hasMinLength &&
    hasNumber &&
    hasSpecial &&
    (hasUpperOrLowerMix || password.length >= 12)
  ) {
    score = 4;
  }

  let label = 'Unrated';
  let labelColor = 'text-slate-400';
  let activeBarClass = 'bg-slate-200';

  if (password.length > 0) {
    if (score <= 1) {
      label = 'Weak';
      labelColor = 'text-[#DC2626]';
      activeBarClass = 'bg-[#DC2626]';
    } else if (score === 2) {
      label = 'Fair';
      labelColor = 'text-[#D97706]';
      activeBarClass = 'bg-[#F59E0B]';
    } else if (score === 3) {
      label = 'Good';
      labelColor = 'text-[#2563EB]';
      activeBarClass = 'bg-[#2563EB]';
    } else {
      label = 'Strong';
      labelColor = 'text-[#2563EB]';
      activeBarClass = 'bg-[#2563EB]';
    }
  }

  return {
    hasMinLength,
    hasNumber,
    hasSpecial,
    score,
    label,
    labelColor,
    activeBarClass,
    isAcceptable: hasMinLength && hasNumber && hasSpecial,
  };
}

/**
 * Interactive Sign Up form with real-time validation, live 4-segment security rating meter,
 * accessibility labels, loading state, and clean API-ready submission handler.
 */
export default function SignupForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    password: false,
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const trimmedName = fullName.trim();
  const isNameValid = trimmedName.length >= 2 && /[A-Za-z]/.test(trimmedName);

  const trimmedEmail = email.trim();
  const isEmailValid = EMAIL_REGEX.test(trimmedEmail);

  const passwordMetrics = evaluatePassword(password);
  const isFormValid =
    isNameValid &&
    isEmailValid &&
    passwordMetrics.isAcceptable &&
    agreedToTerms;

  const nameError =
    touched.fullName && !isNameValid
      ? 'Please enter your full name (at least 2 characters).'
      : '';
  const emailError =
    touched.email && !isEmailValid
      ? 'Please enter a valid email address.'
      : '';
  const passwordError =
    touched.password && !passwordMetrics.isAcceptable
      ? 'Password must include 8+ characters, 1 number, and 1 special character.'
      : '';
  const termsError =
    touched.terms && !agreedToTerms
      ? 'Please accept the Terms of Service and Privacy Policy to continue.'
      : '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setTouched({
      fullName: true,
      email: true,
      password: true,
      terms: true,
    });

    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/dashboard/overview');
      }, 1200);
    } catch {
      setSubmitError(
        'Unable to create your account right now. Please try again in a moment.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-md w-full mx-auto py-8 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center">
          <ShieldCheck size={28} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Welcome to Kawach, {trimmedName.split(' ')[0]}
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          Your personal defense perimeter is ready. Redirecting you to your dashboard now...
        </p>
        <Link
          href="/dashboard/overview"
          className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white py-3 px-5 rounded-[10px] text-sm font-semibold transition-colors"
        >
          <span>Go to Dashboard</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto flex flex-col">
      {/* Form Header */}
      <div>
        <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight leading-tight">
          Create your Kawach account
        </h2>
        <p className="text-sm text-slate-500 mt-1.5 mb-6">
          Start protecting your digital communications in under a minute.
        </p>
      </div>

      {/* Submission Error Alert */}
      {submitError && (
        <div
          role="alert"
          className="mb-4 bg-[#FEF2F2] border border-[#FECACA] text-[#DC2626] rounded-[10px] p-3 flex items-start gap-2 text-xs font-medium"
        >
          <AlertCircle size={15} className="shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {/* 1. Full Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="signup-fullname"
            className="text-sm font-semibold text-slate-800"
          >
            Full Name
          </label>
          <div className="relative flex items-center">
            <input
              id="signup-fullname"
              name="fullName"
              type="text"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
              placeholder="Sarah Jenkins"
              aria-invalid={Boolean(nameError)}
              aria-describedby={nameError ? 'signup-fullname-error' : undefined}
              className={`w-full min-h-[44px] h-11 bg-white border rounded-[10px] py-2.5 px-3.5 pr-10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all ${
                nameError ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
              }`}
            />
            {isNameValid && (
              <span
                aria-label="Valid full name"
                className="absolute right-3 w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center pointer-events-none"
              >
                <Check size={12} strokeWidth={3} />
              </span>
            )}
          </div>
          {nameError && (
            <p
              id="signup-fullname-error"
              className="text-xs font-medium text-[#DC2626]"
            >
              {nameError}
            </p>
          )}
        </div>

        {/* 2. Email Address */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="signup-email"
            className="text-sm font-semibold text-slate-800"
          >
            Email Address
          </label>
          <div className="relative flex items-center">
            <input
              id="signup-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              placeholder="sarah.jenkins@example.com"
              aria-invalid={Boolean(emailError)}
              aria-describedby={emailError ? 'signup-email-error' : undefined}
              className={`w-full min-h-[44px] h-11 bg-white border rounded-[10px] py-2.5 px-3.5 pr-10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all ${
                emailError ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
              }`}
            />
            {isEmailValid && (
              <span
                aria-label="Valid email address"
                className="absolute right-3 w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center pointer-events-none"
              >
                <Check size={12} strokeWidth={3} />
              </span>
            )}
          </div>
          {emailError && (
            <p
              id="signup-email-error"
              className="text-xs font-medium text-[#DC2626]"
            >
              {emailError}
            </p>
          )}
        </div>

        {/* 3. Password + Security Rating Meter */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <label
              htmlFor="signup-password"
              className="text-sm font-semibold text-slate-800"
            >
              Password
            </label>
            <span className="text-xs text-slate-400">Confidential</span>
          </div>

          <div className="relative flex items-center">
            <input
              id="signup-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              placeholder="Create a strong password"
              aria-invalid={Boolean(passwordError)}
              aria-describedby="signup-password-hints"
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

          {/* Live Security Rating Meter */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center text-xs mt-2.5">
              <span className="text-slate-500">Security rating</span>
              <span
                className={`inline-flex items-center gap-1 font-semibold ${passwordMetrics.labelColor}`}
              >
                {password.length > 0 && <ShieldCheck size={13} />}
                {passwordMetrics.label}
              </span>
            </div>

            <div
              aria-label={`Security rating: ${passwordMetrics.label}`}
              className="grid grid-cols-4 gap-1.5 mt-1.5"
            >
              {[1, 2, 3, 4].map((segment) => (
                <div
                  key={segment}
                  className={`h-1.5 rounded-full transition-colors duration-200 ${
                    password.length > 0 && segment <= passwordMetrics.score
                      ? passwordMetrics.activeBarClass
                      : 'bg-[#E2E8F0]'
                  }`}
                />
              ))}
            </div>

            <div
              id="signup-password-hints"
              className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs"
            >
              {[
                { met: passwordMetrics.hasMinLength, text: '8+ characters' },
                { met: passwordMetrics.hasNumber, text: '1 number' },
                { met: passwordMetrics.hasSpecial, text: '1 special character' },
              ].map((rule) => (
                <span
                  key={rule.text}
                  className={`inline-flex items-center gap-1 font-medium transition-colors ${
                    rule.met ? 'text-[#2563EB]' : 'text-slate-400'
                  }`}
                >
                  <Check
                    size={12}
                    strokeWidth={2.5}
                    className={rule.met ? 'text-[#2563EB]' : 'text-slate-300'}
                  />
                  {rule.text}
                </span>
              ))}
            </div>
          </div>

          {passwordError && (
            <p className="text-xs font-medium text-[#DC2626] mt-0.5">
              {passwordError}
            </p>
          )}
        </div>

        {/* 4. Terms Checkbox */}
        <div className="flex flex-col gap-1 pt-1">
          <label
            htmlFor="signup-terms"
            className="flex items-start gap-2.5 cursor-pointer select-none"
          >
            <input
              id="signup-terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => {
                setAgreedToTerms(e.target.checked);
                setTouched((t) => ({ ...t, terms: true }));
              }}
              className="mt-0.5 w-4 h-4 rounded border-[#CBD5E1] text-[#2563EB] accent-[#2563EB] focus:ring-2 focus:ring-[#2563EB] cursor-pointer shrink-0"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              I agree to the{' '}
              <Link
                href="/terms-of-service"
                className="font-medium text-[#2563EB] hover:underline"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy-policy"
                className="font-medium text-[#2563EB] hover:underline"
              >
                Privacy Policy
              </Link>
              . I understand scam risk assessments provide probabilistic safety guidance.
            </span>
          </label>
          {termsError && (
            <p className="text-xs font-medium text-[#DC2626] pl-6">
              {termsError}
            </p>
          )}
        </div>

        {/* Primary Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          aria-disabled={!isFormValid || isSubmitting}
          className="mt-1 w-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-sm rounded-[10px] py-3 px-5 inline-flex items-center justify-center gap-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Creating account...</span>
            </>
          ) : (
            <>
              <span>Create account</span>
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </form>

      {/* Secondary Login Link */}
      <p className="text-sm text-slate-600 mt-5 text-center">
        Already have an account?{' '}
        <Link
          href="/login"
          className="text-[#2563EB] font-semibold hover:underline transition-colors"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
