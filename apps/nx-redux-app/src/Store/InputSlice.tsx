import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    saveText: (state, action) => action.payload
  }
});

export default userSlice;