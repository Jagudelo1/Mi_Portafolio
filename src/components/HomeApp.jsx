import { useEffect, useState } from "react"
import { Loading } from "./Loading/Loading";
import { NavbarApp } from "./Navbar/NavbarApp";
import { ScrollUp } from "./ScrollUp/ScrollUp";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiSolidStarHalf, BiSolidGraduation } from 'react-icons/bi';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Foto from '../assets/Foto.jpg';
import '../index.css';

export const HomeApp = () => {
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); //Permite que después de 3 segundos cambie a la pagina principal
        }, 3000); //Tiempo que se demora la pantalla de carga 3000 (3 segundos)
    }, []);

    const [key, setKey] = useState();

    return(
        <div>
            {
                isLoading ? (
                <div>
                    <Loading/>
                </div>
                ) : (
                <div  className="ContentNav">
                    <NavbarApp/>
                    <div className="ContentPort">
                        <div id="sobreMi" className="section1">
                            <div className="Foto">
                                <img src={Foto} alt="" />
                            </div>
                            <div className="ContentInfo">
                                <h2>Sobre Mi <hr /></h2>
                                <p>
                                    Como desarrollador frontend junior, cuento con una sólida formación en 
                                    tecnologías como HTML, CSS y JavaScript, tengo la capacidad 
                                    de convertir diseños creativos en experiencias interactivas y 
                                    funcionales. mi pasión es dar vida a las interfaces de usuario. 
                                    <br/><br/>Mi enfoque se centra en la usabilidad, 
                                    la accesibilidad y la optimización de rendimiento para garantizar 
                                    que los sitios web sean atractivos y eficientes.
                                </p>
                                <Tabs
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    className="mb-2"
                                >
                                    <Tab eventKey="Habilidades" title="Habilidades">
                                        <div className="Modulo1">
                                            <ul>
                                                <li>HTML5 <span><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiFillStar color="yellow"/></span></li>
                                                <li>CSS3 <span><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiFillStar color="yellow"/></span></li>
                                                <li>JavaScript <span><AiFillStar color="yellow"/><AiFillStar color="yellow"/><BiSolidStarHalf color="yellow"/><AiOutlineStar color="yellow"/><AiOutlineStar color="yellow"/></span></li>
                                                <li>ReactJs <span><AiFillStar color="yellow"/><AiFillStar color="yellow"/><BiSolidStarHalf color="yellow"/><AiOutlineStar color="yellow"/><AiOutlineStar color="yellow"/></span></li>
                                            </ul>
                                            <ul>
                                                <li>PHP <span><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiOutlineStar color="yellow"/><AiOutlineStar color="yellow"/><AiOutlineStar color="yellow"/></span></li>
                                                <li>NodeJs <span><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiOutlineStar color="yellow"/><AiOutlineStar color="yellow"/><AiOutlineStar color="yellow"/></span></li>
                                                <li>MySQL <span><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiOutlineStar color="yellow"/><AiOutlineStar color="yellow"/></span></li>
                                                <li>Bootstrap <span><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiFillStar color="yellow"/><AiFillStar color="yellow"/></span></li>
                                            </ul>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Experiencia" title="Experiencia" >
                                        <div className="Modulo2">
                                            <ul>
                                                <li>
                                                    <p className="trabajo">
                                                        <span>Julio 2023 - Actualmente</span> 
                                                        <p>Papelería Bethel<br />
                                                        Desarrollador Front-end</p>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="trabajo">
                                                        <span>Enero - Julio 2023</span> 
                                                        <p>Software Quality Assurances<br />
                                                        Analista de Pruebas</p>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Educación" title="Educación">
                                        <div className="Modulo3">
                                            <ul>
                                                <li>
                                                    <p><BiSolidGraduation size={20}/> Tecnólogo en Análisis y Desarrollo de Sistemas de Información.<br />
                                                        <span>2023</span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        <div id="mis_servicios" className="section2">
                            <h2>Mis Servicios<hr /></h2>
                        </div>
                        <div id="mis_trabajos" className="section3">
                            <h2>Mis Trabajos<hr /></h2>
                        </div>
                        <div id="Contácteme" className="section4">
                            <h2>Contácteme<hr /></h2>
                        </div>
                        <ScrollUp/>
                    </div>
                </div>
            )}
        </div>
    )
}