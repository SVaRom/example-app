import React, {useState} from 'react';
import { Form, Button, Container,Row,Col, FormGroup,Alert } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function change(){
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
    
    const [data, setData] = useState({
        correo: '',
        contraseñaNueva:''
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
      let formDatax = new FormData()
      formDatax.append('correo', data.correo)   
      formDatax.append('contraseñaNueva', data.contraseñaNueva)
        await Axios({
          method: 'post',
          url: 'api/changepass',
          data: formDatax,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
          .then(response=>{
            setShow2(true)
            console.log('Sí')
          })
          .catch(error => {
            setShow(true)
            console.log('No\n', error.message ) 
          })
        }
  
          
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
<Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
      <center><Alert.Heading>No se pudo cambiar la contraseña</Alert.Heading></center>
</Alert>
<Alert show={show2} variant="success" onClose={() => setShow2(false)} dismissible>
      <center><Alert.Heading>Cambio exitoso, porfavor vuelva a iniciar sesión</Alert.Heading></center>
</Alert>
<Container>
<div className="wrapper fadeInDown">
  <div id="formContent">
  <div className="fadeIn first">
    <h1>Cambiar contraseña</h1>
    </div>
    <form>
    <input type="email"  className="fadeIn second" name="correo" placeholder="Email" onChange={handleInputChange}/>
      <input type="password"className="fadeIn third" name="contraseñaNueva" placeholder="New password" onChange={handleInputChange}/>
      <input type="submit" className="fadeIn fourth" value="Save changes" onClick={handleSubmit}/>
    </form>
  </div>
  </div>
</Container>
</div>
   
      )    
  }
export default change;