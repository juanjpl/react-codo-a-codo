import { useState } from "react"
import { oddStyle } from "../styles"

export const UseState =()=>{

    const [flag, setFlag] =useState(true);

    const handleClick =()=>{
        setFlag(!flag);
    }



    return(
        <div className={oddStyle} >
            <button className="btn btn-dark"
            onClick={handleClick}
            >
                Cambia el componente
            </button>
            {
                flag
                ?
                    <div>Su valor es verdadero:{flag.toString()} </div>
                :
                    <span>Su valor es falso: {JSON.stringify(flag)} </span>
            }
        </div>
    )
}