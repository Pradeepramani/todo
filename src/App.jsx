import { useState } from 'react'
import Todolist from './Components/Todolist/todolist.jsx'
import Addtodo from './Components/Addtodo/Addtodo.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState([
    {
        text:"fjfnjfn",id:1
    },
    {
        text:"fjfnjfjnfjjfn",id:2
    }
  ])

//   const dtate=

  function add(data)
  {

  setCount((state)=>[...state,{id:Date.now(),text:data}])
//   setCount(dtate)
  }
  return (
   

    <>
     <Addtodo add={add}/>
    <Todolist count={count} setcount1={setCount}/>
     
    </>
  )
}

export default App