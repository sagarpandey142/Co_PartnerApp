import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        updateSignupData: (state, action) => {
                state.data= action.payload
        },
    }
});

export const { updateSignupData, updateProfessionalRole } = signupSlice.actions;
export default signupSlice.reducer;
