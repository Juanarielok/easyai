'use client'

import './loginEstilo.scss';
import React, {useEffect, useState} from 'react';
import CajonContrasena from '@/components/cajonContrasena/cajonContrasena';

function Login () {

    const [password, setPassword] = useState('');
    const [updatedPassword, hidePassword] = useState(false);

    const showPassword = () => {
        console.log(password);
    }

    return(
        <div className="principal">

            <div className= "contenedor-titulo">
                <h1>Welcome back to AI Easy!</h1>
                <h2>The democratization of Artificial Intelligence at your hands</h2>
            </div>

            <div className='contenedor-credenciales'>

                 <input 
                    type="text"
                    name="email" 
                    placeholder='Email'
                    className='textoLogin'
                    id="emailTexto"
                  />

                <div className='contenedor-contraseña'>
                <CajonContrasena
                    password={password}
                    setPassword = {setPassword}
                    updatedPassword={updatedPassword}
                    hidePassword={hidePassword}
                    />
                </div>

            </div>
            <button className="boton-login" onClick={showPassword}>Log in</button>
        </div>
    )
}

export default Login;

