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
            console.log(state.cartItems.map(item=>console.log(item)));
            console.log(book);
            if (book) {
                book.quantity++
                return{
                    ...state,
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: action.payload }],
                  };
            }
        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload)]
            };
         },
    }
})

export const {addToCart} = CartSlice.actions
export default CartSlice.reducer