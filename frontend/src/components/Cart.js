import React from 'react'
import { useSelector } from 'react-redux'
import Message from './LoaderAndError/Message'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;
    return (
        <>
            <div className="container-fuild">
            <div className="row">
            <div className="col-10 mx-auto">
            <h1>Your Cart</h1>
            <div className="row">
                <div className="col-md-8">
                    {
                        cartItems.length === 0 ?
                        (<Message message="Your cart is empty <Link to='/menu'>Go Back</Link>" messagetype="success"/>)
                        :(
                            <h1>Hi I am Cart</h1>
                        )
                    }
                </div>
                <div className="col-md-4">

                </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Cart
