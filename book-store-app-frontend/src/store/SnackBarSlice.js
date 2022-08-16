import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    snackbar: {
        message: '',
        severity: 'info',
        duration: 3000,
        open: true
    }
}


const SnackBarSlice = createSlice({
    name: 'snackBar',
    initialState,
    reducers: {
        setSnackBar: (state, action) => {
            console.log(state.snackbar.open);
            return {
                ...state,
                snackbar: {
                    message: action.payload.message,
                    duration: action.payload.duration,
                    severity: action.payload.severity,
                },
            };
        },
        closeSnackBar: (state, action) => {
            return {
                ...state,
                snackbar: {
                    message: '',
                    open: false
                }
            };
        }
    }
})


export const { setSnackBar, closeSnackBar } = SnackBarSlice.actions
export default SnackBarSlice.reducer