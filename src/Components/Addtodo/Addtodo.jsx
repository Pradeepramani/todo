import { useState } from "react"

function Addtodo({add})
{
    const [data,setData]=useState("")
    function changedadd(e)
    {
         setData(e.target.value)
    }
    return(
        <>
        <input type="text" onChange={changedadd}/>
        <button onClick={()=> {add(data) ;setData("")} }>Submit</button>

        </>
    )
}

export default Addtodo