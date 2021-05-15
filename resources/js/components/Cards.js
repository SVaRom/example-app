import React,  {useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Axios from 'axios'
import { Route, Switch, Link,useHistory } from 'react-router-dom';
import { Form, Button, Container,Row,Col, FormGroup,CardDeck } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Cards = props => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
          setLoading(true);
          const response = await Axios({
              method: 'get',
              url: 'api/usuario'
            })
            .then(response => {
                console.log('response.data',response.data)
                setData(response.data);
            })
          setLoading(false);
          console.log(data)
        })();
      }, []);
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
      <Nav.Link as = {Link} to="/example-app/public/Hola">Home</Nav.Link>
      </Nav>
      <Form inline>
          <Button variant="outline-light" size="lg"  as = {Link} to="/example-app/public/login">Log out</Button>
          </Form>
      </Navbar>
      <Container margin='auto'>
      <CardDeck>
        {data.map(dataItem =>(
          
            <Card style={{ width: '18rem' }} background-size="contain" key={dataItem.id}>
              <Card.Img variant="top" src="images/logo.png" />
            <Card.Body>
                <Card.Title>{dataItem.correo}</Card.Title>
                <Card.Text>{dataItem.direccion}</Card.Text>
            </Card.Body>
            <Card.Footer>
              {dataItem.contraseña}
            </Card.Footer>
            </Card>
        ))}
        </CardDeck>
        </Container>
      </div>
        
 );
}
export default Cards;