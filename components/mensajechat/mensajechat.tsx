import React, { useEffect, useState } from 'react';
import './mensajechat.scss';
import Id from '@/components/id';


interface MensajechatProps {
  mensaje: string,
  esAI: boolean 
}

const Mensajechat = ({ mensaje, esAI } : MensajechatProps) => {

  function nombredeclase() {
    if (!esAI){      return 'mensajecontenedor'  } else {
      
      return 'mensajecontenedorAI'

    }
 
    
  }




  const [hora] = useState(new Date())




  return (  <div>  <p className='IDhumana'>
    <Id />  
  </p>
    <div className={nombredeclase()} > 
      <div  >
        <h4 className='contenidomensajeAI'>{mensaje}  </h4>
       <p className='hora'> {hora.toLocaleTimeString()}</p>
      </div>
    
    </div>
    </div>
  );
};

export default Mensajechat;