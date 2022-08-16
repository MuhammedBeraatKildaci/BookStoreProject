const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cartItems: []
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let book = state.cartItems.find(item=>item.id===action.payload.id)
            if (book) {
                book.quantity++
                return{
                    ...state,
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, book: action.payload }],
                  };
            }
        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: [...state.cartItems.filter(item => item.book.id !== action.payload)]
            };
         },
    }
})

export const {addToCart,removeFromCart} = CartSlice.actions
export default CartSlice.reducer