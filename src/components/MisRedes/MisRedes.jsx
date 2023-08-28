import React from 'react';
import '../../css/MisRedes.css';
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { MdOutgoingMail  } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

export function MisRedes () {
    return(
        <>
            <div className="NavbarSocial">
                <ul className="Social_Img">
                    <li>
                        <a href="https://www.instagram.com/jagudelo0610/" target="_blank">
                            <AiFillInstagram size={35} color="#9000B2"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=3022742204" target="_blank">
                            <IoLogoWhatsapp size={32} color="#17ea00"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jagudelo1" target="_blank">
                            <AiFillGithub size={33} color="white"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:juan.agudelo.aldana@gmail.com">
                            <MdOutgoingMail size={35} color="blue"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}