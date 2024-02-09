import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

const ProductCard = () => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                sx={{ width: '100%', height: 200 }} // Adjusted size
                image="https://via.placeholder.com/548x349" // Placeholder image URL
                alt="Product"
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <CardHeader title="Product Title" subheader="Product Subtitle" />
                <Typography variant="body2" color="text.secondary">
                    Product description goes here. You can add more details about the product.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Action 1</Button>
                <Button size="small">Action 2</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;
