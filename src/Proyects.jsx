import React from "react";
import './css/Proyects.css';
import { MisRedes } from './components/MisRedes';
import { NavbarProyects } from './components/NavbarProyects';
import { FooterApp } from "./components/FooterApp";
import { ReturnApp } from "./components/ReturnApp";
import ApiReact from './assets/Api_StarWars/1.png';



export function Proyects() {
    return(
        <div class="ContainerProyects">
            <ReturnApp/>
            <MisRedes/>
            <NavbarProyects/>

            <div>
                <div className="ImageProyects">
                    <img src={ApiReact} alt="" />
                </div>
                <p>
                    En esta sección encontraras mis proyectos realizados personal
                    y academicos, lamentablemente los proyectos no estan alojados
                    en un hosting por temas academicos, pero se puede observar en
                    dandole clic en uno de los proyectos donde encontran capturas
                    e información correspondiente a cada uno de los proyectos.
                </p>
            </div>
            <FooterApp/>
        </div>
    )
}