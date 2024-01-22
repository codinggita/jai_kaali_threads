import express from 'express'
const app = express();
const port = 5000;

// Start the server
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// Login
app.get("/login", (req, res) => {
    res.send("Enter your credentials!");
});

// SignUp
app.get("/signup", (req, res) => {
    res.send("Enter your credentials and password!");
});

/* Product Catalog */
app.get("/products", (req, res) => {
    res.send("Choose any one of them!");
});

// Specific Category
app.get("/products/:category", (req, res) => {
    const category = req.params.category;
    res.send("Here are available shirts!");
});

// Get Product Details
app.get("/products/:productId", (req, res) => {
    const productId = req.params.productId;
    res.send("Here are available Tshirts!");
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