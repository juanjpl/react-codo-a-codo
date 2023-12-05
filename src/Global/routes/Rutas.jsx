import { Route, Routes } from "react-router-dom"
import { Hooks } from "../../Hooks/components/Hooks"
import { Productos} from "../../Hooks/components/Productos"
import { Nosotros } from "../../Hooks/components/Nosotros"
import { Contacto } from "../../Hooks/components/Contacto"
import { Shop } from "../../Hooks/components/Shop"
import { Otro } from "../../Hooks/components/Otro"



export const Rutas =()=>{

    return(

        <Routes>
           <Route path='/' element={<Hooks/>} />
           <Route path='/inicio' element={<Hooks/>} />
           <Route path='/productos' element={<Productos/>} />
           <Route path='/nosotros' element={<Nosotros/>} />
           <Route path='/contacto' element={<Contacto/>} />
           <Route path='/shop' element={<Shop/>} />
           <Route path='/otro' element={<Otro/>} />


        </Routes>
    )
}