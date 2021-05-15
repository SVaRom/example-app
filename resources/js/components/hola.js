import React, {useState} from 'react';
import { Form, Button, Container,Row,Col, FormGroup,Alert } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Hola(){
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [data, setData] = useState({
        correo: ''
    })
  const [Usuario, setUsuario] = useState([])

  const handleInputChange = (event) => {
      // console.log(event.target.name)
      // console.log(event.target.value)
      setData({
          ...data,
          [event.target.name] : event.target.value
      })
  
  }
 
  const handleSubmit = async (e) =>{
      e.preventDefault();
      axios.get('api/delete',{
          params:{
              correo:data.correo
          }
      }).then(response=>{
        setShow2(true)
        console.log('Sí')
      })
      .catch(error => {
        setShow(true)
        console.log('No\n', error.message ) 
      })
    }
  
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
      <Nav.Link as = {Link} to="/example-app/public/Hola">Home</Nav.Link>
      </Nav>
      <Form inline>
          <Button variant="outline-light" size="lg"  as = {Link} to="/example-app/public/login">Log out</Button>
          </Form>
      </Navbar>
<Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
      <center><Alert.Heading>No se pudo eliminar</Alert.Heading></center>
</Alert>
<Alert show={show2} variant="success" onClose={() => setShow2(false)} dismissible>
      <center><Alert.Heading>Eliminación exitosa</Alert.Heading></center>
</Alert>
<Container><div className="wrapper fadeInDown">
  <div id="formContent">
  <div className="fadeIn first">
    <h1>Eliminar cuenta</h1>
    </div>
    <form>
    <input type="email"  className="fadeIn second" name="correo" placeholder="Confirm email" onChange={handleInputChange}/>
      <input type="submit" variable="danger" className="fadeIn fourth" value="Delete" onClick={handleSubmit}/>
    </form>
  </div>
  </div></Container>
</div>
    )
}
export default Hola;
