import React,{useContext} from 'react';
import { styles} from '../styles/styles';
import { TasksContext } from '../contexts/TasksContext';
const TasksCounter = () => {
    const context=useContext(TasksContext);
    const classes=styles();
    return (
        
                <div className={classes.flexInline}>
                    <p>Done: {context.done}</p>
                    <p>ToDo: {context.toDo}</p>
                </div>
            
    )
}
export default TasksCounter;