import { endLoading, stateService } from "../reducers/criptoReducer"


export const getStateServiceThunk = ()=>
async(dispatch)=>
setTimeout(async()=>{

    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin'
    const data = await fetch(url)
    //console.log(data.status)
    dispatch(stateService(data.status))

    dispatch(endLoading())
},1000)