'use client'

import Link from "next/link";
import './menu.scss';

export default function menu() {

return(  

    <div className='INTERACTIVOS1'>
    <Link className='link1' href="/register"> 
    <label  className="boton-ALFA">Sign Up</label>
    </Link >

    
       <Link className='link1' href="/register"> 
       <label  className="boton-BETA">Log In</label>
      </Link >

      <Link className="link1" href="/aboutUs">
        <label className="boton-About-Us">About Us</label>
      </Link>

     <Link className='link1' href="/register"> 
     <label  className="boton-CHARLIE">Contact us </label>
      </Link >

    </div>


)





};
