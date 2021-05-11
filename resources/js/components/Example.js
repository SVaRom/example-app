import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Route, Switch, Link } from 'react-router-dom'
import Student from './Student'
import Ejemplillo from './Ejemplillo';

function Example() {
return (
<div>
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="mr-auto">
<Nav.Link as = {Link} to="/example-app/public/">Home</Nav.Link>
<Nav.Link as = {Link} to="/example-app/public/student">Student</Nav.Link>
<Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
<Form inline>
<FormControl type="text" placeholder="Search" className="mr-sm-2" />
<Button variant="outline-info">Search</Button>
</Form>
</Navbar>
<Switch> 
<Route exact path='/example-app/public/student' component={Student} />
<Route exact path='/example-app/public/ejemplillo' component={Ejemplillo} />
</Switch>
</div>
);
}

export default Example;