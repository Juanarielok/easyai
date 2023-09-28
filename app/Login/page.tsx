'use client'

import './loginEstilo.scss';
import React, {useEffect, useState} from 'react';

function Login () {

    const [password, setPassword] = useState('');
    const [updatedPassword, HidePassword] = useState(false);
    let newPassword = '';

    const getPassword = (evento) => {
        setPassword(evento.target.value);  
    }

    const showPassword = () => {
        console.log(password);
    }

    useEffect(() => {
        
        if (password.length >= 1) {
            
            for (let i = 0; i < password.length; i++)
            {
                    
                newPassword = newPassword + password[i];
                


                const temporizador = setTimeout(() => {
                    HidePassword(true)}, 50);
                return () => clearTimeout(temporizador);
            }
        }
        else {
            HidePassword(false);
        }
    },[password])

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

                <input 
                    value = {password}
                    onChange={getPassword}
                    type= {updatedPassword ? "password" : "none"}    
                    name="contraseña" 
                    placeholder='Password' 
                    className='textoLogin' 
                />

            </div>
            <button className="boton-login" onClick={showPassword}>Log in</button>
        </div>
    )
}

export default Login;

