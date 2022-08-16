import { configureStore } from "@reduxjs/toolkit";
import AuthorSlice from "./AuthorSlice";
import AuthSlice from "./AuthSlice";
import BookSlice from "./BookSlice";
import CartSlice from "./CartSlice";
import CategorySlice from "./CategorySlice";
import FavoriteSlice from "./FavoriteSlice";
import SnackBarSlice from "./SnackBarSlice";


export const store = configureStore({
    reducer:{
        book:BookSlice,
        author:AuthorSlice,
        category:CategorySlice,
        auth:AuthSlice,
        cart:CartSlice,
        favorite:FavoriteSlice,
        snackBar:SnackBarSlice,
    }
})