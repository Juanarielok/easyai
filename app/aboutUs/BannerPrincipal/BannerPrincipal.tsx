'use client'

import React, { useState, useEffect, useTransition } from 'react';
import './estilo-banner-principal.scss';

function BannerPrincipal() {
    const images = [
        '/imagenes-about-us/carreteraimagen.png',
        '/imagenes-about-us/campo.png',
    ];

    const [indiceActualImagen, setIndiceActual] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            if (position > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    useEffect(() => {
        const timer = setInterval(() => {
            setIndiceActual((prevIndice) => (prevIndice + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="info" style={{
            backgroundImage: `url(${images[indiceActualImagen]})`,
            transform: scrolled ? "translate(15%)" : "none",
            width: scrolled ? '50%' : '60%',
            position: "inherit"
        }}>
            {images.map((imgSrc, index) => (
                <div
                    key={index}
                    className={`image-container ${index === indiceActualImagen ? 'active' : ''}`}
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${imgSrc})` }}
                ></div>
            ))}
            <h1 style={{ color: 'white', fontSize: "50px" }}>Who We Are</h1>
            <p className="parrafo">Founded by a visionary trio of software engineers, AI Easy embarked on its mission to demystify the complexities of Artificial Intelligence. From bustling urban cities to tranquil rural hamlets, our commitment remains unwavering - making AI accessible, comprehensible, and beneficial to everyone, everywhere. </p>
        </div>
    );
};








export default BannerPrincipal;
