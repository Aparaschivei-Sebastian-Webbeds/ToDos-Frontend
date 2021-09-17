import React,{useContext} from 'react';

import { TasksContext2 } from '../contexts/TasksContext2';
const TasksCounter = () => {
    const context=useContext(TasksContext2);
    const classes=context.classes;
    return (
        
                <div className={classes.flexInline}>
                    <p>Done: {context.done}</p>
                    <p>ToDo: {context.toDo}</p>
                </div>
            
    )
}
export default TasksCounter;