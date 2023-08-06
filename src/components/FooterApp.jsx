import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import '../css/FooterApp.css';

export function FooterApp () {
    return(
        <div className="FooterContainer">
            <div className="LeftFooter">
                <Link to='/Mi_Portafolio' className="Menu">
                    Menú
                </Link>
            </div>
            <div className="RightFooter">
                <Fade className="NavbarFooter">
                    <p>@2023 Juan David Agudelo</p>
                </Fade>
            </div>
        </div>
    )
}