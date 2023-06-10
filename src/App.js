import logo from './logo.svg';
import './App.scss';
import AddToDo from './components/add-to-do/addToDo';
import ToDoLine from './components/to-do-line/to-do-line';
import { Route, Routes } from 'react-router-dom';
import Completed from './components/completed/completed';

function App() {
  return (
    <Routes>
    <Route path='/' element={<AddToDo />} >          
      <Route path='/' element={<ToDoLine />} />
      <Route path='/completed' element={<Completed />} />       
      {/* <Route path='*' element={<NotFound />} /> */}
    </Route>        
  </Routes>
  );
}

export default App;
