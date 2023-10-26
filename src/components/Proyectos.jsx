import React from 'react';
import '../css/Proyectos.css';
import { Return } from './Return/Return';
import { Cards } from "./Cards/Cards";
{/*Imagenes del Proyecto BonAppetit*/}
import Foto1B from '../assets/BonAppetit/1.jpeg';
import Foto2B from '../assets/BonAppetit/2.jpeg';
import Foto3B from '../assets/BonAppetit/3.jpeg';
import Foto4B from '../assets/BonAppetit/4.jpeg';
{/*Imagenes del Proyecto BonAppetit*/}
import Fact1 from '../assets/Facturacion/1.png';
import Fact2 from '../assets/Facturacion/2.png';
import Fact3 from '../assets/Facturacion/4.png';
import Fact4 from '../assets/Facturacion/6.png';


import { Fade } from 'react-awesome-reveal';

export function Proyectos() {
    const ApiStarWars = "https://github.com/Jagudelo1/Api_StarWars";
    const BonAppetit = "https://github.com/Jagudelo1/BonAppetit";
    const Error404 = "https://github.com/Jagudelo1/404_Error";
    const Facturacion = "https://github.com/Jagudelo1/Bethel_App";

    // Links de los proyectos que tienen sitio web
    const Error404_Link = "https://404-error-blush.vercel.app/";
    const ReactApiStarWars = "https://api-starwars.vercel.app/";

    return(
        <>
            <Fade className='ContentProyectos'>
                <div>
                    <Return/>
                    <h2 className="TitleProyect">Te Presento Mis Proyectos</h2>
                    <div className='ContentText_Cards'>
                        <div className="ContentCards">
                            <div className='card-container'>
                                <Cards title="Api_StarWars"
                                    description="Diseñé un sitio web 
                                    dedicado al universo de Star Wars, 
                                    que ofrece información sobre los personajes 
                                    y planetas de esta legendaria saga."
                                    etiqueta1="JavaScript" etiqueta2="React"
                                    github={ApiStarWars} link={ReactApiStarWars}
                                />
                            </div>
                            <div>
                                <Cards title="BonAppetit"
                                    description="Junto a tres compañeros de clase, 
                                    desarrollamos una aplicación web de reservas para 
                                    mesas, el usuario creaba su cuenta y posteriormente
                                    podia reservar una mesa. La plataforma incluía un módulo de 
                                    administrador para crear nuevos platillos, ver reseñas 
                                    y gestionar usuarios."
                                    etiqueta1="PHP" etiqueta2="JavaScript" etiqueta3="Hack"
                                    github={BonAppetit}
                                    img1={Foto1B} img2={Foto2B} img3={Foto3B} img4={Foto4B}
                                />
                            </div>
                            <div>
                                <Cards title="Error 404"
                                description="Este sitio web lo construí para practicar 
                                HTML, CSS y JavaScript."
                                etiqueta1="HTML" etiqueta2="CSS" etiqueta3="JavaScript"
                                github={Error404} link={Error404_Link}
                                />
                            </div>
                            <div>
                                <Cards title="Facturación Papelería"
                                description="Este aplicativo se diseño con el fin
                                de realizar facturación de manera las ágil y rápida
                                a los clientes de una papelería, el cual puede crear y
                                logear un administrador quien tendrá el permiso de crear
                                las facturas, editarlas y eliminarlas, a su vez también podrá
                                imprimirlas con el sello de la empresa."
                                etiqueta1="React + Vite" etiqueta2="MySQL" etiqueta3="Node"
                                github={Facturacion}
                                img1={Fact1} img2={Fact2} img3={Fact3} img4={Fact4}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}