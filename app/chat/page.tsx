'use client'
import React, { useState } from 'react';
import './page.scss';
import Footer from '../../components/footer/footer';

import Mensajechat from '@/components/mensajechat/mensajechat';
import verIArespuesta from '@/services/chat';
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

    recibirRespuestaIA(mensajeHUMANO, mensajesOriginal);
  }

  function recibirRespuestaIA(mensajehumano: Mensaje, mensajesOriginal: Mensaje[]) {
    verIArespuesta().then((respuesta : AxiosResponse<RespuestaChat>) => {
      setMessages([...mensajesOriginal, mensajehumano, {
        texto : respuesta.data.generatedResponse,
        esRespuestaIA : true
      }]);
    });
  }

  return (
    <div className="pepe">

      

      <div className='cartelera' >
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
      
    </div>
  );
}

export default Page;
