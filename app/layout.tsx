import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hotelová Akademie - Video a Kvízová Akademie',
  description: 'Akademie pro nábor a školení nových hotelových zaměstnanců',
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

