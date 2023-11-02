'use client'

import './registerEstilo.scss';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import CajonContrasena from '@/components/cajonContrasena/cajonContrasena';

function Registro () {

    const [texto, setInput] = useState("");
    const [contenedorInput, setContenedorInput] = useState(false);

    const [password, setPassword] = useState('');
    const [updatedPassword, hidePassword] = useState(false);


    const manejarCambio = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInput(e.target.value);
    }

    const manejarClick = () => {

        console.log(texto);
        setContenedorInput(true);
    }

    return(
        <div className="principal">

            <div className= "contenedor-titulo">
                <p>Don't have an account at AI Easy?</p>
                <h2>Sign up to gain access to all our features</h2>
            </div>

            <div className='contenedor-label'>

             {contenedorInput ? <CajonContrasena
                                password={password}
                                setPassword = {setPassword}
                                updatedPassword={updatedPassword}
                                hidePassword={hidePassword}
                                /> : 
                                <input type="text" name="email" placeholder='Your email'className='texto' id="emailTexto" onChange= {manejarCambio} 
                                />
             }
                
            </div>

            <div className= "contenedor-boton">
                <button className= 'botonEnviar' id='enviar' onClick={manejarClick}>Submit</button>

                

                <h3>Already have an account? Sign in <Link href={'./Login'} className='enlace-login'>here</Link></h3>
            </div>

        </div>
    )
}

export default Registro;

