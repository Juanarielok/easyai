'use client'
import React, { useState } from 'react';
import './page.scss';
import Footer from '../../components/footer/footer';
import Botonerachat from '../../components/botonerachat/botonerachat';
import Mensajechat from '@/components/mensajechat/mensajechat';
import Mensaje from '@/models/mensaje';
import verIArespuesta from '@/services/conexion';

function Page() {
  const [textito, setTextito] = useState('');
  const [messages, setMessages] = useState<Mensaje[]>([]);

  function ENVIARMENSAJE() {

    let mensajeHUMANO : Mensaje = { 

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


function INGRESARNUEVAPERSONA() {
  var min = 10000000;
  var max = 99999999;
  let dni = Math.round(Math.random() * (max - min) + min);}


  return (
    <div className="App1">

      <Botonerachat />


      <div>
        {messages.map((message, index) => (


          <Mensajechat key={index} mensaje1={message}  />


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
