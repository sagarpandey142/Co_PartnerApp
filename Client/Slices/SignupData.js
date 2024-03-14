import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Step: 1,
  FullName: "",
  Email: "",
  Contact: "",
  Password: "",
};

const signupData = createSlice({
  name: "signupData",
  initialState: initialState,
  reducers: {
    setStep(state, action) {
      state.Step = action.payload;
    },
    setFullName(state, action) {
      state.FullName = action.payload;
    },
    setEmail(state, action) {
      state.Email = action.payload;
    },
    setContact(state, action) {
      state.Contact = action.payload;
    },
    setPassword(state, action) {
      state.Password = action.payload;
    },
  },
});

export const {
  setStep,
  setFullName,
  setEmail,
  setContact,
  setPassword,
} = signupData.actions;
export default signupData.reducer;
