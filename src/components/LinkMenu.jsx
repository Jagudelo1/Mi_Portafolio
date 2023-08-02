import { Link } from 'react-router-dom';
import '../css/About.css';

export function LinkMenu() {
    return(
        <div className="Exit">
            <Link to='/Mi_Portafolio' className="Menu">
                Menú
            </Link>
        </div>
    )
}