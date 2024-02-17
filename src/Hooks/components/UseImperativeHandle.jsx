

import React, { forwardRef, useImperativeHandle, useRef } from 'react'

export const UseImperativeHandle = () => {

    //nos sirve para ...
    const elementoRef = useRef();

    const datazos= ()=> elementoRef.current.datitos()
const ejecucion = ()=> elementoRef.current.funcion()
  return (
    <div>
        <h3>UseImperativeHandle</h3>
        <Input ref={elementoRef}/>

        <input onBlur={datazos} 
        className='w-25 form-control' placeholder='No pongas nada acá'/>
        <button onClick={ ejecucion}
        >Boton</button>
        
        </div>
  )
}


const Input = forwardRef((_ , ref)=>{

    const [valor, setValor] = useState("");
    const inputRef = useRef();

    const funcion = ()=> console.log('Soy la funcion - valor input:' , inputRef.current.value);

    const funciones ={
        funcion,
        datitos:()=>console.log(inputRef.current.getBoundingClientRect())
    }

    useImperativeHandle(ref , ()=> funciones)

    return<input
        value={ valor}
        ref={inputRef}
        className='w-25 form-control'
        placeholder='Soy el componente Input'
        onChange={e => setValor(e.target.value)}
    
    
    
    
    />
})