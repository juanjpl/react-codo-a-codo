import { BrowserRouter} from "react-router-dom";
import { Navbar } from "../Global/components/Navbar/Navbar";
import { MainLayout } from "../Global/layout/MainLayout";
import { Router} from "../router/router";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  );
};
