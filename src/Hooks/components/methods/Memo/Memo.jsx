import { useState } from "react"
import { centerStyle, oddStyle } from "../../../styles"
import { Hijo } from "./Hijo"
import { HijoMemo } from "./HijoMemo"



export const Memo = () =>{

    const [valorMemo , setValorMemo] = useState(1)
    const [fibo , setfibo] = useState(0)
    const [valor , setvalor] = useState(0)

    function hijoSumaHandleClick (){
        setvalor( valor + 1)

    }

    function hijoFiboHandleClick (){
        setValorMemo( valorMemo + fibo)
        setfibo(valorMemo)
    }

    const container = ' d-flex align-items-end '
    const boton = (color) =>` btn btn-outline-${color} mx-3 `

    return(
        <div className={oddStyle + centerStyle} >
            <h3>Memo:</h3>

            <div className={container}>
                <Hijo valor={valor}/>
                <button className={boton('primary')} onClick={ hijoSumaHandleClick}>Fibo</button>
            </div> 

            <div className={container}>
                <HijoMemo valor={valorMemo} texto={'hola'}/>
                {valorMemo}
                <button className={boton('primary')} onClick={hijoFiboHandleClick}>Suma</button>
            </div> 
        </div>
    )
}