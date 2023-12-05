import { NavbarLayout } from "./Layouts/NavbarLayout";
import { NavbarItems, NavbarLogo, NavbarSearch } from "./index";


export const Navbar = (props)=>{

   
    //console.log(menu);


    return(
        <NavbarLayout>
            <NavbarLogo/>
            <NavbarItems {...props} />
            <NavbarSearch/>
        </NavbarLayout>
    )
}

