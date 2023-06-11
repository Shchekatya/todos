import { useDispatch, useSelector } from "react-redux";
import ToDoLine from "../to-do-line/to-do-line";


const ToDoList = () => {
    const toDoArr = useSelector((state) => state.toDoReducer.todos);
    const dispatch=useDispatch();
    console.log(toDoArr)
    return (   
        <div className='todo-line'>
           {toDoArr.length ? (toDoArr.map((item)=><ToDoLine item={item.text} id={item.id}/>)) : (<div>Начните добавлять задачи и они появятся здесь</div>)}           
        </div>
      );
}

export default ToDoList