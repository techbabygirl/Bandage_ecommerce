
import { createSlice } from '@reduxjs/toolkit';



// const cartItems =

const cartSlice = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem('cart')) || [],
    reducers: {

        // Add to cart
        addItem: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state));
            alert('Added to cart!')
        },

        // Remove from cart
        removeItem: (state, action) => {
            console.log(action.payload)
            state = state.filter(item => item.id !== action.payload.id)
            localStorage.setItem('cart', JSON.stringify(state));
        },


        // Update quantity
        updateItem: (state, action) => {
            state = state.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        },

        // INCREMENT QUANTITY
        incrementQuantity: (state, action) => {
            const productId = action.payload
            const product = state.find(item => item.id === productId);
            return product

        },

        clearCart: (state) => {
            state = []
            localStorage.removeItem('cart')
        }
    }

})


export const { addItem, removeItem, updateItem, clearCart, getCartItems, incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;