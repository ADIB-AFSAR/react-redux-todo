import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "./constants/todo.constant"

const initialState={
   todos:['breakfast','lunch','dinner'],
   editing:{
    index:-1,
    data:''
   }
}
export const todoReducer = (state=initialState,action)=>{
        switch (action.type) {
            case ADD_TODO :
                return {
                    ...state,
                    todos:[...state.todos,action.payload]
                } 
                case DELETE_TODO :
                  let filter =   state.todos.filter(todo => todo !== action.payload)
                  return {
                    ...state,
                    todos:filter
                  }
                case EDIT_TODO :
                  return {
                    ...state,
                    editing:{
                        index:action.payload.index,
                        data:action.payload.todo
                    }
                  }
                   case UPDATE_TODO:
                  const updatedTodos = [...state.todos];  
                  updatedTodos[state.editing.index] = action.payload;  
                  return {
                      ...state,
                      todos: updatedTodos,  
                      editing: {
                          index: -1,
                          data: ''
                      }
                  };

            default:
                return state;
        }
}