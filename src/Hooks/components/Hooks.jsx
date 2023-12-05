
import { HooksPrincipales } from "./HooksPrincipales";
import { PropTypesComponents } from "./methods";


const style = {
    height : '80vh',
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    color:'black'
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
        </div>
    )
}