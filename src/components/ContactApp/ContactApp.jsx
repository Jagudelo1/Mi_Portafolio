import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import '../../css/ContactApp.css';

export function ContactApp() {
    const [name, setName] = useState('');
    const [from_email, setFrom_Email] = useState('');
    const [message, setMessage] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!acceptTerms) {
            // Mostrar una alerta de error si los términos no se aceptan
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Debes aceptar los términos y condiciones.',
            });
            return;
        }

        emailjs.send('service_hyhpiod', 'template_b5w1ile', {
            from_name: name,
            from_email: from_email,
            message: message,
        }, 'o7ZvxwY6Lz0WruG7j')
        .then((response) => {
            console.log('Mensaje enviado con éxito', response);

            // Mostrar una alerta de éxito
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'El mensaje se envió con éxito.',
            });
        }, (error) => {
            console.error('Error al enviar el mensaje', error);

            // Mostrar una alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
            });
        });

        // Limpiar el formulario
        setName('');
        setFrom_Email('');
        setMessage('');
        setAcceptTerms(false);
    };

    return (
        <>
            <div className="ContactForm">
                <Form className="Formulario">
                    <Form.Group className="mb-3 Nombre">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 Correo">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Correo"
                            name="from_email"
                            value={from_email}
                            onChange={(e) => setFrom_Email(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 textarea">
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            placeholder="Comentario"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            className="swicht"
                            type="switch"
                            id="custom-switch"
                            name="acceptTerms"
                            label="Aceptar términos y condiciones"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)} />
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
