import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AbearicaOnline — AI-Powered. Human-Tested. 23 Years in the Making.',
  description: 'Tim aka Abearica — AI Agent Architecture, IT Consulting, Website Design, Full Marketing Campaigns. Based in Klamath Falls, OR. 23 years IT experience.',
  keywords: 'AI agents, IT consulting, website design, marketing, Klamath Falls Oregon',
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
