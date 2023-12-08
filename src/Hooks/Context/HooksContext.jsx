
import { createContext , useState } from "react";

export const HooksContext = createContext();

export const HooksProvider = ({children})=>{

    const [value , setValue] = useState(0);

    const changeValue=()=>{
        setValue(value +1 )
    }

    return(
        <HooksContext.Provider value={{
            value,changeValue
        }}>
            {children}
        </HooksContext.Provider>
    )
}