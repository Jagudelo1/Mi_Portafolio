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
                    <h2>Juan David Agudelo</h2>
                </Flip>
                <Fade cascade damping={0.3} className="AboutMe">
                    <div className="TextInfoAbout">
                        <p>
                            Como desarrollador frontend junior, mi pasión es dar vida a 
                            las interfaces de usuario web. Con una sólida formación 
                            en tecnologías como HTML, CSS y JavaScript, tengo la capacidad 
                            de convertir diseños creativos en experiencias interactivas y 
                            funcionales. <br/><br/>Mi enfoque se centra en la usabilidad, la accesibilidad 
                            y la optimización de rendimiento para garantizar que los sitios web 
                            sean atractivos y eficientes.
                        </p>
                    </div>
                </Fade>
                <VolverMenu/>
                <Footer/>
            </div>
        </>
    )
}