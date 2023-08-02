import { NavbarApp } from "./components/NavbarApp";
import { Loading } from "./components/Loading";
import { useEffect, useState } from "react";

const HomeApp = () => {
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() =>{
      setTimeout(() => {
        setIsLoading(false); // Permite que despues de 3 segundos cambie a la pagina principal
      }, 3000); //Tiempo que se demora la pantalla de carga 3000 (3 segundos)
    }, []);

    return(
        <>
            {
            isLoading ? (
            // Muestra la pantalla de carga mientras isLoading es verdadero
            <div className='LoadingContent'>
                <Loading />
            </div>
            ) : (
            // Muestra el contenido una vez que isLoading es falso
            <div className='Content'>
                <NavbarApp/>
            </div>
            )}
        </>
    )
}

export default HomeApp;