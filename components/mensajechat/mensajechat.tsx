import React from 'react';
import './mensajechat.scss';

interface MensajechatProps {
  mensaje: string;
}

const Mensajechat: React.FC<MensajechatProps> = ({ mensaje }) => {
  return (
    <div className='mensajecontenedor'>
      <h4 className='contenidomensajeAI'>{mensaje}</h4>
    </div>
  );
};

export default Mensajechat;