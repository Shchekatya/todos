import { useDispatch, useSelector } from "react-redux";
import ToDoLine from "../to-do-line/to-do-line";
import {List, ListItem, Divider, Button} from "@mui/material";
import { COMPLETE_TO_DO } from "../../redux/actions/action-todo";
import './to-do-list.scss'


const ToDoList = () => {
    const toDoArr = useSelector((state) => state.toDoReducer.todos);
    const dispatch=useDispatch();
    console.log(toDoArr)

    const toCompleted=(e)=>{
      const completedToDo=e.target;       
        dispatch({ type: COMPLETE_TO_DO, payload: completedToDo.id}) 
    } 

  
    return (   
      <>
       
          <List >
           {toDoArr.length ? (toDoArr.map((item)=>
            <>
              <ListItem button>
                <ToDoLine item={item.text} id={item.id} onChange={toCompleted} isCompleted={item.isCompleted}/>
              </ListItem>
              <Divider />
            </>
            )) : (<div className="nothing-todo">Начните добавлять задачи и они появятся здесь</div>)}   
           </List>               
       
        </>
      );
}

export default ToDoList