import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TOASH ONLINE',
  description: 'Creative Developer & Designer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
