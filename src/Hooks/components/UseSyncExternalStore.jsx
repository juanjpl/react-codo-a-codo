

import React, { useSyncExternalStore } from 'react'
import { centerStyle, evenStyle } from '../styles'

const funcionListener = (listener) =>{
    window.addEventListener('scroll',listener)
    return ()=> window.removeEventListener('scroll' , listener)
}

const snapShot = ()=> window.scrollY

export const UseSyncExternalStore = () => {


const heightFromTop = useSyncExternalStore(funcionListener , snapShot);

  return (
    <div className={evenStyle + centerStyle} >
        <h3>Use Sync External Store</h3>
        <h4>Tamaño de la pantalla</h4>
    <h4>{heightFromTop} </h4>

    </div>
  )
}
