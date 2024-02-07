import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardImage from '../assets/HugeDomains_com.jpeg'

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, boxShadow: 'none' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar
            alt="green iguana"
            src={CardImage}
            sx={{ width: 140, height: 140 }}
        />
        </Box>
        <CardHeader title="Card Header" titleTypographyProps={{ align: 'center' }} />
    </Card>
  );
}
