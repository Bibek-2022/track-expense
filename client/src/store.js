import { configureStore } from "@reduxjs/toolkit"; // redux toolkit
import { persistStore } from "redux-persist"; // redux persist

// Import the reducer'
import { rootReducer } from "./reducers";

// Create the store
const store = configureStore({
  reducer: {
    user: {},
    transactions: {},
  },
});

export default store;
