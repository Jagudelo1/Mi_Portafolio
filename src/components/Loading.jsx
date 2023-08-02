import React from "react";
import Naruto from '../assets/Loading.gif';
import '../css/Loading.css';
import '../css/main.css';
import { Fade } from "react-awesome-reveal";

export function Loading() {
    return(
        <div className='ContentLoading'>
            <Fade className='ContentImg'>
                <img src={Naruto} />    
            </Fade>
            <Fade className='TextLoading'>
                <h2 className="Cargando">Cargando...</h2>
                <h2 className="Cargando2">Cargando...</h2>
            </Fade>
        </div>
    )
}