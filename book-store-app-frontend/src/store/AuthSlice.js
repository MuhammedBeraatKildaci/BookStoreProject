const { createSlice } = require("@reduxjs/toolkit");
const initialState={
    authItems: {
        userId: 0,
        userName: "",
        firstName: "",
        lastName: "",
        accessToken: "",
        refreshToken: "",
        roles:[
            {
                id:0,
                name:"",
                description:"",
            }
        ],
        isLogin:false
    },
}
const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logIn:(state,action)=>{
            console.log("giriş yapıldı")
            return {
                ...state,
                authItems:{
                  ...action.payload,
                  isLogin:true
                }
              };
        },
        // logOut:()=>{},
        // register:()=>{},
    }
})

export const {logIn} = AuthSlice.actions
export default AuthSlice.reducer