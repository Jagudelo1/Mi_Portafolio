import React from 'react';
import '../css/Contact.css';
import { Return } from './Return/Return';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Footer } from './Footer/Footer'
import { Fade } from 'react-awesome-reveal';

export function Contact() {
    return(
        <Fade>
            <Return/>
            <section className='ContainerContact'>
                <h1 className='Content_Title'>Contactame</h1><hr />
                <div className='ContentContact'>    
                    <div className='Contact'>
                        <p className='ContactCorreo'>Correo:</p>
                        <span className='ContactSpan'>juan.agudelo.aldana@gmail.com</span>
                    </div>
                    <div className='ContentListRedes'>
                        <h3 className='ContentRedes'>Redes Sociales</h3>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/jagudelo0610/" target="_blank">
                                    <AiFillInstagram size={35} color="#9000B2"/> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=3022742204" target="_blank">
                                    <AiFillLinkedin size={32} color="#fff"/> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/jagudelo1" target="_blank">
                                    <AiFillGithub size={33} color="#000"/> Github 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer/>
        </Fade>
    )
}