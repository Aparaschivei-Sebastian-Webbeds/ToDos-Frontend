import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { BrowserRouter, Link,Route } from 'react-router-dom';
import { TasksContext } from '../contexts/TasksContext';
import { LoginPage } from '../Pages/Login';
import { Objectives } from '../Pages/Objectives';
import { RegisterPage } from '../Pages/Register';

const Navbar=()=>{
    const context=useContext(TasksContext);
    return(
    <BrowserRouter>
        <AppBar position="static">
           <Toolbar variant="dense">
             <Link to="/objectives" color="primary">Objectives</Link>
             <Link to="/login" color="primary">Login</Link>
             <Link to="/register" color="primary">Register</Link>
             <Typography>{context.isAuth===true?'Logged in':"Not logged in"}</Typography>
           </Toolbar>
   
           
         </AppBar>
         <Route path="/objectives" component={Objectives} />
         <Route path="/login" component={LoginPage} />
         <Route path="/register" component={RegisterPage} />
       </BrowserRouter>)
}
export {Navbar};