import React from 'react';
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

  return (
    <div>
      <div className={nombredeclase()}  >
        <h4 className='contenidomensajeAI'>{mensaje.texto} </h4>

      </div>
      <p className='posicionid'>
        <Id />
      </p>
    </div>
  );
};

export default Mensajechat;