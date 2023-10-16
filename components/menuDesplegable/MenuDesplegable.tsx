import React, {useState, useEffect} from 'react';
import Menu from '../menu/menu';
import './menu-estilo.scss';

export default function MenuDesplegable () {
    const [menuBoton, mostrarMenu] = useState(true);

    function manejarClick () {
        mostrarMenu(!menuBoton);
    }

    return(
        <div className='estilo-menu-desplegable'  onClick={manejarClick} style= {{transition: menuBoton ? "transform 2s ease-in" : ""}}>
            {menuBoton ? <img src='/icons/menu-desplegable.png' className='menu-icono'>
            </img> : <Menu />}   
        </div>
    );
}