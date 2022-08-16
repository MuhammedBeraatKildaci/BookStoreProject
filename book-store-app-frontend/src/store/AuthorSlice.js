const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    authors: [],
    author: {}
}

const AuthorSlice = createSlice({
    name: "author",
    initialState,
    reducers: {
        getAllAuthors: (state, action) => {
            return {
                ...state,
                authors: action.payload,
            };
        },
        getOneAuthor: (state, action) => {
            return {
                ...state,
                author: action.payload
            }
        },
        postOneAuthor: (state, action) => {
            return {
                ...state,
                authors: [...state.authors, action.payload]
            };
        },
        putOneAuthor: (state, action) => {
            return {
                ...state,
                authors: [...state.authors.filter(author => author.id !== action.payload.id), action.payload]
            };
        },
        deleteOneAuthor: (state, action) => {
            return {
                ...state,
                authors: [...state.authors.filter(author => author.id !== action.payload)]
            };
        }
    }
})

export const { getAllAuthors, getOneAuthor, postOneAuthor, putOneAuthor, deleteOneAuthor } = AuthorSlice.actions
export default AuthorSlice.reducer