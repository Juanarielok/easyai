'use client'

import Link from 'next/link';
import './botonerachat.scss';
import React, { useState } from 'react';
export default function botonerachat() {






return(  



    <div className="contenedor">
  
      <button className="boton">Collaborative Resources  <img className="iconito" src="/icons/books.png"/> </button>
      <button className="boton">Text Summarize <img className="iconito" src="/icons/book.png"/> </button>


      <button className="boton">Academic Results  <img className="iconito" src="/icons/vocabulary.png"/> </button>
      <button className="boton">Short Resume  <img className="iconito" src="/icons/file-star.png"/> </button>

      <Link className='trans1' href="/chat/questions"> 

      <button className='botono'>Students Aid <img className="iconito" src="/icons/accessible.png"/> </button>

      </Link>
   
    </div>
);

}