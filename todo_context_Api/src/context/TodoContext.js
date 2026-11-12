import { useContext, createContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:" first todo",
            completed:false

        },
    ],
    addTodo :(todo)=>{},
    updateTodo :(id , todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete :(id)=>{}
})

const TodoContextProvider = TodoContext.Provider


const useTodoContext = ()=>{
    return useContext(TodoContext);
}
export {TodoContext,TodoContextProvider,useTodoContext}