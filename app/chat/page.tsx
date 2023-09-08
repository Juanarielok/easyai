'use client'
import React, { useState } from 'react';
import './page.scss';
import Footer from '../../components/footer/footer';
import Botonerachat from '../../components/botonerachat/botonerachat';
import Mensajechat from '@/components/mensajechat/mensajechat';

function Page() {
  const [textito, setTextito] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  function handleEnviarClick() {

    if (textito.trim() !== '') {

      setMessages([...messages, textito]);

      setTextito('');
    }
  }

  return (
    <div className="App1">

      <Botonerachat />


      <div>
        {messages.map((message, index) => (


          <Mensajechat key={index} mensaje={message} />


        ))}
      </div>

      <div className="BARRABUSQUEDACHAT">
        <input
          type="text"
          maxLength={80}
          placeholder="How do I..."
          value={textito}
          onChange={(evento) => setTextito(evento.target.value)}
        />
        <button className="botonsito2" onClick={handleEnviarClick}>
          Send
        </button>
      </div>
      <Footer mostrarDonacion={false} />
    </div>
  );
}

export default Page;
