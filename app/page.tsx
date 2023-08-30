'use client'


import './App.scss';

import React, { useState } from 'react';
function App() {

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
   
      <div className="TITULAZO">

          <h4>AI Easy</h4>

          <h4 className="loguito">©</h4>

          <div className="BOTONSITOS">
          <button  className="boton-1"></button>
          <button  className="boton-2"></button>
          <button  className="boton-3"></button>
          <button  className="boton-4"></button>
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
        </div>
   
  


     


 
   



</div>
   
  );
}

export default App;
