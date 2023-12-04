import {Navbar} from "./components/Navbar";
import "./App.css";

const App = () => {

  const menu = ['Inicio','Contacto','Productos','Nosotros']

  return (
    <>
      <Navbar menu={menu} />
    
    </>
  );
};

export default App;
