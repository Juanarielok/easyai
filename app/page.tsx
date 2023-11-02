'use client'


import Botonsitos from '../components/botonsitos/botonsitos'
import React from 'react';
import './page.scss';

export default function App() {
  return (

    <div className="App">

      <label className="marquesina"> Choose the AI ​​tool you need today </label>
      <Botonsitos />
      
    </div>
  );
}
