import React from "react";
import '../../css/Navbar.css';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { MisRedes } from '../MisRedes/MisRedes';
import { Footer } from "../Footer/Footer";

export function Navbar() {
    return(
        <div className="ContentNavbar">
            <Fade>
                <div className="Container_Navbar">
                    <nav className="Navbar">
                        <ul className="Listado_Navbar">
                            <li>
                                <Link to='/Sobre_Mi'>
                                    <Fade cascade damping={0.1}>Acerca de</Fade>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Proyectos'>
                                    <Fade cascade damping={0.2}>Proyectos</Fade>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Contactame'>
                                    <Fade cascade damping={0.3}>Contactame</Fade>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <MisRedes/>
                <Footer/>
            </Fade>
        </div>
    )
}