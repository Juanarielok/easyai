'use client'

import Link from "next/link";
import './menu.scss';
import { link } from "fs";

export default function menu() {

return(  

  <div className='CONTENEDOR'>
  <button className='BOTON'><Link href={'/register'}>Sign Up</Link></button>
  <button className='BOTON'>Log In</button>
  <button className='BOTON'>About Us</button>
  <button className='BOTON'>Contact</button>
</div>

)





};
