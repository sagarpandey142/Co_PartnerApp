import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token:"",
    data: {},
    skill: [],
    desc: []
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        updateToken: (state, action) => {
            state.token= action.payload
            console.log("token", token);
        },
        updateSignupData: (state, action) => {
                state.data= action.payload
                console.log("token", token);
        },
        updateSkill: (state, action) => {
            state.skill = action.payload
            console.log("token", token);
        },
        updateDesc : (state,action) =>{
            state.desc = action.payload
            console.log("token", token);
        }
    }
});

export const { updateSignupData, updateSkill, updateDesc,updateToken } = signupSlice.actions;
export default signupSlice.reducer;
