import React,  {useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Axios from 'axios'
import Container from 'react-bootstrap/Container';
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
        <Container>
        {data.map(dataItem =>(
            <Card style={{ width: '18rem' }} key={dataItem.id}>
            <Card.Img variant="top" src={dataItem.nombre} />
            <Card.Body>
                <Card.Title>{dataItem.correo}</Card.Title>
                <Card.Text>
                {dataItem.direccion}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        ))}
        </Container>
 );
}
export default Cards;