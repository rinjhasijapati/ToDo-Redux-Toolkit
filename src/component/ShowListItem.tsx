import {Button, Checkbox, ListItem} from "@mui/material";
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodo} from "../redux/actions.tsx";
import {TodoItem} from "../models/model.tsx";

interface ShowListItemProps {
    todo: TodoItem;
}

function ShowListItem({todo}: ShowListItemProps) {
    const dispatch = useDispatch();

    return (
        <ListItem key={todo.id}>
            <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </span>
            <Button sx={{margin: '10px'}} variant="outlined" color="error"
                    onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
            </Button>
        </ListItem>
    );
}

export default ShowListItem;
