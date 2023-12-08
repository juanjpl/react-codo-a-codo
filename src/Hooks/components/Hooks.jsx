
import { HooksPrincipales } from "./HooksPrincipales";
import {OnClickCapture} from './methods/OnClickCapture'
import { Memo, PropTypesComponents } from "./methods";
import { UseEffect } from "./UseEffect";
import { UseRef } from "./UseRef";
import { UseState } from "./UseState";
import { UseLayoutEffect } from "./UseLayoutEffect";
import { UseInsertionEffect } from "./UseInsertionEffect";
import { UseMemo } from "./UseMemo";
import { UseCallback } from "./UseCallback";
import { ForwardRef } from "./methods/Memo/ForwardRef";



const style = {
    margin:'2em 0em',
    height : '80vh',
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    color:'black',
    flexDirection:'column',
    gap:20,
    boxSizing:'content-box'
}

export const Hooks = ()=>{

 
    const proptypes = () => 'Funcion';


    return(
        <div style={style} >
            {
//<HooksPrincipales/>
            }

           
           <PropTypesComponents
           name='Juan'
           age={50}
           dev={true}
           array={['primer','segunda']}
           objeto={{a:1}}
           funcion={proptypes}
           />
            <OnClickCapture/>
           <UseState/>
           <UseEffect/>
           <UseRef/>
           <UseLayoutEffect />
           <UseInsertionEffect/>
           <Memo/>
           <UseMemo/>
           <UseCallback/>
           <ForwardRef/>
          
        </div>
    )
}