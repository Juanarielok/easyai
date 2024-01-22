'use client'
import React, { ChangeEvent, ReactNode, use, useEffect, useState } from 'react';
import './page.scss';
import Botonerachat from '../../components/botonerachat/botonerachat';
import Mensajechat from '@/components/mensajechat/mensajechat';
import verIArespuesta from '@/services/chat';
import Conversation from '@/models/Conversation';
import { clone } from 'lodash-es';
import { AxiosResponse } from 'axios';
import FancyHeader from '@/components/FancyHeader/FancyHeader';
import recibirmensaje from "@/models/recibirmensaje"
import enviarmensaje from "@/models/enviarmensaje"
import guardarConversacion, { recuperarConversacion } from '@/helpers/localStorageHelper';

function Page() {


  let [textoInput, setTextoInput] = useState<string>("");
  let [mensajesUsuario, setMensajesUsuario] = useState<string[]>([]);
  let [mensajesAI, setmensajesAI] = useState<string[]>([]);

  useEffect(() => {
    guardarConversacion(mensajesAI, mensajesUsuario);
  }, [mensajesUsuario, mensajesAI]);

  useEffect(() => {

const recuperacion = recuperarConversacion() 

setMensajesUsuario (recuperacion.past_user_inputs)
setmensajesAI(recuperacion.generated_responses)


    // Aqui va el codigo que se va a ejecutar al cargar la pagina.
    // Tienes que poner que se cargue la conversacion que hemos guardado

    // la funcion devuelve un objeto con los mensajes de la IA y los del usuario. 
    // Tienes que guardarlos en las variables mensajesAI y mensajesUsuario para que se vean en la pantalla
  }, []);

  function metermensajeAI() {
    let todosmensajes: ReactNode[] = [];

    for (let i = 0; i < (mensajesUsuario.length); i++) {

      todosmensajes.push(<Mensajechat mensaje={mensajesUsuario[i]} esAI={false} />);

      if (i < mensajesAI.length) {
        todosmensajes.push(<Mensajechat mensaje={mensajesAI[i]} esAI={true} />);
      }

    }/// por cada vuelta del bucle que meta uno del usuario y otro de la ia
    return todosmensajes;
  }



  function ENVIARMENSAJE() {

    verIArespuesta(textoInput)
      .then(function (respuesta: AxiosResponse<recibirmensaje>) {

        let respuestita: recibirmensaje = respuesta.data;

        let mensajeAPI: string = respuestita.RespuestaIA;
        setmensajesAI([...mensajesAI, mensajeAPI]);
      });

    setMensajesUsuario([...mensajesUsuario, textoInput]);
    setTextoInput("");
  }










/**
 * Boton para borrar la conversacion
 * 
 * borrar la conversacion consiste en cambiar los mensajes de IA (mensajesAI) 
 * y los del usuario (mensajesUsuario) a array vacios. 
 * 
 * El metodo tiene que llamar a una funcion que haga eso.
 */

  return (
    <div className='contenedor-chat-principal'>

      <div className='envoltorio'>

        <div className='barra-lateral'>
          <Botonerachat />
        </div>

        <div className='barra-central'>
          <div className='cartelera' >
            {metermensajeAI()}
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
