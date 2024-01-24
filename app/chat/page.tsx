'use client'
import { ReactNode, useState } from 'react';
import './page.scss';
import Botonerachat from '../../components/botonerachat/botonerachat';
import Mensajechat from '@/components/mensajechat/mensajechat';
import verIArespuesta from '@/services/chat';
import { AxiosResponse } from 'axios';
import recibirmensaje from "@/models/recibirmensaje";

function Page() {
  let [textoInput, setTextoInput] = useState<string>("");
  let [mensajes, setMensajes] = useState<ReactNode[]>([]);

  function ENVIARMENSAJE() {
    const mensajeUsuario = textoInput;
    setTextoInput("");

    verIArespuesta(textoInput)
      .then(function (respuesta: AxiosResponse<recibirmensaje>) {
        let mensajeIA: string = respuesta?.data?.respuestaIA;

        setMensajes(
          [
            ...mensajes, 
            <Mensajechat mensaje={mensajeUsuario} esAI={false} />, 
            <Mensajechat mensaje={mensajeIA} esAI={true} />
          ]
        );
      });
  }

  return (
    <div className='contenedor-chat-principal'>
      <div className='envoltorio'>
        <div className='barra-lateral'>
          <Botonerachat />
        </div>
        <div className='barra-central'>
          <div className='cartelera' >
            {mensajes}
          </div>
          <div className="BARRABUSQUEDACHAT">
            <input
              type="text"
              maxLength={180}
              placeholder="How do I..."
              value={textoInput}
              onChange={(evento) => setTextoInput(evento.target.value)}
            />
            <button className="botonsito2" onClick={ENVIARMENSAJE}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
