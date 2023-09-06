'use client'

import './page.scss';

import React from 'react';
import Encabezado from './Encabezado/Encabezado';
import BannerPrincipal from './BannerPrincipal/BannerPrincipal';
import BannerHistoria from './BannerHistoria/BannerHistoria';
import Footer from '@/components/user_menu/footer';

function App() {
  return (
    <>
      <div className="App">
        <Encabezado />
        <BannerPrincipal />
        <div className='hola1'></div>
        <div className='hola2'></div>
        <BannerHistoria />
      </div>
      <Footer mostrarDonacion={false} />
    </>
  )
}

export default App;

