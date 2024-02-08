import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

const ProductCard = () => {
    return (
        <Card sx={{ display: 'flex', width: 548, height: 349 }}>
            <CardMedia
                component="img"
                sx={{ width: 200, height: 349 }} // Adjusted size
                image="https://via.placeholder.com/548x349" // Placeholder image URL
                alt="Product"
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: '1' }}>
                <div>
                    <CardHeader title="Product Title" subheader="Product Subtitle" />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Product description goes here. You can add more details about the product.
                        </Typography>
                    </CardContent>
                </div>
                <CardActions>
                    <Button size="small">Action 1</Button>
                    <Button size="small">Action 2</Button>
                </CardActions>
            </div>
        </Card>
    );
}

export default ProductCard;
