'use client'

import './page.scss';

import React from 'react';
import Encabezado from './Encabezado/Encabezado';
import BannerPrincipal from './BannerPrincipal/BannerPrincipal';
import BannerHistoria from './BannerHistoria/BannerHistoria';

function App() {
  return (
    <>
      <div className="sobrenosotros">
        <Encabezado />
        <BannerPrincipal />
        <div className='hola1'></div>
        <div className='hola2'></div>
        <BannerHistoria />
      </div>
     
    </>
  )
}

export default App;

