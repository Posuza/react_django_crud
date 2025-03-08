import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate} from 'react-router';
import {Card,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ProductDetail() {
  const [product, setProduct] = useState([])
  const {id} = useParams();
  const navigate = useNavigate();


  const getSingleProduct = async () => {

    const  { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
    console.log(data);
    setProduct(data);
    
  }

  const deleteProduct = async (id) => {
      await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
      navigate("/")
  }

  useEffect(() => {
    getSingleProduct();
  },[])

  return (
    <Container >
      <h1 className='my-3'>Product detail</h1>
      <div>
        <Card className='shadow-lg my-4'>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>       
            <Card.Text>Price: ${product.price}</Card.Text>
            <Card.Text>Category: {product.category}</Card.Text>
            <p className='align-self-left mx-1'>Description: {product.description}</p>
          </Card.Body>
          <Card.Footer className=' py-3'>
            <Link className="btn btn-primary mx-2 mr-2" to={`/${product.id}/update`}>Update</Link>
            <Link className="btn  mx-2  btn-danger" onClick={() => deleteProduct(product.id)}>Delete</Link>
          </Card.Footer>
        </Card>
      </div>
    </Container>
  )
}

export default ProductDetail
