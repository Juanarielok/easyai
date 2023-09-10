'use client'

import './layout.scss'
import Menu from '../components/menu/menu'
import Logo from '../components/logo/logo'

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

/*<img className='sol' src="/icons/lens2.gif" />  */