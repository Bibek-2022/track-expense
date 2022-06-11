import { configureStore } from "@reduxjs/toolkit"; // redux toolkit
import regloginReducer from "./pages/register-login/regLogin.slice";
import dashboardReducer from "./pages/dashboard/dashboard.slice";
// Create the store
const store = configureStore({
  reducer: {
    regLogin: regloginReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
