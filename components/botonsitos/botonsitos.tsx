

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

      <Link className='link4' href="/chat">


        <img
          className='irvideo'
          src={hovered1 ? "/icons/picture1A.svg" : "/icons/picture100.svg"}
          onMouseOver={handleMouseOver1}
          onMouseOut={handleMouseOut1}
        />




      </Link>

      <Link className='link3' href="/chat">


        <img
          className='irmusica'
          src={hovered2 ? "/icons/picture1A.svg" : "/icons/picture100.svg"}
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}
        />




      </Link>

      <Link className='link2' href="/chat">


        <img
          className='irimagenes'
          src={hovered3 ? "/icons/picture1A.svg" : "/icons/picture100.svg"}
          onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}
        />




      </Link>



      <Link className='link1' href="/chat">


        <img
          className='irchat'
          src={hovered4 ? "/icons/picture1A.svg" : "/icons/picture100.svg"}
          onMouseOver={handleMouseOver4}
          onMouseOut={handleMouseOut4}
        />




      </Link>



    </div>
  )





};
