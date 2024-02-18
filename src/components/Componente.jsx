

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSelector } from '../redux/selectors/counterSelector'
import { ComponenteLayout } from '../Layouts/ComponenteLayout'
import { byAmount, decrease, increase } from '../redux/reducers/counterReducer'


export const Componente = () => {

    const {count , timer} = useSelector(counterSelector)

    const dispatch = useDispatch()


    const [value , serValue]=useState(0)
    const changeValue = newValue => serValue(newValue)

    const css ='btn btn-primary'

  return (
    <ComponenteLayout>
        <h2>componente</h2>
        <div>Count: {count} </div>
        <div>Timer: {timer} </div>

        <button onClick={()=> dispatch(increase())} className={css} >Incrementar + 1</button>
        <button onClick={()=> dispatch(decrease())} className={css} >Decrementar + 1</button>

        <div className='bg-secondary rounded p-3'>
            <input type="number" className='form-control mt-3' placeholder='Ingrese un numero' onChange={e => changeValue(Number(e.target.value))} />
            <button onClick={()=> dispatch(byAmount(value))} className={css} >Incrementar by Amount</button>
        </div>
        
    </ComponenteLayout>
  )
}
