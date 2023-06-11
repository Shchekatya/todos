import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import './to-do-line.scss'
import { useSelector } from "react-redux";


export default function ToDoLine(props) {
  const toDoArr = useSelector((state) => state.toDoReducer.todos);
    console.log(props)
  return (   
    <div className='checkbox'>
      <input type="checkbox" id={props.id} className='checkbox-input'/> 
      <label for={props.id}>{props.item}</label> 
    </div>
  );
}