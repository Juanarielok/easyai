'use client'


import './page.scss';
import Botonerachat from 'components/user_menu/botonerachat/botonerachat'
import React, { useState } from 'react';
function Page() {

 let [textito, settextito] = useState('');

 function CAMBIARTEXTO (evento:any){
    settextito(evento.target.value);
  };





  



  return (    
    
    <div className="App1">


 
 <Botonerachat/>








 


        
        
   
  



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
