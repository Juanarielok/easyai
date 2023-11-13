'use client'

import Link from 'next/link';
import './botonerachat.scss';
import React, { useState } from 'react';
export default function botonerachat() {

return(  
    <div className="contenedor">
  
      <button className="boton">  <img className="iconito" src="/icons/books.png"/> Collaborative Resources  </button>
      <button className="boton"><img className="iconito" src="/icons/book.png"/> Text Summarize  </button>
      <button className="boton"><img className="iconito" src="/icons/vocabulary.png"/>  Academic Results  </button>
      <button className="boton"><img className="iconito" src="/icons/file-star.png"/>  Short Resume  </button>
      <button className="boton"><img className="iconito" src="/icons/accessible.png"/>Students Aid  </button>

      <Link className='trans1' href="/chat/questions"> 



      </Link>
   
    </div>
);

}