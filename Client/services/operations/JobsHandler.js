import axios from "axios";

import { jobsRoute } from "../Api";

exports.jobsHandler = async() => {
    try{
        const response = await axios.get(jobsRoute.getSavedJobs);
        console.log("response of saved jobs", response);
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error.message);
    }
}