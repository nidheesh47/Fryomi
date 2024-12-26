import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

// create new slice

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: (state, action) => {
      return { message: "" };
    },
  },
});

const { reducer, actions } = messageSlice;
export const { setMessage, clearMessage } = actions;
export default reducer;
