import { useEffect, useState } from 'react';
import '../../css/Cards.css'; {/*Estilos para la cartas*/}
import '../../css/ButtonModal.css'; {/*Estilos para la modal*/}
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { AiFillGithub } from "react-icons/ai";
import { CgDanger } from 'react-icons/cg'
import Modal from 'react-bootstrap/Modal';
import { Carousel } from "react-bootstrap";

export const Cards = ({title, description, 
                       etiqueta1, etiqueta2, 
                       etiqueta3, github, link, 
                       img1, img2, img3, img4}) => {
    
    const [index, setIndex] = useState(0);
    const [fullscreen, setFullscreen] = useState(true);
    
    const [ showMensaje, setShowMensaje ] = useState(window.innerWidth <= 500);
    const [ showModal, setShowModal ] = useState(false);

    useEffect(() => {
        function handleResize(){
            if (window.innerWidth <= 500){
                setShowMensaje(true);
            } else{
                setShowMensaje(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const hasImages = img1 || img2 || img3 || img4;
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
                <div>
                    {link && (
                        <Button className='LinkSit'>
                        <a href={link} target='_blank'>
                            Link
                        </a>
                        </Button>
                    )}
                </div>
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
                {showMensaje && (
                    <div className='Mensaje'>
                       <CgDanger/> ¡Para visualizar mejor las 
                        imagenes gire su dispositivo 
                        movil o tableta! <CgDanger/>
                    </div>
                )}
                <div>
                    {hasImages && (
                        <Button className='ContainerButton' onClick={() => setShowModal(true)}>
                        Capturas
                        </Button>
                    )}
                    <Modal
                        show={showModal}
                        onHide={() => setShowModal(false)}
                        className='ModalContent'
                        dialogClassName='modal-90w'
                        fullscreen={fullscreen}
                    >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                        <div className='Content_Carousel'>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                            {img1 && (
                                <Carousel.Item>
                                <img src={img1} />
                                </Carousel.Item>
                            )}
                            {img2 && (
                                <Carousel.Item>
                                <img src={img2} />
                                </Carousel.Item>
                            )}
                            {img3 && (
                                <Carousel.Item>
                                <img src={img3} />
                                </Carousel.Item>
                            )}
                            {img4 && (
                                <Carousel.Item>
                                <img src={img4} />
                                </Carousel.Item>
                            )}
                            </Carousel>
                        </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </Card>
        </>
    )
}