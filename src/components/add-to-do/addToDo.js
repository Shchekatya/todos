import {    TextField} from "@mui/material";
import {
    NavLink,
    Outlet
} from 'react-router-dom';

const AddToDo = () => {
    return ( 
     <>
     <header>
     <TextField id = "outlined-basic"
        label = "Outlined"
        variant = "outlined" />
     </header>        
        <main >
        < Outlet />
        </main> 
     </>
    )
}

export default AddToDo