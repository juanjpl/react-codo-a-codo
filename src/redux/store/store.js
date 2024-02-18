import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../reducers/counterReducer";
import { criptoReducer } from "../reducers/criptoReducer";

const reducer = { counter: counterReducer,
cripto: criptoReducer };

export const store = configureStore({reducer});
