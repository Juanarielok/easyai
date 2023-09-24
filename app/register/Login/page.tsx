'use client'

import './registerEstilo.scss';
import React, {useState} from 'react';

function Registro () {

    return(
        <div className="principal">

            <div className= "contenedor-titulo">
                <h1>Welcome back to AI Easy!</h1>
                <h2>The democratization of Artificial Intelligence at your hands</h2>
            </div>

            <div className='contenedor-label'>
                <input type="text" name="email" placeholder='Email'className='texto' id="emailTexto"/>
                <input type="text" name="contraseña" placeholder='Password' className='texto'/>
            </div>


        </div>
    )
}

export default Registro;

