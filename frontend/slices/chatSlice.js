import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    conversation: [],
    loading: false,
    error: null,
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.conversation = action.payload;
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getConversation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getConversation.fulfilled, (state, action) => {
                state.loading = false;
                state.conversation = action.payload;
            })
            .addCase(getConversation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const sendMessage = createAsyncThunk('conversation/sendMessage', async ({ message, id }) => {
    try {
        console.log
        const response = await axios.post(`/api/message/send/66043cce7120740c248782ab`, { message });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
}
);
export const getConversation = createAsyncThunk('conversation/getConversation', async (id) => {
    try {
        console.log("this is id" + id);
        const response = await axios.get(`/api/message/${id}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
})

export default chatSlice.reducer;
