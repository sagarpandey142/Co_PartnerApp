import axios from 'axios'
import { Profile } from '../Api'
const { SignupRoute } = require("../Api")
exports.signupHandler = async(data) => {
    try{
        const response = await axios.post(SignupRoute.signup, data)
        if(response){
             return response
        }
    }catch(error){
        console.error("Error:", error);
    }
}

exports.GetUserDetail=async(email)=>{
    try{
       const response=await axios.post(Profile.profileInfo,{Email:email});
       return response
    } catch(error){
        console.log("error",error)
    }
}