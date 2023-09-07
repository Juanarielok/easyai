'use client'

import './page.scss';

import React from 'react';
import Encabezado from './Encabezado/Encabezado';
import BannerPrincipal from './BannerPrincipal/BannerPrincipal';
import BannerHistoria from './BannerHistoria/BannerHistoria';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <BannerPrincipal />
      <BannerHistoria />
    </div>
  )
}

export default App;

