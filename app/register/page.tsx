'use client'

import './page.scss';
import './registerEstilo.scss';
import React, {useState} from 'react';

function Registro () {

    return(
        <div className="principal">
            <div className= "cajaTexto">
                <h1>Don´t have an account at AI Easy?</h1>
                <h2>Sign up to gain access to all our features</h2>
            </div>
            <div className='labelTexto'>
            <input type="email" name="email" placeholder='Your email'className='texto'></input>
            </div>
            <div className= "contenedorBoton">
                <button className='botonEnviar'>Submit</button>
            </div>
        </div>
    )
}

export default Registro;

