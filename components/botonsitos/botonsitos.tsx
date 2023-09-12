

'use client'

import Link from "next/link";
import './botonsitos.scss';
import { useState } from "react";

export default function botonsitos() {

    
        const [hovered, setHovered] = useState(false);
      
        const handleMouseOver = () => {
          setHovered(true);
        };
      
        const handleMouseOut = () => {
          setHovered(false);
        };





return(  







<div className="BOTONSITOS">
<button  className="boton-1"></button>
<button  className="boton-2"></button>
<button  className="boton-3"></button>
<Link className='link1' href="/chat"> 


<img
        className='irchat'
        src={hovered ? "/icons/picture1A.svg" : "/icons/picture1.svg"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />




  </Link>



</div>
)





};
