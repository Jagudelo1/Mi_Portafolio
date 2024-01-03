import React, { useEffect, useState } from "react";
import { LoadingApp } from "./LoadingApp/LoadingApp";
import { NavbarApp } from "./NavbarApp/NavbarApp";
import { AboutApp } from "./AboutApp/AboutApp";
import { CardApp } from "./CardApp/CardApp";
import { IoIosPaper } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillHtml5, AiFillInstagram } from 'react-icons/ai'; // Icono de HTML5 y Instagram
import { BiLogoCss3, BiLogoGmail } from 'react-icons/bi';  // Icono de CSS3 y Gmail
import { RiJavascriptFill, RiThreadsFill } from 'react-icons/ri'; // Icono de JavaScript y Threads
import { TbBrandReactNative } from 'react-icons/tb'; // Icono de ReactNative
import { IoLogoNodejs } from 'react-icons/io'; // Icono de Nodejs
import { SiPhp } from 'react-icons/si'; // Icono de PHP
import { ImLinkedin } from 'react-icons/im'; // Icono de LinkedIn
import { FaGithub } from 'react-icons/fa'; // Icono de Github
import '../index.css';
import { CardProyect } from "./CardApp/CardProyect";
import { ContactApp } from "./ContactApp/ContactApp";
import { ScrollUp } from "./ScrollUp/ScrollUp";

export function HomeApp() {
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false); // Permite activar y desactivar la pantalla de carga
        }, 3000); // Tiempo que se demora la pantalla de carga
    }, []);

    // Links Github
    const facturaciong = "https://github.com/Jagudelo1/Bethel_App";
    const api_starwarsg = "https://github.com/Jagudelo1/React-ApiStarwars";
    const BonAppetitg = "https://github.com/Jagudelo1/BonAppetit";
    const Error_404g = "https://github.com/Jagudelo1/404_Error";

    // Links Pagina
    const Api_StarWars = "https://api-starwars.vercel.app/";
    const Error_404 = "https://404-error-blush.vercel.app/";

    return(
        <div className='ContainerBody'>
            { 
                loading ? (
                <div>
                    <LoadingApp/>
                </div>
            ) : (
                <div className='ContainerInfo'>
                    <NavbarApp/>
                    <AboutApp/>
                    <div className="Experiencia">
                        <h2>Experiencia <hr /></h2>
                        <div className="Cards1">
                            <div>
                                <CardApp 
                                    iconTitle={<IoIosPaper/>} 
                                    title="Bethel Papelería"
                                    subtitle="Agosto 2023 - Actualidad"
                                    info="Como desarrollador Frontend en esta
                                    empresa, he desempeñado una función clave 
                                    como encargado del diseño y desarrollo de 
                                    un aplicativo local destinado a simplificar 
                                    y optimizar el proceso de facturación. A lo 
                                    largo de este proyecto, he trabajado arduamente 
                                    para crear una herramienta eficaz y fácil de usar 
                                    que agiliza significativamente la generación de 
                                    facturas."
                                />
                            </div>
                            <div>
                                <CardApp
                                    iconTitle={<AiFillDashboard/>}
                                    title="Software Quality Assurance"
                                    subtitle="Enero 2023 - Julio 2023"
                                    info="Con cargo de Aprendiz 
                                    en etapa productiva en el área de 
                                    operaciones desempeñando funciones 
                                    de pruebas QA (Quality Assurance)."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Proyectos">
                        <h2>Proyectos <hr /></h2>
                        <div className="Cards2">
                            <div>
                                <CardProyect
                                    titleP="Facturación Papelería"
                                    textP="Este aplicativo se diseño con el fin de realizar 
                                    facturación de manera las ágil y rápida a los clientes 
                                    de una papelería, el cual puede crear y logear un 
                                    administrador quien tendrá el permiso de crear las 
                                    facturas, editarlas y eliminarlas, a su vez también 
                                    podrá imprimirlas con el sello de la empresa."
                                    github={facturaciong}
                                    icon1={<AiFillHtml5 size={30} color="#DD4B25"/>} 
                                    icon2={<BiLogoCss3 size={30} color="#254BDD"/>} 
                                    icon3={<RiJavascriptFill size={30} color="#EFD81D"/>} 
                                    icon4={<TbBrandReactNative size={30} color="#41E0FD"/>} 
                                    icon5={<IoLogoNodejs size={30} color="#79B265"/>}
                                />
                            </div>
                            <div>
                                <CardProyect
                                    titleP="Api - StarWars"
                                    textP="Desarrolle este sitio web para
                                    implementar los conocimientos que adquiria en
                                    React y en el consumo de APIS, esta web esta 
                                    dedicada al universo de Star Wars, 
                                    que ofrece información sobre los personajes 
                                    y planetas de esta legendaria saga."
                                    github={api_starwarsg}
                                    web={Api_StarWars}
                                    icon1={<AiFillHtml5 size={30} color="#DD4B25"/>} 
                                    icon2={<BiLogoCss3 size={30} color="#254BDD"/>} 
                                    icon3={<RiJavascriptFill size={30} color="#EFD81D"/>} 
                                    icon4={<TbBrandReactNative size={30} color="#41E0FD"/>}
                                />
                            </div>
                            <div>
                                <CardProyect
                                    titleP="BonAppetit"
                                    textP="Junto a un grupo de trabajo, 
                                    desarrollamos una aplicación web de reservas para 
                                    mesas, el usuario creaba su cuenta y posteriormente
                                    podia reservar una mesa. La plataforma incluía un módulo de 
                                    administrador para crear nuevos platillos, ver reseñas 
                                    y gestionar usuarios."
                                    github={BonAppetitg}
                                    icon1={<AiFillHtml5 size={30} color="#DD4B25"/>} 
                                    icon2={<BiLogoCss3 size={30} color="#254BDD"/>} 
                                    icon3={<RiJavascriptFill size={30} color="#EFD81D"/>} 
                                    icon4={<SiPhp size={30} color="#7377AD"/>}
                                />
                            </div>
                            <div>
                                <CardProyect
                                    titleP="Error 404"
                                    textP="Este sitio web lo construí con entusiasmo y dedicación 
                                    para practicar y mejorar mis habilidades en HTML, CSS y JavaScript. 
                                    Fue un proyecto personal donde buscaba explorar y aplicar los conocimientos 
                                    adquiridos en el desarrollo web. Sin embargo, como cualquier proyecto, puede
                                    haber obstáculos en el camino."
                                    github={Error_404g}
                                    web={Error_404}
                                    icon1={<AiFillHtml5 size={30} color="#DD4B25"/>} 
                                    icon2={<BiLogoCss3 size={30} color="#254BDD"/>} 
                                    icon3={<RiJavascriptFill size={30} color="#EFD81D"/>} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Contactame">
                        <h2>Contactame <hr /></h2>
                        <div className="ContainerContact">
                            <div className="InfoContact">
                                <p className="Contact_Email">
                                    <BiLogoGmail size={27} color="red" title="Gmail"/> <a href="mailto:juan.agudelo.aldana@gmail.com">juan.agudelo.aldana@gmail.com</a>
                                </p>
                                <p className="Curriculum">
                                    <a href="https://drive.google.com/file/d/1xQAOrZf9KRIOVwiT4jDBJlbZzAO1M6-m/view?usp=drive_link" download="Currículum.pdf" target="_blank">
                                        Ver CV
                                    </a>
                                </p>
                            </div>
                            <div className="ContactApp">
                                <ContactApp/>
                            </div>
                        </div>
                    </div>
                    <div className="ContainerFooter">
                        <p>Copyright  ©2023 - Juan David Agudelo</p>
                    </div>
                    <ScrollUp/>
                </div>
            )}
        </div>
    )
}