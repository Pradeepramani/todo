import { useContext, useState } from "react"
import TodoContext from "../../context/TodoContext"

function Addtodo()
{
    try{
   const {count,dispatch}= useContext(TodoContext)
    const [data,setData]=useState("")
    function changedadd(e)
    {
         setData(e.target.value)
    }
    function add()
    {        
        dispatch({type:"add_todo",payload:{data}})
        // setCount((state)=>[...state,{id:Date.now(),text:data}])
        setData("")
    }

    return(
        <>
        <input type="text" onChange={changedadd}/>
        <button onClick={add}>Submit</button>

        </>
    )
    }catch(error)
{
 console.log(error)
}
}

export default Addtodo