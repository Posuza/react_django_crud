import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Card,Row,Col,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ShowProducs() {


    const [products, setproducts] = useState([])

    const getProducts = async() => {
      const respone = await axios.get('http://127.0.0.1:8000/api/')
      setproducts(respone.data)
    }
    useEffect(()=>{
      getProducts();
    },[])

  return (
    <Container>
        <h1 className='my-3'>Show all Products</h1>

          <Row xs={1} md={2} className="g-4">
            {products.map((product,index) =>  (
            <Col key={index}>
                <Card className='shadow-lg'>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name} </Card.Title>
                    <Card.Text> Category:  <label className='text-secondary'>{product.category}  </label></Card.Text>
                    <Card.Text>$ <label className='text-secondary'>{product.price}  </label></Card.Text>
                  </Card.Body>
                  <Card.Footer className='bg-secondary py-3'>
                    <Link className='text-decoration-none  text-light' to={`/${product.id}`}>Detail</Link>
                  </Card.Footer>
                </Card>
            </Col>
            ))}
          </Row>
    </Container>
  )
}

export default ShowProducs
