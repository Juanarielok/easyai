'use client'
import React, { ReactNode, use, useState } from 'react';
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

function Page() {


  let [textito,setTextito]=useState<string>("");
  let [elchat,setelchat]=useState<string[]>([]);
  let [mensajesAI,setmensajesAI]=useState<string[]>([]);

  function metermensajeAI () {

    let todosmensajes:ReactNode[] = [];


    for (let i = 0; i < (elchat.length); i++) {
  
        todosmensajes.push(<Mensajechat mensaje={elchat[i]} esAI={false} /> );
  
      if (i < mensajesAI.length) {
        todosmensajes.push(<Mensajechat mensaje={mensajesAI[i]} esAI={true} /> );
  }

  }/// por cada vuelta del bucle que meta uno del usuario y otro de la ia
return todosmensajes;
}



function ENVIARMENSAJE () {

verIArespuesta(textito).then(function(respuesta:AxiosResponse<recibirmensaje>){

let respuestita:recibirmensaje = respuesta.data ;

let mensajeAPI:string = respuestita.generated_text;
setmensajesAI([...mensajesAI, mensajeAPI])
})

  setelchat([...elchat, textito]);
  setTextito("")

}













  return (
    <div className='contenedor-chat-principal'>

      <div className= 'envoltorio'>

        <div className='barra-lateral'> 
          <Botonerachat/> 
        </div>

        <div className = 'barra-central'>
        <div className='cartelera' >
          {metermensajeAI()}
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

    </div>

   </div>
  );
}

export default Page;
