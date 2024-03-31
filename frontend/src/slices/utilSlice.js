import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchInput: "",
    selectedContact: null,
};

const utilSlice = createSlice({
    name: "util",
    initialState,
    reducers: {
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setSelectedContact: (state, action) => {
            state.selectedContact = action.payload;
        }
    },
});

export const { setSearchInput,setSelectedContact } = utilSlice.actions;

export default utilSlice.reducer;
