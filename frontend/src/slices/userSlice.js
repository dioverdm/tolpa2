import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    contactList: [],
    searchedUser: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // AuthSlices
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
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.loading = false;
                state.user = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //UserSclices 
            .addCase(loadUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.loading = false;
                state.user = action.payload;

            })
            .addCase(loadUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getContactList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getContactList.fulfilled, (state, action) => {
                state.loading = false;
                state.contactList = action.payload;

            })
            .addCase(getContactList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(searchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.searchedUser = action.payload;
            })
            .addCase(searchUser.rejected, (state, action) => {
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

export const logoutUser = createAsyncThunk("user/logout", async () => {
    try {
        const response = await axios.post("/api/auth/logout");
        return response.data.user;
    } catch (error) {
        throw error.response.data;
    }
});

export const loadUser = createAsyncThunk("user/me", async () => {
    try {
        const response = await axios.get("/api/user/me");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const getContactList = createAsyncThunk("user/constList", async () => {
    try {
        const response = await axios.get("/api/user/contacts");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
})

export const searchUser = createAsyncThunk("user/search", async (query) => {
    try {
        const response = await axios.get(`/api/user/search?username=${query}`)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
})

export const { setAuthenticated } = userSlice.actions;

export default userSlice.reducer;
