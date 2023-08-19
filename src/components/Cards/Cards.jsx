import React from 'react';
import '../../css/Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { AiFillGithub } from "react-icons/ai";

export const Cards = ({title, description, github}) => {
    return(
        <Card style={{ width: 'auto' }} className="ContainerCards">
            <Card.Body className="ContentT">
                <Card.Title className="TitleCard">
                    {title}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <div className='ContentInfo'>
                <Accordion style={{width: '45%'}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Etiquetas</Accordion.Header>
                        <Accordion.Body>
                            <Button>JavaScript</Button>
                            <Button>Bootstrap</Button>
                            <Button>React</Button>
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
        </Card>
    )
}