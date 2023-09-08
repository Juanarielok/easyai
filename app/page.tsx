'use client'

import Footer from '../components/footer/footer';
import Barrabusqueda from '../components/barrabusqueda/barrabusqueda'
import Botonsitos from '../components/botonsitos/botonsitos'
import React from 'react';
import './page.scss';

function App() {


  return (

    <div className="App">



      <Botonsitos />



      <Barrabusqueda />


      <div className='footer-app'>
        <Footer mostrarDonacion={true} />
      </div>



    </div>










  );
}

export default App;
