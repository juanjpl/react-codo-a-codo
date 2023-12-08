import { useMemo, useState } from "react";
import { centerStyle, evenStyle } from "../styles";

const functionExterna = (nro =2) =>{
    for(let i =0; i <nro ; i++){
        console.log("Soy console.log dentro del 'for'");
        return `valor1: ${nro} `
    }
}

//functionExterna()


export const UseMemo = ()=>{

const [valor1, setValor1] = useState(0);
const [valor2, setValor2] = useState(false);

const seteandoValorUno = () =>setValor1(valor1 + 1)
const seteandoValorDos = () =>setValor2(!valor2)

const css = 'btn btn-outline-light'

const memoria= useMemo(()=>functionExterna(valor1),[valor1])

    return(
        <div className={evenStyle + centerStyle} >
            <h3>useMemo:</h3>
            <h4>{memoria} </h4>
            <button className={css} onClick={seteandoValorUno} >Cambiar valor 1</button>
            <h4>{JSON.stringify(valor2)} </h4>
            <button className={css} onClick={seteandoValorDos} >Cambiar valor 2</button>
        </div>
    )
}