import React, { useContext } from 'react';
import AddTaskForm from './AddTaskForm';
import TasksCounter from './TasksCounter';
import { TasksContext2 } from '../contexts/TasksContext2';
import Button from '@material-ui/core/Button';
import { Box, Checkbox, CircularProgress} from '@material-ui/core';
import { DeleteForeverOutlined } from '@material-ui/icons';
const ListOfTasks = () => {
    
    
    const context = useContext(TasksContext2);
    const classes=context.classes;
    if(context.loaderState.loadNow===true){
        return (<Box className={classes.loader}><CircularProgress/></Box>)
    }
    return (
            <>
            <h1 > Tasks list </h1>
            
            <Box className={classes.counter}>
            <TasksCounter/>
            </Box>
            <Box className={classes.form}  >
                <AddTaskForm addTask={context.addTask} />
            </Box>
            
            <Box className={classes.tasksList} >
                {context.tasks.map((task, index) => {

                    return (
                        <Box key={task.id} className={classes.listItem}>
                            <Box className={classes.taskText}>
                                <span className={`${task.completed ? classes.checked : classes.unchecked}`} >{task.text} </span>
                            </Box>
                            <Box className={classes.taskButtons}>
                                <Checkbox color="primary" id={task.id} onChange={context.markTaskAsCompleted(index)} checked={`${task.completed ? true : '' }`} />
                                <Button variant="contained" color="secondary" id={task.id} onClick={context.deleteTask} ><DeleteForeverOutlined /> </Button>

                            </Box>
                        </Box>)
                })}
            </Box>
        </>
    )
}
export default ListOfTasks;
