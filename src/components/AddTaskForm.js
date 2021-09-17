import { Box, Button, TextField } from '@material-ui/core';
import React,{useContext, useState} from 'react';
import { TasksContext2 } from '../contexts/TasksContext2';

const AddTaskForm=({addTask})=>{
    const context=useContext(TasksContext2);
    const classes=context.classes;
    const[text,setText] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTask(text);
        setText('');
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Box  className={classes.form}>
                <TextField label="Add a new task" value={text} required onChange={(e)=>{setText(e.target.value)}}/> 
                <Button variant="contained" color="primary" type="submit">Add </Button>
                </Box>
            </form>
        </div>
    )
}
export default AddTaskForm;