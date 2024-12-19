import Todolist from './Components/Todolist/Todolist.jsx';
import AddTodo from './Components/Addtodo/Addtodo.jsx';
import './App.css';
import { useState } from 'react';

function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, text: "hi", isfinished: true }
    ]);

    function addtodo(title) {
        setTodoList((prevList) => [
            ...prevList,
            { id: Date.now(), text: title, isfinished: false }
        ]);
    }

    return (
        <>
            <AddTodo addtodo={addtodo} />
            {/* Pass setTodoList (or setTodolist1) properly */}
            <Todolist todo={todoList} setTodolist1={setTodoList} /> 
        </>
    );
}

export default App;
