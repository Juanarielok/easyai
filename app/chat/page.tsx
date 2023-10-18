'use client'
import React, { use, useState } from 'react';
import './page.scss';
import Footer from '../../components/footer/footer';
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
 
function ENVIARMENSAJE () {


  setelchat([...elchat, textito]);
  setTextito("")
}

  return (
    <div className="pepe">

  <FancyHeader/>
      <div className='cartelera' >
        
        {elchat.map((message, index) => (
          <Mensajechat key={index} mensaje={message} />
        ))}
        
      </div>
      <div className='archivo'> <label className='archivolabel'>_____________ Archived chats </label> <Botonerachat/> </div>



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
