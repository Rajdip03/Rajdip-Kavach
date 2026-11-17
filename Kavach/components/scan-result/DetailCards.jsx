import {
  Link2,
  Server,
  Globe,
  CheckCircle,
  Store,
  Image as ImageIcon,
  CreditCard,
  Bug,
  Network,
  AlertTriangle,
  AlertOctagon,
  ShieldAlert,
  ShieldCheck,
  Shield,
  Info,
} from 'lucide-react';

function CardIcon({ name, size = 20 }) {
  const key = typeof name === 'string' ? name.toLowerCase().replace(/[-_\s]/g, '') : '';

  switch (key) {
    case 'link':
    case 'link2':
      return <Link2 size={size} />;
    case 'dns':
    case 'server':
      return <Server size={size} />;
    case 'globe':
      return <Globe size={size} />;
    case 'check':
    case 'checkcircle':
      return <CheckCircle size={size} />;
    case 'store':
    case 'storefront':
      return <Store size={size} />;
    case 'photolibrary':
    case 'image':
      return <ImageIcon size={size} />;
    case 'payments':
    case 'creditcard':
      return <CreditCard size={size} />;
    case 'pestcontrol':
    case 'bug':
      return <Bug size={size} />;
    case 'hub':
    case 'network':
      return <Network size={size} />;
    case 'securityupdatewarning':
    case 'alerttriangle':
      return <AlertTriangle size={size} />;
    case 'alertoctagon':
      return <AlertOctagon size={size} />;
    case 'shieldalert':
      return <ShieldAlert size={size} />;
    case 'shieldcheck':
      return <ShieldCheck size={size} />;
    case 'shield':
      return <Shield size={size} />;
    default:
      if (typeof name === 'function' || (typeof name === 'object' && name !== null)) {
        const Custom = name;
        return <Custom size={size} />;
      }
      return <Info size={size} />;
  }
}

/**
 * Summary detail cards displayed in a 3-column grid.
 * Used for critical/medium/low risk variants that show 3 key-info cards.
 *
 * @param {{ cards: Array<{ icon: any, iconColor?: string, title: string, value: string, description: string }> }} props
 */
export default function DetailCards({ cards }) {
  if (!cards || cards.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-2"
        >
          <div className={`flex items-center gap-2 ${card.iconColor || 'text-[#0051D5]'}`}>
            <CardIcon name={card.icon} size={20} />
            <span className="text-sm font-semibold">{card.title}</span>
          </div>
          <span className="font-mono text-sm text-slate-800 font-semibold break-all">
            {card.value}
          </span>
          <p className="text-xs text-slate-500">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
