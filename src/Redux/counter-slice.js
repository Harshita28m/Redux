import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counterslice",
    initialState:{counter:0},
    reducers:{
        plus(state,action){
            console.log('plus call');
            console.log('action is' ,action);
            console.log('state is' ,state);
            state.counter=state.counter+action.payload;

        },
        minus(state, action){
            console.log('minus  call');
            console.log('action is' ,action);
            console.log('state is' ,state);
            state.counter=state.counter-action.payload;

        },
    }


});

export const {plus,minus}=counterSlice.actions;
export default counterSlice.reducer;