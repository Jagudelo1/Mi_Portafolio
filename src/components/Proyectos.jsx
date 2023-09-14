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
import FotoP from '../assets/Not Found.jpg';
import { Fade } from 'react-awesome-reveal';
import { VolverMenu } from './Return/VolverMenu'

export function Proyectos() {
    const ApiStarWars = "https://github.com/Jagudelo1/Api_StarWars";
    const BonAppetit = "https://github.com/Jagudelo1/BonAppetit";
    // const PelisBro = "https://github.com/Jagudelo1/PelisBro";

    return(
        <>
            <Fade>
                <div className='ContentProyects'>
                    <Return/>
                    <MisRedes/>
                    <h2 className="TitleProyect">Te Presento Mis Proyectos</h2>
                    <div className="Proyects">
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
                                    github={ApiStarWars}
                                    img1={Foto1S} img2={Foto2S} img3={Foto3S} img4={Foto4S}
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
                                <Cards title="PelisBro"
                                    description="Este proyecto aun se encuentra
                                    en desarrollo, muy pronto esta en linea y funcionando."
                                    etiqueta1="HTML5" etiqueta2="CSS3" etiqueta3="JavaScript"
                                    img1={FotoP} img2={FotoP} img3={FotoP} img4={FotoP}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <VolverMenu/>
        </>
    )
}