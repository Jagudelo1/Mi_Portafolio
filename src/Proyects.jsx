import React from "react";
import './css/About.css';
import './css/Proyects.css';
import Logo from './assets/MiLogo.gif';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { MisRedes } from './components/MisRedes';
import { LinkMenu } from './components/LinkMenu';
import { CopyR } from './components/CopyR';

export function Proyects() {
    return(
        <div class="ContainerProyects">
            <Zoom className="Logo">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </Zoom>
            <MisRedes/>
                <h1 className="TitleProyect">Proyectos</h1>
                <div className="ListProyects">
                    <ul>
                        <li><a href="#">StarWars Api</a></li>
                        <li><a href="#">BonAppetit</a></li>
                        <li><a href="#">PelisBro</a></li>
                    </ul>
                </div>
            <LinkMenu/>
            <CopyR/>
        </div>
    )
}