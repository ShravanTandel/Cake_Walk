import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productPricingsReducer, productDeleteReducer, getCategoryReducer, createProductReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'
import { userRegisterReducer } from './reducers/userReducers'
import { userDetailsReducer } from './reducers/userReducers'
import { userUpdateProfileReducer } from './reducers/userReducers'
import { orderCreateReducer, orderDeliveryReducer, orderListReducer } from './reducers/orderReducers'
import { orderDetailsReducer } from './reducers/orderReducers'
import { orderListMyReducer } from './reducers/orderReducers'
import { userListReducer } from './reducers/userReducers'
import { userDeleteReducer } from './reducers/userReducers'
// import { productDetailsReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productPricings: productPricingsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdate: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderListMy: orderListMyReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    productDelete: productDeleteReducer,
    getCategory: getCategoryReducer,
    createProductReducer: createProductReducer,
    orderList: orderListReducer,
    orderDeliveryReducer: orderDeliveryReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
    },
    
    userLogin: {
        userInfo: userInfoFromStorage,
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;