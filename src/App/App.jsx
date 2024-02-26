import { BrowserRouter} from "react-router-dom";
import { Navbar } from "../Global/components/Navbar/Navbar";
import { MainLayout } from "../Global/layout/MainLayout";
import { Router} from "../router/router";
import "./App.css";
import { CartProvider } from "../Cart/contexts/CartContext";

export const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
      <Navbar />
      <MainLayout>
        <Router />
      </MainLayout>
      </CartProvider>
    </BrowserRouter>
  );
};
