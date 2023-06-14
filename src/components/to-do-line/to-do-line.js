import * as React from 'react';
import './to-do-line.scss'
import { useSelector } from "react-redux";


export default function ToDoLine(props) {
  const toDoArr = useSelector((state) => state.toDoReducer.todos);    
  return (   
    <div className='checkbox'>
      <input type="checkbox" id={props.id} className='checkbox-input' onChange={props.onChange} checked={props.isCompleted}/> 
      <label for={props.id}>{props.item}</label> 
    </div>
  );
}