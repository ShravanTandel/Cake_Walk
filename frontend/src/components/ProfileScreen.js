import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { Form, Button, Row, Col, Table } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './LoaderAndError/Loader'
import Message from './LoaderAndError/Message'
// import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { getUserDetails } from '../actions/userActions'


import { Grid, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';
import ErrorIcon from "@material-ui/icons/Error";
import { makeStyles } from '@material-ui/core';

import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { updateUserProfile } from '../actions/userActions'

const useStyle = makeStyles((theme) => ({
    root: {padding :20,height:'70vh',width:400, margin:'20px auto',[theme.breakpoints.down("xs")]: {
        width: 300,
      }},
}));

const ProfileScreen = ({history}) => {

    const classes = useStyle();
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdate = useSelector(state => state.userUpdate)
    const { success } = userUpdate

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                // dispatch(listMyOrders())
            } else {
                setUserName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                'id': user.id,
                'username': username,
                'email': email,
                'password': password
            }))
            setMessage('')
        }

    }

  return (
    <Grid>
                <Grid align='center' className = {classes.root}>

                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>User Details</h2>
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
              <form onSubmit = {submitHandler}>
                <TextField label='Username' placeholder='Enter username' value = {username} onChange = {(e) => setUserName(e.target.value)} fullWidth/><br></br><br></br>
                <TextField label='Email' placeholder='Enter email' value = {email} onChange = {(e) => setEmail(e.target.value) } fullWidth/><br></br><br></br>
                <TextField label='Password' placeholder='Enter password' value = {password} onChange = {(e) => setPassword(e.target.value) } type='password' fullWidth/><br></br><br></br>
                <TextField label='Confirm Password' placeholder='Enter confirm password' value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value) } type='password' fullWidth/>
                <br></br><br></br>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Update</Button><br></br>
                </form>
                </Grid>
        </Grid>
  );
};

export default ProfileScreen;
