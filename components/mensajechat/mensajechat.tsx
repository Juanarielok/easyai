import React, { useEffect, useState } from 'react';
import './mensajechat.scss';
import Id from '@/components/id';
import { Mensaje } from '@/models/chat';

interface MensajechatProps {
  mensaje: Mensaje,
}

const Mensajechat = ({ mensaje } : MensajechatProps) => {

  function nombredeclase() {
    if (mensaje.esRespuestaIA) {
      return 'mensajecontenedorAI'
    } else {
      return 'mensajecontenedor'
    }
  }

function nombreestilo () {

  if (mensaje.esRespuestaIA){
    return 'IDartificial'
  } else {

    return 'IDhumana'
  }
}



  const [hora] = useState(new Date())




  return (
    <div>  <p className={nombreestilo()}>
    <Id />  
  </p> 
      <div className={nombredeclase()}  >
        <h4 className='contenidomensajeAI'>{mensaje.texto}  </h4>
       <p className='hora'> {hora.toLocaleTimeString()}</p>
      </div>
    
    </div>
  );
};

export default Mensajechat;