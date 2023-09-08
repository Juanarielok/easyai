'use client'

import './layout.scss'
import Menu from '../components/user_menu/menu/menu'
import Logo from '../components/user_menu/logo/logo'
import Footer from '../components/user_menu/footer/footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body>

      <Menu />
      <Logo/>

   






        {children}

       <Footer/>

      </body>

    </html>
  )
}
