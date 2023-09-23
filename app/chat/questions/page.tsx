'use client'
import React, { use, useState } from 'react';
import './page.scss';
import {responderPregunta} from '@/services/chat';
import RespuestaSobreTexto from '@/models/respuesta-sobre-texto';
import RespuestaChat from '@/models/chat';
import { AxiosResponse } from 'axios';
function Page() {

  let [textito, setTextito] = useState('');
let [libro,setlibro]=useState ('');
let [respuesta1,setrespuesta1]=useState('');



  function ENVIARMENSAJE() {

    responderPregunta(libro,textito).then 
    
    (function (respuestaa:AxiosResponse<RespuestaSobreTexto>) {

      setrespuesta1(respuestaa.data.answer)
   
    }) 
   
 
  
    

    setTextito('');


    
    
  }





  return (
    <div className="App1">
    


      <div className="BARRALIBRO">
      <textarea className='LEERTEXTO' value={libro}   onChange={(evento) => setlibro(evento.target.value)}
      placeholder='INGRESA TU LIBRO ACA' /> 
      
      </div>
       
      <h4> {respuesta1}  </h4> 

      <div className="BARRABUSQUEDACHAT">
        <input
          type="text"
          maxLength={180}
          placeholder="Any questions...?"
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


///para cuando el usuario envie el mensaje llame a al servicio de student ai al metodo de responder llamarlo con
///la pregunta y el contexto es el texto y que meta en la consola la respuesta
///problema responder pregunta devuelve una promise 