import { useContext } from "react";
import Todo from "../Todo/todo.jsx";
import TodoContext from "../../context/TodoContext.js";

function Todolist() {
    const { count, dispatch } = useContext(TodoContext); // Ensure correct structure in TodoContext.Provider

    // Delete a todo item by dispatching an action
    function deleteid(id) {
        dispatch({ type: "delete_todo", payload: { id } });
    }

    // Edit a todo item by dispatching an action
    function edit1(id, newTodo) {
        dispatch({
            type: "edit_todo",
            payload: { id, newTodo }, // Pass newTodo in payload
        });
    }

    return (
        <>
            {count.map((item) => (
                <div key={item.id}> {/* Use unique `id` for keys */}
                    <Todo
                        text={item.text}
                        id={item.id}
                        delete1={() => deleteid(item.id)}
                        edit1={(newTodo) => edit1(item.id, newTodo)}
                    />
                </div>
            ))}
        </>
    );
}

export default Todolist;
