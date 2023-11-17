import { useEffect, useState } from "react";
import '../../css/AboutApp.css';
import Foto from '../../assets/Foto.jpg';

export function AboutApp() {
    return(
        <div className="ContainerAbout">
            <div className="Foto">
                <img src={Foto} alt="" />
            </div>
            <div className="InfoAbout">
                <h2>Hola 👋🏻, <span>Soy Juan David</span></h2><hr />
                <p>
                    Desarrollador Frontend Junior con la capacidad probada de 
                    traducir diseños creativos en experiencias interactivas y 
                    funcionales. Mi enfoque se centra en la usabilidad, 
                    la accesibilidad y la optimización de rendimiento para garantizar 
                    que los sitios web sean atractivos y eficientes.
                </p>
            </div>
        </div>
    )
}