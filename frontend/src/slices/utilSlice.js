import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchInput: "",
};

const utilSlice = createSlice({
    name: "util",
    initialState,
    reducers: {
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        }
    },
});

export const { setSearchInput } = utilSlice.actions;

export default utilSlice.reducer;
