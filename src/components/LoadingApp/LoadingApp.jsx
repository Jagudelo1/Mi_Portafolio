import React from "react";
import { Fade } from "react-awesome-reveal";
import Carga from '../../assets/Loading.gif';
import '../../css/LoadingApp.css';

export function LoadingApp() {
    return(
        <div className='ContentLoading'>
            <Fade className="GifLoading">
                <img src={Carga} alt='Cargando...' />
            </Fade>
            <Fade className="TextLoading">
                <h2 className='Cargando'>Cargando...</h2>
                <h2 className='Cargando2'>Cargando...</h2>
            </Fade>
        </div>
    )
}