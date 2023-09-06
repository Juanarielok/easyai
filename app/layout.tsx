'use client'

import './layout.scss'
import Menu from '../components/user_menu/menu'
import Logo from '../components/user_menu/logo'
import Footer from '../components/user_menu/footer'
import Link from 'next/link'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <head>
        <title>
          Easy AI
        </title>
      </head>
      <body>

        <Menu />
        <Logo/>

        {children}

      </body>

    </html>
  )
}
