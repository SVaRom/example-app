import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { Route, Switch, Link,useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Iframe from 'react-iframe'
//A diferencia de bootstrap en el variant="" dentro de las comillas pones el estilo deseado
function Ejemplillo() {
  
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
      <Container>
      <Iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fferreteriaa%2Fposts%2F1574681002720772&width=500&show_text=true&height=454&appId" width="500" height="454" style="border:none;overflow:hidden" scrolling="no" frameBorder="0" allowFllScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></Iframe>
     </Container>
      </div>
    );
}

export default Ejemplillo;