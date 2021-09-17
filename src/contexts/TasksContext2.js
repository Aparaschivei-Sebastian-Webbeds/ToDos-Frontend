
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
export const TasksContext2 = createContext();

const TasksContextProvider2 = (props) => {
    const [state, setState] = useState({
        tasks: []
    })
    const [counterState, setCounterState] = useState({
        toDo: 3,
        done: 0
    })
    const [loaderState, setLoaderState] = useState({
        loadNow: true
    })
    const useStyles = makeStyles(theme => ({
        root: {
            backgroundColor: '#c1e3ca'

        },
        title: {
            backgroundColor: '#f2320c'
        },
        counter: {
            fontFamily: 'Apple Chancery, cursive'
        },
        form: {
            backgroundColor: '#dee2fc',
            display: "flex",
            flexDirection: "inline",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center"

        },
        tasksList: {
            backgroundColor: '#a1acc4',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1",
            borderColor: "grey",
            mx: "20%"
        },
        loader: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh"
        },
        listItem: {
            display: "flex",
            width: "100%",
            flexDirection: "inline",
            alignSelf: "center",
            justifyContent: "space-around",
            alignItems: "center"
        },
        taskText: {
            display: "flex",
            width: "100%",
            flexDirection: "inline",
            justifyItems: "flex-start",
            marginLeft: "0"
        },
        taskButtons: {
            display: "flex",
            width: "100%",
            flexDirection: "inline",
            justifyContent: "flex-end",
            marginRight: "0"
        },
        checked: {
            size: "large",
            style: "italic",
            color: "#3f51b5",
            textDecoration: "line-through"

        },
        unchecked: {
            size: "large",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "white"
        },
        flexInline: {
            display: "flex",
            flexDirection: "inline",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: "0"
        }
    }));

    const classes = useStyles();
    useEffect(() => {
        var Done = state.tasks.filter(task => task.completed === true).length;
        var ToDo = state.tasks.filter(task => task.completed === false).length;
        setCounterState({ done: Done, toDo: ToDo });
    }, [state])
    useEffect(() => {

        axios.get("http://localhost:41863/objectives").then((response) => {
            setState({ tasks: response.data });
            setTimeout(function () {
                setLoaderState({ loadNow: false })

            }, 3000)



        });
    }, []);
    const markTaskAsCompleted = index => e => {
        console.log("index:" + index)
        console.log(state.tasks[index])
        var completed;
        if (!state.tasks[index].completed === true) { completed = true; state.tasks[index].completed = true; }
        else { completed = false; state.tasks[index].completed = false; }

        axios.put(`http://localhost:41863/objectives/${state.tasks[index].id}`, { completed: completed }).then(() => {
            axios.get(`http://localhost:41863/objectives/${state.tasks[index].id}`).then((response) => {
                var newTasks = state.tasks.map(x => x.id === state.tasks[index].id ? response.data : x)
                setState({ tasks: newTasks })
            })
        });

    }

    const addTask = (text) => {
        axios.post("http://localhost:41863/objectives", { text: text }).then((response) => {
            var newTasks = state.tasks.concat(response.data)
            setState({ tasks: newTasks })
        });

    }
    const deleteTask = (e) => {
        const id = e.target.getAttribute("id")
        console.log(id)

        axios.delete(`http://localhost:41863/objectives/${id}`).then(() => {
            var newTasks = state.tasks.filter(task => task.id !== id);
            setState({ tasks: newTasks });
        });


    };
    return (
        <TasksContext2.Provider value={{ ...state, ...counterState, loaderState, classes: classes, deleteTask: deleteTask, addTask: addTask, markTaskAsCompleted: markTaskAsCompleted }}>
            {props.children}
        </TasksContext2.Provider>
    );

}
export default TasksContextProvider2;