import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import '../../css/ContactApp.css';

export function ContactApp() {
    const [name, setName] = useState('');
    const [from_email, setFrom_Email] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send('service_hyhpiod', 'template_b5w1ile', {
            from_name: name,
            from_email: from_email, // Utiliza el correo ingresado en el formulario como remitente
            message: message,
        }, 'o7ZvxwY6Lz0WruG7j')
        .then((response) => {
            console.log('Correo enviado con éxito', response);
        }, (error) => {
            console.error('Error al enviar el correo', error);
        });
    
        // Limpiar el formulario
        setName('');
        setFrom_Email('');
        setMessage('');
    };

    return(
        <>
            <div className="ContactForm">
                <Form className="Formulario">
                    <Form.Group className="mb-3 Nombre">
                        <Form.Control 
                        type="text" 
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 Correo">
                        <Form.Control 
                        type="text" 
                        placeholder="Correo" 
                        value={from_email}
                        onChange={(e) => setFrom_Email(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3 textarea">
                        <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Asunto" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            className="swicht"
                            type="switch"
                            id="custom-switch"
                            label="Aceptar términos y condiciones"
                        />
                    </Form.Group>
                    <Button 
                        className="ButtonSub"
                        type="submit" 
                        onClick={handleSubmit}>
                        Enviar
                    </Button>
                </Form>
            </div>
        </>
    )
}