import React from 'react'
import Products from './Products/Products'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from './LoaderAndError/Loader'
import Message from './LoaderAndError/Message'
import ErrorIcon from "@material-ui/icons/Error";
import Footer from './Footer'

const Menu = () => {
    const dispatch = useDispatch();
    const productlist = useSelector(state => state.productList);
    const { error, loading, products } = productlist;

    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])
    const fproduct = (val) => {
        return(
            <Products key={val.id} name={val.name} description={val.description} offer={val.offer} 
            available={val.available} image={val.image} rating={val.rating} createdOn={val.createdOn} category={val.category} id={val.id} />
        )
    }
    return (
        <>
        <section id="menu">
            <div className="my-5">
                <h1 className="text-center">Menu</h1>
            </div>
            <div className="container-fuild mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                                {
                                    loading ? <Loader />
                                    :error ? <Message messagetype="danger"><ErrorIcon />{error}</Message>
                                    :products.map(fproduct)
                                }
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Footer />
        </>
    )
}

export default Menu
