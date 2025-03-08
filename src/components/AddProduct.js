import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddProduct = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [urlimage, setUrlimage] = useState(null)
    const [image, setImage] = useState(null)
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Black")

    function handelImage(e) {
      setImage(e.target.files[0])
      setUrlimage(URL.createObjectURL(e.target.files[0]))
    }

    const AddProductInfo = async () => {
      let formField = new FormData()
        
        console.log(typeof(price))
        console.log((price))
        if (image===null){
          setError("Image name should not be empty!")}
        else if (name === null) {
            setError("Product name should not be empty!")}
        else if (name === null) {
          setError("Product name should not be empty!")}
        else if (price === null) {
          setError("price should not be empty!")}
        else{
          formField.append('name',name)
          formField.append('price',Number(price))
          formField.append('description',description)
          formField.append('category',category)
          formField.append('image', image)
          
          await axios({
            method: 'post',
            url:'http://localhost:8000/api/',
            data: formField
          }).then(response=>{
            console.log(response.data)
            navigate('/')
          })
        }
    }
   
    return (

 
      <div className="w-75 m-auto my-5 shadow card ">
        <div className='card-header'>
        <h2 className="m-4">Add Products</h2>
        </div>
        <div className='card-body'></div>
          <label className='text-danger px-3 py-2'>{error}</label>
        <div className="form-group px-3 py-2">
              <img src={urlimage} className='card ' height="150" width="200" alt="" srcSet="" />
          </div> 
          
          <div className="form-group px-3 py-2">
             <input type="file" className="form-control"  onChange={handelImage}/>
          </div>

          <div className="form-group px-3 py-2">
            <input
              type="text"
              className="form-control "
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group px-3 py-2">
            <input
              type="number"
              className="form-control "
              placeholder="Enter prices"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group px-3 py-2">
            <select id='category' className="form-control" type="text" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="black" selected>Black</option>
              <option value="white">White</option>
            </select>
          </div>
          <div className="form-group px-3 py-2">
            <textarea
              type="text"
              className="form-control"
              placeholder="Enter description"
              name="description"
              value={description}
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          
          <button className="btn btn-primary btn-block m-3" onClick={AddProductInfo}>Add</button>
        
      </div>
    
    );
};

export default AddProduct;
