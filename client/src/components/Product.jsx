import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';
import ProductDetails from './ProductDetails';

function Product() {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;

  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [updatingProduct, setUpdatingProduct] = useState(null);

  useEffect(() => {
    // Fetch the list of products from the backend
    axios.get(`${domain}/products`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleProductClick = (id) => {
    setProductId(id);
  };

  const handleProductDeleted = (id) => {
    // Remove the deleted product from the state
    setProducts(products.filter(product => product._id !== id));
  };

  const handleProductUpdated = (updatedProduct) => {
    setProducts(products.map(product => product._id === updatedProduct._id ? updatedProduct : product));
    setUpdatingProduct(null); // Close the update form
  };  

  return (
    <div>
      <h1>All Products</h1>
      {/* Display list of products */}
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <span onClick={() => handleProductClick(product._id)}>
              {product.name}
            </span>
            <button onClick={() => setUpdatingProduct(product._id)}>Update</button> {/* Add this line */}
            <DeleteProduct productId={product._id} onProductDeleted={handleProductDeleted} />
          </li>
        ))}
      </ul>
      {productId && <ProductDetails productId={productId} />}
      {updatingProduct && <UpdateProduct productId={updatingProduct} onProductUpdated={handleProductUpdated} />}
      <AddProduct />
    </div>
  );
}

export default Product;
