import React from 'react'
import { Grid, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Loader from '../LoaderAndError/Loader';
import Message from '../LoaderAndError/Message';
import { useDispatch, useSelector } from 'react-redux';
import { Register } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ErrorIcon from "@material-ui/icons/Error";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    root: {padding :20,height:'70vh',width:400, margin:'20px auto',[theme.breakpoints.down("xs")]: {
        width: 300,
      }},
}));

const RegisterScreen=({location, history})=>{

    const classes = useStyle();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const redirect = location.search ? location.search.split("=")[1] : "/"

    const userRegister = useSelector(state => state.userRegister)
    const {error, loading, userRegisterInfo} = userRegister

    const dispatch = useDispatch()

    useEffect(() => {
        if(userRegisterInfo){
            history.push(redirect)
        }
    }, [history, userRegisterInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if(username == "" || password == "" || email == "")
        {
            setMessage("Enter all fields")
        }
        else if(password != confirmPassword)
        {
            setMessage("Password do not match")
        }
        else
        {
            dispatch(Register(username, email, password))
        }
    }
    return(
        <Grid>
                <Grid align='center' className = {classes.root}>

                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Register</h2>
                    <br></br>
                    { message && <Message messagetype="danger">
                <ErrorIcon />
                {message}
              </Message>}
                    { loading && <Loader/>}
                    { error && <Message messagetype="danger">
                <ErrorIcon />
                {error}
              </Message>}
                <TextField label='Username' placeholder='Enter username' value = {username} onChange = {(e) => setUsername(e.target.value)} fullWidth required/><br></br><br></br>
                <TextField label='Email' placeholder='Enter email' value = {email} onChange = {(e) => setEmail(e.target.value) } fullWidth required/><br></br><br></br>
                <TextField label='Password' placeholder='Enter password' value = {password} onChange = {(e) => setPassword(e.target.value) } type='password' fullWidth required/><br></br><br></br>
                <TextField label='Confirm Password' placeholder='Enter confirm password' value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value) } type='password' fullWidth required/>
                <br></br><br></br>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick = {submitHandler} fullWidth>Sign Up</Button><br></br>
                <Typography > Do you have an account ?
                     <Link to = 
                     {redirect ? `/login?redirect=${redirect}` : `/login`} >
                       Sign in
                    </Link>
                </Typography>
                </Grid>
        </Grid>
    )
}

export default RegisterScreen
