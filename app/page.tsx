'use client'

import Footer from '@/components/user_menu/footer';
import Barrabusqueda from '../components/user_menu/barrabusqueda'
import Botonsitos from '../components/user_menu/botonsitos'
import React from 'react';
import './page.scss';

function App() {


  return (    
    
 <div className="App">
   
     
     
  <Botonsitos/>
         


  <Barrabusqueda/>


  <div className='footer-app'>
    <Footer mostrarDonacion={true} />
  </div>

          

 </div>
   
  







   
  );
}

export default App;
