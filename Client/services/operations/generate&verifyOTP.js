import axios from 'axios'

const { generateVerifyOTP } = require("../Api")

exports.generateOTP = async(email) => {
    try{
        const response = await axios.post(generateVerifyOTP.generateOTP, {Email: email})
        console.log("response", response);
    }catch(error){
        console.error("Error:", error);
    }
}

exports.verifyOTP = async(email, user_Otp) => {
    try{
        const response = await axios.post(generateVerifyOTP.verifyOTP, {Email: email, user_Otp: user_Otp})
        console.log("response", response);
        return response;
    }catch(error){
        console.error("error", error.message)
    }
}

exports.login = async(email, password) => {
    try{

        const response = await axios.post(generateVerifyOTP.login, {email,password})
        console.log("response", response);
        return response;
    }catch(error){
        console.log("Error", error.message)
    }
}

exports.DecodedTokenHandler=async(token)=>{
    try{
    const response=await axios.post(generateVerifyOTP.DecodedApi,{token});
    console.log("serive ka response in token", response)
    return response
    } catch(error){
         console.log("error",error)
    }
}