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





</div>
  


</div>
        
   
  


     


 
   
</div>


   
  );
}

export default Page;
