import React from 'react';
import './mensajechat.scss';
import Mensaje from '@/models/mensaje';




interface MensajechatProps {
  mensaje1: Mensaje;
}



  

const Mensajechat: React.FC<MensajechatProps> = ({ mensaje1 }) => {

  function nombredeclase (){


    if (mensaje1.esRespuestaIA== true){ 
    
      return  'mensajecontenedorAI'
    } else {
    
      return 'mensajecontenedor'
    }
    
    }

  return (
    <div className={nombredeclase()}>
      <h4 className='contenidomensajeAI'>{  mensaje1.mensaje }</h4>
    </div>

    
  );
};

export default Mensajechat;