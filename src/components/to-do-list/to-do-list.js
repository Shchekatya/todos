import { useDispatch, useSelector } from "react-redux";
import ToDoLine from "../to-do-line/to-do-line";
import {List, ListItem, Divider} from "@mui/material";
import { COMPLETE_TO_DO } from "../../redux/actions/action-todo";

const ToDoList = () => {
    const toDoArr = useSelector((state) => state.toDoReducer.todos);
    const dispatch=useDispatch();
    console.log(toDoArr)

    const toCompleted=(e)=>{
      const completedToDo=e.target;
      if (completedToDo.checked = true){
        console.log('aaaaaaaaa')
        dispatch({ type: COMPLETE_TO_DO, payload: completedToDo.id })  
    }
    
    }
  
    return (   
        <div className='todo-line'>
          <List component="nav" aria-label="mailbox folders">
           {toDoArr.length ? (toDoArr.map((item)=>
            <>
              <ListItem button>
                <ToDoLine item={item.text} id={item.id} onChange={toCompleted}/>
              </ListItem>
              <Divider />
            </>
            )) : (<div>Начните добавлять задачи и они появятся здесь</div>)}   
           </List>        
        </div>
      );
}

export default ToDoList