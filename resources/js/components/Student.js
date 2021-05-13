import React, {useState} from 'react';
import { Form, Button, Container,Row,Col, FormGroup,Alert } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import axios from 'axios';
import { Route, Switch, Link,useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Student(){
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [data, setData] = useState({
      id: '',
      nombre: '',
      correo: '',
      direccion:'',
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
 
  const handleSubmit = async (e) =>{
      e.preventDefault();
      let formDatax = new FormData()
      formDatax.append('id', data.id)
      formDatax.append('nombre', data.nombre)
      formDatax.append('correo', data.correo)  
      formDatax.append('direccion', data.direccion)  
      formDatax.append('contraseña', data.contraseña)
        await Axios({
          method: 'post',
          url: 'api/addUser',
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
        
      const handleAll = async (e) =>{
          e.preventDefault()
         
            await Axios({
              method: 'get',
              url: 'api/usuario'
            
            })
            .then(response=>{
              xd=response.data
                console.log('response.data',response.data)
                setUsuario(response.data)
                
            })
            .catch(error => {
              console.log('Error Login', error )
            })
          }
          const buscar = async (e) =>{
            e.preventDefault()
            axios.get('api/search', {
              params: {
                id: data.id
              }
            })
            .then(response=>{
                console.log('response.data',response.data)
                setUsuario(response.data)
                
            })
            .catch(error => {
              console.log('Error Login', error )
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
    <Nav.Link as = {Link} to="/example-app/public/cards">Cards</Nav.Link>
    <Nav.Link as = {Link} to="/example-app/public/about">About us</Nav.Link>
    </Nav>
    <Form inline>
        <Button variant="outline-light" size="lg"  as = {Link} to="/example-app/public/login">Log in</Button>
        </Form>
    </Navbar>
    <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
      <center><Alert.Heading>No se pudo hacer el registro</Alert.Heading>
                <p>
                  Verifica tus datos, el registro no se pudo procesar.
                  <br/>
                  Intenta cambiando el ID o el email
                </p></center>
              </Alert>
              <Alert show={show2} variant="success" onClose={() => setShow2(false)} dismissible>
      <center><Alert.Heading>Registro exitoso</Alert.Heading></center>
              </Alert>
      <Container>
<div className="wrapper fadeInDown">
  <div id="formContent">
  <div className="fadeIn first">
    <h1>Registrate</h1>
    </div>
    <form onSubmit={handleSubmit}>
    <input type="text"  className="fadeIn second" name="id" placeholder="id" onChange={handleInputChange}/>
      <input type="text"className="fadeIn third" name="nombre" placeholder="name" onChange={handleInputChange}/>
    <input type="email"  className="fadeIn fourth" name="correo" placeholder="email" onChange={handleInputChange}/>
    <input type="text"className="fadeIn fifth" name="direccion" placeholder="address" onChange={handleInputChange}/>
      <input type="password"className="fadeIn sixth" name="contraseña" placeholder="password" onChange={handleInputChange}/>
      <input type="submit" className="fadeIn seventh" value="Sign in"/>
    </form>
  </div>
  </div>
</Container>

    </div>
  
      )    
  }
export default Student;