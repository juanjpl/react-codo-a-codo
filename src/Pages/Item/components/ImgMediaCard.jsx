import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const  ImgMediaCard =({data})=> {

  const imageStyle ={
    width:'100%',
    height:'100%',
    padding:'2em',
    objectFit:'contain'
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={data.title}
        sx={imageStyle}
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}