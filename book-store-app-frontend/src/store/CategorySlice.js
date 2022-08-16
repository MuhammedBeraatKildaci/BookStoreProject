const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    categories: [],
    category: {}
}

const CategorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        getAllCategories:(state,action)=>{
            return {
                ...state,
                categories: action.payload,
              };
        },
        getOneCategory:(state,action)=>{
            return {
                ...state,
                category: action.payload,
              };
        },
        postOneCategory:(state,action)=>{
            return {
                ...state,
                categories: [...state.categories, action.payload],
              };
        },
        putOneCategory:(state,action)=>{
            return {
                ...state,
                categories: [
                  ...state.categories.filter((category) => category.id !== action.payload.id),
                  action.payload,
                ],
              };
        },
        deleteOneCategory:(state,action)=>{
            return {
                ...state,
                categories: state.categories.filter(
                  (category) => category.id !== action.payload
                ),
              };
        }
    }
})

export const {getAllCategories,getOneCategory,postOneCategory,putOneCategory,deleteOneCategory} = CategorySlice.actions
export default CategorySlice.reducer