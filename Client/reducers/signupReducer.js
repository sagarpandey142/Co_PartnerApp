import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    professionalRole: null
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        updateSignupData: (state, action) => {
                state.data= action.payload
                console.log("first", state.data.firstName)
        },
        updateProfessionalRole: (state, action) => {
          state.professionalRole = action.payload
        }
    }
});

export const { updateSignupData, updateProfessionalRole } = signupSlice.actions;
export default signupSlice.reducer;
