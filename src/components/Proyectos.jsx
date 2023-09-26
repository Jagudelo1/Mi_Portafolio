import React from 'react';
import '../css/Proyectos.css';
import { Return } from './Return/Return';
import { MisRedes } from "./MisRedes/MisRedes";
import { Cards } from "./Cards/Cards";
{/*Imagenes del Primer Proyecto*/}
import Foto1S from '../assets/Api_StarWars/1.png';
import Foto2S from '../assets/Api_StarWars/2.png';
import Foto3S from '../assets/Api_StarWars/3.png';
import Foto4S from '../assets/Api_StarWars/4.png';
{/*Imagenes del Segundo Proyecto*/}
import Foto1B from '../assets/BonAppetit/1.jpeg';
import Foto2B from '../assets/BonAppetit/2.jpeg';
import Foto3B from '../assets/BonAppetit/3.jpeg';
import Foto4B from '../assets/BonAppetit/4.jpeg';
{/*Imagenes del Tercer Proyecto*/}

{/*Imagenes del Tercer Proyecto*/}
import Foto1E from '../assets/404_Error/1.png';
import Foto2E from '../assets/404_Error/2.png';
import Foto3E from '../assets/404_Error/3.png';
import Foto4E from '../assets/404_Error/4.png';
import { Fade } from 'react-awesome-reveal';

export function Proyectos() {
    const ApiStarWars = "https://github.com/Jagudelo1/Api_StarWars";
    const BonAppetit = "https://github.com/Jagudelo1/BonAppetit";
    const Error404 = "https://github.com/Jagudelo1/404_Error";

    // Links de los proyectos que tienen sitio web
    const Error404_Link = "https://404-error-blush.vercel.app/";
    const ReactApiStarWars = "https://api-starwars.vercel.app/";

    return(
        <>
            <Fade className='ContentProyectos'>
                <div>
                    <Return/>
                    <MisRedes/>
                    <h2 className="TitleProyect">Te Presento Mis Proyectos</h2>
                    <div>
                        <div className="ContentDescription">
                            <p>
                                Explora una muestra diversa de mis proyectos que 
                                abarcan creatividad, innovación y soluciones. Cada 
                                proyecto es un testimonio de mi pasión por enfrentar 
                                desafíos y transformar ideas en realidad.
                            </p>
                        </div>
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
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}