import {Navbar} from "./components/Navbar/Navbar";
import "./App.css";
import { Hooks } from "./Hooks/Hooks";

const App = () => {

  const menu = ['Inicio','Contacto','Productos','Nosotros']

  return (
    <>
      <Navbar menu={menu} />
      <Hooks/>
    </>
  );
};

export default App;
