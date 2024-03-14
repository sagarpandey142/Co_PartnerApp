import {User} from "../api.js"
import axios from "axios"
exports.sendEmail=async(email)=>{
   try{
     const response=await axios.post(User.sendEmailAPI,{
         Email:email
     })
     if(response){
        return {
         response:response,
         message:"Successfully got a reply "
        }
     }
   } catch(error){
        console.log(`error in services of sendEmail: ${error}`);
   }


}