import type { Metadata } from 'next'
import { lora, sourceSans } from '@/app/fonts'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Series 01 — The Puzzle of Classification',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
