import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => action.payload,
        addToCart: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { setCart, addToCart } = cartSlice.actions;

export const fetchCart = () => async (dispatch) => {
    const response = await axios.get('/api/cart/');
    dispatch(setCart(response.data));
};

export default cartSlice.reducer;
