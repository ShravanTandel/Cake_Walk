import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './LoaderAndError/Loader'
import Message from './LoaderAndError/Message'
import { listUsers } from '../actions/userActions'




import ErrorIcon from "@material-ui/icons/Error";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function UserListScreen({ history }) {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // const userDelete = useSelector(state => state.userDelete)
    // const { success: successDelete } = userDelete


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])


    const deleteHandler = (id) => {

        // if (window.confirm('Are you sure you want to delete this user?')) {
        //     dispatch(deleteUser(id))
        // }
        console.log(id)
    }

    return (
        <>
        <div className="container-fuild nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <h1>Users</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message messagetype="danger">
                    <ErrorIcon />
                    {error}
                  </Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ADMIN</th>
                                    <th>EDIT</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.isAdmin ? (
                                            <CheckIcon style={{ color: 'green' }} />
                                        ) : (
                                                <ClearIcon style={{ color: 'red' }} />
                                            )}</td>

                                        <td>
                                            <LinkContainer to={`/admin/user/${user.id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <EditIcon />
                                                </Button>
                                            </LinkContainer>
                                        </td>

                                        <td>
                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user.id)}>
                                                <DeleteIcon />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                    </div>
                    </div>
                    </div>
        </>
    )
}

export default UserListScreen