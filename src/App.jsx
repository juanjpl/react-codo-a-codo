import {Navbar} from "./components/Navbar/Navbar";
import "./App.css";
import { Hooks } from "./Hooks/components/Hooks";
import { Rutas } from "./Global/routes/Rutas";
import { Mapeado } from "./mapeados/components/Mapeado";

const App = () => {

  const menu = ['Inicio','Contacto','Productos','Nosotros'];
  const menu2 =[
    { name:'Inicio',link:'/inicio'},
    { name:'Contacto',link:'/contacto'},
    { name:'Productos',link:'/productos'},
    { name:'Nosotros',link:'/nosotros'},
    { name:'Shop',link:'/shop'},
    { name:'Otro',link:'/otro'},
  ]

  return (
    <>
      <Navbar menu={menu} />
      <Rutas/>
      <Mapeado/>
    </>
  );
};

export default App;
