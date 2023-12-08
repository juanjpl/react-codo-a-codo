import { memo, useCallback, useState } from "react"
import { centerStyle, evenStyle, oddStyle } from "../styles"



const Memo = memo(({funcion, nro})=>{
    console.log('Ha creado un componente hijo boton')

    return(
        <div>
            <button className="btn btn-primary" onClick={funcion}>Boton {nro}</button>
        </div>
    )
})

export const UseCallback = ()=>{

    const usandoUseCallback = true;
    const [valor, setValor] = useState(0)
    const [active, setActive] = useState(false)


    const activarCallback= ()=> setActive(!active);
    const cambiarValor = ()=> setValor(valor + 1);

    const cambiarValorConUseCallBack = useCallback(()=> setValor(valor + 1), [ active])

    console.warn('Renderizado del componente padre')

    return usandoUseCallback
    ?<div className={oddStyle + centerStyle} >
        <button onClick={activarCallback}>Activar Botones:</button>
        <h4>{valor}</h4>
        <Memo nro={1} funcion={cambiarValorConUseCallBack}/>
        <Memo nro={2} funcion={cambiarValorConUseCallBack}/>
    </div>
    :<div className={evenStyle + centerStyle} >
        <h3>useCallback:</h3>
        <h4>{valor} </h4>
        <Memo funcion={cambiarValor}/>
    </div>
}