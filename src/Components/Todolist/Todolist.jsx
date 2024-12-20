import Todo from "../Todo/todo.jsx"
function Todolist({count,setcount1})
{
    function deleteid(id)
    {
        const data=count.filter((e)=> e.id !== id)
        setcount1(data)
    }

    function edit1(id,newtodo)
    {
        const newtodo1=count.map((e)=> {
            if(e.id === id)
            {
                 e.text=newtodo
            }
            return newtodo})

            setcount1(newtodo1
            )
    }

    return(
        <>
          {count.map((item,index)=>
          <div key ={index}>
            <Todo  text={item.text} id={item.id} delete1={deleteid} edit1={(newtodo)=>edit1(item.id,newtodo)}/>
            </div>
          )}
          
        
        </>
    )
}

export default Todolist