

export const counterIncrease = state => { state.count++}
export const counterDecrease = state => {
    state.count -= 2 
    state.timer ++
}

export const counterIncreaseByAmount = (state ,action) =>{
    const a = Number(action.payload)
    state.count += a
    state.timer += a**2
}