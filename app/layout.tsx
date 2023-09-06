'use client'
import Link from 'next/link'
import './layout.scss'
import Menu from '../components/user_menu/menu'
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

        <div className="TITULAZO">

          <Link className='trans' href="/">
            <h4 className='logo1'>AI Easy</h4>
          </Link>

          <h4 className="loguito">©</h4>

        </div>

        <Menu />

        {children}

        <button className="copyrightcheto">
          Copyright 2023 AI Easy ©
        </button>

      </body>
    </html>
  )
}
