import { useEffect, useState } from "react"
import { Loading } from "./Loading/Loading";
import { Navbar } from "./Navbar/Navbar";

export const HomeApp = () => {
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); //Permite que despues de 3 segundos cambie a la pagina principal
        }, 3000); //Tiempo que se demora la pantalla de carga 3000 (3 segundos)
    }, []);

    return(
        <>
            {
            isLoading ? (
                <div className='LoadingContnet'>
                    <Loading/>
                </div>
            ) : (
                <div className='Content'>
                    <Navbar/>
                </div>
            )}
        </>
    )
}