import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from '../actions/productActions';
import Footer from './Footer';

const CreateProductScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory())
    },[dispatch])
    return (
        <>
        
            <Footer />
        </>
    )
}

export default CreateProductScreen
