import {Button, Checkbox, ListItem} from "@mui/material";
import { useContext } from "react";
import LevelContext from "./LevelContext.tsx";


function ShowListItem({todo}) {
    const { removeTodo, toggleComplete } = useContext(LevelContext);

    return (
        <ListItem key={todo.id}>
            <Checkbox
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                  {todo.text}
                </span>
            <Button sx={{margin: '10px'}} variant="outlined" color="error"
                    onClick={() => removeTodo(todo.id)}>
                Delete
            </Button>
        </ListItem>
    )
}

export default ShowListItem