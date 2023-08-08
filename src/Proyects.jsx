import React from "react";
import './css/Proyects.css';
import Logo from './assets/MiLogo.gif';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { MisRedes } from './components/MisRedes';
import { NavbarProyects } from './components/NavbarProyects';
import { FooterApp } from "./components/FooterApp";
import ApiReact from './assets/Api_StarWars/1.png';

export function Proyects() {
    return(
        <div class="ContainerProyects">
            <Zoom className="Logo">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </Zoom>
            <MisRedes/>
            <NavbarProyects/>
            <div>
                <div>
                    <img src={ApiReact} alt="Proyecto1" />
                </div>
                <p>En esta sección encontraras mis proyectos realizados personal
                    y academicos
                </p>
            </div>
            <FooterApp/>
        </div>
    )
}