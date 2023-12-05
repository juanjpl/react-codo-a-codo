


export const  NavbarLayout=({children})=> {

    const style ={
        backgroundColor:'red',
        color:'white',
        display:'flex',
        width:'100vw',
        justifyContent:'space-between',
        alignItems : 'center'
    }
  return (

    <div style={style} >
        {children}
    </div>
  )
}

