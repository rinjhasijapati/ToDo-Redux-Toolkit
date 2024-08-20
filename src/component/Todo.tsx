
import {Box, Button, TextField, Typography} from '@mui/material';
import {useState} from "react";
import ShowList from "./ShowList.tsx";
import LevelContext from "./LevelContext.tsx";


interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}

function Todo () {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo !== '') {
            const newId = crypto.randomUUID();
            const newTodoItem: TodoItem = {
                id: newId,
                text: newTodo,
                completed: false,
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const removeTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleComplete = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <Box>
            <Typography variant="h3" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5px'}}>
                TodoList
            </Typography>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <TextField  id="outlined-basic" placeholder="Add Tasks..." variant="outlined" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />

            <Button
                variant="contained"
                color="success"
                onClick={addTodo}
                sx={{ margin: '8px 16px' }}
            >Add</Button>
            </div>

            <div>
                <LevelContext.Provider value={{todos, removeTodo, toggleComplete}} >
                    <ShowList />
                </LevelContext.Provider>
            </div>

        </Box>
    );
}

export default Todo;