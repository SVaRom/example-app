import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form, Button, Container,Row,Col, FormGroup } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import { Route, Switch, Link } from 'react-router-dom'

function Example() {
return (
<div>
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="/example-app/public/">
<img
        src="images/logo.png"
        width="53"
        height="60"
        className="d-inline-block align-top"
      />
</Navbar.Brand>
<Nav className="mr-auto">
<Nav.Link as = {Link} to="/example-app/public/">Home</Nav.Link>
<Nav.Link as = {Link} to="/example-app/public/student">Student</Nav.Link>
<Nav.Link as = {Link} to="/example-app/public/about">About us</Nav.Link>
</Nav>
<Form inline>
    <Button variant="outline-light" size="lg"  as = {Link} to="/example-app/public/login">Log in</Button>
    </Form>
</Navbar>

<Container>Hola mi amor, soy inicio</Container>
</div>
);
}

export default Example;