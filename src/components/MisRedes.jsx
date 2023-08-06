import React from 'react';
import '../css/NavbarApp.css';
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { MdOutgoingMail  } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { Zoom } from 'react-awesome-reveal';

export function MisRedes () {
    return(
        <div className="NavbarSocial">
            <ul className="Social_Img">
                <li>
                    <Zoom>
                        <a href="https://www.instagram.com/jagudelo0610/" target="_blank">
                            <AiFillInstagram size={35} color="#9000B2"/>
                        </a>
                    </Zoom>
                </li>
                <li>
                    <Zoom>
                        <a href="https://api.whatsapp.com/send?phone=3022742204" target="_blank">
                            <IoLogoWhatsapp size={32} color="#17ea00"/>
                        </a>
                    </Zoom>
                </li>
                <li>
                    <Zoom>
                        <a href="https://github.com/jagudelo1" target="_blank">
                            <AiFillGithub size={33} color="white"/>
                        </a>
                    </Zoom>
                </li>
                <li>
                    <Zoom>
                        <a href="mailto:juan.agudelo.aldana@gmail.com">
                            <MdOutgoingMail size={35} color="red"/>
                        </a>
                    </Zoom>
                </li>
            </ul>
        </div>
    )
}