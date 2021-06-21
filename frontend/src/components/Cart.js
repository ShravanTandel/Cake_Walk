import React from "react";
import { useSelector } from "react-redux";
import Message from "./LoaderAndError/Message";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { addToCart } from "../actions/cartActions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const quantity = [
    { id: 1, num: 1 },
    { id: 2, num: 2 },
    { id: 3, num: 3 },
    { id: 4, num: 4 },
    { id: 5, num: 5 },
  ];
  const [num, setNum] = useState();

  const numChange = (e) => {
    setNum(e.target.value);
    console.log(num);
  };
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
                              <button className="btn btn-light"><DeleteIcon /></button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <div className="col-md-4">
                  <ul className="list-group">
                      <li className="list-group-item">
                          <h1><>Total Price:</>{ cartItems.reduce((acc, item) => acc + item.price, 0)}</h1>
                      </li>
                      <li className="list-group-item">
                          <strong><label for="address">Your Address: </label></strong><br />
                          <textarea rows="4" cols="30" to="address" ></textarea>
                      </li>
                      <li className="list-group-item">
                          <strong>Phone: </strong>
                          <input type="text" width="3000px"/>
                      </li>
                      <li className="list-group-item">
                          <button className="btn btn-dark" disabled={ cartItems.length === 0} >Place Order</button>
                      </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

{
  /* <table className="table">
                    <thead>
                        <th>Product Image</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th></th>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => {
                        return (
                          <tr key={item.product}>
                            <td data-label="S.No" className="cartimage">
                              <img
                                src={item.image}
                                alt={item.name}
                                // width="80px"
                                // height="70px"
                              />
                            </td>
                            <td data-label="S.No">
                              <strong>{item.name}</strong>
                            </td>
                            <td data-label="S.No">
                              <select
                                className="form-select myselect"
                                value={num}
                                onChange={numChange}
                              >
                                {quantity.map((x) => (
                                  <option key={x.id} value={x.num}>
                                    {x.num}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td data-label="S.No">
                              <strong>{item.qty}</strong>
                            </td>
                            <td data-label="S.No">
                              <strong>{item.price}</strong>
                            </td>
                            <td><DeleteIcon /></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table> */
}
