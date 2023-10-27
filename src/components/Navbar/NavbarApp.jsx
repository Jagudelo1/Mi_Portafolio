import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Logo from '../../assets/MiLogo.png';
import '../../css/NavbarApp.css';

export function NavbarApp() {

    const [activeLink, setActiveLink] = useState();

    const handleNavItemClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveLink(sectionId);
        }
    };

    return(
        <>
            <Navbar expand="sm" className="Body-Navbar">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={Logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                active={activeLink === 'sobreMi'}
                                onClick={() => handleNavItemClick('sobreMi')}>
                                <Link to="/Sobre_Mi">Sobre Mi</Link>
                            </Nav.Link>
                            <Nav.Link
                                active={activeLink === 'mis_proyectos'}
                                onClick={() => handleNavItemClick('mis_proyectos')}>
                                <Link to="/Proyectos">Mis Proyectos</Link>
                            </Nav.Link>
                            <Nav.Link
                                active={activeLink === 'Contácteme'}
                                onClick={() => handleNavItemClick('Contácteme')}>
                                <Link to="/Contácteme">Contácteme</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}