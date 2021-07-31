import React from 'react'
import { Grid, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Loader from '../LoaderAndError/Loader';
import Message from '../LoaderAndError/Message';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ErrorIcon from "@material-ui/icons/Error";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    root: {padding :20,height:'70vh',width:400, margin:'20px auto',[theme.breakpoints.down("xs")]: {
        width: 300,
      }},
}));

const LoginScreen=({location, history})=>{

    const classes = useStyle();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const redirect = location.search ? location.search.split("=")[1] : "/"

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    const dispatch = useDispatch()

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    return(
        <Grid>
                <Grid align='center' className = {classes.root}>

                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                    <br></br>
                    { loading && <Loader/>}
                    { error && <Message messagetype="danger">
                <ErrorIcon />
                {error}
              </Message>}
                <TextField label='Email' placeholder='Enter username' value = {email} onChange = {(e) => setEmail(e.target.value) } fullWidth required/><br></br><br></br>
                <TextField label='Password' placeholder='Enter password' value = {password} onChange = {(e) => setPassword(e.target.value) } type='password' fullWidth required/>
                <br></br><br></br>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick = {submitHandler} fullWidth>Sign in</Button><br></br>
                <Typography >
                     <Link to = "/" >
                        Forgot password ?
                </Link>
                </Typography><br></br>
                <Typography > Don't you have an account ?
                     <Link to = 
                     {redirect ? `/register?redirect=${redirect}` : `/register`} >
                       Sign Up
                    </Link>
                </Typography>
                </Grid>
        </Grid>
    )
}

export default LoginScreen
