import { useEffect, useRef } from "react";
import { useState } from "react";
import { centerStyle, oddStyle } from "../styles";

export const UseRef = () => {
  const [posicion, setPosicion] = useState(0);

  const divRef = useRef();

  const cubito = {
    width: "35px",
    height: "35px",
  };

  const squareLeftHandleClick = () => {
    setPosicion(posicion - 5);
  };

  const squareRightHandleClick = () => {
    setPosicion(posicion + 5);
  };

  useEffect(()=>{
    divRef.current.style.transform =`translateX(${posicion})`
  },[posicion])

  return (
    <div className={oddStyle + centerStyle}>
      <button className="btn btn-secondary" onClick={squareLeftHandleClick}>
        Mover a la izquierda
      </button>
      <div
        style={cubito}
        className="bg-success rounded transition"
        ref={divRef}
      ></div>
      <button className="btn btn-secondary" onClick={squareRightHandleClick}>
        Mover a la derecha
      </button>
    </div>
  );
};
