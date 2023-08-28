import { Link } from 'react-router-dom';
import '../../css/Footer.css';

export function VolverMenu () {
    return(
        <div className="LeftContainer">
            <div className="LeftFooter">
                <Link to='/Mi_Portafolio' className="Menu">
                    Menú
                </Link>
            </div>
        </div>
    )
}