'use client'
import Header from '@/components/header/header'
import './layout.scss'
import Menu from '../components/menu/menu'
import Logo from '../components/logo/logo'

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

     

        <Header />
       

        {children}

      </body>

    </html>
  )
}

/*<img className='sol' src="/icons/lens2.gif" />  */