import AuthSplitShell from './AuthSplitShell';
import LoginForm from './LoginForm';

const LOGIN_BRAND_PROPS = {
  subheading:
    'Personal digital security made effortless. Log in to access your saved threat scans and customized alerts.',
  benefits: [
    {
      iconKey: 'sync',
      title: 'Sync Across Devices',
      description:
        'Access your scan history and verified threat reports anywhere.',
    },
    {
      iconKey: 'bell',
      title: 'Custom Threat Alerts',
      description:
        'Receive notifications when high-risk phishing mimics organizations you use.',
    },
    {
      iconKey: 'community',
      title: 'Community Scam Watch',
      description:
        'Submit new fraudulent messages to protect your family and community.',
    },
  ],
  statHighlight: 'Trusted by 2.4M+',
  statText: 'everyday users • Zero data selling',
};

/**
 * Responsive Login page sharing the split-card authentication shell with Sign Up.
 */
export default function LoginPage() {
  return (
    <AuthSplitShell
      brandProps={LOGIN_BRAND_PROPS}
      cardFooterNote="You can scan without an account — No sign-up required for basic checks."
    >
      <LoginForm />
    </AuthSplitShell>
  );
}
