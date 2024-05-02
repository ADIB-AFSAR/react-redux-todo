export const addTodo = (input)=>{
    return {
        type:'ADD_TODO',
        payload:input
        }
}
export const editTodo2 = (todo,index)=>{
    return {
        type:'EDIT_TODO',
        payload: {
            todo,index
        }
     }
}
export const updateTodo = (input)=>{
    return {
        type:'UPDATE_TODO',
        payload:input
    }
}
export const  deleteTodo2 = (todo)=>{
    return {
        type:'DELETE_TODO',
        payload:todo
       }
}