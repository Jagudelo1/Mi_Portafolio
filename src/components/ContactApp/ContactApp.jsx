import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import '../../css/ContactApp.css';

export function ContactApp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_hyhpiod', 'template_b5w1ile', {
        from_name: name,
        from_email: email,
        message: message,
        }, 'o7ZvxwY6Lz0WruG7j')
        .then((response) => {
            console.log('Correo enviado con éxito', response);
        }, (error) => {
            console.error('Error al enviar el correo', error);
        });

        // Limpiar el formulario
        setName('');
        setEmail('');
        setMessage('');
    };

    return(
        <>
            <div className="ContactForm">
                <Form className="Formulario">
                    <Form.Group className="mb-3">
                        <Form.Control 
                        type="text" 
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control 
                        type="text" 
                        placeholder="Correo" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Asunto" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                    </Form.Group>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Aceptar términos y condiciones"
                    />
                    <Button type="submit" onClick={handleSubmit}>Enviar</Button>
                </Form>
            </div>
        </>
    )
}