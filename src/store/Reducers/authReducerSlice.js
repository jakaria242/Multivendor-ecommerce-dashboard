import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import api from "../../api/api";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async  (info)=>{
        console.log(info);
        // try {
        //    const { data }  = await api.post("/admin-login", info, {withCredentials : true}) 
        //    console.log(data);
        // } catch (error) {
        //     console.log("admin login thunk error ", error);
        // }
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

    },
    extraReducers : (builder) =>{

    }

}) 

export default authReducerSlice.reducer


