import React, { useState, useEffect } from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './LoaderAndError/Loader'
import Message from './LoaderAndError/Message'




import ErrorIcon from "@material-ui/icons/Error";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
// import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { listOrders } from '../actions/orderActions'

function OrderListScreen({ history }) {

    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])

    const detailsHandler = (id) => {
        history.push(`/orders/${id}`)
    }

    return (
        <>
        <div className="container-fuild nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <h1>Orders</h1>
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
                                    <th>USER NAME</th>
                                    <th>ORDER ON</th>
                                    <th>PRICE</th>
                                    <th>DELIVERY STATUS</th>
                                    <th>DETAILS</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map(order => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.user.name}</td>
                                        <td>{order.createdOn}</td>
                                        <td>{order.totalprice}</td>
                                        <td>{order.deliveryStatus}</td>
{/* 
                                        <td>
                                            <LinkContainer to={`/admin/user/${user.id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <EditIcon />
                                                </Button>
                                            </LinkContainer>
                                        </td> */}

                                        <td>
                                            <Button variant='dark' className='btn-md' onClick={() => detailsHandler(order.id)}>
                                                Details
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

export default OrderListScreen