import signupData from "../Slices/SignupData.js"
import {combineReducers} from "@reduxjs/toolkit"

const rootReducer=combineReducers({
   signupData:signupData
})

export default rootReducer
