

export const NavbarItems =({menu})=> {

    const navbarItemStyle ={padding:'0px 10px'}

  return (
    <div style={{display:'flex'}}>
        {
            menu.map((item,index)=> <div style={navbarItemStyle} key={index}>{item} </div>)
        }
    </div>
  )
}
