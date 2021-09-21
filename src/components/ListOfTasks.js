import React, { useContext, useReducer } from 'react';
import AddTaskForm from './AddTaskForm';
import TasksCounter from './TasksCounter';
import { TasksContext } from '../contexts/TasksContext';
import Button from '@material-ui/core/Button';
import { Box, Checkbox, CircularProgress } from '@material-ui/core';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { styles } from '../styles/styles';
import { ObjectivesReducer } from '../reducers/ObjectivesReducer';
const ListOfTasks = () => {
    const classes = styles();
    
    const context = useContext(TasksContext);
    const[state,dispatch]=useReducer(ObjectivesReducer,{tasks:context.tasks})
    
    
    return (
        !context.isAuth?<div>Not authenticated</div>:
        context.loaderState.loadNow ? <Box className={classes.inlineFlex}><CircularProgress /></Box> : 
        <>
            <h1 > Tasks list </h1>

            <Box className={classes.counter}>
                <TasksCounter />
            </Box>
            <Box className={classes.form}  >
                <AddTaskForm addTask={context.addTask} />
            </Box>

            <Box className={classes.tasksList} >
                {state.tasks.map((task, index) => {

                    return (
                        <Box key={task.id} className={classes.listItem}>
                            <Box className={classes.taskText}>
                                <span className={`${task.completed ? classes.checked : classes.unchecked}`} >{task.text} </span>
                            </Box>
                            <Box className={classes.taskButtons}>
                                <Checkbox color="primary" id={task.id} onChange={dispatch({type:'markTaskAsCompleted',payload:index})} checked={`${task.completed ? true : ''}`} />
                                <Button variant="contained" color="secondary" id={task.id} onClick={dispatch({type:'deleteTask'})} ><DeleteForeverOutlined /> </Button>

                            </Box>
                        </Box>)
                })}
            </Box>
        </>
    )
}
export default ListOfTasks;
