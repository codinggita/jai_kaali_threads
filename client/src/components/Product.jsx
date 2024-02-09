import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';
import ProductDetails from './ProductDetails';

function Product() {
  // const domain = import.meta.env.VITE_REACT_APP_DOMAIN;

  // const [products, setProducts] = useState([]);
  // const [productId, setProductId] = useState(null);
  // const [updatingProduct, setUpdatingProduct] = useState(null);

  // useEffect(() => {
  //   // Fetch the list of products from the backend
  //   axios.get(`${domain}/products`)
  //     .then((response) => {
  //       setProducts(response.data.products);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);

  // const handleProductClick = (id) => {
  //   setProductId(id);
  // };

  // const handleProductDeleted = (id) => {
  //   // Remove the deleted product from the state
  //   setProducts(products.filter(product => product._id !== id));
  // };

  // const handleProductUpdated = (updatedProduct) => {
  //   setProducts(products.map(product => product._id === updatedProduct._id ? updatedProduct : product));
  //   setUpdatingProduct(null); // Close the update form
  // };

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div>
      {/* <h1>All Products</h1>
      <ul>
        {products ? (products.map((product) => (
          <li key={product._id}>
            <span onClick={() => handleProductClick(product._id)}>
              {product.name}
            </span>
            <button onClick={() => setUpdatingProduct(product._id)}>Update</button>
            <DeleteProduct productId={product._id} onProductDeleted={handleProductDeleted} />
          </li>
        ))) : null}
      </ul>
      {productId && <ProductDetails productId={productId} />}
      {updatingProduct && <UpdateProduct productId={updatingProduct} onProductUpdated={handleProductUpdated} />}
      <AddProduct /> */}

    <Box sx={{ p: 2, display: 'flex', flexDirection: 'row' }}>
      <Card sx={{ boxShadow: 'none', display: 'flex', flexDirection: 'row', width: '100%', height: '80%' }}>
        <CardMedia
          component="img"
          height="300"
          width="150"
          image="https://via.placeholder.com/150"
          alt="Product Name"
        />
        <CardContent sx={{ flexBasis: '70%' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.5rem' }}>
            Product Name
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
            Product Description
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                Quantity:
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <IconButton size="small" onClick={handleDecrease}><RemoveIcon /></IconButton>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                {quantity}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <IconButton size="small" onClick={handleIncrease}><AddIcon /></IconButton>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <Button variant="contained" size="small">Add to Cart</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>

    </div>
  );
}

export default Product;
