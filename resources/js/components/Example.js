import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Container,Row } from 'react-bootstrap';
//A diferencia de bootstrap en el variant="" dentro de las comillas pones el estilo deseado
function Example() {
    return (
        <Container>
            <Row>hola, quiero que sepas que te quiero</Row>
        </Container>
    );
}


export default Example;

if (document.getElementById('example')) {
    ReactDOM.render( <Example /> , document.getElementById('example'));
}