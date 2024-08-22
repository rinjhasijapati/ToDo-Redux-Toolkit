import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}

export interface TodoState {
    todos: TodoItem[];
}

const initialState: TodoState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
                id: crypto.randomUUID(),
                text: action.payload,
                completed: false,
            });
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if(todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;