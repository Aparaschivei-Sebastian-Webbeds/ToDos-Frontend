import uuid from 'react-uuid';
import React, { createContext } from 'react';
import { Component } from 'react';
export const TasksContext = createContext();

class TasksContextProvider extends Component {
    state = {
        tasks: [
            { text: 'Do something about that', completed: false, id: uuid() },
            { text: 'Do something about this', completed: false, id: uuid() },
            { text: 'Do something about the other thing', completed: false, id: uuid() }
        ],
        Done:0,
        ToDo:3
    }
    markTaskAsCompleted = index => e => {
        console.log("index:"+index)
        let newTasks = this.state.tasks;
        if (!newTasks[index].completed ===true) { newTasks[index].completed = true; }
        else { newTasks[index].completed = false; }
        this.setState({ tasks: newTasks })
    }
    addTask = (text) => {
        var newTasks=this.state.tasks.concat({text,completed:false,id:uuid()})
        this.setState({tasks:newTasks})

    }
    deleteTask = (e) => {
        const id = e.target.getAttribute("id")
        console.log(id)
        var newTasks=this.state.tasks.filter(task => task.id !== id);
        this.setState({tasks:newTasks});
    };
    render() {
        return (
            <TasksContext.Provider value={{ ...this.state , deleteTask:this.deleteTask, addTask:this.addTask,markTaskAsCompleted:this.markTaskAsCompleted}}>
                {this.props.children}
            </TasksContext.Provider>
        );
    }
}
export default TasksContextProvider;