import Todo from '../Todo/Todo.jsx';

function Todolist({ todo, setTodolist1 }) { // Destructuring props correctly

    function delete1(id) {
        console.log('Deleting item with id:', id);  // Debugging line
        const newtodolist = todo.filter(e => e.id !== id);
        setTodolist1(newtodolist);  // Using setTodolist1 here
    }

    return (
        <>
            {todo.map((item) => (
                <div key={item.id}>
                    <Todo
                        text={item.text}
                        isfinished={item.isfinished}
                        deletetodo={() => delete1(item.id)} // Correctly passing the delete function
                    />
                </div>
            ))}
        </>
    );
}

export default Todolist;
