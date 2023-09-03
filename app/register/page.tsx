'use client'


import './page.scss';
import Link from 'next/link';
import React, { useState } from 'react';
function Page() {

 let [textito, settextito] = useState('');

 function CAMBIARTEXTO (evento:any){
    settextito(evento.target.value);
  };



  return (    
    
    <div className="App">
   
   <div>   
      




        <div className="BARRAemail">
          
        <label  className='cartelin '> Email         </label>

<input></input>




</div>
  
{textito && (
<button className="botonsito1">
  <span role="img" aria-label="botonsito1">►</span>
</button>
)}
</div>
        
   
  


     


 
   
</div>


   
  );
}

export default Page;
