import { useState } from "react"

function AddTodo({addtodo})
{
    const [title,setTitle]=useState('')

    function setthing(e)
    {
    //    (e)=>
        setTitle(e.target.value)
    }
return(
    <>
    <input type="text" placeholder="Please enter the todo" onChange={setthing} value={title} />
    {/* <button onSubmit={()=>{addtodo(title);setTitle('') }}>Add</button> */}
    <button onClick={() => { addtodo(title); setTitle('') }}>Add</button>

    
    </>
)
}

export default AddTodo