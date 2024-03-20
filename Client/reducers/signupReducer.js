import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    skill: {}
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        updateSignupData: (state, action) => {
                state.data= action.payload
        },
        updateSkill: (state, action) => {
            console.log("skill")
            state.skill = action.payload
        }
    }
});

export const { updateSignupData, updateSkill } = signupSlice.actions;
export default signupSlice.reducer;
