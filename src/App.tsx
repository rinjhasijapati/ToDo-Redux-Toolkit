import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from "./component/Todo.tsx";
import {Provider} from 'react-redux';
import store from './redux/store';


function App() {

  return (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<Todo />} />
            </Routes>
        </Router>
    </Provider>
  )
}

export default App
