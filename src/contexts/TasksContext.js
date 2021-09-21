
import React, { createContext, useState, useEffect, useReducer } from 'react';
import { ObjectivesReducer } from '../reducers/ObjectivesReducer';
import {  GetObjectives, } from '../services/ObjectivesServices';

export const TasksContext = createContext();

const TasksContextProvider = (props) => {
    const[state,dispatch]=useReducer(ObjectivesReducer,{tasks:[]})
    const [auth,setAuth]=useState({isAuth:false})
    // const [state, setState] = useState({
    //     tasks: []
    // })
    const [counterState, setCounterState] = useState({
        toDo: 3,
        done: 0
    })
    const [loaderState, setLoaderState] = useState({
        loadNow: true
    })
    
    useEffect(() => {
        var Done = state.tasks.filter(task => task.completed === true).length;
        var ToDo = state.tasks.filter(task => task.completed === false).length;
        setCounterState({ done: Done, toDo: ToDo });
    }, [state])

  

    useEffect(() => {
        GetObjectives().then((response)=>{
            console.log(response)
            if (!response) {
                setAuth({isAuth:false})
            }
            else {
                setAuth({isAuth:true});
                dispatch({type:'setTasks',payload:response})
                //setState({ tasks: response });
                setTimeout(function () {
                    setLoaderState({ loadNow: false })

                }, 3000)
            }
        });
            
    }, []);
    // const markTaskAsCompleted = index => e => {
    //     state.tasks[index].completed = !state.tasks[index].completed;
    //     UpdateObjective(state.tasks[index].id,{ completed: state.tasks[index].completed }).then((response)=>{
    //         if(response===true)
    //             {
    //                 GetObjectiveById(state.tasks[index].id).then((response2)=>{
    //                     if(response2){
    //                         var newTasks = state.tasks.map(x => x.id === state.tasks[index].id ? response2 : x)
    //                         setState({ tasks: newTasks })
    //                     }
    //                 });
                    
    //         }
    //     })
    // }

    // const addTask = (text) => {
    //     CreateObjective({ text: text }).then((response)=>{
    //         var newTasks = state.tasks.concat(response)
    //         setState({ tasks: newTasks }) 
    //     })
    // }
    // const deleteTask = (e) => {
    //     const id = e.target.getAttribute("id")
    //     DeleteObjective(id).then(()=>{
    //         var newTasks = state.tasks.filter(task => task.id !== id);
    //         setState({ tasks: newTasks }); 
    //     })
    //  };
    return (
        <TasksContext.Provider value={{ ...auth,...counterState,dispatch:{dispatch}, loaderState}}>
            {props.children}
        </TasksContext.Provider>
    );

}
export default TasksContextProvider;