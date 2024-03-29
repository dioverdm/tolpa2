import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../slices/userSlice";
import chatReducer from "../slices/chatSlice"
import utilReducer from "../slices/utilSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        chat: chatReducer,
        util: utilReducer,
    },
});

export default store;