import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct =() => {
   // Update s single student by id
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null)
  const [image, setImage] = useState(null)
  const [urlimage, setUrlimage] = useState(null)
  const [name, setName] = useState(null)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState(null)
  const [category, setCategory] = useState(null)

  useEffect(() => {
    loadProducts();
  }, [])

  function handelImage(e) {
    setUrlimage(e.target.files[0])
    setImage(URL.createObjectURL(e.target.files[0]))
    // setDisplayImg(URL.createObjectURL(e.target.files[0]))
    console.log(urlimage)
  }
  // }
  // function handeldis(){
  //   setDisplayImg(urlimage)
  // }

   // load students by its is and show data to forms by value

   let loadProducts = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/${id}`);

    setImage(response.data.image);
    setName(response.data.name);
    setPrice(response.data.price);
    setDescription(response.data.description);
    setCategory(response.data.category);

  }
    const updateProductInfo = async () => {
      console.log(name)
        console.log(typeof(name))
        let formField = new FormData()
      if (name.length ===0){
          setError("Product name should not be empty!")}
      else{ 
          setError("")
          formField.append('name',name)
          formField.append('price',Number(price))
          formField.append('description',description)
          formField.append('category',category)
          if(urlimage !== null ) {
            formField.append('image', urlimage)
          }
          await axios({
              method: 'PUT',
              url: `http://127.0.0.1:8000/api/${id}/`,
              data: formField
            }).then(response => {
              console.log(response.data);
              navigate(`/${id}`);
            })
        }
      }
     
    return (
      <div className="w-75 m-auto my-5 shadow card ">
        <div className='card-header'>
          <h2 className="m-4">Update Products</h2>
        </div>
        <div className='card-body'>
          <label className='text-danger px-3 py-2'>{error}</label>
          <div className="form-group">
              <img src={image} className='border border-secondary shadow rounded' height="150" width="200" alt="" srcSet="" />
              <label className='text-start  text-info m-2'><u className='shadow'>{image}</u></label>
          </div> 
          <div className="form-group mt-2">
              <input type="file" className="form-control" onChange={handelImage}/>
          </div>


          <div className="form-group py-2">
          <p className='text-start'>Name :</p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
         
          <div className="form-group py-2">
          <p className='text-start'>Price :</p>
            <input
              type="number"
              className="form-control "
              placeholder="Enter prices"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group py-2">
            <p className='text-start'>Category :</p>
            <select id='category' className="form-control" value={category}type="text"  onChange={(e) => setCategory(e.target.value)}>
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>
          <div className="form-group py-2">
            <p className='text-start'>Description :</p>
            <textarea
              type="text"
              className="form-control"
              name="description"
              value={description}
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-primary btn-block my-2" onClick={updateProductInfo}>Update</button>
        </div>
        
      </div>
    
    );
  };
export default UpdateProduct
