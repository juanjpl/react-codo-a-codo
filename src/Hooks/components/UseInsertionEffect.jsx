import { useEffect,useLayoutEffect,useInsertionEffect, useRef } from "react";
import { oddStyle } from "../styles";

export const UseInsertionEffect = () => {
  const divRef = useRef("hola");

  useEffect(() => {
    console.warn(' 3- soy el useEffect y me ejecuto luego del renderizado')
  }, []);

  useLayoutEffect(() => {
    console.warn(' 2- soy el useLayoutEffect y me ejecuto antes que el renderizado')

  }, []);

  useInsertionEffect(() => {
    console.warn(' 1- soy el useInsertionEffect y me ejecuto antes de las mutaciones en el DOM (useLayout) para insertar clases')

  }, []);

  const handleClick = () => {
    console.log("Soy el handleClick ", divRef.current.classList);
    divRef.current.classList.replace(' bg-dark-subtle ',' bg-danger ');
  };

  return (
    <div className={oddStyle} ref={divRef}>
      <button className="btn btn-dark" onClick={handleClick}>
        UseInsertionEffect
      </button>
    </div>
  );
};
