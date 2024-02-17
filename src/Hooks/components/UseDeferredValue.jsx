

import React, { useDeferredValue, useState } from 'react'
import { centerStyle, oddStyle } from '../styles';

export const UseDeferredValue = () => {

    const [count, setCount] = useState(0);
    const list = 50000 ;
    const styleDiv = {height:"10vh" , overflowY:'auto' }

    const deferredCount = useDeferredValue(count);

    const addItems = ()=>{
        setCount(count +2000)
    }
    const simularGranProceso =()=>{

        Array(list).fill(1).map((_ , index)=>
        <span  key={index} >{list - index} </span>)
    }


  return (
    <div className={oddStyledStyle + centerStyleerStyle}>
      <h3>UseTransition</h3>
      <h4>{`Clicks: ${count}`}  </h4>
      <h4>{`Valor deferredValue: ${deferredCount}`}  </h4>

      <button  onClick={addItems}>
      Sumar
      </button>

    

      <div className="form-control" style={styleDiv}>
        {simularGranProceso()}
      </div>
    </div>
  )
}
