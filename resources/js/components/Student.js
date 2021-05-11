import React, {useState} from 'react';
import { Form, Button, Container,Row,Col, FormGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import axios from 'axios';
import { Route, Switch, Link,useHistory } from 'react-router-dom'

function Student(){
    
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
            console.log('Sí')
          })
          .catch(error => {
            console.log('No\n', error.message )
          })
          
        }
        
      const handleAll = async (e) =>{
          e.preventDefault()
          let xd,variable,cont
         
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
  <Container>
  <Row>
      <Form>
      <Form.Row>
          <Form.Group as={Col} controlId="formGridId">
          <Form.Label>ID</Form.Label>
          <Form.Control 
              type="text" 
              name="id"
              placeholder="Enter id"
              
              onChange={handleInputChange}
              />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
              type="text"
              name="nombre"
              placeholder="Enter your name"
             
              onChange={handleInputChange}
              />
          </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="correo" placeholder="Enter email" onChange={handleInputChange}/>
      </Form.Group>
      </Form.Row>
      <Form.Group controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control name="direccion" placeholder="Apartment, studio, or floor" onChange={handleInputChange}/>
      </Form.Group>
      <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
              type="password"  
              name="contraseña"
              placeholder="The secret words"
              
              onChange={handleInputChange}
              />
          </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col}>
        <Button variant="dark" type="submit" onClick={buscar}>
          Search
      </Button>
        </Form.Group>
        <Form.Group as={Col}>
        <Button variant="dark" type="submit" onClick={handleSubmit}>
          Submit
      </Button>
        </Form.Group>
        <Form.Group as={Col}>
        <Button variant="dark" type="submit" onClick={handleAll}>
          User
      </Button>
        </Form.Group>
        <Form.Group as={Col}>
      <Button variant="dark" as={Link} to="/example-app/public/ejemplillo">
          Por si nadie te saluda
      </Button>
        </Form.Group>
      </Form.Row>
      </Form>
      </Row>
      </Container>
      )    
  }
export default Student;