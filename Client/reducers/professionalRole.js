import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    professionalRole: null,
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
            state.description = action.payload
        }
    }
});

export const {updateProfessionalRole, updateProfessionalDes} = professionalRoleSlice.actions;
export default professionalRoleSlice.reducer;