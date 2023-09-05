'use client'
import Link from 'next/link'
import './layout.scss'

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

      <div className='INTERACTIVOS1'>
    <Link className='link1' href="/register"> 
    <label  className="boton-ALFA">Sign Up</label>
    </Link >

    
       <Link className='link1' href="/register"> 
       <label  className="boton-BETA">Log In</label>
      </Link >

     <Link className='link1' href="/register"> 
     <label  className="boton-CHARLIE">Contact us </label>
      </Link >

    </div>
   

      <div className="TITULAZO">

<Link className='trans' href="/">
    <h4 className='logo1'>AI Easy</h4>
    </Link>

    <h4 className="loguito">©</h4>
</div>







        {children}
        <button className="copyrightcheto"> Copyright 2023 AI Easy © </button>
      </body>
    </html>
  )
}
