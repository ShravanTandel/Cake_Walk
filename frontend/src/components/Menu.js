import React from 'react'
import Products from './Products/Products'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Menu = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function getProductDate(){
            const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
            setProduct(data)
        }
        getProductDate()
    },[])
    const fproduct = (val) => {
        return(
            <Products key={val.id} name={val.name} rating={val.rating} id={val.id} imageurl={val.imageurl}/>
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
                                    product.map(fproduct)
                                }
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Menu
