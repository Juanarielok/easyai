'use client'

import Link from 'next/link';
import './App.scss';

import React, { useState } from 'react';
function App() {

 let [textito, settextito] = useState('');

 function CAMBIARTEXTO (evento:any){
    settextito(evento.target.value);
  };



  return (    
    
    <div className="App">
        <div className='INTERACTIVOS1'> <Link href="/register"> 
    <button  className="boton-ALFA">Sign Up</button>
    </Link>
          <button  className="boton-BETA">Log In</button>
          <button  className="boton-CHARLIE">Contact us</button>

    </div>
   
      <div className="TITULAZO">
     
          <h4>AI Easy</h4>

          <h4 className="loguito">©</h4>
         


          <div className="BOTONSITOS">
          <button  className="boton-1"></button>
          <button  className="boton-2"></button>
          <button  className="boton-3"></button>
<Link href="/chat">   <button  className="boton-4"></button>    </Link>
         


        </div>
        <div className="BARRABUSQUEDA">

<input type="text"  placeholder="What do you need today"  value={textito}  onChange={CAMBIARTEXTO}
  />
  
{textito && (
<button className="botonsito1">
  <span role="img" aria-label="botonsito1">🔍︎</span>
</button>
)}


</div>

<div className='dandolastima'> <button>Want to help us? Consider  d͟o͟n͟a͟t͟i͟n͟g͟  </button> </div>

<div className='copyrightcheto'> <button>Copyright 2023 AI Easy © </button></div>
        </div>
   
  


       


 
   

       

</div>
   
  );
}

export default App;
