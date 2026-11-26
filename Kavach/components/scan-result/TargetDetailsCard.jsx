import {
  Crosshair,
  ArrowRight,
  ShieldOff,
} from 'lucide-react';

/**
 * Inspected Endpoint Profile / Target Details Card.
 *
 * @param {{
 *   targetUrl: string,
 *   resolvedIp?: string,
 *   hostProvider?: string,
 *   domainAge?: string,
 *   domainRegisteredAt?: string,
 *   domainRegistrar?: string,
 *   sslIssuer?: string,
 *   sslStatus?: string,
 *   sslNote?: string,
 *   redirectChain?: string[],
 * }} props
 */
export default function TargetDetailsCard({
  targetUrl,
  resolvedIp,
  hostProvider,
  domainAge,
  domainRegisteredAt,
  domainRegistrar,
  sslIssuer,
  sslStatus,
  sslNote,
  redirectChain,
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crosshair size={18} className="text-slate-400" />
          <span className="text-sm font-semibold text-slate-800">
            Inspected Endpoint Profile
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-slate-50 p-3 rounded-lg gap-1">
        <span className="text-xs text-slate-400">Target URL</span>
        <span className="font-mono text-slate-800 break-all font-medium text-[13px]">
          {targetUrl}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {resolvedIp && (
          <div className="flex flex-col bg-slate-50 p-3 rounded-lg">
            <span className="text-xs text-slate-400">Resolved IP &amp; Host</span>
            <span className="text-slate-800 font-medium font-mono text-[13px]">
              {resolvedIp}
            </span>
            {hostProvider && (
              <span className="text-xs text-slate-500 truncate">{hostProvider}</span>
            )}
          </div>
        )}
        {domainAge && (
          <div className="flex flex-col bg-slate-50 p-3 rounded-lg">
            <span className="text-xs text-slate-400">Domain Longevity</span>
            <span className="text-red-600 font-medium text-[13px]">{domainAge}</span>
            {domainRegisteredAt && (
              <span className="text-xs text-slate-500">
                {domainRegisteredAt}
                {domainRegistrar ? ` via ${domainRegistrar}` : ''}
              </span>
            )}
          </div>
        )}
      </div>
      {sslIssuer && (
        <div className="flex flex-col bg-slate-50 p-3 rounded-lg gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">SSL / TLS Certificate</span>
            {sslStatus && (
              <span className="text-xs text-red-600 font-semibold flex items-center gap-1">
                <ShieldOff size={13} />
                {sslStatus}
              </span>
            )}
          </div>
          <span className="text-slate-800 font-medium text-[13px]">{sslIssuer}</span>
          {sslNote && (
            <span className="text-xs text-slate-500">{sslNote}</span>
          )}
        </div>
      )}
      {redirectChain && redirectChain.length > 1 && (
        <div className="flex flex-col bg-slate-50 p-3 rounded-lg gap-1">
          <span className="text-xs text-slate-400">Redirect Chain Detected</span>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-500 flex-wrap">
            {redirectChain.map((hop, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ArrowRight size={13} className="text-slate-400" />}
                <span
                  className={`px-2 py-0.5 rounded ${i === redirectChain.length - 1
                    ? 'text-red-600 font-semibold'
                    : 'bg-slate-100'
                    }`}
                >
                  {hop}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
