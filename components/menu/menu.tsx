'use client'

import Link from "next/link";
import './menu.scss';
import { link } from "fs";

export default function menu() {

return(  

  <div className='CONTENEDOR'>
 <Link className='link1' href={'/register'}> <button className='BOTON'>Sign Up </button>    </Link>
 <Link className='link1' href={'/Login'}> <button className='BOTON'>Log In</button></Link>
 <Link className='link1' href={'/aboutUs'}>  <button className='BOTON'>About Us</button></Link>
  <button className='BOTON'>Contact</button>


  
</div>

)





};
