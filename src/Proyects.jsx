import React from "react";
import Logo from './assets/MiLogo.gif';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { MisRedes } from './components/MisRedes';
import { NavbarProyects } from "./components/NavbarProyects";
import './css/Proyects.css';
import { FooterApp } from "./components/FooterApp";

export function Proyects() {
    return(
        <div class="ContainerProyects">
            <Zoom className="Logo">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </Zoom>
            <MisRedes/>
            <Fade className="TitleProyect">
                <h1>Mis Proyectos 😉</h1>
            </Fade>
            <NavbarProyects/>
            <FooterApp/>
        </div>
    )
}