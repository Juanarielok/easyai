'use client'
import React, { useState } from 'react';
import './page.scss';
import Footer from '../../components/footer/footer';

import Mensajechat from '@/components/mensajechat/mensajechat';
import verIArespuesta from '@/services/conexion';
import RespuestaChat, { Mensaje } from '@/models/chat';
import { clone } from 'lodash-es';
import { AxiosResponse } from 'axios';

function Page() {
  const [textito, setTextito] = useState('');
  const [mensagesVista, setMessages] = useState<Mensaje[]>([]);

  function ENVIARMENSAJE() {
    const mensajesOriginal = clone(mensagesVista);
    const mensajeHUMANO: Mensaje = {
      esRespuestaIA: false,
      texto: textito
    };

    setTextito('');
    setMessages([...mensagesVista, mensajeHUMANO]);

<<<<<<< HEAD
      esRespuestaIA : false ,
  
      mensaje : textito
  } ;

  

  
  
 
  setTextito('');
  recibirRespuestaIA(mensajeHUMANO);
}


function recibirRespuestaIA (mensajehumano:Mensaje) {

  let mensajeARTIFICIAL : Mensaje = verIArespuesta();
  setMessages([...messages, mensajehumano,mensajeARTIFICIAL]);

}


=======
    recibirRespuestaIA(mensajeHUMANO, mensajesOriginal);
  }
>>>>>>> cd1e2308d3619d8730b811468d901413e8b551b0

  function recibirRespuestaIA(mensajehumano: Mensaje, mensajesOriginal: Mensaje[]) {
    verIArespuesta().then((respuesta : AxiosResponse<RespuestaChat>) => {
      setMessages([...mensajesOriginal, mensajehumano, {
        texto : respuesta.data.generatedResponse,
        esRespuestaIA : true
      }]);
    });
  }

  return (
    <div className="App1">

      

      <div>
        {mensagesVista.map((message, index) => (
          <Mensajechat key={index} mensaje={message} />
        ))}
      </div>

      <div className="BARRABUSQUEDACHAT">
        <input
          type="text"
          maxLength={180}
          placeholder="How do I..."
          value={textito}
          onChange={(evento) => setTextito(evento.target.value)}
        />
        <button className="botonsito2" onClick={ENVIARMENSAJE}>
          Send
        </button>
      </div>
      <Footer mostrarDonacion={false} />
    </div>
  );
}

export default Page;
