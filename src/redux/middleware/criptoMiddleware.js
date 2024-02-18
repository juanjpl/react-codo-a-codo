import { endLoading, getPrice, startLoading, stateService } from "../reducers/criptoReducer"


export const getStateServiceThunk = ()=>
async(dispatch)=>
setTimeout(async()=>{

    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin'
    const data = await fetch(url)
    //console.log(data.status)
    dispatch(stateService(data.status))

    dispatch(endLoading())
},1000)

export const getDataThunk =()=>{
    async(dispatch , getState)=>{
        const crypto = getState().crypto.crypt

        try {
            dispatch(startLoading())
            let data;
            data = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}`)
            data = await data.json()
            dispatch(getPrice(data))
            
        } catch (err) {
            alert('No se encuentra la cripto seleccionada')
        }
        finally{
            dispatch(endLoading())
        }
    }
}