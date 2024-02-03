import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import './css/ProductCard.css';
import CardImage from './assets/HugeDomains_com.jpeg'

// rename the name
export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia className='card-media'
        component="img"
        height="340"
        image={CardImage}
      />
      <CardHeader title="Card Header" />
      <CardContent>
        <Button variant="contained">Button</Button>
      </CardContent>
    </Card>
  );
}
