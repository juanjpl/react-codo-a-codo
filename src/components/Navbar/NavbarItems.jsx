import { Link } from "react-router-dom"


export const NavbarItems =({menu})=> {

    const navbarItemStyle ={padding:'0px 10px'}

  return (
    <div style={{display:'flex'}}>
        {
            menu.map((item,index)=> 

            <Link style={navbarItemStyle}
             key={index}
             to={`/${item}`}>
              {item} 
            </Link>

            )
        }
        <Link to='Otro'>Otro</Link>
    </div>
  )
}
