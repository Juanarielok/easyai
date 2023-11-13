'use client'

import Link from "next/link";
import './menu.scss';
import { link } from "fs";

export default function Menu() { 

return(  

  <div className='CONTENEDOR'>

    <Link className='link1' href={'/register'}> <button className='BOTON'>Sign Up </button>    </Link>

    <Link className='link1' href={'/Login'}> <button className='BOTON'>Log In</button></Link>

    <Link className='link1' href={'/aboutUs'}>  <button className='BOTON'>About Us</button></Link>

    <Link className='link1' href={'/contact'}>  <button className='BOTON'>Contact</button></Link>

  </div>
)};