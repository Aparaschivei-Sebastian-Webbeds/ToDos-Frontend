import { Box, Button, TextField } from '@material-ui/core';
import React,{ useState} from 'react';
import { styles } from '../styles/styles';
const AddTaskForm=({addTask})=>{
    
    const[text,setText] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTask(text);
        setText('');
    }
    const classes=styles();
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