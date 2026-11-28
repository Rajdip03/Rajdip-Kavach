import AuthSplitShell from './AuthSplitShell';
import SignupForm from './SignupForm';

/**
 * Responsive Sign Up page built on the shared split-card authentication shell.
 */
export default function SignupPage() {
  return (
    <AuthSplitShell>
      <SignupForm />
    </AuthSplitShell>
  );
}
