

import { Grid } from '@mui/material'
import React from 'react'

export const MainLayout = ({children}) => {
  return (
    <Grid container
      sx={{
        width:'100%',
        alignContent: 'center',
        justifyContent:'center',
        minHeight:'calc(100vh - 64px)',
      }}
    >
      
      {children}
    
    </Grid>
  )
}
