import React from 'react';
import '../css/Shop.css';
import shopImage from '../assets/ShopHeaderBackground.svg';
import { Grid, Typography, Select, MenuItem, Button } from '@mui/material'; // Importing MUI components
import ProductCard from './ProductCard'; // Assuming ProductCard is a custom component for product display

const Shop = () => {
    return (
        <>
        <div className="shop">
            <img src={shopImage} alt="Shop" />
            <div className="shop-text">
                <p><span>Home</span> &gt; <span className="active">Shop</span></p>
                <h1>Shop Page</h1>
                <p>Let’s design the place you always imagined.</p>
            </div>
        </div>
        <div className="products">
            <div className="toolbar">
                <Typography variant="subtitle1" style={{ height: 26, width: 102, fontWeight: '600', fontSize: 16, lineHeight: '26px', textAlign: 'left' }}>CATEGORIES</Typography>
                <Select
                    variant="outlined"
                    value="Living Room"
                    style={{ height: 48, width: 262 }}
                >
                    <MenuItem value="Living Room">Living Room</MenuItem>
                    {/* Add more menu items for other categories */}
                </Select>
            </div>
            <div className="product-list">
                <Grid container spacing={2}>
                    {/* Render multiple ProductCards here */}
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    {/* Add more ProductCards as needed */}
                </Grid>
            </div>
            <Button variant="contained" className="show-more-button">Show More</Button>
        </div>
    </>
    );
}

export default Shop;
