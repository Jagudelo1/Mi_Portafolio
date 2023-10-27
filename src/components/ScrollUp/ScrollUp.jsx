import React, { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from 'react-icons/io';
import '../../css/ScrollUp.css';

export function ScrollUp(){
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
        setShowButton(true);
        } else {
        setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className={`scroll-to-top ${showButton ? "show" : ""}`}>
            <button onClick={scrollToTop} className="ButtonScroll">
                <IoIosArrowDropupCircle size={30} color="#fff"/>
            </button>
        </div>
    )
}