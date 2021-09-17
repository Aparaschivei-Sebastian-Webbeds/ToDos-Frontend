
import TasksContextProvider from './contexts/TasksContext';
import './App.css';
import ListOfTasks from './components/ListOfTasks';
import TasksContextProvider2 from './contexts/TasksContext2';

function App() {
  return(<div className="App">
    <TasksContextProvider2>
    <ListOfTasks/>
    </TasksContextProvider2>
  </div>)
  
}

export default App;
