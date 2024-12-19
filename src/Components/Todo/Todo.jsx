// import AddTodo from "../Addtodo/Addtodo.jsx"
function Todo({text,ischecked,deletetodo})
{

    return(
        <>

        <input type="checkbox" checked={ischecked} />
        <span>{text}</span>
        <button>Edit</button>
        <button onClick={deletetodo}>Delete</button>
        </>
    )
}


export default Todo