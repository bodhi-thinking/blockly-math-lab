import type { Metadata } from 'next'
import { lora, sourceSans } from '@/app/fonts'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: {
    default: "Blockly Math Lab",
    template: "%s | Blockly Math Lab",
  },
  description: "Learning through math, patterns, and code",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
