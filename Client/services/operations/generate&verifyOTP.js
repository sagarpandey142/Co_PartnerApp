const { generateVerifyOTP } = require("../Api")

exports.generateOTP = async(email) => {
    try{
        const response = await axios.post(generateVerifyOTP.generateOTP, {Email: email})
        console.log("first",response);
    }catch(error){
        
    }
}

