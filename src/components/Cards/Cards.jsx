import { useState } from 'react';
import '../../css/Cards.css'; {/*Estilos para la cartas*/}
import '../../css/ButtonModal.css'; {/*Estilos para la modal*/}
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { AiFillGithub } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import { Carousel } from "react-bootstrap";

export const Cards = ({title, description, 
                       etiqueta1, etiqueta2, etiqueta3, 
                       github, img1, img2, img3, img4}) => {
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
                    
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
                    
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return(
        <>
            <Card style={{ width: 'auto' }} className="ContainerCards">
                <Card.Body className="ContentT">
                    <Card.Title className="TitleCard">
                        {title}
                    </Card.Title>
                    <Card.Text className='DescriptionCard'>
                        {description}
                    </Card.Text>
                </Card.Body>
                <div className='ContentInfo'>
                    <Accordion style={{width: '45%'}} className='ContentAccordion'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Etiquetas</Accordion.Header>
                            <Accordion.Body>
                                <Button>{etiqueta1}</Button>
                                <Button>{etiqueta2}</Button>
                                <Button>{etiqueta3}</Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Button className='ButonA'> 
                        <AiFillGithub size={20} color="black" style={{marginRight: '4px'}}/>
                        <a href={github} target='_blank'>
                            Github
                        </a>
                    </Button>
                </div>
                <Button 
                    onClick={() => setShow(true)} 
                    className='ContainerButton'
                >
                    Capturas
                </Button>
                <Modal className='ModalContent'
                    show={show} 
                    fullscreen={fullscreen} 
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body className='BodyModal'>
                        <div className="Content_Carousel">
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <img src={img1} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={img2} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={img3} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={img4} />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Modal.Body>
                </Modal>
            </Card>
        </>
    )
}