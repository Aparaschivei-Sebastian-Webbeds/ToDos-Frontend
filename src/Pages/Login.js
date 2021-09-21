import { Button, FormControl, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';


const LoginPage=()=>{
    const history=useHistory();
    const [state,setState]=useState({
        "email":"",
        "password":""
    })
    const handleEmailChange=(e)=>{
        var email=e.target.value;
        setState({...state,email:email})
        
    }
    const handlePasswordChange=(e)=>{
        var password=e.target.value;
        setState({...state,password:password})
    }
    const handleSubmit=()=>{
        axios.post("http://localhost:41863/users/login",{email:state.email,password:state.password},{withCredentials:true}).then(()=>{
        history.push("/objectives")
        })
    }
    return(
        
        
        <FormControl>
            <TextField label="email" onChange={handleEmailChange}></TextField>
            <TextField label="password" onChange={handlePasswordChange}></TextField>
            <Button onClick={handleSubmit}>Login</Button>
            
        </FormControl>

    )
}
export {LoginPage}