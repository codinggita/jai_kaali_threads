import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import '../css/CategoryProductCard.css';
import CardImage from '../assets/HugeDomains_com.jpeg'

export default function HomeProductsCard() {
  return (
    <Card sx={{ minWidth: 275, boxShadow: 'none' }}>
      <CardMedia
        component="img"
        sx={{ objectFit: 'cover' }}
        height="459"
        image={CardImage}
      />
      <CardHeader title="Card Header" />
      <CardContent>
        <Button variant="contained">Button</Button>
      </CardContent>
    </Card>
  );
}
