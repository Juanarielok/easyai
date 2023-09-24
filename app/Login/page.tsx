'use client'

import './loginEstilo.scss';
import React, {useState} from 'react';

function Login () {

    return(
        <div className="principal">

            <div className= "contenedor-titulo">
                <h1>Welcome back to AI Easy!</h1>
                <h2>The democratization of Artificial Intelligence at your hands</h2>
            </div>

            <div className='contenedor-credenciales'>
                <input type="text" name="email" placeholder='Email'className='textoLogin' id="emailTexto"/>
                <input type="text" name="contraseña" placeholder='Password' className='textoLogin'/>
            </div>
            <button className="boton-login">Log in</button>
        </div>
    )
}

export default Login;

