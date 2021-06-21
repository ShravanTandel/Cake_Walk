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