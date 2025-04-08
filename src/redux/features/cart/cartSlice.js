import { createSlice } from "@reduxjs/toolkit";
import Swal  from "sweetalert2";

const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "장바구니에 책이 추가되었습니다.",
                    timer: 1500
                })
            } else {
                Swal.fire({
                    title: "Already Added to the Cart",
                    text: "장바구니에 책이 존재합니다.",
                    icon: "warning",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK!",
                    cancelButtonText: "돌아가기"
                })
            }
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((book) => book._id !== action.payload._id);
        },
        clearCart: (state) => {
            state.cartItems = []
        },
    }

});

// createSlice 가 자동으로 만들어준 action 생성함수들 모음! dispatch에 사용
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer; // store 등록할때 사용, state바꾸는 함수 묶음