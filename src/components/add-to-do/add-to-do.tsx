import {TextField, ToggleButton,ToggleButtonGroup,Button} from "@mui/material";
import {NavLink, Navigate, Outlet, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import React, { useState, SyntheticEvent } from 'react';
import './add-to-do.scss'
import { ADD_TO_DO,DELETE_COMPLETED } from "../../redux/actions/action-todo";
import { useAppSelector, useAppDispatch } from "../../hooks"

export interface ToDoItem {
    id: number;
    data: string;
    isCompleted: boolean;
    text: string;
}

const AddToDo = () => {
    const initialState='';
    const [text, setText] = useState(initialState);
    const toDoArr = useAppSelector((state) => state.toDoReducer.todos);
    const dispatch=useAppDispatch();
    const navigate = useNavigate();
    const activeLeft=toDoArr.filter(e=> e.isCompleted===false).length
    const submitToDo = (e:SyntheticEvent) => {    
        e.preventDefault()
        const toDoItem = {
            id: Date.now(),
            data: new Date().toISOString().split('T')[0],
            isCompleted: false,
            text: text,       
        }
        if (text!=initialState) {
            dispatch({ type: ADD_TO_DO, payload: toDoItem })  
        }   
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

    const deleteCompleted=()=> {
        dispatch({ type: DELETE_COMPLETED })  
    }

        const [alignment, setAlignment] = React.useState('all');
      
        const handleChange = (newAlignment:string) => {
          console.log(alignment)
          setAlignment(newAlignment);
        };

    
    return ( 
     <div className="todo-wrap">
     <header>
        <h1 className="todo-name">todos</h1>
        </header> 
        <div className="todo-wrap-list">
        <form onSubmit={submitToDo}>
        <TextField 
          className="todo-input"
          id = "outlined-basic"        
          variant="filled"
          value={text}
          placeholder='Task text' onChange={(e) => setText(e.target.value)}/>
          </form>              
        <main >
        < Outlet />
        </main> 
        <footer>    
        <span className="todo-left">{activeLeft} items left</span>
        <ToggleButtonGroup           
            value={alignment}
            exclusive
            onChange={()=>handleChange}
            aria-label="Platform"
        >   
            <ToggleButton value="all" onClick={AllNavigate} className="todo-button">All</ToggleButton> 
            <ToggleButton value="active" onClick={ActiveNavigate} className="todo-button">Active</ToggleButton> 
            <ToggleButton value="completed" onClick={CompleteNavigate} className="todo-button">Completed</ToggleButton>    
        </ToggleButtonGroup>  
        <Button variant="text" color="error" onClick={deleteCompleted}>Clear completed</Button> 
        </footer>
        </div>
     </div>
    )
}

export default AddToDo