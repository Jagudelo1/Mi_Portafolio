import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { MdQuiz } from 'react-icons/md';
import '../../css/ContactApp.css';
import { Link } from "react-router-dom";

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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="ContactForm">
                <Form className="Formulario">
                    <Form.Group className="mb-3 Inputs">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
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
                    <Form.Group className="mb-3 Checked">
                        <Form.Check
                            required
                            className="swicht"
                            type="switch"
                            id="custom-switch"
                            name="acceptTerms"
                            label="Aceptar términos y condiciones"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)} />
                            <Link to="">
                                <MdQuiz 
                                size={20} 
                                color="#fff" 
                                className="info_termins"
                                onClick={handleShow}/>
                            </Link>
                    </Form.Group>
                    <Button
                        className="ButtonSub"
                        type="submit"
                        onClick={handleSubmit}>
                        Enviar
                    </Button>
                </Form>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="Modal_Body">
                        <p>
                            Por favor, lea atentamente los siguientes términos y condiciones antes de enviar cualquier comentario a través del 
                            formulario proporcionado en este sitio web. Al enviar sus comentarios, usted acepta estar sujeto a estos términos 
                            y condiciones:
                        </p>
                        <ol>
                            <li>
                                <b>Datos Recopilados:</b> Este formulario recopila dos tipos de información: su nombre y su dirección
                                de correo electrónico. La información recopilada será utilizada exclusivamente para enviar sus 
                                comentarios a la dirección de correo electrónico personal del administrador del sitio web. No se 
                                utilizarán con fines ilegales ni se compartirán con terceros.
                            </li>
                            <li>
                                <b>Uso de la Información:</b> Los datos ingresados se utilizarán únicamente para responder a sus comentarios
                                y comunicarse con usted si es necesario para abordar sus inquietudes o preguntas. Su información
                                no se utilizará con fines de marketing ni se compartirá con terceros sin su consentimiento explícito.
                            </li>
                            <li>
                                <b>Seguridad de Datos:</b> Se tomarán medidas razonables para proteger sus datos de cualquier acceso no
                                autorizado o divulgación. Sin embargo, no se puede garantizar la seguridad absoluta de los datos
                                transmitidos a través de Internet. Usted comprende y acepta que cualquier envío de datos es bajo su propio riesgo.
                            </li>
                            <li>
                                <b>Consentimiento:</b> Al enviar sus comentarios a través de este formulario, usted otorga su consentimiento
                                para el uso de su nombre y dirección de correo electrónico de acuerdo con estos términos y condiciones.
                            </li>
                            <li>
                                <b>Derechos del Usuario:</b> Usted tiene el derecho de acceder, rectificar, limitar o eliminar sus datos
                                personales en cualquier momento. Para ejercer estos derechos, contáctenos a través de la dirección
                                de correo electrónico proporcionada en este sitio web.
                            </li>
                            <li>
                                <b>Modificaciones de Términos y Condiciones:</b> Nos reservamos el derecho de modificar estos términos y
                                condiciones en cualquier momento. Las modificaciones se harán efectivas al publicarse en este sitio
                                web. Le recomendamos que consulte regularmente estos términos y condiciones para estar al tanto de
                                cualquier cambio.
                            </li>
                            <li>
                                <b>Contacto:</b> Si tiene alguna pregunta o inquietud acerca de estos términos y condiciones, por favor
                                contáctenos a través de la dirección de correo electrónico proporcionada en este sitio web.
                            </li>
                        </ol>
                        <p>
                            Al enviar sus comentarios a través de este formulario, usted reconoce que ha leído, comprendido y aceptado 
                            estos términos y condiciones. Si no está de acuerdo con alguno de los términos aquí establecidos, le rogamos 
                            que no utilice este formulario para enviar comentarios.
                        </p>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}