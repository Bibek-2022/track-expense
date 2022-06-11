import { configureStore } from "@reduxjs/toolkit"; // redux toolkit
import regloginReducer from "./pages/register-login/regLogin.slice";
// Create the store
const store = configureStore({
  reducer: {
    regLogin: regloginReducer,
  },
});

export default store;
