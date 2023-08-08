import React from 'react';
import '../css/Proyects.css';
import { MisRedes } from './MisRedes';
import { ReturnApp } from './ReturnApp';
import { NavbarProyects } from './NavbarProyects';
import { Fade } from 'react-awesome-reveal';
import { FooterApp } from './FooterApp';

export function ProyectsApp () {
    return(
        <>
            <ReturnApp/>
            <MisRedes/>
            <NavbarProyects/>
            <FooterApp/>
        </>
    )
}