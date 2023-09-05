import { useDispatch, useSelector } from "react-redux";
import ToDoLine from "../to-do-line/to-do-line";
import { List, ListItem, Divider } from "@mui/material";
import { COMPLETE_TO_DO } from "../../redux/actions/action-todo";
import { useAppSelector, useAppDispatch } from "../../hooks";
import './to-do-list.scss'

const ToDoActive = () => {
    const toDoArr = useAppSelector((state) => state.toDoReducer.todos);
    const dispatch=useAppDispatch();
    console.log(toDoArr)

    const toCompleted=(e:any)=>{
      console.log(e)
      const completedToDo=e.target;   
        dispatch({ type: COMPLETE_TO_DO, payload: completedToDo.id })  
    }
  
    return (   
      <>  
          <List >
           {toDoArr.length ? (toDoArr.filter(e => e.isCompleted !== true).map((item)=>
            <div key={item.id}>
            <ListItem >
                <ToDoLine item={item.text} id={item.id} onChange={toCompleted} isCompleted={item.isCompleted}/>
              </ListItem>
              <Divider />
            </div>
            )) : (<div className="nothing-todo">Здесь будут актуальные задачи</div>)}   
           </List>          
        </>
      );
}

export default ToDoActive