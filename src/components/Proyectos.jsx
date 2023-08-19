import React from "react";
import { Return } from './Return/Return';
import { MisRedes } from "./MisRedes/MisRedes";
import { Cards } from "./Cards/Cards";
import '../css/Proyectos.css';

export function Proyectos() {
    const ApiStarWars = "https://github.com/Jagudelo1/Api_StarWars";

    return(
        <div className='ContentProyects'>
            <Return/>
            <MisRedes/>
            <h2>Te Presento Mis Proyectos</h2>
            <div className="Proyects">
                <div className="ContentDescription">
                    <h2>Experiencia<hr/></h2>
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
                        github={ApiStarWars}
                        className='Card1'
                    />
                    <Cards title="Api_StarWars"
                        description="Diseñé un sitio web 
                        dedicado al universo de Star Wars, 
                        que ofrece información sobre los personajes 
                        y planetas de esta legendaria saga."
                        github={ApiStarWars}
                    />
                    <Cards title="Api_StarWars"
                        description="Diseñé un sitio web 
                        dedicado al universo de Star Wars, 
                        que ofrece información sobre los personajes 
                        y planetas de esta legendaria saga."
                        github={ApiStarWars}
                    />
                </div>
            </div>
        </div>
    )
}