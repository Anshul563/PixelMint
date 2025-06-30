import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Background from '@/components/AnimatedBackground'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PixelMint',
  description: 'Web & App Development Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" />
      </head>
      <body className={inter.className}>
        <Background />
        {children}
      </body>
    </html>
  )
}
