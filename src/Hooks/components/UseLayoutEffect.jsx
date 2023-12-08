import { useEffect, useLayoutEffect, useRef } from "react";
import Swal from 'sweetalert2';
import { useState } from "react";
import { centerStyle, oddStyle } from "../styles";
import withReactContent from "sweetalert2-react-content";

export const UseLayoutEffect = () => {
  const [posicion, setPosicion] = useState(0);
  const [loading, setLoading] = useState(true);

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

  const alertMessage = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <p>useLayoutEffect</p>,
      text: "Moviste el cubito",
    });
  };

  useLayoutEffect(()=>{
    if(!loading) alertMessage()
    console.log('Ejecucion del useLayoutEffect')

  },[posicion])

  useEffect(() => {

    divRef.current.style.transform =`translateX(${posicion}px)`
    if(loading) setLoading(false);

    console.log('Ejecucion del useEffect')
  }, [posicion])
  

  return (
    <div className={oddStyle + centerStyle}>
      <button className="btn btn-secondary" onClick={squareLeftHandleClick}>
        Mover a la izquierda
      </button>
      <div
        style={cubito}
        className="bg-danger rounded transition"
        ref={divRef}
      ></div>
      <button className="btn btn-secondary" onClick={squareRightHandleClick}>
        Mover a la derecha
      </button>
    </div>
  );
};
