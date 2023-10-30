import { useEffect, useState } from "react"
import { Loading } from "./Loading/Loading";
import { NavbarApp } from "./Navbar/NavbarApp";
import { ScrollUp } from "./ScrollUp/ScrollUp";
import { AiFillStar, AiOutlineStar, AiFillHtml5, AiFillInstagram, AiFillPhone } from 'react-icons/ai'; // Iconos de Estrellas, HTML5 y Instagram
import { BiSolidStarHalf, BiSolidGraduation, BiCodeAlt, BiLogoCss3, BiLogoGmail } from 'react-icons/bi'; // Iconos de Estrella, Grado, Codigo, CSS3 y Gmail
import { RiJavascriptFill, RiThreadsFill } from 'react-icons/ri'; // Icono de JavaScript y Threads
import { TbBrandReactNative } from 'react-icons/tb'; // Icono de ReactNative
import { IoLogoNodejs } from 'react-icons/io'; // Icono de Nodejs
import { SiPhp } from 'react-icons/si'; // Icono de PHP
import { CardApp } from "./CardApp/CardApp";
import { ImLinkedin } from 'react-icons/im'; // Icono de LinkedIn
import { FaGithub } from 'react-icons/fa'; // Icono de Github
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Foto from '../assets/Foto.jpg';
import '../index.css';
import { FooterApp } from "./FooterApp/FooterApp";
import { ContactApp } from "./ContactApp/ContactApp";

export const HomeApp = () => {
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); //Permite que después de 3 segundos cambie a la pagina principal
        }, 3000); //Tiempo que se demora la pantalla de carga 3000 (3 segundos)
    }, []);

    const [key, setKey] = useState("");

    // Links Github
    const facturacionG = "https://github.com/Jagudelo1/Bethel_App";
    const Api_StarWarsG = "https://github.com/Jagudelo1/React-ApiStarwars";
    const BonAppetitG = "https://github.com/Jagudelo1/BonAppetit";
    const Error_404G = "https://github.com/Jagudelo1/404_Error";

    // Links Pagina
    const Api_StarWars = "https://api-starwars.vercel.app/";
    const Error_404 = "https://404-error-blush.vercel.app/";

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
                                    Mi nombre es Juan David Agudelo, como desarrollador frontend junior, tengo la capacidad 
                                    de convertir diseños creativos en experiencias interactivas y 
                                    funcionales. mi pasión es dar vida a las interfaces de usuario. 
                                    <br/><br/>Mi enfoque se centra en la usabilidad, 
                                    la accesibilidad y la optimización de rendimiento para garantizar 
                                    que los sitios web sean atractivos y eficientes.
                                </p>
                                <Tabs
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    className="mb-2 ContainerTabs"
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
                                    <Tab eventKey="Servicios" title="Servicios">
                                        <div className="Modulo4">
                                            <ul>
                                                <li>
                                                    <h5>
                                                        <BiCodeAlt className="IconCode"/> Web Developer
                                                    </h5>
                                                    <p>
                                                        Como desarrollador web, ofrezco soluciones personalizadas y 
                                                        creativas para hacer realidad tus proyectos en línea. Mi 
                                                        experiencia en diseño y desarrollo de sitios web me permite 
                                                        crear sitios atractivos, funcionales y responsivos que se adaptan 
                                                        a las necesidades de tu negocio o proyecto personal.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Redes Sociales" title="Redes Sociales" className="Redes">
                                        <p><BsArrowRightCircleFill size={20} color="#000" className="IconArrow"/> Contactame también por mis redes sociales</p>
                                        <div className="Modulo5">
                                            <ul>
                                                <li>
                                                    <a href="https://www.instagram.com/jagudelo1902/" target="_blank">
                                                        <AiFillInstagram size={30} color="purple" title="Instagram"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.threads.net/@jagudelo1902" target="_blank">
                                                        <RiThreadsFill size={25} color="#fff" title="Threads"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/in/juandavidagudeloaldana/" target="_blank">
                                                        <ImLinkedin size={23} color="#0073B2" title="LinkedIn"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://github.com/jagudelo1" target="_blank">
                                                        <FaGithub size={24} color="#fff" title="Github"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="mailto:juan.agudelo.aldana@gmail.com" target="_blank">
                                                        <BiLogoGmail size={27} color="red" title="Gmail"/>
                                                    </a>
                                                </li>
                                           </ul>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        <div id="mis_proyectos" className="section2">
                            <h2>Mis Proyectos<hr /></h2>
                            <div className="Proyects">
                                <div>
                                    <CardApp 
                                        title="Facturación Papelería"
                                        text="Este aplicativo se diseño con el fin
                                        de realizar facturación de manera las ágil y rápida
                                        a los clientes de una papelería, el cual puede crear y
                                        logear  un administrador quien tendrá el permiso de crear
                                        las facturas, editarlas y eliminarlas, a su vez también podrá
                                        imprimirlas con el sello de la empresa."
                                        github={facturacionG}
                                        list1={<AiFillHtml5 size={30} color="#DD4B25"/>}
                                        list2={<BiLogoCss3 size={30} color="#3194F7"/>}
                                        list3={<RiJavascriptFill size={30} color="#EFD81D"/>}
                                        list4={<TbBrandReactNative size={30} color="#3194F7"/>}
                                        list5={<IoLogoNodejs size={30} color="#75AE5E"/>}
                                    />
                                </div>
                                <div>
                                    <CardApp 
                                        title="Api StarWars"
                                        text="Diseñé un sitio web 
                                        dedicado al universo de Star Wars, 
                                        que ofrece información sobre los personajes 
                                        y planetas de esta legendaria saga."
                                        github={Api_StarWarsG}
                                        link={Api_StarWars}
                                        list1={<AiFillHtml5 size={30} color="#DD4B25"/>}
                                        list2={<BiLogoCss3 size={30} color="#3194F7"/>}
                                        list3={<RiJavascriptFill size={30} color="#EFD81D"/>}
                                        list4={<TbBrandReactNative size={30} color="#3194F7"/>}
                                    />
                                </div>
                                <div>
                                    <CardApp 
                                        title="BonAppetit"
                                        text="Junto a tres compañeros de clase, 
                                        desarrollamos una aplicación web de reservas para 
                                        mesas, el usuario creaba su cuenta y posteriormente
                                        podia reservar una mesa. La plataforma incluía un módulo de 
                                        administrador para crear nuevos platillos, ver reseñas 
                                        y gestionar usuarios."
                                        github={BonAppetitG}
                                        list1={<AiFillHtml5 size={30} color="#DD4B25"/>}
                                        list2={<BiLogoCss3 size={30} color="#3194F7"/>}
                                        list3={<RiJavascriptFill size={30} color="#EFD81D"/>}
                                        list4={<SiPhp size={30} color="#7377AD"/>}
                                    />
                                </div>
                                <div>
                                    <CardApp 
                                        title="Error 404"
                                        text="Este sitio web lo construí para practicar 
                                        HTML, CSS y JavaScript."
                                        github={Error_404G}
                                        link={Error_404}
                                        list1={<AiFillHtml5 size={30} color="#DD4B25"/>}
                                        list2={<BiLogoCss3 size={30} color="#3194F7"/>}
                                        list3={<RiJavascriptFill size={30} color="#EFD81D"/>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div id="Contácteme" className="section3">
                            <h2>Contácteme<hr /></h2>
                            <div className="ContainerInformation">
                                <div className="InfoContact">
                                    <p><BiLogoGmail size={27} color="red" title="Gmail"/> juan.agudelo.aldana@gmail.com</p>
                                    <p><AiFillPhone size={27} color="blue"/> +57 3022742204</p>
                                    <button className="Button">
                                        <a href="https://drive.google.com/file/d/1UZx40qEzEZQpK98CEOba3OhZJwcN5S2Y/view?usp=drive_link" download="Currículum.pdf" target="_blank">
                                            Ver HV
                                        </a>
                                    </button>
                                </div>
                                <div className="ContactApp">
                                    <ContactApp/>
                                </div>
                            </div>
                        </div>
                        <ScrollUp/>
                    </div>
                    <FooterApp/>
                </div>
            )}
        </div>
    )
}