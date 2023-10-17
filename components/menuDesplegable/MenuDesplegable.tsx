import React, {useState, useEffect, useRef} from 'react';
import Menu from '../menu/menu';
import './menu-estilo.scss';

export default function MenuDesplegable () {
    const [menuBoton, mostrarMenu] = useState(true);
    const toggleMenu = useRef<HTMLDivElement>(null);

    function manejarClick () {
        mostrarMenu(!menuBoton);
    }


    useEffect(() => {
        const handleClickOutside = (event) => {
          if (toggleMenu.current && !toggleMenu.current.contains(event.target)) {
            mostrarMenu(true);  
          }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
      
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
      

    return(
        <div 
            className='estilo-menu-desplegable'
            onClick={manejarClick} 
            style={{
                transition: menuBoton ? "none" : "width 0.4s linear",
                width: menuBoton ? "0%" : "10%",
                position: menuBoton ? "inherit" : "fixed",
                right: menuBoton ? "inherit" : "0px",
                marginRight: menuBoton ? "60px" : "5px",
                marginTop: menuBoton ? "15px" : "0px"
              }}
            ref= {toggleMenu}
        >
            {menuBoton && <img src='/icons/menu-desplegable.png' className='menu-icono' alt='Menu Icono'></img>}

            {!menuBoton && <Menu />}   

        </div>
);
}