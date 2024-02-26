

import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Box, Button, ButtonGroup } from '@mui/material';

export const CartWidget = ({data}) => {

   const {addItem} = useContext(CartContext);
   const [qty , setQty] = useState(0);

   const add = ()=> {
    if(qty >= data.rating.count) return;

    setQty(qty +1 )

}


   const subs = () =>{
    if(qty <= 0) return;
    setQty(qty - 1)
   }

   const buttonHandleClick = () =>{
    addItem(data , qty)
    //console.log(data,qty)
   }
    
  return (
    <Box display={'flex'} flexDirection={'column'}>
        <ButtonGroup fullWidth variant='contained' sx={{margin:'5px 0'}}>
            <Button onClick={subs}>-</Button>
            <Button variant='outlined'>{qty}</Button>
            <Button onClick={add}>+</Button>
        </ButtonGroup>
    
    <Button variant='contained' disabled={qty === 0 ? true : false} onClick={buttonHandleClick}>Agregar al Carrito</Button>
    </Box>
  )
}
