import {createContext} from 'react';
import {LevelContextType} from "../models/model.tsx";


const LevelContext = createContext<LevelContextType>({
    todos: [],
    removeTodo: () => {},
    toggleComplete: () => {},
});

export default LevelContext;