import logo from './logo.svg';
import './App.scss';
import AddToDo from './components/add-to-do/addToDo';
import ToDoList from './components/to-do-list/to-do-list';
import { Route, Routes } from 'react-router-dom';
import ToDoComplete from './components/to-do-list/to-do-completed';
import ToDoActive from './components/to-do-list/to-do-active';


function App() {
  return (
    <Routes>
    <Route path='/' element={<AddToDo />} >          
      <Route path='/' element={<ToDoList />} />     
      <Route path='/completed' element={<ToDoComplete />} />   
      <Route path='/active' element={<ToDoActive />} />       
      {/* <Route path='*' element={<NotFound />} /> */}
    </Route>        
  </Routes>
  );
}

export default App;
