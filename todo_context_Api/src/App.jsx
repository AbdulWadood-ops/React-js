import { useState } from "react"
import { TodoContextProvider } from "./context/TodoContext"
import { useEffect } from "react"
import { TodoForm, TodoItem } from "./components"

function App() {

  const [todos ,setTodos] = useState([])
    
    const addTodo=(todo)=>{

      setTodos((pre)=>{
        return [{
          id:Date.now(),
          ...todo
          },...pre]

      })
    
    }
    
    const toggleComplete = (id)=>{
      setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id ? {...prevtodo,completed : !prevtodo.completed}:prevtodo)))

    }
    
    const deleteTodo =(id)=>{
      setTodos((prev)=>prev.filter((val)=>val.id !== id))

    }

    const updateTodo =(id , todo)=>{
      setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))
    }
    // useEffect(()=>{
    //   const todos = JSON.parse(localStorage.getItem("todos"))
    //   if(todos && tod.length>0){
    //         setTodos(todos)
    //   }
    // },[])
     useEffect(() => {
      // 1. Get the raw string from localStorage
      const savedTodos = localStorage.getItem("todos");
      
      // 2. Check if the string exists and is not just an empty string
      if (savedTodos && savedTodos !== "") {
        try {
          const tod = JSON.parse(savedTodos);
          if (Array.isArray(tod) && tod.length > 0) {
            setTodos(tod);
          }
        } catch (error) {
          console.error("Failed to parse todos from localStorage:", error);
          // Optional: clear the corrupted item
          // localStorage.removeItem("todos");
        }
      }
    }, []);
    
    useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
     
    },[todos])


  return (
    <>
    <TodoContextProvider value={{addTodo,toggleComplete,deleteTodo,todos,updateTodo}}> 
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div className="w-full"  key={todo.id}>
                            <TodoItem todo={todo} />


                          </div>
                        ))}
                    </div>
                </div>
            </div>    
          </TodoContextProvider>
          </>
  )
}

export default App
