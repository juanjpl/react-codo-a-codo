import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { LoginProvider } from "./Login/context/LoginContext";

import { addProduct, addProductWithId, addProducts, addProductsWithId, getProducts } from "./Global/firebase/utilities/productosFirebase";

const a = {id:1 , y:'2' , z:true , a:'churros'}
const b = {id:2 , y:'3' , z:true , a:'torta'}
const c = {id:3 , y:'4' , z:false , a:'dulce'}

//addProducts([a,b,c])

//addProductWithId(a).then(res => console.log(res))
//addProductsWithId([a,b,c])
getProducts().then(res => console.log(res))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <CssBaseline />
      <LoginProvider>
        <App />
      </LoginProvider>
    
  </React.StrictMode>
);
