import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  response: {},
  transaction: [],
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.setIsLoading = true;
    },
    setResponse: (state, { payload }) => {
      state.response = payload;
      state.isLoading = false;
    },
    setTransactions: (state, { payload }) => {
      state.transactions = payload;
    },
  },
});

const { reducer, actions } = dashboardSlice;

export const { setIsLoading, setResponse, setTransactions } = actions;
export default reducer;
