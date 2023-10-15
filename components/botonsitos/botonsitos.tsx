

'use client'

import Link from "next/link";
import './botonsitos.scss';
import { useState } from "react";

export default function botonsitos() {


  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  const handleMouseOver1 = () => {
    setHovered1(true);
  };

  const handleMouseOut1 = () => {
    setHovered1(false);
  };

  const handleMouseOver2 = () => {
    setHovered2(true);
  };

  const handleMouseOut2 = () => {
    setHovered2(false);
  };

  const handleMouseOver3 = () => {
    setHovered3(true);
  };

  const handleMouseOut3 = () => {
    setHovered3(false);
  };

  const handleMouseOver4 = () => {
    setHovered4(true);
  };

  const handleMouseOut4 = () => {
    setHovered4(false);
  };


  return (







    <div className="BOTONSITOS">

      

      <Link className='link4' href="/Login">


        <img
          className='iraudio'
          src={hovered1 ? "/icons/AUDIO.png" : "/icons/AUDIO.png"}
          onMouseOver={handleMouseOver1}
          onMouseOut={handleMouseOut1}
        />


{hovered1 && <div className='text02'>Artificial audio</div>}

      </Link>

      <Link className='linkimagen' href="/Login">


        <img
          className='irimagen'
          src={hovered2 ? "/icons/picture1A.svg" : "/icons/picture100.svg"}
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}
        />
{hovered2 && <div className='text0'>Generate pic</div>}



      </Link>

      <Link className='link2' href="/chat">


        <img
          className='irchat'
          src={hovered3 ? "/icons/CHATT.png" : "/icons/CHATT.png"}
          onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}
        />

{hovered3 && <div className='text01'>Go chat</div>}


      </Link>







    </div>
  )





};
