import React, { useState, useEffect } from 'react'

function Product() {
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    // Fetch the list of products from the backend
    axios.get(`http://localhost:5000/products`)
      .then(( response ) => {
        setProducts(response.data);
      })
      .catch(( error ) => {
        console.log(error);
      });
  })

  return (
    <div>
      <h1>This is Product Page</h1>
    </div>
  )
}

export default Product
