import { AuthView } from '@payloadkit/registry/components/auth/AuthView'

interface AuthPageProps {
  params: {
    authView: string
  }
}

export default function AuthPage({ params }: AuthPageProps) {
  const { authView } = params
  
  return <AuthView pathname={authView} />
}

// Generate static paths for common auth views
export async function generateStaticParams() {
  return [
    { authView: 'sign-in' },
    { authView: 'sign-up' },
    { authView: 'reset-password' },
    { authView: 'verify-email' },
    { authView: 'callback' },
    { authView: 'sign-out' },
  ]
}