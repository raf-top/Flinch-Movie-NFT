// Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAddress: "",
  isWhitelisted: false,
  isCustomer: false,
  web3modal: null,
  provider: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAddress(state, action) {
      state.userAddress = action.payload;
    },

    setIsWhitelisted(state, action) {
      state.isWhitelisted = action.payload;
    },

    setIsCustomer(state, action) {
      state.isCustomer = action.payload;
    },

    setWeb3modal(state, action) {
      state.web3modal = action.payload;
    },

    setProvider(state, action) {
      state.provider = action.payload;
    },
  },
});

export const userAcitons = userSlice.actions;
export default userSlice;
