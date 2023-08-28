import { useEffect, useState } from "react"
import { Loading } from "./Loading/Loading";
import { Navbar } from "./Navbar/Navbar";
import '../index.css';

export const HomeApp = () => {
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); //Permite que despues de 3 segundos cambie a la pagina principal
        }, 3000); //Tiempo que se demora la pantalla de carga 3000 (3 segundos)
    }, []);

    return(
        <div>    
            {
                isLoading ? (
                <div>
                    <Loading/>
                </div>
                ) : (
                <div  className="ContentNav">
                    <Navbar/>
                </div>
            )}
        </div>
    )
}