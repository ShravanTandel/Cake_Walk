import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listMyOrders } from "../actions/orderActions";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "./LoaderAndError/Loader";
import Message from "./LoaderAndError/Message";

import ErrorIcon from "@material-ui/icons/Error";

import Footer from "./Footer";

const UserOrder = () => {
  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);
  return (
    <>
      <div className="container-fuild">
        <div className="row">
          <div className="col-8 mx-auto">
            <h1>Order Details</h1>
            {loadingOrders ? (
              <Loader />
            ) : errorOrders ? (
              <Message messagetype="danger">
                <ErrorIcon />
                {errorOrders}
              </Message>
            ) : (
              <Table striped responsive className="table-sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Delivery Status</th>
                    <th>Delivered</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.createdOn.substring(0, 10)}</td>
                      <td>{order.totalprice}</td>
                      <td>{order.deliveryStatus}</td>
                      <td>
                        <LinkContainer to={`/orders/${order.id}`}>
                          <Button className="btn-sm">Details</Button>
                        </LinkContainer>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserOrder;
