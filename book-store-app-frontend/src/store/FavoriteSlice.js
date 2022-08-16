const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    favoriteItems: []
}

const FavoriteSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            let book = state.favoriteItems.find(item=>item.id===action.payload.id)
            if (book) {
                return{
                    ...state,
                }
            } else {
                return {
                    ...state,
                    favoriteItems: [...state.favoriteItems, { quantity: 1, book: action.payload }],
                  };
            }
        },
        removeFromFavorite: (state, action) => {
            return {
                ...state,
                favoriteItems: [...state.favoriteItems.filter(item => item.book.id !== action.payload)]
            };
         },
    }
})

export const {addToFavorite,removeFromFavorite} = FavoriteSlice.actions
export default FavoriteSlice.reducer