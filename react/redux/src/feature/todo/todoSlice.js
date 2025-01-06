import { createSlice } from '@reduxjs/toolkit'

const initialState={
    todos:[{id:"123",task:"demo",isDone:false}],
};

export const todoSlice=createSlice({
 name:'todo',
 initialState,
 reducers:{
    addtodo:(state,action)=>{
        state.todos
    }
 }

})