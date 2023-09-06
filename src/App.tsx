import "./App.scss";
import AddToDo from "./components/pages/add-to-do/add-to-do";
import ToDoList from "./components/pages/to-do-list/to-do-list";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ToDoComplete from "./components/pages/to-do-list/to-do-completed";
import ToDoActive from "./components/pages/to-do-list/to-do-active";
import { NotFound } from "./components/pages/not-found/not-found";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AddToDo />}>
        <Route path="/" element={<ToDoList />} />
        <Route path="/completed" element={<ToDoComplete />} />
        <Route path="/active" element={<ToDoActive />} />
      </Route>
      <Route path='*' element={<NotFound />} /> 
    </Routes>
  );
}

export default App;
