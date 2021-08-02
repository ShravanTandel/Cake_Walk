import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './LoaderAndError/Loader'
import Message from './LoaderAndError/Message'




import ErrorIcon from "@material-ui/icons/Error";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteUser } from '../actions/userActions'
import { listProducts } from '../actions/productActions'

function ProductsListScreen({ history }) {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listProducts())
        } else {
            history.push('/login')
        }

    }, [dispatch, history, successDelete, userInfo])


    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUser(id))
        }
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
                                    <th>CATEGORY</th>
                                    <th>EDIT</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.category.name}</td>

                                        <td>
                                            <LinkContainer to={`/admin/products/${product.id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <EditIcon />
                                                </Button>
                                            </LinkContainer>
                                        </td>

                                        <td>
                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product.id)}>
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

export default ProductsListScreen