'use client'


import './registerEstilo.scss';
import Link from 'next/link';
import React, {useState} from 'react';

function Registro () {

    return(
        <div className="principal">

            <div className= "contenedor-titulo">
                <h1>Don´t have an account at AI Easy?</h1>
                <h2>Sign up to gain access to all our features</h2>
            </div>

            <div className='contenedor-label'>
                <input type="text" name="email" placeholder='Your email'className='texto' id="emailTexto"/>
            </div>

            <div className= "contenedor-boton">
                <button className='botonEnviar' id='enviar'>Submit</button>
                <h3>Already have an account? Sign in <Link href={'./Login'} className='enlace-login'>here</Link></h3>
            </div>

        </div>
    )
}

export default Registro;

