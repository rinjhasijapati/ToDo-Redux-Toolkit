import ShowListItem from "./ShowListItem.tsx";
import {List} from "@mui/material";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store.tsx";

function ShowList() {
    const todos = useSelector((state: AppState) => state.todos);

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


