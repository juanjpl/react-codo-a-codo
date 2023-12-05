import { Route, Routes, Navigate } from "react-router-dom"
import { Hooks } from "../../Hooks/components/Hooks"
import { Productos} from "./components/Productos"
import { Nosotros } from "./components/Nosotros"
import { Contacto } from "./components/Contacto"
import { Shop } from "./components/Shop"
import { Otro } from "./components/Otro"



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
           <Route path='*' element={<Navigate to='/' />} />


        </Routes>
    )
}