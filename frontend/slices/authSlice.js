import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const registerUser = createAsyncThunk("user/register", async (userData) => {
    try {
        const response = await axios.post("/api/auth/register", userData);
        return response.data.user;
    } catch (error) {
        throw error.response.data;
    }
});

export const loginUser = createAsyncThunk("user/login", async (userData) => {
    try {
        const response = await axios.post("/api/auth/login", userData);
        return response.data.user;
    } catch (error) {
        throw error.response.data;
    }
});

export const { setAuthenticated } = userSlice.actions;

export default userSlice.reducer;
