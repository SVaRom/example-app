import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Button } from 'react-bootstrap';
//A diferencia de bootstrap en el variant="" dentro de las comillas pones el estilo deseado
function Ejemplillo() {
  
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Hola</div>
                        <div className="card-body">Prueba</div>
                        <Button variant="dark">Darks</Button>{''}
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <center><Button variant="dark" type="submit">
                                Submit
                            </Button>
                            </center>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ejemplillo;

if (document.getElementById('ejemplillo')) {
    ReactDOM.render( <Ejemplillo /> , document.getElementById('ejemplillo'));
}