import express from 'express'
const app = express();
const port = 5000;

// Middleware to parse JSON body in requests
app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// Sign Up (POST)
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

    // Save the user to the database or perform necessary actions
    // ...

    res.json({ success: true, message: "User registered successfully!" });
});

// Log In (POST)
app.post("/login", (req, res) => {
    // Implement logic to authenticate the user
    const { username, password } = req.body;

    // Validate the inputs
    if (!username || !password) {
        res.status(400).json(
            { error: "Incomplete data. Please provide username and password." }
        );
        return;
    }

    // Verify credentials and generate a token or session (you may want to use a library for this)
    // ...

    res.json({ success: true, message: "Login successful!" });
});

// Get User Details (GET)
app.get("/user/:userId", (req, res) => {
    // Implement logic to fetch user details
    const userId = req.params.userId;
    
    // Fetch user details from the database or wherever they are stored
    // ...

    // res.json({ user: { userId, ... } });
});

// Log Out (POST)
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
    // res.json({ products: [...] });
});

// Get Products by Category
app.get("/products/category/:category", (req, res) => {
    const category = req.params.category;
    // Implement logic to fetch and return products based on category
    // res.json({ products: [...] });
});

// Get Product Details
app.get("/products/:productId", (req, res) => {
    const productId = req.params.productId;
    // Implement logic to fetch and return details for a specific product
    // res.json({ productDetails: { productId, ... } });
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

    // Save the new product to the database or perform necessary actions
    // ...

    res.json({ success: true, message: "Product added successfully!" });
});

// Update Product Details
app.put("/products/:productId", (req, res) => {
    const productId = req.params.productId;
    // Implement logic to handle the update of a specific product
    const updatedProductData = req.body;

    // Validate the inputs and check if the product exists (add more validation as needed)
    if (!updatedProductData) {
        res.status(400).json({ error: "Invalid data. Please provide updated product information." });
        return;
    }

    // Update the product details in the database or perform necessary actions
    // ...

    res.json({ success: true, message: "Product details updated successfully!" });
});

// Delete a Product
app.delete("/products/:productId", (req, res) => {
    const productId = req.params.productId;
    // Implement logic to handle the deletion of a specific product

    // Check if the product exists (add more validation as needed)
    // ...

    // Delete the product from the database or perform necessary actions
    // ...

    res.json({ success: true, message: "Product deleted successfully!" });
});

/* Shopping cart */
// Get Shopping Cart
app.get("/cart", (req, res) => {
    // logic to fetch and return items in the shopping cart
    res.send("View your lists");
});

// Add to Cart
app.get("/cart/add", (req, res) => {
    // logic to add products to the shopping cart
    res.send("Add products to your cart");
});

// Remove from Cart
app.get("/cart/remove", (req, res) => {
    // logic to remove products from the shopping cart
    res.send("Remove products from your cart");
});

/* User Reviews */
app.get("/reviews", (req, res) => {
    res.send("Give your feedback");
});

// Checkout Process
app.get("/checkout", (req, res) => {
    res.send("Here is your bill");
});

// Special Offers and Discounts
app.get("/offers", (req, res) => {
    res.send("Here are todays offers");
});

// For errors
app.get("/*", (req, res) => {
    res.send("You got the route error");
});