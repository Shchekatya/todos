import { useSelector } from "react-redux";


const ToDoList = () => {
    const toDoArr = useSelector((state) => state.toDoReducer.todos);
    console.log(toDoArr)
  
}

export default ToDoList