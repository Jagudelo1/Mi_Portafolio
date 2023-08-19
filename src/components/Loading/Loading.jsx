import React from "react";
import Carga from  '../../assets/Loading.gif';
import '../../css/Loading.css';
import { Fade } from "react-awesome-reveal";

export function Loading() {
    return(
        <>
            <Fade className="ContentImg">
                <img src={Carga} alt="Cargando..." />
            </Fade>
            <Fade className="TextLoading">
                <h2 className='Cargando'>Cargando...</h2>
                <h2 className='Cargando2'>Cargando...</h2>
            </Fade>
        </>
    )
}