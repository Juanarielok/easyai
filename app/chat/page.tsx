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
    
    <div className="App1">

<div className='chatbutons1'>


<button className='buten'>Collaborative Resources</button> 
<button className='buten2'> Academic Prompts </button> 
  </div>

  <div className='chatbutons2'>

  <button className='butin'> Custom Summarize  </button> 
  
<button className='butin1'> Create Short Resume </button> 







  </div>


        
        
   
  



  <div className="BARRABUSQUEDACHAT">

<input type="text" maxLength={80}  placeholder="How do I..."  value={textito}  onChange={CAMBIARTEXTO}
  />
  
{textito && (
<button className="botonsito2">
  <span role="img" aria-label="botonsito2">▶</span>
</button>
)}


</div>
 
   
</div>



   
  );
}

export default Page;
