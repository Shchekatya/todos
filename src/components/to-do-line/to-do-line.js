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


export default function ToDoLine() {
  const toDoArr = useSelector((state) => state.toDoReducer.todos);
    console.log(toDoArr)
  return (   
    <div className='checkbox'>
      <input type="checkbox" id="cb1" className='checkbox-input'/> <label for="cb1">Флажок 1</label>
    </div>

  );
}