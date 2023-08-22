import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rotate from '../../assets/Rotate.gif';
import '../../css/AlertModal.css';
import { AiFillAlert } from 'react-icons/ai';

export const AlertModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
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

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
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
                        <p>Para visualizar mejor las imagenes 
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
    );
}
