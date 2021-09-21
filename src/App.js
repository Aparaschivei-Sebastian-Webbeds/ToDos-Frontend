

import './App.css';
import { Navbar } from './components/Navbar';
import TasksContextProvider from './contexts/TasksContext';

function App() {
  return (<div className="App">
    <TasksContextProvider>
      <Navbar/>
    </TasksContextProvider>
  </div>)

}

export default App;
