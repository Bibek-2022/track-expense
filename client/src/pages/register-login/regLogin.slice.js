import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  response: {},
  isLoading: false,
};

const regLoginSLice = createSlice({
  name: "reg-Login",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = true;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = regLoginSLice;

export default reducer;
