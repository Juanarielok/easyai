'use client'
import Link from 'next/link'
import './layout.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       

      <div className="TITULAZO">

<Link href="/">
    <h4>AI Easy</h4>
    </Link>

    <h4 className="loguito">©</h4>
</div>





        {children}
      </body>
    </html>
  )
}
