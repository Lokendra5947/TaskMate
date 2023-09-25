import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';

function App() {
  const [tasklist,setTasklist] = useState( JSON.parse (localStorage.getItem("tasklist"))||[])
  // ye delete or edit ko handle krne ke liye state bna rhe h 
  const[task,setTask] = useState({})

        // FOR STORE DATA IN THE LOCAL STORAGE 
  useEffect(() =>{
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  },[tasklist])

  return (
    <div className="App">
      <Header />
      
      <AddTask 
      tasklist = {tasklist} 
      setTasklist = {setTasklist} 
      task ={task}
      setTask = {setTask} />

      <ShowTask 
      tasklist = {tasklist}
      setTasklist = {setTasklist}
      task ={task}
      setTask = {setTask}/>
    </div>
  );
}

export default App;
