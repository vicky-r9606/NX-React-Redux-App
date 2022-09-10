import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./InputSlice";

const store = configureStore({
  reducer: {
    input: userSlice.reducer
  }
});

export default store;