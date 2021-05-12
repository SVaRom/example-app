import React, {useState} from 'react';
import { Form, Button, Container,Row,Col, FormGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import axios from 'axios';
import { Route, Switch, Link,useHistory } from 'react-router-dom'

function login(){
    
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
                    window.alert("Login successfull! c:");
                    location.href="/example-app/public/indexlogin";
                }else{
                    window.alert("Login unsuccessfull! :c");
                }
                
            })
          }
  
          
  return (
  <Container>
  <Row>
      <Form>
      <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="correo" placeholder="Enter email" onChange={handleInputChange}/>
      </Form.Group>
      </Form.Row>
      <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="contraseña" placeholder="The secret words" onChange={handleInputChange}/>
          </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col}>
        <Button variant="dark" type="submit" onClick={handleAll}>
        Login
        </Button>
        </Form.Group>
      </Form.Row>
      </Form>
      </Row>
      </Container>
      )    
  }
export default login;