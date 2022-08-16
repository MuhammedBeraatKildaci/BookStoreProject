const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    users: [],
    user: {}
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getAllUsers: (state, action) => {
            return {
                ...state,
                users: action.payload,
            };
        },
        getOneUser: (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        },
        postOneUser: (state, action) => {
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        },
        putOneUser: (state, action) => {
            return {
                ...state,
                users: [...state.users.filter(user => user.id !== action.payload.id), action.payload]
            };
        },
        deleteOneUser: (state, action) => {
            return {
                ...state,
                users: [...state.users.filter(user => user.id !== action.payload)]
            };
        }
    }
})

export const { getAllUsers, getOneUser, postOneUser, putOneUser, deleteOneUser } = UserSlice.actions
export default UserSlice.reducer