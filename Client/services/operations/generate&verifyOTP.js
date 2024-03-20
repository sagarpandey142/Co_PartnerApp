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

