import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "./features/cart/cartSlice";
import booksApi from './features/cart/booksApi';
import ordersApi from './features/orders/ordersApi';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [booksApi.reducerPath] : booksApi.reducer, // rtk query reducer 등록
        [ordersApi.reducerPath] : ordersApi.reducer, // rtk query reducer 등록
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware) // api 요청 미들웨어 등록
})