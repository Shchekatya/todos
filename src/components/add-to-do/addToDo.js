import {TextField} from "@mui/material";
import {NavLink, Outlet} from 'react-router-dom';
import './addToDo.scss'

const AddToDo = () => {
    return ( 
     <div className="todo-wrap">
     <header>
        <h1 className="todo-name">todos</h1>
        <TextField id = "outlined-basic"
          label = "Outlined"
          variant = "outlined" />
        </header>        
        <main >
        < Outlet />
        </main> 
     </div>
    )
}

export default AddToDo