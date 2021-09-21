
import React from 'react';
import ListOfTasks from '../components/ListOfTasks';
import TasksContextProvider from '../contexts/TasksContext';

const Objectives = () => {
    
    return (<div>
        <TasksContextProvider>
            <ListOfTasks />
        </TasksContextProvider>
        </div>
    )


}
export {Objectives};