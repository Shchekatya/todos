import { useDispatch, useSelector } from "react-redux";
import ToDoLine from "../../common/to-do-line/to-do-line";
import { List, ListItem, Divider } from "@mui/material";
import { COMPLETE_TO_DO } from "../../../redux/actions/action-todo";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import "./to-do-list.scss";

const ToDoComplete = () => {
  const toDoArr = useAppSelector((state) => state.toDoReducer.todos);
  const dispatch = useAppDispatch();

  const toCompleted = (e: any) => {
    const completedToDo = e.target;
    dispatch({ type: COMPLETE_TO_DO, payload: completedToDo.id });
  };

  return (
    <>
      <List>
        {toDoArr.length ? (
          toDoArr
            .filter((e) => e.isCompleted !== false)
            .map((item) => (
              <div key={item.id}>
                <ListItem>
                  <ToDoLine
                    item={item.text}
                    id={item.id}
                    onChange={toCompleted}
                    isCompleted={item.isCompleted}
                  />
                </ListItem>
                <Divider />
              </div>
            ))
        ) : (
          <div className="nothing-todo">Здесь будут выполненные задачи</div>
        )}
      </List>
    </>
  );
};

export default ToDoComplete;
