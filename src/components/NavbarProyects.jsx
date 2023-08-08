import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import '../css/NavbarProyects.css';


export function NavbarProyects () {
    return(
        <>
            <Fade>
                <Navbar expand="sm" className="NavbarXD">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="m-auto">
                                    <Nav.Link activeClassName="active">
                                        <Link to='/Proyectos/Api_StarWars' 
                                            className="Link">
                                            Api StarWars
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link activeClassName="active">
                                        <Link to='/Proyectos/BonAppetit' 
                                            className="Link">
                                            BonAppetit
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link activeClassName="active">
                                        <Link to='/Proyectos/PelisBro' 
                                            className="Link">
                                            PelisBros
                                        </Link>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fade>
        </>
    )
}