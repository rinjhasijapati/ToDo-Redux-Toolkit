
import {Box, Button, TextField, Typography} from '@mui/material';
import {useState} from "react";
import ShowList from "./ShowList.tsx";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions.tsx";


function Todo () {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if(newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    }

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
                onClick={handleAddTodo}
                sx={{ margin: '8px 16px' }}
            >Add</Button>
            </div>

            <div>
                <ShowList />
            </div>

        </Box>
    );
}

export default Todo;