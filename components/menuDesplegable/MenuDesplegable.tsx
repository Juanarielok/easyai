import React, {useState, useEffect} from 'react';
import Menu from '../menu/menu';
import './menu-estilo.scss';

export default function MenuDesplegable () {
    const [menuBoton, mostrarMenu] = useState(true);

    function manejarClick () {
        mostrarMenu(!menuBoton);
    }

    return(
        <div 
            className='estilo-menu-desplegable'
            onClick={manejarClick} 
            style={{
                transition: "width 1.5s linear",
                width: menuBoton ? "0%" : "10%",
                position: menuBoton ? "inherit" : "fixed",
                right: menuBoton ? "inherit" : "0px"
              }}
        >
            {menuBoton && <img src='/icons/menu-desplegable.png' className='menu-icono' alt='Menu Icono'></img>}

            {!menuBoton && <Menu />}   

        </div>
);
}