'use client';

import { useRef, useState } from 'react';
import {
  ChevronDown,
  Network,
  Link2,
  UploadCloud,
  FileImage,
  FileText,
  CheckCircle2,
  Trash2,
  User,
  Mail,
  Lock,
  Send,
  Check,
} from 'lucide-react';

const SCAM_CATEGORIES = [
  'Phishing / Fake Bank Login',
  'SMS / Smishing Fraud',
  'Fake Job / Recruitment Scam',
  'E-commerce / Bogus Storefront',
  'Impersonation / Family Emergency',
  'Tech Support Scam',
  'Other',
];

const INITIAL_FILES = [
  {
    id: 'sample-1',
    name: 'screenshot-whatsapp-message.png',
    size: '2.4 MB',
    type: 'image',
  },
];

const MAX_DESCRIPTION_LENGTH = 2000;

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Primary Report a Scam form card (left 7-column panel).
 *
 * @param {{
 *   onSubmitReport?: (reportData: object) => void,
 *   formRef?: React.RefObject<HTMLFormElement | null>
 * }} props
 */
export default function ReportScamForm({ onSubmitReport, formRef }) {
  const fileInputRef = useRef(null);

  const [category, setCategory] = useState(SCAM_CATEGORIES[0]);
  const [suspiciousUrl, setSuspiciousUrl] = useState(
    'https://secure-hdfc-kyc-update-portal84.xyz/auth'
  );
  const [description, setDescription] = useState(
    'Received an urgent SMS claiming my net banking account was frozen due to pending PAN card re-verification. Included a one-time link requiring credentials and OTP within 2 hours.'
  );
  const [files, setFiles] = useState(INITIAL_FILES);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  const appendFiles = (fileList) => {
    if (!fileList || fileList.length === 0) return;
    const added = Array.from(fileList).map((file, index) => ({
      id: `${Date.now()}-${index}-${file.name}`,
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type.includes('pdf') ? 'pdf' : 'image',
    }));
    setFiles((prev) => [...prev, ...added]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    appendFiles(e.dataTransfer.files);
  };

  const handleRemoveFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleSaveDraft = () => {
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmitReport) {
      onSubmitReport({
        category,
        suspiciousUrl:
          suspiciousUrl.trim() ||
          'https://secure-hdfc-kyc-update-portal84.xyz/auth',
        description: description.trim(),
        filesCount: files.length,
        hasContact: Boolean(fullName.trim() || email.trim()),
      });
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-100 flex flex-col gap-5"
    >
      {/* Card Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-[#101B35]">
            Incident Details
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Provide as much accurate context as available for sandbox isolation.
          </p>
        </div>
        <span className="text-[11px] font-semibold text-[#0051D5] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full flex-shrink-0">
          Step 1 of 1
        </span>
      </div>

      {/* 1. Scam Category */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="scam-category"
          className="text-xs font-semibold text-[#101B35]"
        >
          Scam Category <span className="text-red-500">*</span>
        </label>
        <div className="relative flex items-center">
          <Network
            size={16}
            className="absolute left-3.5 text-slate-500 pointer-events-none"
          />
          <select
            id="scam-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none bg-[#F4F6F9] hover:bg-[#EFF2F6] border border-slate-200/80 rounded-xl pl-10 pr-10 py-3 text-sm font-medium text-[#101B35] focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all cursor-pointer"
          >
            {SCAM_CATEGORIES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
        <span className="text-[11px] text-slate-400">
          Classifying accurately triggers targeted forensic heuristic profiles.
        </span>
      </div>

      {/* 2. Suspicious URL or Link */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="suspicious-url"
          className="text-xs font-semibold text-[#101B35]"
        >
          Suspicious URL or Link <span className="text-red-500">*</span>
        </label>
        <div className="relative flex items-center">
          <Link2
            size={16}
            className="absolute left-3.5 text-slate-400 pointer-events-none"
          />
          <input
            id="suspicious-url"
            type="text"
            value={suspiciousUrl}
            onChange={(e) => setSuspiciousUrl(e.target.value)}
            placeholder="e.g., https://fake-bank-security-login.xyz"
            className="w-full bg-[#F4F6F9] border border-slate-200/80 rounded-xl pl-10 pr-4 py-3 text-sm text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all font-mono"
          />
        </div>
        <span className="text-[11px] text-slate-400">
          Paste the exact link address. Our system inspects it in an isolated headless VM.
        </span>
      </div>

      {/* 3. Message Content or Context */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="scam-description"
            className="text-xs font-semibold text-[#101B35]"
          >
            Message Content or Context
          </label>
          <span className="text-[11px] font-medium text-slate-400 tabular-nums">
            {description.length.toLocaleString()} /{' '}
            {MAX_DESCRIPTION_LENGTH.toLocaleString()}
          </span>
        </div>
        <textarea
          id="scam-description"
          rows={4}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value.slice(0, MAX_DESCRIPTION_LENGTH))
          }
          placeholder="Describe how you encountered this scam, what the sender claimed, or paste the message content..."
          className="w-full bg-[#F4F6F9] border border-slate-200/80 rounded-xl px-4 py-3 text-sm text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all resize-y leading-relaxed"
        />
      </div>

      {/* 4. Supporting Evidence */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold text-[#101B35]">
          Supporting Evidence
        </span>

        {/* Drag and Drop Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`rounded-2xl border-2 border-dashed p-6 flex flex-col items-center text-center gap-2.5 transition-all ${
            isDragging
              ? 'border-[#0051D5] bg-[#EFF6FF]'
              : 'border-slate-200 bg-[#F4F6F9]/80 hover:bg-[#F4F6F9] hover:border-slate-300'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-[#0051D5]">
            <UploadCloud size={20} />
          </div>
          <p className="text-xs font-semibold text-[#101B35] max-w-xs leading-snug">
            Drag and drop screenshots, receipts, or message exports here
          </p>
          <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed">
            Supports PNG, JPG, PDF up to 15MB. Sensitive details automatically scrubbed.
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".png,.jpg,.jpeg,.pdf"
            onChange={(e) => {
              appendFiles(e.target.files);
              e.target.value = '';
            }}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-1 px-4 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-[#101B35] shadow-2xs transition-colors"
          >
            or Browse Files
          </button>
        </div>

        {/* Uploaded File List */}
        {files.length > 0 && (
          <div className="flex flex-col gap-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#F4F6F9] border border-slate-200/70"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#DCE6FF] text-[#0051D5] flex items-center justify-center flex-shrink-0">
                    {file.type === 'pdf' ? (
                      <FileText size={17} />
                    ) : (
                      <FileImage size={17} />
                    )}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-[#101B35] truncate">
                      {file.name}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                      <span>{file.size}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#0051D5]">
                        <CheckCircle2 size={12} />
                        Sanitized
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveFile(file.id)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors flex-shrink-0"
                >
                  <Trash2 size={13} />
                  <span>Remove</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. Follow-up Contact (Optional) */}
      <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-bold text-[#101B35]">
              Follow-up Contact
            </h3>
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
              Optional
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            We will only reach out if forensic sandboxing requires additional context or device artifacts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="contact-name"
              className="text-[11px] font-semibold text-slate-600"
            >
              Full Name
            </label>
            <div className="relative flex items-center">
              <User
                size={14}
                className="absolute left-3.5 text-slate-400 pointer-events-none"
              />
              <input
                id="contact-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Rajdip Mukherjee (optional)"
                className="w-full bg-[#F4F6F9] border border-slate-200/80 rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="contact-email"
              className="text-[11px] font-semibold text-slate-600"
            >
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail
                size={14}
                className="absolute left-3.5 text-slate-400 pointer-events-none"
              />
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rajdip@example.com (optional)"
                className="w-full bg-[#F4F6F9] border border-slate-200/80 rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#0051D5] focus:ring-2 focus:ring-[#0051D5]/20 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Privacy & Data Safety Box */}
      <div className="bg-[#EEF2F7] border border-slate-200/60 rounded-xl p-4 flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#DCE6FF] text-[#0051D5] flex items-center justify-center flex-shrink-0">
          <Lock size={15} />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-semibold text-[#101B35]">
            How your report is processed &amp; protected
          </span>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Reports are sanitized to redact personal identifiers before being added to Kawach&apos;s threat intelligence registry. We never sell, share, or publish your personal details.
          </p>
        </div>
      </div>

      {/* 7. Bottom Right-Aligned Action Buttons */}
      <div className="pt-1 flex flex-wrap items-center justify-end gap-3">
        <button
          type="button"
          onClick={handleSaveDraft}
          className="inline-flex items-center justify-center gap-1.5 bg-[#ECEFF4] hover:bg-slate-200 text-[#101B35] px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors"
        >
          {draftSaved ? (
            <>
              <Check size={14} className="text-emerald-600" />
              <span className="text-emerald-700">Draft Saved</span>
            </>
          ) : (
            <span>Save Draft</span>
          )}
        </button>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-[#0051D5] hover:bg-[#003EA8] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0051D5]/40 focus:ring-offset-2 transition-all"
        >
          <span>Submit Scam Report</span>
          <Send size={14} />
        </button>
      </div>
    </form>
  );
}
