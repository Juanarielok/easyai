'use client'
import React, { useState } from 'react';
import './page.scss';

function Page() {

  const [textito, setTextito] = useState('');

  function ENVIARMENSAJE() {
    setTextito('');
  }

  return (
    <div className="App1">
      <label className='text1'> Upload your file </label>
      <img className='subir' src="/icons/tut1.png" />

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
