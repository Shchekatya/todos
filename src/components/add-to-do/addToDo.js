import {TextField, Button} from "@mui/material";
import {NavLink, Navigate, Outlet, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import './addToDo.scss'
import { ADD_TO_DO } from "../../redux/actions/action-todo";

const AddToDo = () => {
    const initialState='';
    const [text, setText] = useState(initialState);
    const dispatch=useDispatch();
    const navigate = useNavigate();
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

    function CompleteNavigate() {
        navigate('/completed');
      }

    function ActiveNavigate() {
        navigate('/active');
    }

    function AllNavigate() {
        navigate('/');
    }

    
    return ( 
     <div className="todo-wrap">
     <header>
        <h1 className="todo-name">todos</h1>
        <form onSubmit={submitToDo}>
        <TextField id = "outlined-basic"        
          variant = "outlined" 
          placeholder='Task text' onChange={(e) => setText(e.target.value)}/>
          </form>
        </header>        
        <main >
        < Outlet />
        </main> 
        <footer>       
        <Button variant="outlined" onClick={AllNavigate}>All</Button> 
        <Button variant="outlined" onClick={ActiveNavigate}>Active</Button> 
        <Button variant="outlined" onClick={CompleteNavigate}>Completed</Button>       
        </footer>
     </div>
    )
}

export default AddToDo