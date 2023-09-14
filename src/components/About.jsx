import React from "react";
import '../css/About.css';
import Foto from '../assets/Foto.png';
import Logo from '../assets/MiLogo.gif';
import { Link } from "react-router-dom";
import { Fade, Flip, Zoom } from "react-awesome-reveal";
import { MisRedes } from "./MisRedes/MisRedes";
import { Footer } from "./Footer/Footer";
import { VolverMenu } from "./Return/VolverMenu";

export function About () {
    return(
        <>
            <div className="ContainerAbout">
                <div className="Avatar">
                    <img src={Foto} alt="" />
                </div>
                <MisRedes/>
                <Zoom className="Logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </Zoom>
                <Flip className='AboutText'>
                    <h2>Sobre Mi</h2>
                </Flip>
                <Fade cascade damping={0.3} className="AboutMe">
                    <div className="TextInfoAbout">
                        <p>
                            Soy Juan David Agudelo 
                            programador junior con sede en Florida, Valle del Cauca, Colombia.
                            He desarrollado proyectos los cuales me han ayudado a mejorar mis conocimientos,
                            he diseñado proyectos desde un restaurante con sistema de reservas hasta el uso
                            de APIS en React.
                            <br/><br/>
                            Me apasionan la programación, me encanta el diseño de interfases interactivas y el
                            constante aprendizaje para llegar hacer mejor y aportar mucho más al mundo
                            de la programación.
                        </p>
                    </div>
                </Fade>
                <VolverMenu/>
                <Footer/>
            </div>
        </>
    )
}