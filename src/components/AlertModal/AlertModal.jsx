import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rotate from '../../assets/Rotate.gif';
import '../../css/AlertModal.css';
import { AiFillAlert } from 'react-icons/ai';

export const AlertModal = () => {
    const [show, setShow] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0); // To track previous scroll position

    const handleClose = () => setShow(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > prevScrollY) {
            setShow(false); // Scrolling down, hide the modal
        }
        
        setPrevScrollY(currentScrollY);
    };
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        handleResize(); // Call it once to check on initial render
        window.addEventListener('resize', handleResize);
        
        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div>
                {show && (
                    <Modal show={true} onHide={handleClose} className="Content_MA">
                        <Modal.Header closeButton className="ContentModalHeader">
                            <Modal.Title>
                                <AiFillAlert size={30} color="red"/> 
                                <span>Sugerencia</span>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="ContentModalBody">
                            <p> Para visualizar mejor las imagenes 
                                gire el telefono como indica la siguiente
                                imagen.
                            </p>
                            <img src={Rotate} alt="" />
                        </Modal.Body>
                        <Modal.Footer className="ContentModalFooter">
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </div>
        </>
    );
}
