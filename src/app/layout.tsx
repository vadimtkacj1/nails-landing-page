import type { ReactNode } from 'react'
import '../styles/tailwind.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
