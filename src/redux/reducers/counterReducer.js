import { createSlice } from "@reduxjs/toolkit";
import { counterDecrease, counterIncrease, counterIncreaseByAmount } from "../actions/counterActions";

const name = 'counter';

const initialState = {count: 0, timer: 0}

const reducers ={
    increase: counterIncrease ,
    decrease: counterDecrease,
    byAmount: counterIncreaseByAmount
}
const slice = createSlice({name, initialState , reducers })

export const { increase, decrease, byAmount} = slice.actions
export const counterReducer = slice.reducer