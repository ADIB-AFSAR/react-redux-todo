import { todoReducer } from "./todo.reducer";
import { configureStore, createStore } from "@reduxjs/toolkit";

// export const store = createStore(todoReducer)


export const store = configureStore({
    reducer: todoReducer,
    devTools:true
})