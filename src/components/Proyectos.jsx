import React from "react";
import { Return } from './Return/Return';
import { MisRedes } from "./MisRedes/MisRedes";
import { Cards } from "./Cards/Cards";
import '../css/Proyectos.css';

export function Proyectos() {
    const ApiStarWars = "https://github.com/Jagudelo1/Api_StarWars";
    const BonAppetit = "https://github.com/Jagudelo1/BonAppetit";
    const PelisBro = "https://github.com/Jagudelo1/PelisBro";

    return(
        <div className='ContentProyects'>
            <Return/>
            <MisRedes/>
            <h2 className="TitleProyect">Te Presento Mis Proyectos</h2>
            <div className="Proyects">
                <div className="ContentDescription">
                    <p>
                        A lo largo de mi experiencia como desarrollador, he 
                        abordado una variedad de proyectos que han abarcado 
                        diversas tecnologías y enfoques. Algunos de estos 
                        proyectos se basaron en HTML5, CSS3 y JavaScript, 
                        demostrando mi capacidad para crear interfaces atractivas 
                        con interacciones dinámicas. <br/><br/> Otros proyectos involucraron 
                        la integración de PHP junto con estas tecnologías, permitiéndome 
                        construir aplicaciones web más robustas que abarcan tanto la 
                        lógica del servidor como la interacción del cliente. Además, 
                        incursioné en el ecosistema de React, en estos proyectos utilizando 
                        tanto React-Bootstrap como la biblioteca Bootstrap estándar, lo que me 
                        permitió crear experiencias de usuario fluidas y visualmente 
                        atractivas en proyectos interactivos. <br/><br/>Mi enfoque continuo es 
                        abrazar nuevos desafíos y expandir mi expertise en el emocionante 
                        campo del desarrollo web y de aplicaciones.
                    </p>
                </div>
                <div className="ContentCards">
                    <Cards title="Api_StarWars"
                        description="Diseñé un sitio web 
                        dedicado al universo de Star Wars, 
                        que ofrece información sobre los personajes 
                        y planetas de esta legendaria saga."
                        etiqueta1="" etiqueta2="" etiqueta3=""
                        github={ApiStarWars}
                    />
                    <Cards title="BonAppetit"
                        description="Diseñé un sitio web 
                        dedicado al universo de Star Wars, 
                        que ofrece información sobre los personajes 
                        y planetas de esta legendaria saga."
                        etiqueta1="" etiqueta2="" etiqueta3=""
                        github={BonAppetit}
                    />
                    <Cards title="PelisBro"
                        description="Este proyecto aun se encuentra
                        en desarrollo, muy pronto esta en linea y funcionando."
                        etiqueta1="" etiqueta2="" etiqueta3=""
                        github={PelisBro}
                    />
                </div>
            </div>
        </div>
    )
}