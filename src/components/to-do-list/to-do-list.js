import { useDispatch, useSelector } from "react-redux";
import ToDoLine from "../to-do-line/to-do-line";
import {List, ListItem, Divider} from "@mui/material";

const ToDoList = () => {
    const toDoArr = useSelector((state) => state.toDoReducer.todos);
    const dispatch=useDispatch();
    console.log(toDoArr)
    return (   
        <div className='todo-line'>
          <List component="nav" aria-label="mailbox folders">
           {toDoArr.length ? (toDoArr.map((item)=>
            <>
              <ListItem button>
                <ToDoLine item={item.text} id={item.id}/>
              </ListItem>
              <Divider />
            </>
            )) : (<div>Начните добавлять задачи и они появятся здесь</div>)}   
           </List>        
        </div>
      );
}

export default ToDoList