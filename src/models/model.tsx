 export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}

 export interface LevelContextType {
     todos: TodoItem[];
     removeTodo: (id: string) => void;
     toggleComplete: (id: string) => void;
 }