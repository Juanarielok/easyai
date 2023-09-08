'use client'

import Footer from '../components/footer/footer';
import Barrabusqueda from '../components/barrabusqueda/barrabusqueda'
import Botonsitos from '../components/botonsitos/botonsitos'
import React from 'react';
import './page.scss';

function App() {


  return (

    <div className="App">
<<<<<<< HEAD
        <div className='INTERACTIVOS1'> <Link href="/register"> 
    <button  className="boton-ALFA">Sign Up</button>
    </Link>
          <button  className="boton-BETA">Log In</button> 
          <button  className="boton-CHARLIE">Contact us</button>
=======



      <Botonsitos />



      <Barrabusqueda />


      <div className='footer-app'>
        <Footer mostrarDonacion={true} />
      </div>


>>>>>>> a9c40bec79263666b6cf7047ac048e5d53eedcf8

    </div>










  );
}

export default App;
