const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    books: [],
    book: {}
}

const BookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        getAllBooks:(state,action)=>{
            return {
                ...state,
                books: action.payload,
              };
        },
        getOneBook:(state,action)=>{
            return {
                ...state,
                book: state.books.filter((book) => {
                  return book.id === action.payload;
                }),
              };
        },
        postOneBook:(state,action)=>{
            return {
                ...state,
                books: [...state.books, action.payload],
              };
        },
        putOneBook:(state,action)=>{
            return {
                ...state,
                books : [...state.book.filter(book => book.id!==action.payload.id), action.payload]
              };
        },
        deleteOneBook:(state,action)=>{
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload),
              };
        }
    }
})

export const {getAllBooks,getOneBook,postOneBook,putOneBook,deleteOneBook} = BookSlice.actions
export default BookSlice.reducer