// import { createStore } from 'redux';
// import todoReducer from "./reducer.tsx";
//
// const store = createStore(todoReducer);
//
//
// export default store;
//export type AppState = ReturnType<typeof store.getState>;


import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./reducer.tsx";


const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export default store;


export type AppState = typeof store.getState;