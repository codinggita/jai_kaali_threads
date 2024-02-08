import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch details of the specific product from the backend
    axios.get(`${domain}/products/${productId}`)
      .then((response) => {
        console.log(response.data.productDetails);
        setProduct(response.data.productDetails);
      })
      .catch((error) => {
        console.error(`Error fetching details for product:`, error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      {product && <div>
        <p>Product Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
      </div>}
    </div>
  );
}

export default ProductDetails;
