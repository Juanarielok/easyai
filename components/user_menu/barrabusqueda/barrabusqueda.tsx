'use client'


import './barrabusqueda.scss';
import React, { useState } from 'react';
export default function barrabusqueda() {



    let [textito, settextito] = useState('');

    function CAMBIARTEXTO (evento:any){
       settextito(evento.target.value);
     };
   


return(  
<div className="BARRABUSQUEDA">

<input type="text"  placeholder="What do you need today"  value={textito}  onChange={CAMBIARTEXTO}
  />
  
{textito && (
<button className="botonsito1">
  <span role="img" aria-label="botonsito1">🔍︎</span>
</button>
)}


</div>
   

)





};
