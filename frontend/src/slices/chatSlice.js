import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../store/axiosConfig";

const initialState = {
    chatWith: null,
    conversation: [],
    lastMessages: {},
    loading: false,
    error: null,
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatWith(state, action) {
            state.chatWith = action.payload;
        },
        addMessage(state, action) {
            state.conversation.push(action.payload); // Append new message to conversation
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.loading = false;
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
            })
            .addCase(getLastMessage.fulfilled, (state, action) => {
                const { contactId, lastMessage } = action.payload;
                state.lastMessages[contactId] = lastMessage;
            });
    },
});

export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async ({ message, id }, { dispatch }) => {
        try {
            const response = await axiosInstance.post(`/api/message/send/${id}`, { message });
            dispatch(getConversation(id));
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
);

export const getConversation = createAsyncThunk(
    'chat/getConversation',
    async (id) => {
        try {
            const response = await axiosInstance.get(`/api/message/${id}`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
);

export const getLastMessage = createAsyncThunk(
    'chat/getLastMessage',
    async (contactId) => {
        const response = await axiosInstance.get(`/api/message/${contactId}/lastmessage`);
        return { contactId, lastMessage: response.data };
    }
);


export const { setChatWith, addMessage } = chatSlice.actions;

export default chatSlice.reducer;
