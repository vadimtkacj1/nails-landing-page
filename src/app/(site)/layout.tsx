import type { ReactNode } from 'react'
import '../../styles/index.css'
import ScrollRevealProvider from '@/components/ui/ScrollRevealProvider'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: {
    default: 'Lily Studio',
    template: 'Lily Studio | %s',
  },
  description: 'Premium nail care & beauty services at Lily Studio. Manicure, pedicure, nail art and luxury treatments. Book your appointment today.',
  keywords: 'nail salon, manicure, pedicure, nail art, nail care, gel nails, acrylic, spa, beauty, Lily Studio',
  openGraph: {
    type: 'website',
    title: {
      default: 'Lily Studio',
      template: 'Lily Studio | %s',
    },
    description: 'Elevate your nail care with professional treatments at Lily Studio — from classic manicure to trendy nail art designs.',
  },
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollRevealProvider />
      {children}
    </>
  )
}
