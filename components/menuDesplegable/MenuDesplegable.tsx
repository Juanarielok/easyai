import React, {useState, useEffect, useRef} from 'react';
import Menu from '../menu/menu';
import './menu-estilo.scss';

export default function MenuDesplegable () {
    const [menuBoton, mostrarMenu] = useState(true);

    const toggleMenu = useRef<HTMLDivElement>(null);

    function manejarClick (event) {
      const anchoActual = event.target.style.width;

      if (anchoActual == '0%')
      {
        mostrarMenu(!menuBoton);
      }
      else {
        mostrarMenu(false);
      }
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
                transition: menuBoton? "none" : "width 0.5s ease-in-out",
                width: menuBoton ? "5%" : "15%",
                position: menuBoton ? "inherit" : "fixed",
                marginTop: menuBoton ? "0px" : "0px",
                top: menuBoton ? "none" : "0px", 
                right: "0",
                marginLeft: menuBoton ? "auto" : "85%"
              }}
            ref= {toggleMenu}
        >
            {menuBoton ? <img src='/icons/menu-desplegable.png' className='menu-icono' alt='Menu Icono'></img> : <Menu />}

        </div>
);
}