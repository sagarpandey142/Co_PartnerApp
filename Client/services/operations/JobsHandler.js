import axios from "axios";

import { jobsRoute } from "../Api";

exports.jobsHandler = async() => {
    console.log("recent job front")
    try{
        const response = await axios.post(jobsRoute.addSavedJobs);
        console.log("response of recent jobs", response);
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error.message);
    }
}