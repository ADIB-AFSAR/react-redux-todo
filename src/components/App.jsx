import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo2, editTodo2, updateTodo  } from "../redux/action/todo.action";

export default function App() {

  const [ input,setInput] = useState('')
  const store =  useSelector(state => state.todos)
  const editing =  useSelector(state => state.editing)
  const dispatch = useDispatch()
   
   
   const addOrUpdateTodo = (event)=>{
    event.preventDefault();
    if(editing.index === -1){
         dispatch(addTodo(input))
    setInput('');
    }
    if(editing.index != -1){
        dispatch(updateTodo(input))
        setInput('')
    }
   
    }
       const deleteTodo = (todo)=>{
       dispatch(deleteTodo2(todo))
   }
   const editTodo = (todo,index)=>{
     dispatch(editTodo2(todo,index))
     setInput(todo) 
   }
       return <div className="container">
           <div className="todo">
            <h2>TodoList</h2>
            <form onSubmit={addOrUpdateTodo}>

            <input value={input} onChange={(event)=>{setInput(event.target.value)}} ></input>
            <button className="button" disabled={input.length === 0? true:false}>{editing.index === -1?'Add':'✔️'}</button>
            </form>
               {store.map((todo,index) =><li key={index}><span onClick={()=>{deleteTodo(todo)}}>{todo}</span>
               <button 
               onClick={()=>{editTodo(todo,index)}}
                className="editBtn">📝</button>
               </li>)}
            </div>
    </div>
}