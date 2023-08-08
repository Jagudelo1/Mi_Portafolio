import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import '../css/ReturnApp.css'
 
export function ReturnApp () {
    return(
        <>
            <Fade className="ReturnContainer">
                <Link to="/Mi_Portafolio">
                    <GiReturnArrow className="IconReturn" size="30" color="#fff"/>
                </Link>
            </Fade>
        </>
    )
}