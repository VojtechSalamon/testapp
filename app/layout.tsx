import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'URBNWLF Onboarding Academy',
  description: 'Akademie pro nábor a školení nových zaměstnanců',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}

