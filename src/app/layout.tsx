import Navigation from '@/components/navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Old_Standard_TT } from 'next/font/google'
import Footer from '@/components/footer'
import { cn } from "@/lib/utils"

// const inter = Inter({ subsets: ['latin'], variable: "--font-sans", })
const inter = Old_Standard_TT({ weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sinclair\'s Photography Portfolio',
  description: 'Sinclair\'s Photography Portfolio',
}

// add navigation to root layout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        // className={cn(
        //   "min-h-screen bg-background font-sans antialiased",
        //   inter.variable
        // )}
        className={inter.className}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
