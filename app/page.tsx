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
   
      <div className="TITULAZO">
     
         
         


          <div className="BOTONSITOS">
          <button  className="boton-1"></button>
          <button  className="boton-2"></button>
          <button  className="boton-3"></button>
<Link className='link1' href="/chat">   <button  className="boton-4"> </button>    </Link>
         


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
<Link className='link1'  href='https://www.paypal.com/ar/home?locale.x=es_AR'>     
<button className='dandolastima'>Want to help us? Consider  d͟o͟n͟a͟t͟i͟n͟g͟ !</button>
</Link>

        </div>
   
  


       


 
   

       

</div>
   
  );
}

export default App;
