import express from 'express'
const app = express();
const port = 5000;

// Middleware to parse JSON body in requests
app.use(express.json());

// in-memory database for demonstration purposes
const users = [];

// Assume array of products
const products = [
    { id: 1, name: "Shirt", category: "Clothing", price: 29.99 },
    { id: 2, name: "Jeans", category: "Clothing", price: 39.99 },
    // Add more product entries as needed
];

const productsData = [
    { productId: 1, name: "Product A", category: "Shirts", price: 29.99, description: "Lorem ipsum..." },
    { productId: 2, name: "Product B", category: "T-Shirts", price: 19.99, description: "Lorem ipsum..." },
    // ... other products
];

// in-memory shopping cart array
let shoppingCart = [];

// Start the server
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// Sign Up (POST)
// Revisit
app.post("/signup", (req, res) => {
    // Implement logic to create a new user account
    const { username, email, password } = req.body;

    // Validate the inputs
    if (!username || !email || !password) {
        res.status(400).json(
            { error: "Incomplete data. Please provide username, email, and password." }
        );
        return;
    }

    // Check if the email already exists
    if (users.some(user => user.email === email)) {
        res.status(400).json(
            { error: "Email already exists. Please use a different email address." }
        );
        return;
    }

    // Save the user to the database
    const newUser = { username, email, password };
    users.push(newUser);

    res.json({ success: true, message: "User registered successfully!" });
});

// const jwt = require("jsonwebtoken");

// function generateToken() {
//     // Replace the secret with your own secret key
//     const secretKey = "yourSecretKey";
//     const token = jwt.sign({ /* Add any additional user information here */ }, secretKey, { expiresIn: "1h" });
//     return token;
// }

// Log In (POST)
// Revisit
app.post("/login", (req, res) => {
    // Implement logic to authenticate the user
    const { username, password } = req.body;

    // Validate the inputs
    if (!username || !password) {
        res.status(400).json({ error: "Incomplete data. Please provide username and password." });
        return;
    }

    // Find the user in the array (replace this with a database query)
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        res.status(401).json({ error: "Invalid credentials. Please check your username and password." });
        return;
    }

    // Generate a token or session (you may want to use a library for this)
    const token = generateToken(); // Replace with your token generation logic

    res.json({ success: true, message: "Login successful!", token });
});

// Get User Details (GET)
// Revisit
app.get("/user/:userId", (req, res) => {
    // Implement logic to fetch user details
    const userId = req.params.userId;
    
    // Find the user in the database based on userId
    const user = users.find(u => u.userId === userId);

    if (!user) {
        // User not found
        res.status(404).json({ error: "User not found." });
    } else {
        // User found, respond with user details
        res.json({ user });
    }
});

// Log Out (POST)
// Revisit
app.post("/logout", (req, res) => {
    // Implement logic to log the user out
    // Destroy the session or token, clear cookies, etc.
    // ...

    res.json({ success: true, message: "Logout successful!" });
});

/* Product Catalog */
// Get All Products
app.get("/products", (req, res) => {
    // Implement logic to fetch and return a list of all products
    res.json({ products });
});

// Get Products by Category
app.get("/products/category/:category", (req, res) => {
    const category = req.params.category;
    
    // Filter products based on the category
    const filteredProducts = products.filter(
        product => product.category.toLowerCase() === category.toLowerCase()
    );

    if (filteredProducts.length === 0) {
        // If no products found for the given category, return an appropriate response
        res.status(404).json(
            { error: "No products found for the specified category." }
        );
    } else {
        // Return the filtered products
        res.json({ products: filteredProducts });
    }
});

// Get Product Details
app.get("/products/:productId", (req, res) => {
    const productId = req.params.productId;
    
    // Find the product in the data
    const product = productsData.find(
        (p) => p.productId === productId
    );

    if (!product) {
        return res.status(404).json(
            { error: "Product not found" }
        );
    }

    // If found, return the product details
    res.json({ productDetails: product });
});

// Add a New Product
app.post("/products", (req, res) => {
    // Implement logic to handle the addition of a new product
    const { name, category, price, description } = req.body;

    // Validate the inputs (add more validation as needed)
    if (!name || !category || !price || !description) {
        res.status(400).json(
            { error: "Incomplete data. Please provide name, category, price, and description." }
        );
        return;
    }

    const newProduct = {
        // You may need a function to generate a unique product ID
        id: generateProductId(), name, category, price, description,
        // Additional fields as needed
    };
    products.push(newProduct);

    res.json({ success: true, message: "Product added successfully!", product: newProduct });
});

function generateProductId() {
    return Math.random().toString(36).substring(7);
}

// Update Product Details
app.put("/products/:productId", (req, res) => {
    const productId = req.params.productId;
    // Implement logic to handle the update of a specific product
    const updatedProductData = req.body;

    // Validate the inputs and check if the product exists
    if (!updatedProductData) {
        res.status(400).json({ error: "Invalid data. Please provide updated product information." });
        return;
    }

    // Assume you have a function to check if a product with the given ID exists in your database
    const existingProduct = getProductById(productId);

    if (!existingProduct) {
        res.status(404).json({ error: "Product not found." });
        return;
    }

    // Update the product details in the database or perform necessary actions
    // Here, you might use an ORM like Mongoose or Sequelize to interact with your database
    // Example using Mongoose (for MongoDB):
    // ProductModel.findByIdAndUpdate(productId, updatedProductData, { new: true })
    //   .then(updatedProduct => {
    //       res.json({ success: true, message: "Product details updated successfully!", updatedProduct });
    //   })
    //   .catch(error => {
    //       res.status(500).json({ error: "Error updating product details." });
    //   });

    // For demonstration purposes, let's assume the update was successful
    const updatedProduct = { ...existingProduct, ...updatedProductData };

    res.json({ success: true, message: "Product details updated successfully!", updatedProduct });
});

// Dummy function to simulate fetching a product from the database
function getProductById(productId) {
    // Replace this with actual database query logic
    // For now, returning a dummy product object
    return {
        productId: productId,
        name: "Updated Product",
        description: "Updated product description",
        price: 29.99,
        // ... other product details
    };
}

// Delete a Product
app.delete("/products/:productId", (req, res) => {
    const productId = req.params.productId;

    // Check if the product exists (add more validation as needed)
    const existingProduct = getProductById(productId);

    if (!existingProduct) {
        res.status(404).json({ error: "Product not found!" });
        return;
    }

    // Delete the product from the database or perform necessary actions
    const deletedProduct = deleteProduct(productId);

    if (!deletedProduct) {
        res.status(500).json({ error: "Error deleting the product. Please try again later." });
        return;
    }

    res.json({ success: true, message: "Product deleted successfully!" });
});

// Example Functions (Replace these with your actual database operations)

// Function to Get a Product by ID
function getProductById(productId) {
    // Implement logic to fetch the product from the database by ID
    // Return null if not found, otherwise return the product object
    // Example: return db.products.find(product => product.id === productId);
}

// Function to Delete a Product by ID
function deleteProduct(productId) {
    // Implement logic to delete the product from the database by ID
    // Return the deleted product object or null if an error occurs
    // Example: const index = db.products.findIndex(product => product.id === productId);
    //          if (index !== -1) {
    //              const deletedProduct = db.products.splice(index, 1)[0];
    //              return deletedProduct;
    //          }
    //          return null;
}

/* Shopping cart */
// Get Shopping Cart
app.get("/cart", (req, res) => {
    // Return the current state of the shopping cart
    res.json({ cartItems: shoppingCart });
});

// Add to Cart
app.post("/cart/add", (req, res) => {
    // Implement logic to add products to the shopping cart
    const { productId, quantity } = req.body;

    // Validate the inputs
    if (!productId || !quantity) {
        res.status(400).json({ error: "Incomplete data. Please provide productId and quantity." });
        return;
    }

    // Check if the product is already in the cart
    const existingItem = shoppingCart.find(
        item => item.productId === productId
    );

    if (existingItem) {
        // Update quantity if the product is already in the cart
        existingItem.quantity += parseInt(quantity);
    } else {
        // Add a new item to the cart
        shoppingCart.push({ productId, quantity: parseInt(quantity) });
    }

    res.json({ success: true, message: "Item added to the cart successfully!" });
});

// Remove from Cart
app.delete("/cart/remove/:productId", (req, res) => {
    // Implement logic to remove a specific product from the shopping cart
    const productId = req.params.productId;

    // Validate the productId
    if (!productId) {
        res.status(400).json({ error: "Incomplete data. Please provide productId." });
        return;
    }

    // Remove the item from the cart
    shoppingCart = shoppingCart.filter(
        item => item.productId !== productId
    );

    res.json({ success: true, message: "Product removed from the cart!" });
});

// Clear Cart
app.delete("/cart/clear", (req, res) => {
    // in-memory data structure:
    shoppingCart.items = [];  // Assuming 'shoppingCart' is the object representing the user's cart

    // Alternatively, if you're using a database, you would perform a delete operation to remove all cart items associated with the user

});

/* User Reviews */
// Retrieve Reviews for All Products
app.get("/reviews", (req, res) => {
    // Implement logic to fetch and return all reviews for all products
    // res.json({ reviews: [...] });
});

// Retrieve Reviews for a Specific Product
app.get("/reviews/:productId", (req, res) => {
    // Implement logic to fetch and return reviews for a specific product
    const productId = req.params.productId;
    // res.json({ reviews: [...], productId });
});

// Submit a Review for a Product (POST)
app.post("/reviews/submit", (req, res) => {
    // Implement logic to handle the submission of a review
    const { productId, rating, comment } = req.body;

    // Validate the inputs
    if (!productId || !rating || !comment) {
        res.status(400).json({ error: "Incomplete data. Please provide productId, rating, and comment." });
        return;
    }

    // Save the review to the database or perform necessary actions
    // ...

    res.json({ success: true, message: "Review submitted successfully!" });
});

// Update a Review (PATCH)
app.patch("/reviews/:reviewId", (req, res) => {
    // Implement logic to update a review
    const reviewId = req.params.reviewId;
    const { rating, comment } = req.body;

    // Validate the inputs
    if (!rating || !comment) {
        res.status(400).json({ error: "Incomplete data. Please provide rating and comment." });
        return;
    }

    // Update the review in the database or perform necessary actions
    // ...

    res.json({ success: true, message: "Review updated successfully!" });
});

// Delete a Review (DELETE)
app.delete("/reviews/:reviewId", (req, res) => {
    // Implement logic to delete a review
    const reviewId = req.params.reviewId;

    // Delete the review from the database or perform necessary actions
    // ...

    res.json({ success: true, message: "Review deleted successfully!" });
});


/* Checkout Process */
// Get Cart Items for Checkout
app.get("/checkout/cart", (req, res) => {
    // Implement logic to fetch and return items in the shopping cart for checkout
    // res.json({ cartItems: [...] });
});

// Get Checkout Summary
app.get("/checkout/summary", (req, res) => {
    // Implement logic to fetch and return a summary of selected items for checkout
    // res.json({ checkoutSummary: [...] });
});

// Process Checkout (POST)
app.post("/checkout/process", (req, res) => {
    // Implement logic to handle the checkout process
    const { paymentMethod, shippingAddress, items } = req.body;

    // Validate the inputs and handle the checkout process
    // ...

    res.json({ success: true, message: "Checkout successful!" });
});

// Update Shipping Address (PATCH)
app.patch("/checkout/update-shipping", (req, res) => {
    // Implement logic to update the shipping address
    const { shippingAddress } = req.body;

    // Validate the inputs and update the shipping address
    // ...

    res.json({ success: true, message: "Shipping address updated successfully!" });
});

// Apply Discount Code (POST)
app.post("/checkout/apply-discount", (req, res) => {
    // Implement logic to apply a discount code
    const { discountCode } = req.body;

    // Validate the discount code and apply it to the checkout summary
    // ...

    res.json({ success: true, message: "Discount applied successfully!" });
});

// Cancel Checkout (DELETE)
app.delete("/checkout/cancel", (req, res) => {
    // Implement logic to cancel the checkout process
    // ...

    res.json({ success: true, message: "Checkout canceled!" });
});


/* Special Offers and Discounts */
// Get All Offers
app.get("/offers", (req, res) => {
    // Implement logic to fetch and return all offers
    // res.json({ offers: [...] });
});

// Get Details of a Specific Offer
app.get("/offers/:offerId", (req, res) => {
    // Implement logic to fetch and return details of a specific offer
    const offerId = req.params.offerId;
    // res.json({ offerDetails: {...}, offerId });
});

// Create a New Offer
app.post("/offers/create", (req, res) => {
    // Implement logic to create a new offer
    const { title, description, discountPercentage, startDate, endDate } = req.body;

    // Validate the inputs
    if (!title || !description || !discountPercentage || !startDate || !endDate) {
        res.status(400).json({ error: "Incomplete data. Please provide all required fields." });
        return;
    }

    // Save the new offer to the database or perform necessary actions
    // ...

    res.json({ success: true, message: "Offer created successfully!" });
});

// Update an Existing Offer
app.put("/offers/update/:offerId", (req, res) => {
    // Implement logic to update details of an existing offer
    const offerId = req.params.offerId;
    const { title, description, discountPercentage, startDate, endDate } = req.body;

    // Validate the inputs
    if (!title && !description && !discountPercentage && !startDate && !endDate) {
        res.status(400).json({ error: "No data provided for update. Please provide at least one field to update." });
        return;
    }

    // Update the offer in the database or perform necessary actions
    // ...

    res.json({ success: true, message: "Offer updated successfully!" });
});

// Delete an Existing Offer
app.delete("/offers/delete/:offerId", (req, res) => {
    // Implement logic to delete an existing offer
    const offerId = req.params.offerId;

    // Delete the offer from the database or perform necessary actions
    // ...

    res.json({ success: true, message: "Offer deleted successfully!" });
});


// For errors
app.get("/*", (req, res) => {
    res.send("You got the route error");
});