import axios from 'axios'

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