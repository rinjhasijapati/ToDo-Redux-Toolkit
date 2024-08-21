export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: crypto.randomUUID(),
        text,
        completed: false,
    },
});

export const removeTodo = (id: string) => ({
    type: REMOVE_TODO,
    payload: id,
});

export const toggleTodo = (id: string) => ({
    type: TOGGLE_TODO,
    payload: id,
})

