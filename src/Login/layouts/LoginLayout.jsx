import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { Login } from "../components/Login";

export const LoginLayout = ({ children }) => {
  const { status } = useContext(LoginContext);
  console.log(status)
  return status.logged 
    ? <div>{children}</div> 
    : <Login />;
};
