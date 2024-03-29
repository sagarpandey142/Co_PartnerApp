import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    professionalRole: '',
    description: '',
    LinkedInLink:'',
    GithubLink:'',
}

const professionalRoleSlice = createSlice({
    name: 'professionalRole',
    initialState,
    reducers: {
        updateProfessionalRole : (state, action) => {
            state.professionalRole = action.payload;
        },
        updateProfessionalDes : (state, action) => {
            state.description = action.payload
        },
        updateLinkedinUrl:(state,actions)=>{
            state.LinkedInLink=actions.payload
        },
        updateGithubUrl:(state,actions)=>{
            state.GithubLink=actions.payload
        },
    }
});

export const {updateProfessionalRole, updateProfessionalDes,updateGithubUrl,updateLinkedinUrl} = professionalRoleSlice.actions;
export default professionalRoleSlice.reducer;