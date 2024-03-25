import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    skill: [],
    desc: []
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        updateSignupData: (state, action) => {
                state.data= action.payload
        },
        updateSkill: (state, action) => {
            state.skill = action.payload
        },
        updateDesc : (state,action) =>{
            state.desc = action.payload
        }
    }
});

export const { updateSignupData, updateSkill, updateDesc } = signupSlice.actions;
export default signupSlice.reducer;
