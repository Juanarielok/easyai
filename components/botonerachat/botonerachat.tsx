'use client'

import Link from 'next/link';
import './botonerachat.scss';
import React, { useState } from 'react';
export default function botonerachat() {






return(  



    <div className="contenedor">
    <div className="columna">
      <button className="boton">Collaborative Resources 🌐</button>
      <button className="boton">Text Summarize 📚</button>
    </div>
    <div className="columna">
      <button className="boton">Academic Results 🎓</button>
      <button className="boton">Short Resume 📑</button>

      <Link className='trans1' href="/chat/questions"> 

      <button className='botono'>Students Aid 📖</button>

      </Link>
    </div>
    </div>
);

}