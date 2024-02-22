import { endLoading, getPrice, startLoading, stateService } from "../reducers/criptoReducer"


export const getStateServiceThunk = ()=>
async(dispatch , getState)=>
setTimeout(async()=>{

    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin'
    const data = await fetch(url)
    //const datos = await data.json()
    //console.log(datos)
    //console.log(datos.market_data.current_price)
    //const crypto = getState().cripto.crypt
    //console.log(crypto)
    dispatch(stateService(data.status))

    dispatch(endLoading())
},2000)




const url = (crypto) =>  `https://api.coingecko.com/api/v3/coins/${crypto}`


export const getDataThunk =()=>
 

    async(dispatch , getState)=>{

        const crypto = getState().cripto.crypt
         //console.log(crypto)
         dispatch(startLoading())
       
            try {
           
               
                let data;
                setTimeout(async()=>{
                   
                    data = await fetch(url(crypto))
                    //console.log(data)
                    data = await data.json()
                    //console.log(data)
                    dispatch(getPrice(data))
                },[2000])
             
                
            } catch (err) {
                alert('No se encuentra la cripto seleccionada')
            }
            finally{
                dispatch(endLoading())
            }
       
      
        
    }
