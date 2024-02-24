import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { StyledForm } from "../styles/LoginStyles";

export const Login = () => {
  const {
    loginFirebase: firebase,
    status,
    wait,
    error,
    changeStatus,
  } = useContext(LoginContext);
  const [form, setForm] = useState({ name: "", pass: "" });
  const checkForm = (e) => {
    e.preventDefault();
  };

  const googleSignin = async (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Sing
      eventOnChange={handleInputChange}
      eventOnClick={checkForm}
      googleSignin={googleSignin}
      waiting={status.waiting}
      register={status.register}
      changeStatus={changeStatus}
    />
  );
};

const Sing = ({
  register,
  eventOnChange,
  eventOnClick,
  googleSignin,
  waiting,
  changeStatus,
}) => {
  //
  return (
    <StyledForm>
      <input name="name" type="text" placeholder="Ingrese su usuario" />
      <input name="pass" type="text" placeholder="Ingrese su password" />
    </StyledForm>
  );
};
