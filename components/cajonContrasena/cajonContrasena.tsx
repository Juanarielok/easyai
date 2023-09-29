import React from 'react';
import './estiloContrasena.scss';


interface CajonContrasenaProps {
    password: string;
    updatedPassword: boolean;
    setPassword: React.Dispatch<React.SetStateAction<string>>
    hidePassword: React.Dispatch<React.SetStateAction<boolean>>
}


const CajonContrasena: React.FC<CajonContrasenaProps> = ({password, updatedPassword, setPassword, hidePassword})  => {

    const getPassword = (evento: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(evento.target.value);
    }

    const manejarClick = () => {
        hidePassword(!updatedPassword);
    }

    return(
    <div className='cajon-contrasena'>
        <input
            value= {password}
            onChange = {getPassword}
            type = {updatedPassword ? 'none' : 'password'}
            name = 'email'
            placeholder = 'Password'
            className = 'estilo-contrasena'
        >
        </input>
        <img src = '/icons/ojo-abierto.png' className = 'icono-contrasena' onClick = {manejarClick}></img>
    </div>)
};

export default CajonContrasena;