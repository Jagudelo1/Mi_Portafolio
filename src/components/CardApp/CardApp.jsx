import React from "react";
import { IoLogoNodejs } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { Link } from "react-router-dom";
import '../../css/CardApp.css';

export function CardApp({title,text,list1,list2,list3,list4,list5,github,link,fecha}) {
    return(
        <>
            <div className="Proyectos">
                <h4>{title} <hr /></h4>
                <p>{text}</p>
                <div className="Links">
                    {github && <Link to={github} target='_blank'><BsGithub className="IconGithub"/>Github</Link>}
                    {link && <Link to={link} target='_blank'>Sitio Web</Link>}
                </div>
                <div className="ListaLenguajes">
                    <ul>
                        {list1 && <li>{list1}</li>}
                        {list2 && <li>{list2}</li>}
                        {list3 && <li>{list3}</li>}
                        {list4 && <li>{list4}</li>}
                        {list5 && <li>{list5}</li>}
                    </ul>
                </div>
            </div>
        </>
    )
}