import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateProduct({ productId, onProductUpdated }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    // Fetch the current product details from the backend
    axios.get(`http://localhost:5000/products/${productId}`)
      .then((response) => {
        setProduct(response.data.productDetails);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [productId]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to the backend to update the product
    axios.put(`http://localhost:5000/products/${productId}`, product)
      .then((response) => {
        // Call the onProductUpdated callback to update the product in the parent component
        onProductUpdated(response.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
    {product && (
    <>   
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
      
        <button type="submit">Submit Changes</button>
    </>
    )}
    </form>
  );
}

export default UpdateProduct;
