
import { HooksPrincipales } from "./HooksPrincipales";
import { PropTypesComponents } from "./methods";
import { UseState } from "./UseState";


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
           <UseState/>
        </div>
    )
}