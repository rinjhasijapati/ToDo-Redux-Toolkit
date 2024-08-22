import ShowListItem from "./ShowListItem.tsx";
import {List} from "@mui/material";
import {useAppSelector} from "../redux/store.tsx";


function ShowList() {
    const todos = useAppSelector((state) => state.todos.todos);

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <List>
                {todos.map((todo) => (
                            <ShowListItem
                                key={todo.id}
                                todo={todo}
                            />
                        ))}
            </List>
        </div>
    )
}

export default ShowList






