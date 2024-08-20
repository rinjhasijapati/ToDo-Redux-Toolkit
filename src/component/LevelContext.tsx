import {createContext} from 'react';

interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}

interface LevelContextType {
    todos: TodoItem[];
    removeTodo: (id: string) => void;
    toggleComplete: (id: string) => void;
}

const LevelContext = createContext<LevelContextType>({
    todos: [],
    removeTodo: () => {},
    toggleComplete: () => {},
});

export default LevelContext;