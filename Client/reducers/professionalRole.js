import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    professionalRole: '',
    description: ''
}

const professionalRoleSlice = createSlice({
    name: 'professionalRole',
    initialState,
    reducers: {
        updateProfessionalRole : (state, action) => {
            state.professionalRole = action.payload;
           
        },
        updateProfessionalDes : (state, action) => {
            console.log("hiiii")
            state.description = action.payload
            console.log("state",state.description)
        }
    }
});

export const {updateProfessionalRole, updateProfessionalDes} = professionalRoleSlice.actions;
export default professionalRoleSlice.reducer;