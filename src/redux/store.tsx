import {combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from "./counterReducer.tsx";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";


const store = configureStore({
    reducer: combineReducers({todos: todoReducer}),
});

export default store;


//export type AppState = typeof store.getState;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector




