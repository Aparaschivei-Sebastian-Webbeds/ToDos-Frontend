import { Button, FormControl, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';


const RegisterPage=()=>{
    const history=useHistory();
    const[state,setState]=useState({
        "name":"",
        "email":"",
        "password":""
    })
    const handleNameChange=(e)=>{
        var name=e.target.value;
        setState({...state,name:name})

    }
    const handleEmailChange=(e)=>{
        var email=e.target.value;
        setState({...state,email:email})

    }
    const handlePasswordChange=(e)=>{
        var password=e.target.value;
        setState({...state,password:password})

    }
    const handleSubmit=()=>{
        axios.post("http://localhost:41863/users/register",{name:state.name,email:state.email,password:state.password}).then(()=>{
        history.push("/login")
        })
    }
    return(
        <FormControl>
            <TextField label="Name" onChange={handleNameChange}/>
            <TextField label="Email" onChange={handleEmailChange}/>
            <TextField label="Password" onChange={handlePasswordChange}/>
            <Button onClick={handleSubmit}>Register</Button>
        </FormControl>
    )
    
}
export {RegisterPage};