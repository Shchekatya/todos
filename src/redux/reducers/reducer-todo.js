import { ADD_TO_DO, COMPLETE_TO_DO, DELETE_COMPLETED } from "../actions/action-todo"

const initialState= {  
    todos: [],   
  };


export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            console.log(action.payload)
            return {
               ...state, 
            todos: [...state.todos, action.payload]      
            }
        case COMPLETE_TO_DO:        
            return {
               ...state, 
            todos: state.todos.map(e=>{
                if (e.id===parseInt(action.payload)) {
                    e.isCompleted=true
                }
                return e
            })      
            }
            default:
                return state
        }
    }