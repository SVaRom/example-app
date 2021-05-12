import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Route, Switch, Link } from 'react-router-dom'
import Student from './Student'
import Ejemplillo from './Ejemplillo';
import Cards from './Cards';
import inicio from './inicio';
import about from './about';
import login from './login';
import indexlogin from './indexlogin';

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
<Nav.Link as = {Link} to="/example-app/public/cards">Cards</Nav.Link>
<Nav.Link as = {Link} to="/example-app/public/about">About us</Nav.Link>
</Nav>
<Form inline>
    <Button variant="outline-light" size="lg"  as = {Link} to="/example-app/public/login">Log in</Button>
    </Form>
</Navbar>
<Switch> 
<Route exact path='/example-app/public/' component= {inicio} />
<Route exact path='/example-app/public/cards' component= {Cards} />
<Route exact path='/example-app/public/student' component={Student} />
<Route exact path='/example-app/public/ejemplillo' component={Ejemplillo} />
<Route exact path='/example-app/public/about' component={about} />
<Route exact path='/example-app/public/login' component={login} />
<Route exact path='/example-app/public/indexlogin' component={indexlogin} />
</Switch>
</div>
);
}

export default Example;