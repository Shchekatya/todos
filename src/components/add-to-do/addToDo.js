import {TextField} from "@mui/material";
import {NavLink, Outlet} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import './addToDo.scss'
import { ADD_TO_DO } from "../../redux/actions/action-todo";

const AddToDo = () => {
    const initialState='';
    const [text, setText] = useState(initialState);
    const dispatch=useDispatch();

    const submitToDo = (e) => {
        e.preventDefault()
        const toDoItem = {
            id: Date.now(),
            data: new Date().toISOString().split('T')[0],
            isCompleted: false,
            text: text,       
        }
        dispatch({ type: ADD_TO_DO, payload: toDoItem })  
        e.target.reset();
        console.log(text);
        setText(initialState);     
    }

    
    return ( 
     <div className="todo-wrap">
     <header>
        <h1 className="todo-name">todos</h1>
        <form onSubmit={submitToDo}>
        <TextField id = "outlined-basic"
          label = "Outlined"
          variant = "outlined" 
          placeholder='Task text' onChange={(e) => setText(e.target.value)}/>
          </form>
        </header>        
        <main >
        < Outlet />
        </main> 
     </div>
    )
}

export default AddToDo