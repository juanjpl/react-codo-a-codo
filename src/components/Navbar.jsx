import { NavbarLayout } from "../Layouts/NavbarLayout";
import {NavbarItems} from './NavbarItems';

export const Navbar = (props)=>{

   
    //console.log(menu);


    return(
        <NavbarLayout>
            <NavbarItems {...props} />
        </NavbarLayout>
    )
}

