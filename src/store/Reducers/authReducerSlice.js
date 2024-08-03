import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import api from "../../api/api";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async  (info, { rejectWithValue, fulfillWithValue })=>{
        // console.log(info);
        try {
           const { data }  = await api.post("/admin-login", info, {withCredentials : true}) 
           localStorage.setItem("acccessToken", data.token)
        //    console.log(data);
          return fulfillWithValue(data)
        } catch (error) {
            // console.log( error.response.data);
            return  rejectWithValue(error.response.data)
        }
    }
)
export const authReducerSlice = createSlice({
    name: 'auth',
    initialState: {
        successMessage: "",
        errorMessage: "",
        loder: false,
        userInfo: ""
    },
    reducers: {
        messageClear : (state, action)=>{
            state.errorMessage = ""
            state.successMessage = ""
        }
    },
    extraReducers : (builder) => {
        
            builder.addCase(admin_login.pending, (state,_) => {
                state.loder = true;
            });

         builder.addCase(admin_login.rejected, (state, {payload}) => {
            state.loder = false;
            state.errorMessage = payload.error
         });
         builder.addCase(admin_login.fulfilled, (state, {payload}) => {
            state.loder = false;
            state.successMessage = payload.message
         });
    }

}) 

export const { messageClear } = authReducerSlice.actions

export default authReducerSlice.reducer


