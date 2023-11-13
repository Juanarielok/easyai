import React, { useState, useEffect, useRef } from 'react';
import Menu from '../menu/menu';
import './menu-estilo.scss';

export default function MenuDesplegable() {
    const [menuBoton, mostrarMenu] = useState(true);

    const toggleMenu = useRef<HTMLDivElement>(null);

    function manejarClick() {
        mostrarMenu(!menuBoton);
    }

    useEffect(() => {
        // Definir el tipo de evento aquí
        const handleClickOutside = (event: MouseEvent) => {
            // Asegurar que event.target es un Node para usar el método contains
            if (toggleMenu.current && !toggleMenu.current.contains(event.target as Node)) {
                mostrarMenu(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuBoton]); // Aquí puede ser importante agregar menuBoton si la lógica del efecto depende de él

    return (
        <div
            onClick={manejarClick}
            style={{
                transition: menuBoton ? "none" : "width 0.5s ease-in-out",
                width: menuBoton ? "5%" : "10%",
                position: menuBoton ? "inherit" : "fixed",
                marginTop: "0px",
                top: menuBoton ? "none" : "0px",
                right: "0",
                marginLeft: menuBoton ? "auto" : "85%",
                zIndex: menuBoton ? "auto" : "999" // "none" no es un valor válido para zIndex, debería ser "auto" o un número
            }}
            ref={toggleMenu}
        >
            {menuBoton ? <img src='/icons/menu-desplegable.png' className='menu-icono' alt='Menu Icono'></img> : <Menu />}
        </div>
    );
}
