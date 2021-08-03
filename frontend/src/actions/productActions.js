import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_PRICINGS_REQUEST,
    PRODUCT_PRICINGS_SUCCESS,
    PRODUCT_PRICINGS_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
} from '../constants/productConstants'

import axios from 'axios'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products/')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload:data,
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listProductPricings = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_PRICINGS_REQUEST })

        const { data } = await axios.get(`/api/pricing/${id}`)

        dispatch({
            type: PRODUCT_PRICINGS_SUCCESS,
            payload:data,
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_PRICINGS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST
        })
  
        const {
            userLogin: { userInfo },
        } = getState()
  
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
  
        const { data } = await axios.delete(
            `/api/products/deleteProduct/${id}/`,
            config
        )
  
        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
            payload: data
        })
  
  
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
  }

export const getCategoryItems = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_CATEGORY_REQUEST
        })
  
        const {
            userLogin: { userInfo },
        } = getState()
  
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
  
        const { data } = await axios.get(
            `/api/products/getCategory/`,
            config
        )
  
        dispatch({
            type: GET_CATEGORY_SUCCESS,
            payload: data
        })
  
  
    } catch (error) {
        dispatch({
            type: GET_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
  }

export const createProduct = ({ categoryItem, name, description, offer, available, image }) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST
        })
  
        const {
            userLogin: { userInfo },
        } = getState()

        const formData = new FormData()

        formData.append("category", categoryItem)
        formData.append("name", name)
        formData.append("description", description)
        formData.append("offer", offer)
        formData.append("available", available)
        formData.append("image", image)

        // console.log(categoryItem, name, description, offer, available, image)
  
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
  
        const { data } = await axios.post(
            `/api/products/createProduct/`,
            formData,
            config,
        )
  
        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data
        })
  
  
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
  }