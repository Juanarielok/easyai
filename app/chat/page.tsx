'use client'
import Link from 'next/link';

import './page.scss';

import React, { useState } from 'react';
function Page() {

 let [textito, settextito] = useState('');

 function CAMBIARTEXTO (evento:any){
    settextito(evento.target.value);
  };



  return (    
    
    <div className="App">
        <div className='INTERACTIVOS1'>
    <button  className="boton-ALFA">Sign Up</button>
          <button  className="boton-BETA">Log In</button>
          <button  className="boton-CHARLIE">Contact us</button>

    </div>
   <div>    <Link href="/">  
    
</Link>
<div className='chatbutons1'>
<button className='buten'>Collaborative Resources</button> 
<button className='buten2'> Academic Prompts </button> 
  </div>

  <div className='chatbutons2'>

  <button className='butin'> Custom Summarize  </button> 
  
<button className='butin1'> Create Short Resume </button> 

  </div>


        <div className="BARRABUSQUEDA">
          

<textarea  placeholder="What do you need today"  value={textito}  onChange={CAMBIARTEXTO}

style={{ resize: 'none', width: '900px',height:'400px' }}

className="custom-scrollbar"
  />
  
{textito && (
<button className="botonsito1">
  <span role="img" aria-label="botonsito1">►</span>
</button>
)}
</div>
        
   
  


     


 
   
</div>


</div>
   
  );
}

export default Page;
