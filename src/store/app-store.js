import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../Redux/counter-slice";
export const store = configureStore({
reducer:{counterReducer}
});