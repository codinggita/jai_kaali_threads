console.log("Hello");
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

// Product Catalog
app.get("/list_of_categories", (req, res) => {
    res.send("Choose any one of them!");
});

app.get("/list_of_categories/list_of_shirts", (req, res) => {
    res.send("Here are available shirts!");
});

app.get("/list_of_categories/list_of_tshirts", (req, res) => {
    res.send("Here are available Tshirts!");
});

app.get("/list_of_categories/list_of_pants", (req, res) => {
    res.send("Here are available pants!");
});

app.get("/list_of_categories/list_of_trousers", (req, res) => {
    res.send("Here are available trousers!");
});

// Shopping cart
app.get("/cart", (req, res) => {
    res.send("View your lists");
});

app.get("/cart/proceed_to_payment", (req, res) => {
    res.send("Payment");
});

// User Reviews
app.get("/reviews", (req, res) => {
    res.send("Give your feedback");
});

// For errors
app.get("/*", (req, res) => {
    res.send("You got the route error");
});