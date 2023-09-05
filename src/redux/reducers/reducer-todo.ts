import { ADD_TO_DO, COMPLETE_TO_DO, DELETE_COMPLETED } from "../actions/action-todo"
import { ToDoItem } from "../../components/add-to-do/add-to-do"

export interface AddTodoAction {
  readonly type: typeof ADD_TO_DO;
  payload: ToDoItem;
}

export interface CompleteTodoAction {
    readonly type: typeof COMPLETE_TO_DO;
    payload: string;
}

export interface DeleteAction {
    readonly type: typeof DELETE_COMPLETED;
}

export type TodoActions = 
  | AddTodoAction
  | CompleteTodoAction
  | DeleteAction

export interface IinitialState {
    todos: ToDoItem[];
}  

const initialState:IinitialState = {  
  todos: [],   
};

export const toDoReducer = (state = initialState, action:TodoActions) => {
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
                    e.isCompleted=!e.isCompleted
                }
                return e
            })      
            }
        case DELETE_COMPLETED:            
            return {
              ...state, 
              todos: state.todos.filter(e=>
                e.isCompleted===false           
              )      
            }
       
            default:
                return state
        }
    }