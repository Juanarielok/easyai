'use client'

import React, { useState, useEffect } from 'react';
import './estilo-encabezado.scss';

function Encabezado() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            if (position > 50) { //Si cambia el flexbox debajo del encabezado, ajuste la posición a la altura de este.
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="titulo" style={{
            width: scrolled ? "20%" : "100%",
            position: scrolled ? "fixed" : "inherit",
            fontSize: scrolled ? "30px" : "40px"
        }}>
            <p>The democratization of AI at your hands. </p>

        </div>
    );


};

export default Encabezado;
