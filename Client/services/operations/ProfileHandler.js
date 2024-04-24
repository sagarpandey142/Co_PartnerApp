import axios from 'axios';
import {profileRoute} from '../Api';

exports.FindByEmail = async (email) => {
    try{
        console.log("email service k andar", email)
        const response = await axios.post(profileRoute.FindByEmail, {Email:email});
        console.log("response", response)
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error);
    }
}