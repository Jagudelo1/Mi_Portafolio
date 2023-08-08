import { NavbarProyects } from "./NavbarProyects";
import '../css/Proyects.css';
import { Zoom, Fade } from "react-awesome-reveal";
import Logo from '../assets/MiLogo.gif';
import { Link } from "react-router-dom";
import Primero from '../assets/Api_StarWars/1.png';
import Segundo from '../assets/Api_StarWars/2.png';
import Tercero from '../assets/Api_StarWars/3.png';
import { MisRedes } from "./MisRedes";
import { FooterApp } from "./FooterApp";

export function Proyecto1 () {
    return(
        <>
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
            <div className='ContainerImg'>
                <img alt="" srcSet={Primero}/>
            </div>
            <div className='ContainerCarousel'>
                <span>Proyecto: </span> 
                <h1>
                    Sitio Web de Star Wars con React
                </h1>
                <div className='ContentProyect'>
                    <h3>Descripción</h3>
                    <p>
                        Este proyecto fue una emocionante oportunidad 
                        para demostrar mis habilidades en el desarrollo 
                        web utilizando React. Diseñé un sitio web 
                        dedicado al universo de Star Wars, que ofrece 
                        información sobre los personajes y planetas de 
                        esta legendaria saga.
                    </p>
                    <div className="Content">
                        <div>
                            <h3>
                                Tecnologías Utilizadas
                            </h3>
                            <ul>
                                <li>
                                    React Bootstrap: Aproveché esta librería para diseñar 
                                    una interfaz atractiva y responsiva, asegurando que el 
                                    sitio luzca bien en diferentes dispositivos.
                                </li>
                                <li>
                                    React Router DOM: Implementé la navegación en el sitio, 
                                    permitiendo a los usuarios cambiar entre las páginas de 
                                    personajes y planetas de manera fluida.
                                </li>
                                <li>
                                    React Icons: Agregué iconos de Star Wars para darle un 
                                    toque auténtico y resaltar el tema de la saga en toda 
                                    la interfaz.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>
                                Funcionalidades Clave
                            </h3>
                            <ul>
                                <li>
                                    <span>Exploración de Personajes: </span>
                                    Los usuarios pueden acceder a una lista completa de 
                                    personajes de Star Wars, donde se muestra información 
                                    detallada sobre cada uno, incluyendo sus habilidades, 
                                    afiliaciones y apariciones en la saga.
                                </li>
                                <li>
                                    <span>Descubrimiento de Planetas: </span>
                                    El sitio ofrece una página dedicada a los planetas, 
                                    donde los usuarios pueden explorar diferentes mundos, 
                                    acompañados de datos relevantes, como el clima, 
                                    terreno, población y eventos importantes que 
                                    ocurrieron en cada planeta.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <FooterApp/>
        </>
    )
}