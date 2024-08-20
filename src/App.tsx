import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from "./component/Todo.tsx";


function App() {

  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Todo />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
