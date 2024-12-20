import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";  // Your auth reducer

const store = configureStore({
  reducer: {
    auth: authReducer,  // Ensure you have the correct reducer here
  },
});

export default store;
