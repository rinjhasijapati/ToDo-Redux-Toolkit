import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./actions.tsx";

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

// type Action = { type: 'ADD_TODO' | 'REMOVE_TODO' | 'TOGGLE_TODO', payload: string | TodoItem };
//or
type Action = AddTodoAction | RemoveTodoAction | ToggleTodoAction;


const todoReducer = (state = initialState, action: Action): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                // todos: [...state.todos, action.payload as TodoItem],
                todos: [...state.todos, action.payload],
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                ),
            };
        default:
            return state;
    }
}

export default todoReducer












