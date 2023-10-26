import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import '../../css/Return.css';

export function Return (){
    return(
        <>
            <Fade className="ReturnContainer">
                <Link to="/Mi_Portafolio" className="Linkto">
                    <GiReturnArrow className="IconReturn" size="30" color="#fff"/>
                </Link>
            </Fade>
        </>
    )
}