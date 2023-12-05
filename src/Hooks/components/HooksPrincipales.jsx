
import { useEffect, useRef, useState} from "react";

export const HooksPrincipales =()=>{

    const [count, setCount] = useState(0);
    const  [puntitos, setPuntitos] = useState('.')

   

    const countClickHandler =()=>{
        setCount(count+1);
        console.log(botonRef.current.style);
        botonRef.current.style.height ='200px';
        botonRef.current.style.width ='200px';
        botonRef.current.style.color ='blue';
    }


    //UseEffect

    useEffect(()=>{

        setTimeout(() => {
            setPuntitos(puntitos + '.')
        }, 1000);

        return()=>{
            puntitos === '.....' && setPuntitos('.')
        }
    },[puntitos])

    //UseRef

    const botonRef = useRef()


    return(
        <div>
             <button
            ref={botonRef}
            onClick={countClickHandler}
            style={{height:'50px'}} >
                +
            </button>
        <h2>{count + puntitos} </h2>

        </div>
    )
}