import { Form, Button, Container,Row,Col, FormGroup,Jumbotron } from 'react-bootstrap';
import { Route, Switch, Link,useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function about(){
    return(
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
            <Jumbotron/>
            A lo largo de los años "Ferretería Armando" ha ganado prestigio entre las ferreterías, fundada en 1997 el carisma de "Don Roma" ha logrado atrapar varios clientes a lo largo del tiempo. 
        </Container>
</div>
    )
        
}
export default about;