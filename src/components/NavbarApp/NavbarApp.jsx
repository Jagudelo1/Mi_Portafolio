import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import MiLogo from '../../assets/Logo.png';
import '../../css/NavbarApp.css';

export function NavbarApp() {
    const [ activeLinks, setActiveLink ] = useState();

    const handleActive = (sectionId) => {
        const element = document.getElementById(sectionId);
        if(element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveLink(sectionId);
        }
    };
    
    return(
        <>
            <Navbar expand="sm">
                <Container>
                    <Navbar.Brand>
                        <img src={MiLogo} alt="Mi Logo Personal" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}