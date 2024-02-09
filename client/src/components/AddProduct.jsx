import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;

  const [product, setProduct] = useState({ 
    name: '',
    price: '',
    description: '',
    category: '',
    inStock: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${domain}/products`, product)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <h1>Add a Product</h1>
    <form key={product._id} onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" name="price" value={product.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={product.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} required />
      </div>
      <div>
        <label>In Stock:</label>
        <input type="text" name="inStock" value={product.inStock} onChange={handleChange} required />
      </div>
      <button type="submit">Add Product</button>
    </form>
    </>
  );
}

export default AddProduct;
