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
    
    GET_CATEGORY_RESET,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,

    PRODUCT_CREATE_RESET,
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            }

        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const productPricingsReducer = (state = { pricing: [] }, action) => {
    switch (action.type) {
        case PRODUCT_PRICINGS_REQUEST:
            return { loading1: true, ...state }

        case PRODUCT_PRICINGS_SUCCESS:
            return {
                loading1: false,
                pricing: action.payload,
            }

        case PRODUCT_PRICINGS_FAIL:
            return { loading1: false, error1: action.payload }

        default:
            return state
    }
}

export const productDeleteReducer = (state = { }, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }

        case PRODUCT_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const getCategoryReducer = (state = { category: []}, action) => {
    switch (action.type) {
        case GET_CATEGORY_REQUEST:
            return { loading: true }

        case GET_CATEGORY_SUCCESS:
            return {
                loading: false,
                category: action.payload,
            }

        case GET_CATEGORY_FAIL:
            return { loading: false, error: action.payload }

        case GET_CATEGORY_RESET:
            return { }

        default:
            return state
    }
}

export const createProductReducer = (state = { product: []}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }

        case PRODUCT_CREATE_SUCCESS:
            return {
                loading: false,
                category: action.payload,
            }

        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_CREATE_RESET:
            return { }

        default:
            return state
    }
}