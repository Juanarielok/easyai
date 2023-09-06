'use client'

import Copyright from './copyright';
import Donacion from './donacion';
import './footer.scss';
import React from 'react';

export default function footer({
    mostrarDonacion
} : {
    mostrarDonacion : boolean
}) {

    return (
        <div className='footer1'>
            {mostrarDonacion && <Donacion />}
            <Copyright />
        </div>
    )
};
