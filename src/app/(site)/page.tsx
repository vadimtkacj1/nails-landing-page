import { Metadata } from 'next'
import HomePage from '../HomePage'

export const metadata: Metadata = {
  title: 'Lily Studio — Premium Nail Care & Beauty Services',
  description: 'Premium nail care & beauty services at Lily Studio. Manicure, pedicure, nail art and luxury treatments. Book your appointment today.',
  keywords: 'nail salon, manicure, pedicure, nail art, nail care, gel nails, acrylic, spa, beauty, Lily Studio',
  openGraph: {
    title: 'Lily Studio — Premium Nail Care & Beauty Services',
    description: 'Elevate your nail care with professional treatments at Lily Studio — from classic manicure to trendy nail art designs.',
  },
}

export default function Page() {
  return <HomePage />
}
