import {createReducer} from "@reduxjs/toolkit";
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./actions.tsx";

export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}

export interface TodoState {
    todos: TodoItem[];
}

const initialState : TodoState = {
    todos: [],
}

interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: TodoItem;
}

interface RemoveTodoAction {
    type: typeof REMOVE_TODO;
    payload: string;
}

interface ToggleTodoAction {
    type: typeof TOGGLE_TODO;
    payload: string;
}



const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('ADD_TODO', (state, action:AddTodoAction) => {
            state.todos.push(action.payload);
        })
        .addCase('REMOVE_TODO', (state, action: RemoveTodoAction) => {
            state.todos=state.todos.filter(todo => todo.id !== action.payload);
        })
        .addCase('TOGGLE_TODO', (state, action: ToggleTodoAction) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        })
})

export default todoReducer;

