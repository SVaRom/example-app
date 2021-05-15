import React, {useState} from 'react';
import { Form, Button, Container,Row,Col, FormGroup,Alert } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import axios from 'axios';
import { Route, Switch, Link,useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function login(){
  const [show, setShow] = useState(false);
    const [data, setData] = useState({
        correo: '',
        contraseña:''
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
 
          const handleAll = async (e) =>{
            e.preventDefault();
              axios.get('api/search', {
                params: {
                  correo: data.correo
                }
              })
              .then(response=>{
                  if(data.contraseña==response.data[0].contraseña){
                      location.pathname="/example-app/public/hola";
                  }else{
                      setShow(true)
                  }
                  
              }).catch(error => {
                setShow(true)
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
</Navbar>
<Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
      <center><Alert.Heading>No se pudo iniciar sesión</Alert.Heading>
                <p>
                  Verifica si tus datos son correctos, de lo contrario comunicate con nosotros.
                </p></center>
              </Alert>
<Container>
<div className="wrapper fadeInDown">
  <div id="formContent">
  <div className="fadeIn first">
    <h1>Inicia sesión</h1>
    </div>
    <form>
    <input type="email"  className="fadeIn second" name="correo" placeholder="email" onChange={handleInputChange}/>
      <input type="password"className="fadeIn third" name="contraseña" placeholder="password" onChange={handleInputChange}/>
      <input type="submit" className="fadeIn fourth" value="Log In" onClick={handleAll}/>
    </form>
    <div id="formFooter">
      <a className="underlineHover" href="/example-app/public/change">Forgot Password?</a>
      <br/>
      <a className="underlineHover" href="/example-app/public/student">Create account</a>
    </div>
  </div>
  </div>
</Container>
</div>
   
      )    
  }
export default login;