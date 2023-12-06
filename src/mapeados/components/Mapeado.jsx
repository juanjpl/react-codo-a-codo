import { useState } from "react"
import { centerStyle, oddStyle } from "../../Hooks/styles"


export const Mapeado = () =>{

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
    
        const traerJSON = async ()=>{

            try {
                if(loading){
                    let getData
                    getData = await fetch('/src/mapeados/components/data/material.json');
                    getData = await getData.json();
                    setData(getData)
                }
            } catch (error) {
                alert('no se pudo leer el archivo JSON')
            }
            finally{setLoading(false)}
        }

        traerJSON();

    }, [loading])
    

    return(
        <div className={oddStyle + centerStyle} >
            {
                loading
                ?
                <div>Cargando....</div>
                :
                data.map = ((item,index )=> <Item   key={index} item={item}/> )
            }
        </div>
    )
}


const Item = ({item})=>{<div>
    <h4>{item.nombre} </h4>
    <h5>{item.edad} </h5>
</div>}