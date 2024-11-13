import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axios.config";
import { AxiosError } from "axios";
import { IError } from "../../interface";
import toast from "react-hot-toast";


interface ILoginState {
    isLoading: boolean;
    data: any;
    error: any;
}

const initialState: ILoginState = {
    isLoading: false,
    data: null,
    error: null
}

export const userLogin = createAsyncThunk("login/userLogin", async (user: { phone: string, password: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const { data } = await axiosInstance.post("/auth/login", user, {
            withCredentials: true,
        })
        return data.data.user
    } catch (error) {
        const errorObj = error as AxiosError<IError>
        return rejectWithValue(errorObj.response?.data.message)
    }
})

const loginSlice = createSlice({
    initialState,
    name: 'login',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log(action.payload)
            state.data = action.payload
            state.error = null;
            localStorage.setItem('user-info', JSON.stringify(action.payload));
            setTimeout(() => {
                location.replace("/");
            }, 1000)
            toast.success("تم تسجيل الدخول بنجاح", {
                duration: 2000,
                position: 'top-right',
            });
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})


export default loginSlice.reducer