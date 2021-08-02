import React, { useState } from "react";
import { useSelector } from "react-redux";
import Message from "./LoaderAndError/Message";
import { Link, NavLink } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeFromCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createOrder } from "../actions/orderActions";
import { useEffect } from "react";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import Footer from "./Footer";

const Cart = ({history}) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch()

  const [ address, setAddress ] = useState("")
  const [ phone, setPhone ] = useState("")

  const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate

    cart.totalPrice = cart.cartItems.reduce((acc, item) => acc + item.price, 0)

    useEffect(() => {
      if (success) {
          history.push(`orders/${order.id}`)
          dispatch({ type: ORDER_CREATE_RESET })
      }
  }, [success, history])

  const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
        toast.error('Product Removed from cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
  }

  const orderSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(createOrder({
      totalprice: cart.totalPrice,
      phone: phone,
      address: address,
      orderItems: cart.cartItems,
    }))
  }
  return (
    <>
      <div className="container-fuild">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1>Your Cart</h1>
            <div className="row">
              <div className="col-md-8">
                {cartItems.length === 0 ? (
                  <Message messagetype="success">
                    Your Cart is empty{" "}
                    <Link to="/menu"> Click here to order now</Link>
                  </Message>
                ) : (
                  <ul className="list-group">
                    {cartItems.map((item) => {
                      return (
                        <li key={item.product} className="list-group-item">
                          <div className="row">
                            <div className="col-sm-3 cartimg">
                              <img
                                src={item.image}
                                alt={item.name}
                                width="190px"
                                height="130px"
                              />
                            </div>
                            <div className="col-sm-2 carti">
                              <strong>{item.name}</strong>
                            </div>
                            <div className="col-sm-2 carti"><strong>Quantity: </strong>
                              {item.qty}
                            </div>
                            <div className="col-sm-2 carti">
                              <strong>Price: </strong>{item.price}
                            </div>
                            <div className="col-sm-1 carti">
                              <strong>{item.size}kg</strong>
                            </div>
                            <div className="col-sm-1 carti">
                              <NavLink to={`/menu/products/${item.product}`} >Update</NavLink>
                            </div>
                            <div className="col-sm-1 carti">
                              <button className="btn btn-light" onClick={ () => { removeItemFromCart(item.product)  }}><DeleteIcon /></button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <div className="col-md-4">
                <form onSubmit = {orderSubmitHandler}>
                  <ul className="list-group">
                      <li className="list-group-item" style={{ backgroundColor: "black", color: "white" }}>
                          <h1 style={{ backgroundColor: "black", color: "white" }}><>Total Price:</>{ cartItems.reduce((acc, item) => acc + item.price, 0)}</h1>
                      </li>
                      <li className="list-group-item">
                          <strong>Your Address: </strong><br />
                          <textarea rows="4" cols="30" value = {address} onChange = {(e) => setAddress(e.target.value)} required></textarea>
                      </li>
                      <li className="list-group-item">
                          <strong>Phone: </strong>
                          <input type="text" width="3000px" value = {phone} onChange = {(e) => setPhone(e.target.value)} required/>
                      </li>
                      <li className="list-group-item">
                          <button type = "submit" className="btn btn-dark" disabled={ cartItems.length === 0} >Place Order</button>
                      </li>
                  </ul>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
