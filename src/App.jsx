import { useReducer, useState } from 'react'
import Todolist from './Components/Todolist/todolist.jsx'
import Addtodo from './Components/Addtodo/Addtodo.jsx'
import './App.css'
import TodoContext from './context/TodoContext.js'
import TodoReducer from './Reducer/Todoreducer.js'

function App() {

  // const[todo]=useReducer(TodoReducer)
  const [count, dispatch] = useReducer(TodoReducer,[])

//   const dtate=

//   function add(data)
//   {
//     setTodos((state)=>[...state,{id:Date.now(),text:data}])
//     // setData("")

// //   setCount(dtate)
//   }
  return (
   

    <>
    <TodoContext.Provider value={{count,dispatch}}>
    <Addtodo />
    <Todolist/>

    </TodoContext.Provider>
    
     
    </>
  )
}

export default App