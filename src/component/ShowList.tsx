import ShowListItem from "./ShowListItem.tsx";
import {List} from "@mui/material";
import LevelContext from "./LevelContext.tsx";

// interface TodoItems {
//     id: string;
//     text: string;
//     completed: boolean;
// }
//
// interface ShowlistProp {
//     todos: TodoItems[];
//     removeTodo: (id: string) => void;
//     toggleComplete: (id: string) => void;
// }

//{todos, removeTodo, toggleComplete} : ShowlistProp


function ShowList() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <List>
                <LevelContext.Consumer>
                    {({ todos, removeTodo, toggleComplete }) => (
                        todos.map((todo) => (
                            <ShowListItem
                                key={todo.id}
                                todo={todo}
                                removeTodo={removeTodo}
                                toggleComplete={toggleComplete}
                            />
                        ))
                    )}
                </LevelContext.Consumer>
            </List>
        </div>
    )
}

export default ShowList