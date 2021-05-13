import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Route, Switch, Link } from 'react-router-dom'
function Hola(){
    return(
        <div>
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="/example-app/public/hola">
<img
        src="images/logo.png"
        width="53"
        height="60"
        className="d-inline-block align-top"
      />
      Login zorra de mierda
</Navbar.Brand>
</Navbar>
</div>
    )
}
export default Hola;
