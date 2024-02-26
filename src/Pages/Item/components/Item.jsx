
import React from 'react'
import { useParams } from 'react-router'
import { useFetch } from '../../../Global/hooks/useFetch';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import {AlertDialog} from '../../../Global/components/AlertDialog';
import { ImgMediaCard } from './ImgMediaCard';
import { CartWidget } from '../../../Cart/components/CartWidget';


const url = (id) => `https://fakestoreapi.com/products/${id}`;

export const Item = () => {

  const {id} = useParams();
  const {loading, data} = useFetch(url(id))

  console.log(data)

  return (
    <Box
    padding='auto'
    display='-ms-flexbox'
    margin='auto auto'
    alignItems='center'
    justifyContent='center'
    minHeight='inherit'
    >
      {
        loading
        ?
        <CircularProgress color='primary'/>
        :
         data.error 
         ?<AlertDialog
          title='No se encuentra producto'
          text='No se encuentra el producto dentro de la API'
         />
         :
        //<ImgMediaCard data={data}/>
         <Card data={data}/>
      }

    </Box>
     )
}


const container ={
  width:'inherit',
  height:'inherit',

}

const imageStyle ={
  width:'100%',
  height:'100%',
  padding:'5em',
  objectFit:'contain',
  
}

const descriptionStyle ={
  hight:'inherit',
  textAlign:'justify',
  backgroundColor:'rgba(0,0,0,10%)',

}


const Card = ({data})=>{

  const {image, title, price, description, category, rating} = data

  return(
    <Grid container
          columns={12}
          columnSpacing={5}
         
          sx={{...container ,border: '1px solid green'}}
    >
      <Grid item xs={12} md={6} sx={{height:'inherit' ,border: '1px solid violet'}} >
        <img src={image} style={imageStyle} />
      </Grid>
      <Grid item xs={12} md={6} sx={{  textAlign:'justify', backgroundColor:'rgba(0,0,0,10%)',padding:'5em' ,border: '1px solid red'}} >
        <Grid container spacing={3} direction='column' >
            <Grid item>
                  <Typography variant='h4'>{title} </Typography>
            </Grid>
            <Grid item>
                  <Typography variant='h5'>{category} </Typography>
            </Grid>
            <Grid item>
                  <Typography variant='subtitle1'>(Stock: {rating.count}u.) </Typography>
            </Grid>
            <Grid item>
                  <Typography variant='p' paragraph>{description} </Typography>
            </Grid>
            <Grid item sx={{margin:'0 auto' , textAlign:'center'}} >
                  <Typography variant='h5'>${price} </Typography>
                  <CartWidget data={data}/>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}